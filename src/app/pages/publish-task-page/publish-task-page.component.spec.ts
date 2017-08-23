import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishTaskPageComponent } from './publish-task-page.component';

describe('PublishTaskPageComponent', () => {
  let component: PublishTaskPageComponent;
  let fixture: ComponentFixture<PublishTaskPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublishTaskPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishTaskPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
