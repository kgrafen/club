import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserImageGalleryComponent } from './user-image-gallery.component';

describe('UserImageGalleryComponent', () => {
  let component: UserImageGalleryComponent;
  let fixture: ComponentFixture<UserImageGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserImageGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserImageGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
