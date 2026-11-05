export type DeliveryStatus = 'Enviado SMTP' | 'Telegram' | 'Pendiente' | 'Mitigado';

export interface AlertHistoryItem {
  id: string; sentAt: string; assetId: string; assetName: string;
  ownerName: string; ownerEmail: string; risk: number; cve: string;
  subject: string; status: DeliveryStatus; targetHost: string;
  vulnerability: string; mitigation?: string;
}

