import { async, TestBed } from '@angular/core/testing';
import { PortalShellModule } from './portal-shell.module';

describe('PortalShellModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PortalShellModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PortalShellModule).toBeDefined();
  });
});
