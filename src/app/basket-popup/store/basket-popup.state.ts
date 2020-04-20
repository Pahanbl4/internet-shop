import { Injectable } from '@angular/core';
import { Selector, State, Action, StateContext } from '@ngxs/store';
import { append, patch, removeItem, updateItem } from '@ngxs/store/operators';

import { BasketStateModel } from './basket-popup.model';
import { OrderModel } from '@shared/models/order.mdel';
import { AddToBasket, RemoveFromBasket, UpdateCount } from './basket-popup.actions';

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
        return orders.map(x => x.price * x.count).reduce(reducer) || 0;
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

    @Action(UpdateCount)
    onUpdateCount(
        { setState }: StateContext<BasketStateModel>,
        { payload, number }: UpdateCount
    ): void {
        const newCount = payload.count + number;
        if(newCount <= 0) {
            return;
        }

        setState(patch({
            orders: updateItem<OrderModel>(
                x => x.id === payload.id,
                patch({ count: newCount })
            )
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

