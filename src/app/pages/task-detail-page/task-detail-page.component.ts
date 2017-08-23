import { Component, OnInit, HostBinding } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Task, TaskRecord, User } from '../../types/task';
import { ConfigService } from '../../service/config.service';
import { slideInDownAnimation } from '../../app.animation';
@Component({
  selector: 'app-task-detail-page',
  templateUrl: './task-detail-page.component.html',
  styleUrls: ['./task-detail-page.component.css'],
  animations: [slideInDownAnimation]
})
export class TaskDetailPageComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';


  task: Task = { createDt: new Date(), title: '', totalMoney: 0, shareMoney: 0, imageUrl: '', fee: 0, clickNum: 0, content: '' };
  taskId: string;
  parent: string;
  isCover: boolean = false;
  taskRecord: TaskRecord;
  errorMsg: string;
  showDetail: boolean = false;
  user: User;
  shareUserId;
  constructor(public config: ConfigService, public safe: DomSanitizer) {
    this.taskId = this.config.route.snapshot.queryParams.taskId;
    // this.parent = this.config.route.snapshot.queryParams.parent || this.config.route.snapshot.queryParams.shareUserId;

    this.shareUserId = this.config.route.snapshot.queryParams.shareUserId;

    if (this.shareUserId) {
      // alert(this.shareUserId);
      this.asyncUser();
    }

    if (this.config.user) {
      this.user = this.config.user;
    }



  }
  async asyncUser() {

    if (this.shareUserId) {
      // alert('navagate true user')
      this.config.user = await this.config.Get('/share.user.go?_id=' + this.shareUserId);
      this.config.router.navigateByUrl(`/share/taskDetail?taskId=${this.taskId}&parent=${this.shareUserId}`);


    }


  }

  async ngOnInit() {
    await this.asyncUser();
    await this.getTaskById();
    await this.wxShare();
    // await this.taskDetail();
  }
  async taskDetail() {

    let result: { valide: boolean, data?: TaskRecord, msg?: string } = await this.config.Post('/share.taskDetail.go', { taskId: this.taskId, parent: this.shareUserId, userId: this.shareUserId });
    if (result.valide) {
      this.taskRecord = result.data;
      console.log(this.taskRecord);
    } else {
      this.errorMsg = result.msg;
    }
  }

  async getTaskById() {
    let task = await this.config.Get('/share.task.go?_id=' + this.taskId);
    task.websiteUrl = this.safe.bypassSecurityTrustResourceUrl(task.websiteUrl);
    this.task = task;
  }

  async   wxShare() {
    let config = await this.config.getJSSDKConfig();
    window['cover'] = () => this.isCover = true;
    window['noCover'] = () => this.isCover = false;

    wx.config(config);
    wx.ready(() => {
      this.config.shareTimeline({ title: this.task.title, desc: this.task.content, imageUrl: this.task.imageUrl });
      this.config.shareAppMessage({ title: this.task.title, desc: this.task.content, imageUrl: this.task.imageUrl });

    })
  }
}

