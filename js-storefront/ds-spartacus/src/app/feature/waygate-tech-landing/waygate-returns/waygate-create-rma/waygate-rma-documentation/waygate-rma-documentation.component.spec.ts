import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaygateRmaDocumentationComponent } from './waygate-rma-documentation.component';

describe('WaygateRmaDocumentationComponent', () => {
  let component: WaygateRmaDocumentationComponent;
  let fixture: ComponentFixture<WaygateRmaDocumentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WaygateRmaDocumentationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaygateRmaDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
