import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppRouteGuard } from '@shared/auth/auth-route-guard';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SiteComponent } from '@site/site.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: SiteComponent,
                children: [
                    { path: 'home', component: HomeComponent},
                    { path: 'about', component: AboutComponent }
                ]
            }
        ])
    ],
    exports: [RouterModule]
})
export class SiteRoutingModule { }