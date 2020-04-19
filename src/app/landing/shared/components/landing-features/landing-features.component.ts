import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Section } from '../../models/section.model';

@Component({
    selector: 'landing-features',
    templateUrl: 'landing-features.component.html',
    styleUrls: ['landing-features.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingFeaturesComponent implements OnInit {

    models: Section[];

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
