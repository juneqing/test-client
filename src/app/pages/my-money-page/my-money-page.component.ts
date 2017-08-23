import { Component, OnInit, HostBinding } from '@angular/core';
import { User } from '../../types/task';
import { ConfigService } from '../../service/config.service';
import { slideInDownAnimation } from '../../app.animation';
@Component({
  selector: 'app-my-money-page',
  templateUrl: './my-money-page.component.html',
  styleUrls: ['./my-money-page.component.css'],
  animations: [slideInDownAnimation]
})
export class MyMoneyPageComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';
  user: User;
  money: number = 0;
  constructor(public config: ConfigService) {
    if (this.config.user) {
      this.user = this.config.user;
    } else {
      alert('no user');
    }
  }

  ngOnInit() {
  }

}
