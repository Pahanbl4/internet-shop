import { Injectable } from '@angular/core';
import { Selector, State, Action, StateContext } from '@ngxs/store';
import { append, patch } from '@ngxs/store/operators';


import { OrderModel } from '@shared/models/order.model';
import { CatalogStateModel } from './catalog.model';
import { LoadCatalog, LoadProduct } from './catalog.actions';
import { ProductModel } from '@shared/models/product.model';
import { ProductApiService } from '../services/product-api.service';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

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
        ],
        product: null
    }
})
@Injectable()
export class CatalogState {

    constructor(
        private apiService: ProductApiService
    ) {}

    @Selector()
    static catalog({ catalog }: CatalogStateModel): OrderModel[] {
        return catalog;
    }

    @Selector()
    static product({ product }: CatalogStateModel): ProductModel {
        return product;
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

    @Action(LoadProduct)
    onLoadProduct(
        { patchState, setState }: StateContext<CatalogStateModel>,
        { id }: LoadProduct
    ): void {
        const product = new ProductModel({
            id: 1,
            description: 'Технологическая подставка Сиком Т-11А/2400 для ПРФ 11/2400 используется в специальных отделах супермаркетов и торговых центров, а также на открытых летних площадках для размещения пончикового аппарата ПРФ 11/2400 или вытяжного шкафа Сиком А-11. Особенно актуально использование подставки будет в том случае, если производство пончиков демонстрируется потенциальным покупателям. Подставку можно свободно перемещать по торговому залу даже с установленным на ней пончиковым аппаратом. Подставка представляет собой островную конструкцию, которая, помимо функции подставки выполняет функцию шкафа для подсобного инвентаря. Кроме того, технологическую подставку Сиком Т-11А/2400 можно использовать в качестве рабочей столешницы. Подставка Сиком Т-11А/2400 имеет две открывающиеся дверцы и дополнительный выдвигающийся отсек. Технологическая подставка Сиком Т-11А/2400 оснащена резиновыми колесами, которые имеют крепления для обеспечения ее устойчивости. Подставка имеет относительно компактные размеры и отличается эргономичностью и удобством в эксплуатации.',
            inStock: true,
            photo: 'https://asgr.pro/1cimport/141404-100-001.jpeg',
            name: 'Льдогенератор ICE TECH SK25A',
            price: 2100,
            count: 1,
            interestDiscount: 90
        });
        setState(patch({
            product: product
        }))
        // return this.apiService.get(id).pipe(
        //     tap((product: ProductModel) => {
        //         patchState({ product });
        //     })
        // );
    }
}

