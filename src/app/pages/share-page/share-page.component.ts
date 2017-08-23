import { Component, OnInit, HostBinding } from '@angular/core';
import { ConfigService } from '../../service/config.service';

@Component({
  selector: 'app-share-page',
  templateUrl: './share-page.component.html',
  styleUrls: ['./share-page.component.css'],
})
export class SharePageComponent implements OnInit {

  path = '';

  constructor(public config: ConfigService) {
    this.getActivePath();

  }

  ngOnInit() {


  }


  getActivePath() {





  }
}
