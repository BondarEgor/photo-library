import { Routes } from '@angular/router';
import { ActiveComponent } from './active/active.component';
import { FavoriteComponent } from './favorite/favorite.component';

export const routes: Routes = [
  { path: '', component: ActiveComponent },
  { path: 'favorites', component: FavoriteComponent },
];
