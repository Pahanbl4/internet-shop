import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { MatIconModule, MatMenuModule, MatButtonModule, MatSidenavModule, MatRadioModule, MatFormFieldModule, MatInputModule, MatDividerModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { RouterModule } from '@angular/router';

import { LandingComponent } from './landing.component';
import { LandingFeaturesComponent } from './shared/components/landing-features/landing-features.component';
import { LandingFooterComponent } from './shared/components/landing-footer/landing-footer.component';
import { LandingHeroComponent } from './shared/components/landing-hero/landing-hero.component';
import { LandingRoutingModule } from './landing-routing.module';
import { ProductCardModule } from '../product-card/product-card.module';
import { TechnologySectionComponent } from './shared/components/technology-section/technology-section.component';
import { NavbarModule } from '../navbar/navbar.module';

@NgModule({
    declarations: [
        LandingComponent,
        LandingFeaturesComponent,
        LandingFooterComponent,
        LandingHeroComponent,
        TechnologySectionComponent
    ],
    imports: [
        MatCarouselModule.forRoot(),
        CommonModule,
        FormsModule,
        MatIconModule,
        MatMenuModule,
        MatButtonModule,
        MatSidenavModule,
        RouterModule,
        OverlayModule,
        LandingRoutingModule,
        ReactiveFormsModule,
        ProductCardModule,
        MatRadioModule,
        MatFormFieldModule,
        MatInputModule,
        NavbarModule,
        MatDividerModule
    ],
    providers: []
})
export class LandingModule { }
