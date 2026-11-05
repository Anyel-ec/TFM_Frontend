import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../core/theme.service';
@Component({ selector: 'app-admin-layout', standalone: true, imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive], templateUrl: './admin-layout.component.html' })
export class AdminLayoutComponent {
  showNotification = false;
  readonly nav = [{ label: 'Panel Principal', path: '/dashboard', icon: 'fa-chart-network' }, { label: 'Inventario CMDB', path: '/cmdb', icon: 'fa-server' }, { label: 'Noticias OSINT', path: '/osint', icon: 'fa-rss-square' }, { label: 'Correlaciones IA', path: '/ai-correlations', icon: 'fa-brain' }, { label: 'Cola de Revisin', path: '/review-queue', icon: 'fa-tasks' }, { label: 'Historial de Correos', path: '/mail-history', icon: 'fa-envelope-open-text' }, { label: 'Configuracin', path: '/settings', icon: 'fa-cog' }];
  constructor(public readonly theme: ThemeService, private readonly router: Router) {}
  toggleNotification(): void { this.showNotification = true; window.setTimeout(() => this.showNotification = false, 3000); }
  logout(): void { localStorage.removeItem('tiva-session'); this.router.navigateByUrl('/login'); }
  toggleTheme(): void { this.theme.toggle(); }
}

