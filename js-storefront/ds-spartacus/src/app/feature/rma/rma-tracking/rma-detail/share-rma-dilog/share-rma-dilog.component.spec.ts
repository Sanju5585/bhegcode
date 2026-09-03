import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareRmaDilogComponent } from './share-rma-dilog.component';

describe('ShareRmaDilogComponent', () => {
  let component: ShareRmaDilogComponent;
  let fixture: ComponentFixture<ShareRmaDilogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShareRmaDilogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareRmaDilogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
