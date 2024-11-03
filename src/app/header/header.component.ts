import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { NavLinkComponent } from '../nav-link/nav-link.component';
import { CommonModule } from '@angular/common';
import { NavLink } from '../nav-link/types';
import { NAV_LINKS } from './nav-links.constants';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, NavLinkComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  constructor(private router: Router) {}

  readonly LINKS: NavLink[] = NAV_LINKS;

  isActive(view: string) {
    return this.router.url === view;
  }
}
