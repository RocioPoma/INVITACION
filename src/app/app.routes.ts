import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/sobre/sobre.component').then(m => m.SobreComponent)
  },
  {
    path: 'invitacion',
    loadComponent: () => import('./components/invitacion/invitacion.component').then(m => m.InvitacionComponent)
  }
];