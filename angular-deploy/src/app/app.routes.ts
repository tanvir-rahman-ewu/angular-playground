import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'account',
        children: [
            {
                path: 'detail',
                loadComponent: () => import('./features/account/detail/account-detail.component').then(m => m.AccountDetailComponent)
            }
        ]
    }
];
