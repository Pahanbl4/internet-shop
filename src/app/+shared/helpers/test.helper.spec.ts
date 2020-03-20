import { DebugElement } from '@angular/core';
import { TestBed, TestModuleMetadata } from '@angular/core/testing';

const resetTestingModule = TestBed.resetTestingModule,
    preventAngularFromResetting = () => TestBed.resetTestingModule = () => TestBed;
const allowAngularToReset = () => TestBed.resetTestingModule = resetTestingModule;

export class TestHelper {
    /**
     * Button events to pass to `DebugElement.triggerEventHandler` for RouterLink event handler
     */
    public static ButtonClickEvents = {
        left: { button: 0 },
        right: { button: 1 }
    };

    /**
     * Simulate element click. Defaults to mouse left-button click event.
     */
    public static click(el: DebugElement | HTMLElement, eventObj: any = this.ButtonClickEvents.left): void {
        if (el instanceof HTMLElement) {
            el.click();
        } else {
            el.triggerEventHandler('click', eventObj);
        }
    }

    public static setupTestBed = (moduleDef: TestModuleMetadata) => {
        beforeAll(done => (async () => {
            resetTestingModule();
            preventAngularFromResetting();
            TestBed.configureTestingModule(moduleDef);
            await TestBed.compileComponents();

            // prevent Angular from resetting testing module
            TestBed.resetTestingModule = () => TestBed;
        })().then(done).catch(done.fail));

        afterAll(() => allowAngularToReset());
    };
}
