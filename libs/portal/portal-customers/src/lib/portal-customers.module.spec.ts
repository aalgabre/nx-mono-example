import { async, TestBed } from '@angular/core/testing';
import { PortalCustomersModule } from './portal-customers.module';

describe('PortalCustomersModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PortalCustomersModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PortalCustomersModule).toBeDefined();
  });
});
