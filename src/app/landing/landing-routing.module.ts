import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './landing.component';


const routes: Routes = [
    {
        path: '',
        component: LandingComponent,
        data: {
            name: 'Home'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LandingRoutingModule { }
