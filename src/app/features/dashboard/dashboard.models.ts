export interface DashboardKpi { label: string; value: string; detail: string; tone: 'cyan' | 'violet' | 'orange' | 'red'; icon: string; }
export interface DistributionItem { label: string; percentage: number; color: string; }
export interface CorrelationRow { source: string; vulnerability: string; asset: string; risk: number; status: string; }
export interface MitigationActivity { owner: string; asset: string; action: string; status: string; when: string; }

