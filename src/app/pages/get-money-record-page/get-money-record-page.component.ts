import { Component, OnInit, HostBinding } from '@angular/core';
import { User, GetMoneyRecord } from '../../types/task';
import { ConfigService } from '../../service/config.service';
import { slideInDownAnimation } from '../../app.animation';

@Component({
  selector: 'app-get-money-record-page',
  templateUrl: './get-money-record-page.component.html',
  styleUrls: ['./get-money-record-page.component.css'],
  animations: [slideInDownAnimation]
})
export class GetMoneyRecordPageComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';
  user: User;
  getMoneyRecords: GetMoneyRecord[] = []
  constructor(public config: ConfigService) {
    if (this.config.user) {
      this.user = this.config.user;
      this.getMoneyRecordsByOpenid();
    }
  }

  ngOnInit() {
  }
  async getMoneyRecordsByOpenid() {
    this.getMoneyRecords = await this.config.Get('/share.getMoneyRecord.go?openid=' + this.user.openid);
  }

}
