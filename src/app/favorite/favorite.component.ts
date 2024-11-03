import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-favorite',
  standalone: true,
  imports: [],
  templateUrl: './favorite.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavoriteComponent {}
