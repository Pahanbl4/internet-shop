import { OrderModel } from '@shared/models/order.mdel';

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