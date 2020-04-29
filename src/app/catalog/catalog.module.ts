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

@NgModule({
    declarations: [CatalogComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CatalogRoutingModule,
        MatExpansionModule,
        MatButtonModule,
        MatCheckboxModule,
        Ng5SliderModule,
        MatSidenavModule,
        ProductCardModule,
        NgxsModule.forFeature([
            CatalogState
        ]),
    ]
})
export class CatalogModule { }
