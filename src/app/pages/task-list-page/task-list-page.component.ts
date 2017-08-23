import { Component, OnInit, HostBinding } from '@angular/core';
import { Task, TaskTag } from '../../types/task';
import { ConfigService } from '../../service/config.service';
import { slideInDownAnimation } from '../../app.animation';

@Component({
  selector: 'app-task-list-page',
  templateUrl: './task-list-page.component.html',
  styleUrls: ['./task-list-page.component.css'],
  animations: [slideInDownAnimation]
})
export class TaskListPageComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';
  tasks: Task[] = [];
  active: boolean = false;
  constructor(public config: ConfigService) {
    this.active = !!this.config.route.snapshot.queryParams.active;
  }

  ngOnInit() {
    this.getAdvertTasks();
  }

  async getAdvertTasks() {
    this.tasks = await this.config.Get('/share.advertTasks.go?userId=' + this.config.user._id + '&active=' + this.active);
  }

}
