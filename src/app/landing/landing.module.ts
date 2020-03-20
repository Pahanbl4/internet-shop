import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { MatIconModule, MatMenuModule, MatButtonModule, MatSidenavModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LandingComponent } from './landing.component';
import { LandingFeaturesComponent } from './shared/components/landing-features/landing-features.component';
import { LandingFooterComponent } from './shared/components/landing-footer/landing-footer.component';
import { LandingHeroComponent } from './shared/components/landing-hero/landing-hero.component';
import { LandingRoutingModule } from './landing-routing.module';
import { TechnologySectionComponent } from './shared/components/technology-section/technology-section.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { ProductCardModule } from '../product-card/product-card.module';

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
        ProductCardModule
    ],
    providers: []
})
export class LandingModule { }
