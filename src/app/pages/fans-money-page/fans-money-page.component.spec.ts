import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FansMoneyPageComponent } from './fans-money-page.component';

describe('FansMoneyPageComponent', () => {
  let component: FansMoneyPageComponent;
  let fixture: ComponentFixture<FansMoneyPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FansMoneyPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FansMoneyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
