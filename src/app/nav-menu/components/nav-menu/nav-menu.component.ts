import { ChangeDetectionStrategy, Component, Renderer2, Output, Input, EventEmitter } from '@angular/core';

@Component({
    selector: 'nav-menu',
    templateUrl: './nav-menu.component.html',
    styleUrls: ['./nav-menu.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavMenuComponent {
      // new
  enteredButton = false;
  isMatMenuOpen = false;
  isMatMenu2Open = false;
  prevButtonTrigger;

  @Input()
  navItems;

  @Output()
  menuItem = new EventEmitter();
    
    constructor(private ren: Renderer2) { }

    menuItemClicked(child: {}) {
        this.menuItem.emit(child);
      }
      // new
        buttonEnter(trigger) {
        // /*
        setTimeout(() => {
          if(this.prevButtonTrigger && this.prevButtonTrigger != trigger){
            
            this.prevButtonTrigger.closeMenu();
            this.prevButtonTrigger = trigger;
            this.isMatMenuOpen = false;
            this.isMatMenu2Open = false;
            trigger.openMenu();
            console.log(1);
          }
          else if (!this.isMatMenuOpen) {
            
            this.enteredButton = true;
            this.prevButtonTrigger = trigger
            trigger.openMenu()
            console.log(2);
            
          }
          else {
            this.enteredButton = true;
            this.prevButtonTrigger = trigger
            console.log(3);
          }
          
        })
        // */
        console.log("enter event");
      }
    
      buttonLeave(trigger, button) {
    // /*
        setTimeout(() => {
          if (this.enteredButton && !this.isMatMenuOpen) {
            trigger.closeMenu();
            this.ren.removeClass(button['_elementRef'].nativeElement, 'cdk-focused');
            this.ren.removeClass(button['_elementRef'].nativeElement, 'cdk-program-focused');
          } if (!this.isMatMenuOpen) {
            trigger.closeMenu();
            this.ren.removeClass(button['_elementRef'].nativeElement, 'cdk-focused');
            this.ren.removeClass(button['_elementRef'].nativeElement, 'cdk-program-focused');
          } else {
            this.enteredButton = false;
          }
        }, 100)
    // */
        console.log("leave event");
      }
    
      menuenter() {
        this.isMatMenuOpen = true;
        if (this.isMatMenu2Open) {
          this.isMatMenu2Open = false;
        }
        console.log("menuEnter");
      }
    
      menuLeave(trigger, button) {
        setTimeout(() => {
          if (!this.isMatMenu2Open && !this.enteredButton) {
            this.isMatMenuOpen = false;
            trigger.closeMenu();
            this.ren.removeClass(button['_elementRef'].nativeElement, 'cdk-focused');
            this.ren.removeClass(button['_elementRef'].nativeElement, 'cdk-program-focused');
          } else {
            this.isMatMenuOpen = false;
          }
        }, 80)
        console.log("menuLeave");
      }
}
