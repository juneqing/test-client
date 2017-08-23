import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullInfoPageComponent } from './full-info-page.component';

describe('FullInfoPageComponent', () => {
  let component: FullInfoPageComponent;
  let fixture: ComponentFixture<FullInfoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullInfoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
