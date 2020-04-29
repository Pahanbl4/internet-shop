import { OrderModel } from '@shared/models/order.model';

export class BasketDismissed {
    static readonly type = '[Basket] Dismissed';

    constructor(public result: any) { }
}

export class RemoveFromBasket {
    static readonly type = '[Basket] remove from Basket';

    constructor(public payload: number) { }
}

export class AddToBasket {
    static readonly type = '[Basket] add to Basketv';

    constructor(public payload: OrderModel) { }
}

export class UpdateCount {
    static readonly type = '[Basket] update count';

    constructor(public payload: OrderModel, public number: number) { }
}
