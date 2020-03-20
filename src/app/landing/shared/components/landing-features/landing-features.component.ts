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

    constructor() { }

    onDemo(): void {
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
                name: 'Линии Раздачи',
                subsections: [
                    new Section({name: 'Чайник'}),
                    new Section({name: 'Кофеварка'})
                ]
            }),
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
                name: 'Линии Раздачи',
                subsections: [
                    new Section({name: 'Чайник'}),
                    new Section({name: 'Кофеварка'})
                ]
            }),
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
                name: 'Линии Раздачи',
                subsections: [
                    new Section({name: 'Чайник'}),
                    new Section({name: 'Кофеварка'})
                ]
            }),
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
                name: 'Линии Раздачи',
                subsections: [
                    new Section({name: 'Чайник'}),
                    new Section({name: 'Кофеварка'})
                ]
            }),
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
                name: 'Линии Раздачи',
                subsections: [
                    new Section({name: 'Чайник'}),
                    new Section({name: 'Кофеварка'})
                ]
            }),
            new Section({
                icon: 'kettle',
                name: 'Бытовая техника для дома',
                subsections: [
                    new Section({name: 'Чайник'}),
                    new Section({name: 'Кофеварка'})
                ]
            })
        ];
    }
}
