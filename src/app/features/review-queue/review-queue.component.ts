import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService } from '../../core/theme.service';
import { CorrelationReview, HumanDecision, NotificationChannel } from './correlations.models';

@Component({ selector: 'app-review-queue', standalone: true, imports: [CommonModule, FormsModule, RouterLink, RouterLinkActive], templateUrl: './review-queue.component.html', changeDetection: ChangeDetectionStrategy.OnPush })
export class ReviewQueueComponent {
  selected: CorrelationReview | null = null;
  readonly nav = ['Panel Principal', 'Inventario CMDB', 'Noticias OSINT', 'Correlaciones IA', 'Cola de Revisin', 'Historial de Correos', 'Configuracin'];
  readonly queue: CorrelationReview[] = [
    { id: 1, source: 'CISA', postTitle: 'Actively Exploited Vulnerability in Apache Log4j', postUrl: 'https://www.cisa.gov/known-exploited-vulnerabilities-catalog', cve: 'CVE-2026-44228', assetTag: 'SRV-APP-01', assetName: 'Servidor Aplicaciones Backend', assetType: 'Hardware', assetCriticality: 'Crtica', ownerName: 'Elena Torres', ownerEmail: 'etorres@empresa.local', aiRelevancePercentage: 98.5, aiSummary: 'El activo contiene Java y est expuesto. La vulnerabilidad crtica de ejecucin remota de cdigo (RCE) representa un riesgo inminente para el servidor de aplicaciones y puede facilitar movimiento lateral.', isFlaggedImportant: true, humanDecision: 'Pendiente', analystNotes: '', notificationChannel: 'SMTP (Brevo)', detectedAt: '03 Nov 2026  09:42' },
    { id: 2, source: 'INCIBE', postTitle: 'Fallo crtico de seguridad en sistemas SCADA Siemens', postUrl: 'https://www.incibe.es/incibe-cert/alerta-temprana/avisos', cve: 'CVE-2026-7810', assetTag: 'PLC-SM-01', assetName: 'Controlador Siemens S7', assetType: 'IoT / OT', assetCriticality: 'Alta', ownerName: 'Ana Rojas', ownerEmail: 'arojas@empresa.local', aiRelevancePercentage: 85.0, aiSummary: 'Coincidencia directa en fabricante Siemens. El controlador pertenece al segmento OT y requiere actualizacin de firmware coordinada para evitar una interrupcin de procesos industriales.', isFlaggedImportant: true, humanDecision: 'Pendiente', analystNotes: '', notificationChannel: 'Ambos', detectedAt: '03 Nov 2026  08:17' },
    { id: 3, source: 'TheHackerNews', postTitle: 'Falsa alarma: campaa dirigida contra equipos macOS', postUrl: 'https://thehackernews.com/', cve: 'CVE-2026-5591', assetTag: 'WKS-SEC-22', assetName: 'Estacin SOC Nivel 2', assetType: 'Hardware', assetCriticality: 'Media', ownerName: 'Carlos Mendoza', ownerEmail: 'cmendoza@empresa.local', aiRelevancePercentage: 41.2, aiSummary: 'La mencin del post es genrica para endpoints, pero el activo corporativo utiliza Windows 11 y la amenaza descrita afecta exclusivamente al ecosistema macOS.', isFlaggedImportant: false, humanDecision: 'Pendiente', analystNotes: '', notificationChannel: 'Telegram', detectedAt: '02 Nov 2026  16:31' },
  ];
  constructor(public readonly theme: ThemeService) { this.select(this.queue[0]); }
  select(item: CorrelationReview): void { this.selected = item; }
  riskClass(risk: number): string { return risk > 90 ? 'text-red-600 bg-red-500/10 border-red-500/30 dark:text-red-300' : risk > 70 ? 'text-orange-600 bg-orange-500/10 border-orange-500/30 dark:text-orange-300' : 'text-amber-600 bg-amber-500/10 border-amber-500/30 dark:text-amber-300'; }
  decide(decision: HumanDecision): void { if (!this.selected) return; this.selected.humanDecision = decision; }
  toggleTheme(): void { this.theme.toggle(); }
  routeFor(item: string): string { return item === 'Panel Principal' ? '/dashboard' : item === 'Inventario CMDB' ? '/cmdb' : item === 'Noticias OSINT' ? '/osint' : item === 'Correlaciones IA' || item === 'Cola de Revisin' ? '/review-queue' : item === 'Historial de Correos' ? '/mail-history' : '/settings'; }
}

