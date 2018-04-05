import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTopicComponent } from './admin-topic.component';

describe('AdminTopicComponent', () => {
  let component: AdminTopicComponent;
  let fixture: ComponentFixture<AdminTopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTopicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
