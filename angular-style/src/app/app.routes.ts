import { Routes } from '@angular/router';
import { ComponentAComponent } from './components/component-a/component-a.component';

export const routes: Routes = [
    {
        path: 'component-a',
        loadComponent : () => import('./components/component-a/component-a.component').then(m=> m.ComponentAComponent)
    },
    {
        path: 'component-b',
        loadComponent : () => import('./components/component-b/component-b.component').then(m=> m.ComponentBComponent)
    },
];
