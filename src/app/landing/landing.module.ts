import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgModule } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { RouterModule } from '@angular/router';

import { LandingComponent } from './landing.component';
import { LandingFeaturesComponent } from './shared/components/landing-features/landing-features.component';
import { LandingFooterComponent } from './shared/components/landing-footer/landing-footer.component';
import { LandingHeroComponent } from './shared/components/landing-hero/landing-hero.component';
import { LandingRoutingModule } from './landing-routing.module';
import { NavbarModule } from '../navbar/navbar.module';
import { ProductCardModule } from '../product-card/product-card.module';
import { TechnologySectionComponent } from './shared/components/technology-section/technology-section.component';

@NgModule({
    declarations: [
        LandingComponent,
        LandingFeaturesComponent,
        LandingFooterComponent,
        LandingHeroComponent,
        TechnologySectionComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        LandingRoutingModule,
        MatButtonModule,
        MatCarouselModule.forRoot(),
        MatDividerModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatRadioModule,
        MatSidenavModule,
        NavbarModule,
        OverlayModule,
        ProductCardModule,
        ReactiveFormsModule,
        RouterModule
    ],
    providers: []
})
export class LandingModule { }
