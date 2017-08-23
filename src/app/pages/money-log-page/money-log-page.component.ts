import { Component, OnInit, HostBinding } from '@angular/core';
import { User, TaskRecord } from '../../types/task';
import { ConfigService } from '../../service/config.service';
import { slideInDownAnimation } from '../../app.animation';

@Component({
  selector: 'app-money-log-page',
  templateUrl: './money-log-page.component.html',
  styleUrls: ['./money-log-page.component.css'],
  animations: [slideInDownAnimation]
})
export class MoneyLogPageComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';
  user: User;
  taskRecords: TaskRecord[] = [];
  constructor(public config: ConfigService) {
    if (this.config.user) {
      this.user = this.config.user;
      this.getTaskRecordByUserId();
    }
  }

  ngOnInit() {
  }

  async getTaskRecordByUserId() {
    this.taskRecords = await this.config.Get('/share.taskRecord.go?userId=' + this.user._id);
  }

}
