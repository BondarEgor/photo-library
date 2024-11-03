import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-nav-link',
  standalone: true,
  imports: [MatButtonModule, RouterModule, CommonModule],
  templateUrl: './nav-link.component.html',
  styleUrl: './nav-link.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavLinkComponent {
  @Input() isActive: boolean = false;
  @Input() label: string = '';
  @Input() link: string = '';
}
