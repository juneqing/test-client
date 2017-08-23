import { Component, OnInit, HostBinding } from '@angular/core';
import { User } from '../../types/task';
import { ConfigService } from '../../service/config.service';
import { slideInDownAnimation } from '../../app.animation';

@Component({
  selector: 'app-full-info-page',
  templateUrl: './full-info-page.component.html',
  styleUrls: ['./full-info-page.component.css'],
  animations: [slideInDownAnimation]
})
export class FullInfoPageComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';
  user: User;
  constructor(public config: ConfigService) {
    this.config.syncUser();

    this.user = this.config.user;


  }

  ngOnInit() {

  }
  async fullInfo() {
    if (this.user.password == this.user.rePassword) {

      let result = await this.config.Post('/share.fullInfo.go', {
        userId: this.user._id,
        phone: this.user.phone,
        password: this.user.password
      });
      this.config.router.navigateByUrl('/share/person-center');
    } else {
      alert('两次密码不一致');
    }
  }


}
