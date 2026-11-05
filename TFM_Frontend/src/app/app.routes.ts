import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'login', loadComponent: () => import('./features/login/login.component').then(m => m.LoginComponent) },
  { path: '', loadComponent: () => import('./layouts/admin-layout.component').then(m => m.AdminLayoutComponent), children: [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'dashboard', loadComponent: () => import('./features/dashboard/dashboard.component').then(m => m.DashboardComponent) },
  { path: 'cmdb', loadComponent: () => import('./features/cmdb/cmdb-list.component').then(m => m.CmdbListComponent) },
  { path: 'osint', loadComponent: () => import('./features/osint/osint-feed.component').then(m => m.OsintFeedComponent) },
  { path: 'ai-correlations', loadComponent: () => import('./features/ai-correlations/ai-correlations.component').then(m => m.AiCorrelationsComponent) },
  { path: 'review-queue', loadComponent: () => import('./features/review-queue/review-queue.component').then(m => m.ReviewQueueComponent) },
  { path: 'mail-history', loadComponent: () => import('./features/alert-history/alert-history.component').then(m => m.AlertHistoryComponent) },
  { path: 'settings', loadComponent: () => import('./features/settings/settings.component').then(m => m.SettingsComponent) },
  ] },
  { path: '**', redirectTo: 'dashboard' },
];

