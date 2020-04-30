import { OrderModel } from '@shared/models/order.model';
import { ProductModel } from '@shared/models/product.model';

export interface CatalogStateModel {
    catalog: OrderModel[]
    product: ProductModel;
}
