import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMoneyPageComponent } from './my-money-page.component';

describe('MyMoneyPageComponent', () => {
  let component: MyMoneyPageComponent;
  let fixture: ComponentFixture<MyMoneyPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyMoneyPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMoneyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
