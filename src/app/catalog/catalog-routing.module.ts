import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatalogComponent } from './components/catalog/catalog.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CatalogResolver } from './resolvers/catalog.resolver';

const routes: Routes = [
  {
    path: '',
    component: CatalogComponent
  },
  {
    path: 'product' + '/:id',
    component: ProductDetailsComponent,
    resolve: {
      catalog: CatalogResolver
  },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule {}
