import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Slide } from '../../models/slide.model';

@Component({
    selector: 'landing-hero',
    templateUrl: 'landing-hero.component.html',
    styleUrls: ['landing-hero.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingHeroComponent implements OnInit {
    slides: Slide[];

    ngOnInit(): void {
        this.slides = [
            new Slide({image: 'https://gsr.dev/material2-carousel/assets/demo.png'}),
            new Slide({image: 'https://gsr.dev/material2-carousel/assets/demo.png'}),
            new Slide({image: 'https://gsr.dev/material2-carousel/assets/demo.png'}),
            new Slide({image: 'https://gsr.dev/material2-carousel/assets/demo.png'}),
            new Slide({image: 'https://gsr.dev/material2-carousel/assets/demo.png'})
        ]
    }
}
