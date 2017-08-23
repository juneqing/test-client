import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetMoneyPageComponent } from './get-money-page.component';

describe('GetMoneyPageComponent', () => {
  let component: GetMoneyPageComponent;
  let fixture: ComponentFixture<GetMoneyPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetMoneyPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetMoneyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
