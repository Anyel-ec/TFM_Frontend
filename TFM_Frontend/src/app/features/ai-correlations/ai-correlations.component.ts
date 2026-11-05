import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService } from '../../core/theme.service';
import { AiCorrelationAudit, TriageStatus } from './ai-correlations.models';
@Component({ selector: 'app-ai-correlations', standalone: true, imports: [CommonModule, RouterLink, RouterLinkActive], templateUrl: './ai-correlations.component.html', changeDetection: ChangeDetectionStrategy.OnPush })
export class AiCorrelationsComponent {
  readonly nav = ['Panel Principal', 'Inventario CMDB', 'Noticias OSINT', 'Correlaciones IA', 'Cola de Revisin', 'Historial de Correos', 'Configuracin'];
  readonly rows: AiCorrelationAudit[] = [
    { id: 1, date: '03 Nov 2026  09:42', source: 'CISA', asset: 'SRV-APP-01', risk: 98.5, summary: 'El activo contiene Java y est expuesto; RCE crtica compatible con Log4j.', status: 'Confirmado', cve: 'CVE-2026-44228' },
    { id: 2, date: '03 Nov 2026  08:17', source: 'INCIBE', asset: 'PLC-SM-01', risk: 85, summary: 'Coincidencia en fabricante Siemens; requiere actualizacin de firmware OT.', status: 'Pendiente', cve: 'CVE-2026-7810' },
    { id: 3, date: '02 Nov 2026  16:31', source: 'TheHackerNews', asset: 'WKS-SEC-22', risk: 41.2, summary: 'La amenaza afecta macOS, pero el endpoint inventariado utiliza Windows 11.', status: 'Falso Positivo', cve: 'CVE-2026-5591' },
  ];
  constructor(public readonly theme: ThemeService) {}
  routeFor(label: string): string { return label === 'Panel Principal' ? '/dashboard' : label === 'Inventario CMDB' ? '/cmdb' : label === 'Noticias OSINT' ? '/osint' : label === 'Correlaciones IA' ? '/ai-correlations' : label === 'Cola de Revisin' ? '/review-queue' : label === 'Historial de Correos' ? '/mail-history' : '/settings'; }
  riskClass(risk: number): string { return risk > 90 ? 'bg-red-500/15 text-red-600 border-red-500/30 dark:text-red-300' : risk > 70 ? 'bg-orange-500/15 text-orange-600 border-orange-500/30 dark:text-orange-300' : 'bg-amber-500/15 text-amber-600 border-amber-500/30 dark:text-amber-300'; }
  statusClass(status: TriageStatus): string { return status === 'Confirmado' ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-300' : status === 'Falso Positivo' ? 'bg-gray-500/10 text-gray-600 dark:text-gray-300' : 'bg-orange-500/10 text-orange-600 dark:text-orange-300'; }
  toggleTheme(): void { this.theme.toggle(); }
}

