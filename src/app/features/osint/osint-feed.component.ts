import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService } from '../../core/theme.service';
import { OsintPost, OsintSource } from './osint.models';

@Component({ selector: 'app-osint-feed', standalone: true, imports: [CommonModule, RouterLink, RouterLinkActive], templateUrl: './osint-feed.component.html', changeDetection: ChangeDetectionStrategy.OnPush })
export class OsintFeedComponent {
  selectedSource: OsintSource | 'Todos' = 'Todos'; selectedPost: OsintPost | null = null;
  readonly nav = ['Panel Principal', 'Inventario CMDB', 'Noticias OSINT', 'Correlaciones IA', 'Cola de Revisin', 'Historial de Correos', 'Configuracin'];
  readonly sources: (OsintSource | 'Todos')[] = ['Todos', 'CISA', 'INCIBE', 'TheHackerNews', 'CyberSecNews'];
  readonly posts: OsintPost[] = [
    { id: 1, sourceName: 'CISA', title: 'Actively Exploited Vulnerability in Cisco IOS XE Software', postUrl: 'https://www.cisa.gov/known-exploited-vulnerabilities-catalog', rawContent: 'CISA ha aadido una vulnerabilidad de alta prioridad al catlogo KEV. El fallo permite a un atacante remoto autenticado elevar privilegios en Cisco IOS XE y desplegar persistencia en el dispositivo. Las organizaciones deben revisar interfaces expuestas, aplicar el hotfix del fabricante y validar la integridad de los logs de administracin. El aviso recomienda priorizar los equipos perimetrales y confirmar la rotacin de credenciales.', publishedDate: '03 Nov 2026  08:31', scrapedAt: '03 Nov 2026  08:35' },
    { id: 2, sourceName: 'INCIBE', title: 'Fallo crtico de seguridad en sistemas SCADA Siemens', postUrl: 'https://www.incibe.es/incibe-cert/alerta-temprana/avisos', rawContent: 'INCIBE-CERT alerta de una vulnerabilidad crtica que afecta a controladores Siemens utilizados en entornos industriales. Un paquete de red especialmente manipulado podra provocar denegacin de servicio y, bajo determinadas condiciones, ejecucin de cdigo. Se recomienda segmentar la red OT, restringir protocolos de ingeniera y actualizar el firmware conforme a las instrucciones del fabricante.', publishedDate: '02 Nov 2026  16:12', scrapedAt: '02 Nov 2026  16:19' },
    { id: 3, sourceName: 'TheHackerNews', title: 'New Ransomware Gang Exploiting Apache Log4j', postUrl: 'https://thehackernews.com/', rawContent: 'Una nueva operacin de ransomware est explotando servidores Apache Log4j sin parchear como vector inicial. Los investigadores observan reconocimiento automatizado, descarga de payloads y movimiento lateral hacia servicios de identidad. Los indicadores publicados incluyen hashes, dominios de mando y control y patrones de ejecucin que pueden convertirse en reglas para EDR y SIEM.', publishedDate: '02 Nov 2026  11:44', scrapedAt: '02 Nov 2026  11:51' },
    { id: 4, sourceName: 'CyberSecNews', title: 'Data Leak in popular AI framework exposes training data', postUrl: 'https://cybersecuritynews.com/', rawContent: 'Una configuracin insegura en un framework de entrenamiento de modelos ha expuesto datasets y artefactos de experimentacin en repositorios accesibles desde Internet. La exposicin puede incluir prompts, metadatos y muestras sensibles. Se aconseja auditar buckets, revocar tokens de CI/CD y separar los entornos de entrenamiento de los servicios pblicos.', publishedDate: '01 Nov 2026  09:27', scrapedAt: '01 Nov 2026  09:34' },
  ];
  constructor(public readonly theme: ThemeService) {}
  get filteredPosts(): OsintPost[] { return this.selectedSource === 'Todos' ? this.posts : this.posts.filter(post => post.sourceName === this.selectedSource); }
  sourceClass(source: OsintSource): string { return source === 'CISA' ? 'bg-blue-500/10 text-blue-600 border-blue-500/30 dark:text-blue-300' : source === 'INCIBE' ? 'bg-red-500/10 text-red-600 border-red-500/30 dark:text-red-300' : source === 'TheHackerNews' ? 'bg-violet-500/10 text-violet-600 border-violet-500/30 dark:text-violet-300' : 'bg-cyan-500/10 text-cyan-600 border-cyan-500/30 dark:text-cyan-300'; }
  openPost(post: OsintPost): void { this.selectedPost = post; }
  closePost(): void { this.selectedPost = null; }
  toggleTheme(): void { this.theme.toggle(); }
  routeFor(item: string): string { return item === 'Panel Principal' ? '/dashboard' : item === 'Inventario CMDB' ? '/cmdb' : item === 'Noticias OSINT' ? '/osint' : item === 'Correlaciones IA' ? '/ai-correlations' : item === 'Cola de Revisin' ? '/review-queue' : item === 'Historial de Correos' ? '/mail-history' : '/settings'; }
}

