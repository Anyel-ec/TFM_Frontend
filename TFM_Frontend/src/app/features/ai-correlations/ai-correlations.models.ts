export type TriageStatus = 'Pendiente' | 'Confirmado' | 'Falso Positivo';
export interface AiCorrelationAudit { id: number; date: string; source: string; asset: string; risk: number; summary: string; status: TriageStatus; cve: string; }

