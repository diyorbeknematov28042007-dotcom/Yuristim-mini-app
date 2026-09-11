import fs from "node:fs";
import path from "node:path";
import { chromium } from "playwright-core";

const baseUrl = process.env.VISUAL_QA_URL ?? "http://127.0.0.1:3000";
const outputDir = path.resolve("visual-qa");
fs.mkdirSync(outputDir, { recursive: true });

const browserCandidates = [
  "/usr/bin/google-chrome",
  "/usr/bin/google-chrome-stable",
  "/usr/bin/chromium",
  "/usr/bin/chromium-browser",
];
const executablePath = browserCandidates.find((candidate) => fs.existsSync(candidate));
if (!executablePath) throw new Error("No Chromium/Chrome executable found on the CI runner");

const browser = await chromium.launch({
  headless: true,
  executablePath,
  args: ["--no-sandbox", "--disable-dev-shm-usage"],
});

const viewports = [320, 390, 430];
const report = [];

async function assertNoHorizontalOverflow(page, label) {
  const metrics = await page.evaluate(() => ({
    innerWidth: window.innerWidth,
    htmlWidth: document.documentElement.scrollWidth,
    bodyWidth: document.body.scrollWidth,
  }));
  if (metrics.htmlWidth > metrics.innerWidth + 1 || metrics.bodyWidth > metrics.innerWidth + 1) {
    throw new Error(`${label}: horizontal overflow detected ${JSON.stringify(metrics)}`);
  }
  return metrics;
}

for (const width of viewports) {
  const context = await browser.newContext({
    viewport: { width, height: width === 320 ? 700 : 844 },
    deviceScaleFactor: 1,
    isMobile: true,
    hasTouch: true,
  });
  const page = await context.newPage();
  await page.goto(baseUrl, { waitUntil: "networkidle" });

  await page.getByText("Bu Telegram ID emas.", { exact: false }).waitFor();
  const authMetrics = await assertNoHorizontalOverflow(page, `${width}px auth`);
  await page.screenshot({ path: path.join(outputDir, `${width}-auth.png`), fullPage: true });

  await page.getByLabel("Maxsus raqam").fill("123456789");
  await page.getByRole("button", { name: "Davom etish" }).click();
  await page.getByLabel("Menu").waitFor({ state: "visible" });
  await page.getByRole("tab", { name: "Chat" }).waitFor({ state: "visible" });
  await page.getByRole("tab", { name: "Hujjat" }).waitFor({ state: "visible" });
  await page.getByRole("button", { name: /Tezkor/ }).waitFor({ state: "visible" });
  await page.getByPlaceholder("Savolingizni yozing...").waitFor({ state: "visible" });

  const shellMetrics = await assertNoHorizontalOverflow(page, `${width}px shell`);
  await page.screenshot({ path: path.join(outputDir, `${width}-shell.png`), fullPage: true });

  await page.getByRole("tab", { name: "Hujjat" }).click();
  await page.getByText("Hujjat bilan ishlash").waitFor({ state: "visible" });
  await page.getByRole("tab", { name: "Chat" }).click();
  await page.getByText("Savolingiz bormi?").waitFor({ state: "visible" });

  if (width === 390) {
    await page.getByLabel("Menu").click();
    await page.getByText("Chatlar tarixi").waitFor({ state: "visible" });
    await page.getByRole("button", { name: "Yangi chat" }).waitFor({ state: "visible" });
    await assertNoHorizontalOverflow(page, "390px drawer");
    await page.screenshot({ path: path.join(outputDir, "390-drawer.png"), fullPage: true });
    await page.getByLabel("Yopish").click();

    await page.getByRole("button", { name: /Tezkor/ }).click();
    await page.getByText("Javob rejimi").waitFor({ state: "visible" });
    await page.screenshot({ path: path.join(outputDir, "390-model-sheet.png"), fullPage: true });
    await page.getByLabel("Close sheet").click();

    await page.getByLabel("Biriktirish").click();
    await page.getByText("Fayl yuklash").waitFor({ state: "visible" });
    await page.screenshot({ path: path.join(outputDir, "390-attachment-sheet.png"), fullPage: true });
    await page.getByLabel("Close sheet").click();
  }

  report.push({ width, authMetrics, shellMetrics, status: "pass" });
  await context.close();
}

await browser.close();
fs.writeFileSync(path.join(outputDir, "report.json"), JSON.stringify(report, null, 2));
console.log("Visual QA PASS", JSON.stringify(report));
