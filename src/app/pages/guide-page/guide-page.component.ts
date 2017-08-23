import { Component, OnInit, HostBinding } from '@angular/core';
import { slideInDownAnimation } from '../../app.animation';

@Component({
  selector: 'app-guide-page',
  templateUrl: './guide-page.component.html',
  styleUrls: ['./guide-page.component.css'],
  animations: [slideInDownAnimation]
})
export class GuidePageComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';
  constructor() { }

  ngOnInit() {
  }

}
