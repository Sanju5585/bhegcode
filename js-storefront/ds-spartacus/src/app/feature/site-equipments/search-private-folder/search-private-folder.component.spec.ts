import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPrivateFolderComponent } from './search-private-folder.component';

describe('SearchPrivateFolderComponent', () => {
  let component: SearchPrivateFolderComponent;
  let fixture: ComponentFixture<SearchPrivateFolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchPrivateFolderComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPrivateFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
