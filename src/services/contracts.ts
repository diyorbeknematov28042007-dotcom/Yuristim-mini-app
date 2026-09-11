import type { DocumentSummary, Lawyer, User } from "@/types/domain";
export interface UserService { getCurrent(): Promise<User>; }
export interface CreditsService { getBalance(): Promise<number>; }
export interface AiService { getAvailability(): Promise<{ enabled: boolean }>; }
export interface LawyerService { list(): Promise<Lawyer[]>; }
export interface DocumentService { list(): Promise<DocumentSummary[]>; }
export interface MarketplaceService { getActiveRequestCount(): Promise<number>; }
export interface NotificationService { getUnreadCount(): Promise<number>; }
