import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent{
    openTab(moduleId) {
        alert(moduleId);
      }
    
      menuObj =
        {
          "structure": [
            {
              "id": 42,
              "label": "Каталог",
              "childs": [
                {
                  "id": 44,
                  "icon": "kettle",
                  "label": "Бытовая техника для дома",
                  "triger": "technics",
                  "childs": []
                },
                {
                  "id": 46,
                  "icon": 'konveyer',
                  "label": "Линии Раздач",
                  "triger": "fish",
                  "childs": []
                }
              ]
            }]
        };
}
