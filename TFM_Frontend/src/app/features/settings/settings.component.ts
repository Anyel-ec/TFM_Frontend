import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Theme, ThemeService } from '../../core/theme.service';
type SettingsTab = 'profile' | 'integrations' | 'ai' | 'appearance';
@Component({ selector: 'app-settings', standalone: true, imports: [CommonModule, FormsModule], templateUrl: './settings.component.html', changeDetection: ChangeDetectionStrategy.OnPush })
export class SettingsComponent {
  activeTab: SettingsTab = 'profile'; savedMessage = '';
  smtp = { host: 'smtp-relay.brevo.com', port: 587, user: 'alerts@assetintel.local', password: '' };
  telegram = { token: '', chatId: '6001370837' }; aiThreshold = 30;
  sources = [{ name: 'INCIBE', enabled: true }, { name: 'CISA', enabled: true }, { name: 'TheHackerNews', enabled: true }, { name: 'CyberSecNews', enabled: false }];
  constructor(public readonly theme: ThemeService) {}
  setTab(tab: SettingsTab): void { this.activeTab = tab; this.savedMessage = ''; }
  save(): void { this.savedMessage = 'Cambios guardados correctamente.'; setTimeout(() => this.savedMessage = '', 3000); }
  testConnection(service: string): void { this.savedMessage = `Conexin ${service} simulada correctamente.`; setTimeout(() => this.savedMessage = '', 3000); }
  setTheme(theme: Theme): void { this.theme.setTheme(theme); this.savedMessage = `Tema ${theme === 'dark' ? 'oscuro' : 'claro'} aplicado.`; }
  toggleTheme(): void { this.theme.toggle(); }
}

