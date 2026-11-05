export type HumanDecision = 'Pendiente' | 'Afecta Realmente' | 'Falso Positivo';
export type NotificationChannel = 'SMTP (Brevo)' | 'Telegram' | 'Ambos';
export interface CorrelationReview { id: number; source: string; postTitle: string; postUrl: string; cve: string; assetTag: string; assetName: string; assetType: string; assetCriticality: string; ownerName: string; ownerEmail: string; aiRelevancePercentage: number; aiSummary: string; isFlaggedImportant: boolean; humanDecision: HumanDecision; analystNotes: string; notificationChannel: NotificationChannel; detectedAt: string; }

