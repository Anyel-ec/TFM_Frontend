import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ThemeService } from '../../core/theme.service';
@Component({ selector: 'app-login', standalone: true, imports: [FormsModule], templateUrl: './login.component.html' })
export class LoginComponent { username = 'angel.patino@empresa.local'; password = ''; constructor(public readonly theme: ThemeService, private readonly router: Router) {} login(): void { localStorage.setItem('tiva-session', 'active'); this.router.navigateByUrl('/dashboard'); } toggleTheme(): void { this.theme.toggle(); } }

