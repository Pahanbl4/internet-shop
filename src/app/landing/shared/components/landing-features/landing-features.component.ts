import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Section } from '../../models/section.model';
import { OrderModel } from '@shared/models/order.mdel';

@Component({
    selector: 'landing-features',
    templateUrl: 'landing-features.component.html',
    styleUrls: ['landing-features.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingFeaturesComponent implements OnInit {

    models: Section[];

    orders: OrderModel[];

    checkOffer = 'Спецпредложения';

    offers = [
        'Новинки',
        'Спецпредложения'
    ];

    constructor() { }

    onLoad(): void {
        console.log('on load...')
    }

    ngOnInit(): void {
        this.orders = [
            new OrderModel({
                description: 'Исполнение: настольное, Количество полок: 2, Температурный режим, C: +6...+12',
                inStock: true,
                photo: 'https://asgr.pro/1cimport/141404-100-001.jpeg',
                name: 'Льдогенератор ICE TECH SK25A',
                price: 2100,
                interestDiscount: 90
            }),
            new OrderModel({
                description: 'Кофемолка Expobar 600 Manual используется для измельчения кофейных зерен и получения молотой массы для заваривания кофе в турке',
                inStock: true,
                photo: 'https://asgr.pro/1cimport/010103-022-001.jpeg',
                name: 'Кофемолка Expobar 600 Manual',
                price: 3100,
                interestDiscount: 80
            })
        ];
        this.orders = [
            ...this.orders,
            ...this.orders,
            ...this.orders,
            ...this.orders,
            ...this.orders
        ];
        this.models = [
            new Section({
                icon: 'kettle',
                name: 'Бытовая техника для дома',
                subsections: [
                    new Section({name: 'Чайник'}),
                    new Section({name: 'Кофеварка'})
                ]
            }),
            new Section({
                icon: 'konveyer',
                name: 'Линии Раздач',
                subsections: [
                    new Section({name: 'Чайник'}),
                    new Section({name: 'Кофеварка'})
                ]
            })
        ];
        this.models = [
            ...this.models,
            ...this.models,
            ...this.models,
            ...this.models,
            ...this.models
        ]
    }
}
