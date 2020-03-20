import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Section } from '../../models/section.model';

@Component({
    selector: 'technology-section',
    templateUrl: 'technology-section.component.html',
    styleUrls: ['technology-section.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TechnologySectionComponent {
    @Input() model: Section;
}
