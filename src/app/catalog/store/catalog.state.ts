import { Injectable } from '@angular/core';
import { Selector, State, Action, StateContext } from '@ngxs/store';
import { append, patch } from '@ngxs/store/operators';


import { OrderModel } from '@shared/models/order.model';
import { CatalogStateModel } from './catalog.model';
import { LoadCatalog } from './catalog.actions';

const catalog = [
    new OrderModel({
        id: 1,
        description: 'Исполнение: настольное, Количество полок: 2, Температурный режим, C: +6...+12',
        inStock: true,
        photo: 'https://asgr.pro/1cimport/141404-100-001.jpeg',
        name: 'Льдогенератор ICE TECH SK25A',
        price: 2100,
        count: 1,
        interestDiscount: 90
    }),
    new OrderModel({
        id: 2,
        description: 'Кофемолка Expobar 600 Manual используется для измельчения кофейных зерен и получения молотой массы для заваривания кофе в турке',
        inStock: true,
        photo: 'https://asgr.pro/1cimport/010103-022-001.jpeg',
        name: 'Кофемолка Expobar 600 Manual',
        price: 3100,
        count: 1,
        interestDiscount: 80
    })
];
@State<CatalogStateModel>({
    name: 'catalog',
    defaults: {
        catalog: [
            ...catalog,
            ...catalog,
            ...catalog,
            ...catalog,
            ...catalog,
            ...catalog,
            ...catalog,
            ...catalog,
            ...catalog,
            ...catalog,
            ...catalog,
        ]
    }
})
@Injectable()
export class CatalogState {



    @Selector()
    static catalog({ catalog }: CatalogStateModel): OrderModel[] {
        return catalog;
    }

    @Action(LoadCatalog)
    onLoadCatalog(
        { setState }: StateContext<CatalogStateModel>,
        { payload }: LoadCatalog
    ): void {
        setState(patch({
            catalog: append([payload])
        }))
    }
}

