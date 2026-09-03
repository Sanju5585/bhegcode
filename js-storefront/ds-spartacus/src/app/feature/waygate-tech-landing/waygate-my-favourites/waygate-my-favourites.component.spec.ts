import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaygateMyFavouritesComponent } from './waygate-my-favourites.component';

describe('WaygateMyFavouritesComponent', () => {
  let component: WaygateMyFavouritesComponent;
  let fixture: ComponentFixture<WaygateMyFavouritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WaygateMyFavouritesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WaygateMyFavouritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
