import { Component, OnInit, HostBinding } from '@angular/core';
import { User } from '../../types/task';
import { ConfigService } from '../../service/config.service';
import { slideInDownAnimation } from '../../app.animation';

@Component({
  selector: 'app-fans-money-page',
  templateUrl: './fans-money-page.component.html',
  styleUrls: ['./fans-money-page.component.css'],
  animations: [slideInDownAnimation]
})
export class FansMoneyPageComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';
  user: User;
  allMoney = 1;
  allMyMoney = 1;
  level1 = { money: 0, num: 0 }
  level2 = { money: 0, num: 0 }
  level3 = { money: 0, num: 0 }


  constructor(public config: ConfigService) {
    this.user = this.config.user;
    this.getFansMoney();
  }
  async getFansMoney() {
    let result = await this.config.Get('/share.fansMoney.go?userId=' + this.user._id);
    this.allMoney = result.allMoney;
    this.allMyMoney = result.allMyMoney;
    this.level1 = result.level1
    this.level2 = result.level2
    this.level3 = result.level3

  }

  ngOnInit() {
  }

}
