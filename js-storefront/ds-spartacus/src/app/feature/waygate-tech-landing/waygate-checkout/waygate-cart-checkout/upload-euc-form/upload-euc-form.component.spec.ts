import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadEucFormComponent } from './upload-euc-form.component';

describe('UploadEucFormComponent', () => {
  let component: UploadEucFormComponent;
  let fixture: ComponentFixture<UploadEucFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UploadEucFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadEucFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
