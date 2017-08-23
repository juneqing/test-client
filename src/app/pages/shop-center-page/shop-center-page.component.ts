import { Component, OnInit, HostBinding } from '@angular/core';
import { ConfigService } from '../../service/config.service';
import { User } from '../../types/task';
import { slideInDownAnimation } from '../../app.animation';

@Component({
  selector: 'app-shop-center-page',
  templateUrl: './shop-center-page.component.html',
  styleUrls: ['./shop-center-page.component.css'],
  animations: [slideInDownAnimation]
})
export class ShopCenterPageComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';
  allTaskNum = 0;
  activeNum = 0;
  totalFee = 0;
  totalClickNum = 0;
  user: User
  constructor(public config: ConfigService) {
    this.user = this.config.user;
  }

  ngOnInit() {
  }

  async getAdvertInfo() {
    let result = await this.config.Get('/share.advertInfo.go?_id=' + this.config.user._id);
    this.allTaskNum = result.allTaskNum;
    this.activeNum = result.activeNum;
    this.totalFee = result.activeNum;
    this.totalClickNum = result.totalClickNum;
  }
}
