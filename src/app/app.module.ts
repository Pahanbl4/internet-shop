import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ToolbarModule } from './components/toolbar/toolbar.module';
import { appRouterProviders } from './app-routing.module';
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        appRouterProviders,
        BrowserModule,
        CommonModule,
        BrowserAnimationsModule,
        ToolbarModule,
        OverlayModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
