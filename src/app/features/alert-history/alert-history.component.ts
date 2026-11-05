import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertHistoryItem, DeliveryStatus } from './alert-history.interface';
import { ThemeService } from '../../core/theme.service';

@Component({
  selector: 'app-alert-history', standalone: true, imports: [CommonModule, FormsModule],
  templateUrl: './alert-history.component.html', changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertHistoryComponent {
  constructor(public readonly theme: ThemeService) {}
  search = ''; selectedAlert: AlertHistoryItem | null = null;
  readonly nav = ['Dashboard', 'CMDB (Inventory)', 'OSINT Posts', 'AI Correlations', 'Review Queue', 'Outbound Mail History', 'Settings'];
  readonly alerts: AlertHistoryItem[] = [
    { id: 'ALR-2026-389', sentAt: '03 Nov 2026  09:42', assetId: 'SRV-APP-01', assetName: 'Servidor Aplicaciones Backend', ownerName: 'Elena Torres', ownerEmail: 'etorres@empresa.local', risk: 97, cve: 'CVE-2026-44228', subject: 'Ejecucin remota en Apache Log4j', vulnerability: 'Apache Log4j  Remote Code Execution', status: 'Mitigado', targetHost: 'srv-app-01.prod.corp', mitigation: 'Parche aplicado y servicio reiniciado.' },
    { id: 'ALR-2026-388', sentAt: '03 Nov 2026  08:17', assetId: 'PLC-ROBOT-04', assetName: 'Controlador Robtico Lnea 4', ownerName: 'Ana Rojas', ownerEmail: 'arojas@empresa.local', risk: 84, cve: 'CVE-2026-1234', subject: 'ROS Noetic: escalada de privilegios', vulnerability: 'ROS Noetic  Privilege Escalation', status: 'Enviado SMTP', targetHost: 'plc-robot-04.ot.corp' },
    { id: 'ALR-2026-387', sentAt: '02 Nov 2026  16:31', assetId: 'DB-CORE-02', assetName: 'Base de Datos Financiera', ownerName: 'Marcos Silva', ownerEmail: 'msilva@empresa.local', risk: 72, cve: 'CVE-2026-7781', subject: 'PostgreSQL bypass de autenticacin', vulnerability: 'PostgreSQL Authentication Bypass', status: 'Enviado SMTP', targetHost: 'db-core-02.prod.corp' },
    { id: 'ALR-2026-386', sentAt: '02 Nov 2026  11:05', assetId: 'WKS-SEC-22', assetName: 'Estacin SOC Nivel 2', ownerName: 'Luca Gmez', ownerEmail: 'lgomez@empresa.local', risk: 61, cve: 'CVE-2026-5510', subject: 'Vulnerabilidad de da cero en navegador', vulnerability: 'Chromium Sandbox Escape', status: 'Telegram', targetHost: 'wks-sec-22.corp' },
    { id: 'ALR-2026-385', sentAt: '01 Nov 2026  14:22', assetId: 'API-GW-01', assetName: 'Gateway APIs Externas', ownerName: 'Jorge Prez', ownerEmail: 'jperez@empresa.local', risk: 93, cve: 'CVE-2026-9088', subject: 'Deserializacin insegura en gateway', vulnerability: 'API Gateway Unsafe Deserialization', status: 'Pendiente', targetHost: 'api-gw-01.prod.corp' },
  ];
  get filteredAlerts(): AlertHistoryItem[] { const q = this.search.toLowerCase(); return this.alerts.filter(a => !q || Object.values(a).some(v => String(v).toLowerCase().includes(q))); }
  riskClass(risk: number): string { return risk > 90 ? 'text-red-300 bg-red-500/15 border-red-500/30' : risk > 70 ? 'text-orange-300 bg-orange-500/15 border-orange-500/30' : 'text-amber-300 bg-amber-500/15 border-amber-500/30'; }
  statusClass(status: DeliveryStatus): string { return status === 'Mitigado' ? 'text-emerald-300 bg-emerald-500/15 border-emerald-500/30' : status === 'Pendiente' ? 'text-amber-300 bg-amber-500/15 border-amber-500/30' : status === 'Telegram' ? 'text-sky-300 bg-sky-500/15 border-sky-500/30' : 'text-violet-300 bg-violet-500/15 border-violet-500/30'; }
  openPreview(alert: AlertHistoryItem): void { this.selectedAlert = alert; }
  closePreview(): void { this.selectedAlert = null; }
  toggleTheme(): void { this.theme.toggle(); }
}

