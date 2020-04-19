import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { OverlayModule } from '@angular/cdk/overlay';

import { environment } from '@environments/environment';

import { AppComponent } from './app.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthModule } from './auth/auth.module';
import { ToolbarModule } from './components/toolbar/toolbar.module';
import { appRouterProviders } from './app-routing.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        NgxsModule.forRoot([
        ], { developmentMode: !environment.production }),
        environment.plugins,
        appRouterProviders,
        AuthModule,
        BrowserAnimationsModule,
        BrowserModule,
        CommonModule,
        OverlayModule,
        ToolbarModule
    ],
    providers: [AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule { }
