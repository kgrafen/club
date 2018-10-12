import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWallPostComponent } from './create-wall-post.component';

describe('CreateWallPostComponent', () => {
  let component: CreateWallPostComponent;
  let fixture: ComponentFixture<CreateWallPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateWallPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateWallPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
