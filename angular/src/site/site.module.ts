import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';
import { HttpClientModule, HttpResponse } from '@angular/common/http';

import { ModalModule } from 'ngx-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';


import { AbpModule } from '@abp/abp.module';

import { ServiceProxyModule } from '@shared/service-proxies/service-proxy.module';
import { SharedModule } from '@shared/shared.module';

import { HomeComponent } from '@site/home/home.component';
import { AboutComponent } from '@site/about/about.component';

import { TopBarComponent } from '@site/layout/topbar.component';
import { TopBarLanguageSwitchComponent } from '@site/layout/topbar-languageswitch.component';
import { SideBarUserAreaComponent } from '@site/layout/sidebar-user-area.component';
import { SideBarNavComponent } from '@site/layout/sidebar-nav.component';
import { SideBarFooterComponent } from '@site/layout/sidebar-footer.component';
import { RightSideBarComponent } from '@site/layout/right-sidebar.component';
import { SiteComponent } from '@site/site.component';
import { SiteRoutingModule } from '@site/site-routing.module';


@NgModule({
    declarations: [
        SiteComponent,
        HomeComponent,
        AboutComponent,

        TopBarComponent,
        TopBarLanguageSwitchComponent,
        SideBarUserAreaComponent,
        SideBarNavComponent,
        SideBarFooterComponent,
        RightSideBarComponent
    
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        JsonpModule,
        ModalModule.forRoot(),
        AbpModule,
        SiteRoutingModule,
        ServiceProxyModule,
        SharedModule,
        NgxPaginationModule
    ],
    providers: [

    ]
})
export class SiteModule { }
