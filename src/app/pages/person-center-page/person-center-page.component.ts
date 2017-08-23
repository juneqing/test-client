import { Component, OnInit, HostBinding } from '@angular/core';
import { User } from '../../types/task';
import { ConfigService } from '../../service/config.service';
import { slideInDownAnimation } from '../../app.animation';

@Component({
  selector: 'app-person-center-page',
  templateUrl: './person-center-page.component.html',
  styleUrls: ['./person-center-page.component.css'],
  animations: [slideInDownAnimation]
})
export class PersonCenterPageComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';
  user: User;
  constructor(public config: ConfigService) {
    if (config.user) {
      this.user = config.user;
      this.syncUser();
    }
  }

  ngOnInit() {
  }

  async syncUser() {
    this.user = await this.config.syncUser();
    console.log(this.user);
  }


}
