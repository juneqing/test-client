import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyLogPageComponent } from './money-log-page.component';

describe('MoneyLogPageComponent', () => {
  let component: MoneyLogPageComponent;
  let fixture: ComponentFixture<MoneyLogPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoneyLogPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneyLogPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
