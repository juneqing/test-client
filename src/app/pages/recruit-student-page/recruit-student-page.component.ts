import { Component, OnInit, HostBinding } from '@angular/core';
import { ConfigService } from '../../service/config.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { slideInDownAnimation } from '../../app.animation';

import { User } from '../../types/task';
@Component({
  selector: 'app-recruit-student-page',
  templateUrl: './recruit-student-page.component.html',
  styleUrls: ['./recruit-student-page.component.css'],
  animations: [slideInDownAnimation]
})
export class RecruitStudentPageComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';
  user: User;
  studentCodeUrl: string;
  codeShowing: boolean = false;
  qrcodeImage: SafeResourceUrl = '';
  constructor(public config: ConfigService, public safeDom: DomSanitizer) {
    if (this.config.user) {
      this.user = this.config.user;

    }
  }

  async ngOnInit() {
    await this.getAuthUrl();
    await this.qrcode();

  }
  async getAuthUrl() {
    this.studentCodeUrl = await this.config.Get('/share.studentCode.go?userId=' + this.user._id);
    // alert(this.studentCodeUrl)
  }
  toggleQrcode() {

    this.codeShowing = !this.codeShowing;
  }
  async qrcode() {
    let base64 = await this.config.Post('/api.url2Qrcode.go', { url: this.studentCodeUrl });
    this.qrcodeImage = this.safeDom.bypassSecurityTrustResourceUrl(base64);


  }


}
