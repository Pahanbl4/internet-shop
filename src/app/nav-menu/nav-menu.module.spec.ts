import { NavMenuModule } from './nav-menu.module';

describe('NavMenuModule', () => {
    let module: NavMenuModule;

    beforeEach(() => {
        module = new NavMenuModule();
    });

    it('should create an instance', () => {
        expect(module).toBeTruthy();
    });
});
