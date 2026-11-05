import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ThemeService } from '../../core/theme.service';
import { AssetType, Criticality, CmdbAsset } from './cmdb.models';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({ selector: 'app-cmdb-list', standalone: true, imports: [CommonModule, FormsModule, RouterLink, RouterLinkActive], templateUrl: './cmdb-list.component.html', changeDetection: ChangeDetectionStrategy.OnPush })
export class CmdbListComponent {
  search = ''; typeFilter: AssetType | 'Todos' = 'Todos'; criticalityFilter: Criticality | 'Todas' = 'Todas'; selectedAsset: CmdbAsset | null = null;
  readonly nav = ['Panel Principal', 'Inventario CMDB', 'Noticias OSINT', 'Correlaciones IA', 'Cola de Revisin', 'Historial de Correos', 'Configuracin'];
  readonly assets: CmdbAsset[] = [
    { id: 1, assetTag: 'SRV-APP-01', name: 'Servidor Aplicaciones Backend', assetType: 'Hardware', status: 'Activo', criticality: 'Crtica', owner: 'Elena Torres', cpeString: 'cpe:2.3:o:canonical:ubuntu_linux:22.04:*:*:*:*:*:*:*', createdAt: '2026-01-12', macAddress: '00:25:96:FF:12:AB', ipAddress: '10.0.5.20', operatingSystem: 'Ubuntu Server 22.04 LTS', manufacturer: 'Dell PowerEdge' },
    { id: 2, assetTag: 'SW-WEB-01', name: 'Apache Web Server', assetType: 'Software', status: 'En mantenimiento', criticality: 'Crtica', owner: 'Jorge Prez', cpeString: 'cpe:2.3:a:apache:http_server:2.4.49:*:*:*:*:*:*:*', createdAt: '2026-02-03', version: '2.4.49', license: 'Apache License 2.0', publiclyExposed: true },
    { id: 3, assetTag: 'PLC-SM-01', name: 'Controlador Siemens S7', assetType: 'IoT', status: 'Activo', criticality: 'Alta', owner: 'Ana Rojas', cpeString: 'cpe:2.3:o:siemens:simatic_s7:4.2:*:*:*:*:*:*:*', createdAt: '2025-11-18', protocol: 'MQTT / OPC-UA', firmware: 'V4.2.8', networkSegment: 'OT_VLAN (172.20.40.0/24)' },
    { id: 4, assetTag: 'AI-MDL-01', name: 'TIVA-Core-LLM', assetType: 'AI_Model', status: 'Activo', criticality: 'Alta', owner: 'ngel Patio', cpeString: 'cpe:2.3:a:meta:llama:3.1:*:*:*:*:*:*:*', createdAt: '2026-03-21', provider: 'Meta / HuggingFace', deploymentMode: 'Local  Kubernetes GPU', dataClassification: 'Confidencial' },
  ];
  constructor(public readonly theme: ThemeService) {}
  routeFor(item: string): string { return item === 'Panel Principal' ? '/dashboard' : item === 'Inventario CMDB' ? '/cmdb' : item === 'Noticias OSINT' ? '/osint' : item === 'Correlaciones IA' ? '/ai-correlations' : item === 'Cola de Revisin' ? '/review-queue' : item === 'Historial de Correos' ? '/mail-history' : '/settings'; }
  get filteredAssets(): CmdbAsset[] { const q = this.search.trim().toLowerCase(); return this.assets.filter(a => (!q || `${a.assetTag} ${a.name} ${a.owner}`.toLowerCase().includes(q)) && (this.typeFilter === 'Todos' || a.assetType === this.typeFilter) && (this.criticalityFilter === 'Todas' || a.criticality === this.criticalityFilter)); }
  icon(type: AssetType): string { return type === 'Hardware' ? '' : type === 'Software' ? '</>' : type === 'IoT' ? '' : ''; }
  criticalityClass(value: Criticality): string { return value === 'Crtica' ? 'text-red-600 bg-red-500/10 border-red-500/30 dark:text-red-300' : value === 'Alta' ? 'text-orange-600 bg-orange-500/10 border-orange-500/30 dark:text-orange-300' : value === 'Media' ? 'text-amber-600 bg-amber-500/10 border-amber-500/30 dark:text-amber-300' : 'text-emerald-600 bg-emerald-500/10 border-emerald-500/30 dark:text-emerald-300'; }
  openDetails(asset: CmdbAsset): void { this.selectedAsset = asset; }
  closeDetails(): void { this.selectedAsset = null; }
  toggleTheme(): void { this.theme.toggle(); }
}

