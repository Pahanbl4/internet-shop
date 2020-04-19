import { Injectable } from '@angular/core';
import { Selector, State, Action, StateContext } from '@ngxs/store';
import { append, patch, removeItem } from '@ngxs/store/operators';

import { BasketStateModel } from './basket-popup.model';
import { OrderModel } from '@shared/models/order.mdel';
import { AddToBasket, RemoveFromBasket } from './basket-popup.actions';

@State<BasketStateModel>({
    name: 'basket',
    defaults: {
        orders: [],
    }
})
@Injectable()
export class BasketState {

    @Selector()
    static orders({ orders }: BasketStateModel): OrderModel[] {
        return orders;
    }

    @Selector()
    static cost({ orders }: BasketStateModel): number {
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        return orders.map(x => x.price).reduce(reducer) || 0;
    }

    @Action(AddToBasket)
    onAddToBasket(
        { setState }: StateContext<BasketStateModel>,
        { payload }: AddToBasket
    ): void {
        setState(patch({
            orders: append([payload])
        }))
    }

    @Action(RemoveFromBasket)
    onRemoveFromBasket(
        { setState }: StateContext<BasketStateModel>,
        { payload }: RemoveFromBasket
    ): void {
        setState(patch({
            orders: removeItem<OrderModel>(x => x.id === payload)
        }))
    }
}

