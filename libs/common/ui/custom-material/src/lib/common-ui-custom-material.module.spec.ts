import { async, TestBed } from '@angular/core/testing';
import { CommonUiCustomMaterialModule } from './common-ui-custom-material.module';

describe('CommonUiCustomMaterialModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonUiCustomMaterialModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CommonUiCustomMaterialModule).toBeDefined();
  });
});
