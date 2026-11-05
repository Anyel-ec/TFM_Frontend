import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService } from '../../core/theme.service';
import { DashboardKpi, DistributionItem, CorrelationRow, MitigationActivity } from './dashboard.models';

@Component({ selector: 'app-dashboard', standalone: true, imports: [CommonModule, RouterLink, RouterLinkActive], templateUrl: './dashboard.component.html', changeDetection: ChangeDetectionStrategy.OnPush })
export class DashboardComponent {
  constructor(public readonly theme: ThemeService) {}
  readonly kpis: DashboardKpi[] = [
    { label: 'Activos monitoreados', value: '1,248', detail: 'Hardware  Software  IoT', tone: 'cyan', icon: '' },
    { label: 'Posts OSINT (24h)', value: '84', detail: 'INCIBE  CISA  NVD', tone: 'violet', icon: '' },
    { label: 'Correlaciones IA', value: '17', detail: 'Activos con match', tone: 'orange', icon: '' },
    { label: 'Alertas crticas SOC', value: '8', detail: 'Pendientes de revisin humana', tone: 'red', icon: '!' },
  ];
  readonly inventory: DistributionItem[] = [{ label: 'Crtico', percentage: 12, color: 'bg-red-500' }, { label: 'Alto', percentage: 28, color: 'bg-orange-500' }, { label: 'Medio', percentage: 45, color: 'bg-amber-400' }, { label: 'Bajo', percentage: 15, color: 'bg-emerald-500' }];
  readonly sources: DistributionItem[] = [{ label: 'CyberSecNews', percentage: 35, color: 'bg-cyan-400' }, { label: 'INCIBE', percentage: 28, color: 'bg-violet-400' }, { label: 'CISA', percentage: 22, color: 'bg-orange-400' }];
  readonly correlations: CorrelationRow[] = [
    { source: 'INCIBE', vulnerability: 'Fallo PLC Siemens S7', asset: 'PLC-SM-01', risk: 94.8, status: 'Pendiente SOC' },
    { source: 'CISA', vulnerability: 'RCE en Apache 2.4', asset: 'SRV-APP-01', risk: 89.2, status: 'Pendiente SOC' },
    { source: 'TheHackerNews', vulnerability: 'Fuga en Modelo TensorFlow', asset: 'AI-MDL-01', risk: 72.1, status: 'Pendiente SOC' },
  ];
  readonly activities: MitigationActivity[] = [{ owner: 'Elena Torres', asset: 'SRV-APP-01', action: 'Parche aplicado', status: 'Mitigado', when: 'Hace 2h' }, { owner: 'Ana Rojas', asset: 'PLC-SM-01', action: 'Investigando impacto', status: 'Reconocido', when: 'Hace 4h' }];
  riskClass(risk: number): string { return risk > 90 ? 'text-red-600 dark:text-red-300' : risk > 70 ? 'text-orange-600 dark:text-orange-300' : 'text-amber-600 dark:text-amber-300'; }
  toggleTheme(): void { this.theme.toggle(); }
  readonly nav = ['Panel Principal', 'Inventario CMDB', 'Noticias OSINT', 'Correlaciones IA', 'Cola de Revisin', 'Historial de Correos', 'Configuracin'];
  routeFor(item: string): string { return item === 'Panel Principal' ? '/dashboard' : item === 'Inventario CMDB' ? '/cmdb' : item === 'Noticias OSINT' ? '/osint' : item === 'Correlaciones IA' ? '/ai-correlations' : item === 'Cola de Revisin' ? '/review-queue' : item === 'Historial de Correos' ? '/mail-history' : '/settings'; }
}

