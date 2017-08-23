import { Component, HostBinding } from '@angular/core';
import { User } from './types/task';
import { ConfigService } from './service/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  constructor(public config: ConfigService) {

  }

  async ngOnInit() {
    this.config.route.paramMap.forEach(url => console.log(url));



  }

}
