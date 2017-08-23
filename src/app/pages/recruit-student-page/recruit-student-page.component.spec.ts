import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruitStudentPageComponent } from './recruit-student-page.component';

describe('RecruitStudentPageComponent', () => {
  let component: RecruitStudentPageComponent;
  let fixture: ComponentFixture<RecruitStudentPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecruitStudentPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruitStudentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
