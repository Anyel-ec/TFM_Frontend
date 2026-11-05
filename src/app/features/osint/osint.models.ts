export type OsintSource = 'CISA' | 'INCIBE' | 'TheHackerNews' | 'CyberSecNews';
export interface OsintPost { id: number; sourceName: OsintSource; title: string; postUrl: string; rawContent: string; publishedDate: string; scrapedAt: string; }

