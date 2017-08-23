import { Component, OnInit, HostBinding } from '@angular/core';
import { User } from '../../types/task';
import { ConfigService } from '../../service/config.service';
import { slideInDownAnimation } from '../../app.animation';

@Component({
  selector: 'app-get-money-page',
  templateUrl: './get-money-page.component.html',
  styleUrls: ['./get-money-page.component.css'],
  animations: [slideInDownAnimation]
})
export class GetMoneyPageComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';
  msg: string
  user: User;
  money: number = 0;
  constructor(public config: ConfigService) {
    this.config.user ? this.user = this.config.user : '';

  }

  ngOnInit() {
    if (!this.config.user.isFinish) {
      this.config.router.navigateByUrl('/share/full-info');

    }
  }

  async getMoneyRequest() {
    let result = await this.config.Post('/share.getMoney.go', { userId: this.user._id, money: this.money });
    this.user = await await this.config.syncUser();
    this.msg = result.msg;
  }


}
