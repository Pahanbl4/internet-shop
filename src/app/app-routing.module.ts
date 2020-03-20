import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule)
    },
    { path: '**', redirectTo: '' }
];

export const appRouterProviders = RouterModule.forRoot(routes, { useHash: true });
