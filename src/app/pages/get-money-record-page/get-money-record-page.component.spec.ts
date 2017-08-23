import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetMoneyRecordPageComponent } from './get-money-record-page.component';

describe('GetMoneyRecordPageComponent', () => {
  let component: GetMoneyRecordPageComponent;
  let fixture: ComponentFixture<GetMoneyRecordPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetMoneyRecordPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetMoneyRecordPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
