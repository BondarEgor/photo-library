import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-active',
  standalone: true,
  imports: [],
  templateUrl: './active.component.html',
  styleUrl: './active.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActiveComponent {}
