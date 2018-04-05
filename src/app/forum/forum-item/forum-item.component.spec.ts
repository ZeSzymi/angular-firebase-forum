import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumItemComponent } from './forum-item.component';

describe('ForumItemComponent', () => {
  let component: ForumItemComponent;
  let fixture: ComponentFixture<ForumItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
