import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type Theme = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly themeSubject = new BehaviorSubject<Theme>(this.readTheme());
  readonly theme$ = this.themeSubject.asObservable();

  constructor() { this.apply(this.themeSubject.value); }
  get current(): Theme { return this.themeSubject.value; }
  toggle(): void { this.setTheme(this.current === 'dark' ? 'light' : 'dark'); }
  setTheme(theme: Theme): void { localStorage.setItem('theme', theme); this.apply(theme); this.themeSubject.next(theme); }
  private readTheme(): Theme { const stored = localStorage.getItem('theme'); return stored === 'light' || stored === 'dark' ? stored : 'dark'; }
  private apply(theme: Theme): void { this.document.documentElement.classList.toggle('dark', theme === 'dark'); this.document.documentElement.style.colorScheme = theme; }
}

