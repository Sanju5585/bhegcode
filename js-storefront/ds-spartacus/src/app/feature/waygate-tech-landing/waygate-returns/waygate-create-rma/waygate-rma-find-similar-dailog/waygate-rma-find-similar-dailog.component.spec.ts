import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaygateRmaFindSimilarDailogComponent } from './waygate-rma-find-similar-dailog.component';

describe('WaygateRmaFindSimilarDailogComponent', () => {
  let component: WaygateRmaFindSimilarDailogComponent;
  let fixture: ComponentFixture<WaygateRmaFindSimilarDailogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WaygateRmaFindSimilarDailogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaygateRmaFindSimilarDailogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
