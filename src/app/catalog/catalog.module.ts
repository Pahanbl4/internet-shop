import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CatalogComponent } from './components/catalog/catalog.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CatalogRoutingModule } from './catalog-routing.module';
import {MatExpansionModule} from '@angular/material/expansion';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { Ng5SliderModule } from 'ng5-slider';
import { NgxsModule } from '@ngxs/store';
import { CatalogState } from './store/catalog.state';
import { ProductCardModule } from 'app/product-card/product-card.module';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CatalogResolver } from './resolvers/catalog.resolver';
import { ProductApiService } from './services/product-api.service';
import { MatDividerModule } from '@angular/material/divider';
import { PipesModule } from '@shared/pipes/pipes.module';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import { InterestDiscountModule } from 'app/interest-discount/interest-discount.module';

@NgModule({
    declarations: [CatalogComponent, ProductDetailsComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CatalogRoutingModule,
        MatExpansionModule,
        MatButtonModule,
        MatDividerModule,
        MatCheckboxModule,
        MatTabsModule,
        InterestDiscountModule,
        PipesModule,
        MatMenuModule,
        MatIconModule,
        Ng5SliderModule,
        MatSidenavModule,
        ProductCardModule,
        NgxsModule.forFeature([
            CatalogState
        ]),
    ],
    providers: [CatalogResolver, ProductApiService]
})
export class CatalogModule { }
