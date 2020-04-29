import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Options, LabelType } from 'ng5-slider';
import { OrderModel } from '@shared/models/order.model';
import { Select } from '@ngxs/store';
import { CatalogState } from 'app/catalog/store/catalog.state';
import { Observable } from 'rxjs';

@Component({
    selector: 'catalog',
    templateUrl: './catalog.component.html',
    styleUrls: ['./catalog.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatalogComponent {

    @Select(CatalogState.catalog) catalog$: Observable<OrderModel[]>;

    value: number = 40;
    highValue: number = 6000;
    options: Options = {
        floor: 0,
        ceil: 10000,
        translate: (value: number, label: LabelType): string => {
            switch (label) {
                case LabelType.Low:
                    return `<b>Min:</b>${value}руб.`;
                case LabelType.High:
                    return `<b>Max:</b>${value}руб.`;
                default:
                    return '$' + value;
            }
        }
    };

    orders: OrderModel[];

    onSearch(): void {
        console.log('on search...')
    }

    countrys = [
        {
            name: 'Беларусь'
        },
        {
            name: 'Россия'
        },
        {
            name: 'Бельгия'
        },
        {
            name: 'Китай'
        },
        {
            name: 'Штаты'
        },
        {
            name: 'Сингапур'
        },
        {
            name: 'Польша'
        },
        {
            name: 'Литва'
        }
    ];
    producers = [
        {
            name: 'Bosch'
        },
        {
            name: 'Samsung'
        },
        {
            name: 'LG'
        },
        {
            name: 'Atlant'
        },
        {
            name: 'Fama'
        },
        {
            name: 'Krupps'
        },
        {
            name: 'Vesta'
        },
        {
            name: 'Gastrorag'
        }
    ]
}
