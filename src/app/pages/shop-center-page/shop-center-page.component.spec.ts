import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopCenterPageComponent } from './shop-center-page.component';

describe('ShopCenterPageComponent', () => {
  let component: ShopCenterPageComponent;
  let fixture: ComponentFixture<ShopCenterPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopCenterPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopCenterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
