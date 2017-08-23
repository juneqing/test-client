import { Component, OnInit, HostBinding } from '@angular/core';
import { User, Task, TaskTag } from '../../types/task';
import { ConfigService } from '../../service/config.service';
import { slideInDownAnimation } from '../../app.animation';

@Component({
  selector: 'app-publish-task-page',
  templateUrl: './publish-task-page.component.html',
  styleUrls: ['./publish-task-page.component.css'],
  animations: [slideInDownAnimation]
})
export class PublishTaskPageComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';
  taskTags: TaskTag[] = [];
  selectedTaskTag: TaskTag;

  newTask: Task = { title: '', fee: 2, shareMoney: 0.2, websiteUrl: '', imageUrl: '', content: '' }
  constructor(public config: ConfigService) { }

  ngOnInit() {
    this.getTaskTag();
  }

  async getTaskTag() {
    this.taskTags = await this.config.Get('/share.taskTag-list.go');
    this.selectedTaskTag = this.taskTags[0];

  }
  async previewImage(file: File) {
    let base64 = await this.config.convertFileToBase64(file);
    let compressData = await this.config.compressBase64(base64);
    let url = await this.config.Post('/api.uploadBase64.go', { base64: compressData });
    this.newTask.imageUrl = url;

  }
  async requestPay() {
    console.log(this.newTask);
    let payargs = await this.config.Post('/share.payTaskMoney.go', { userId: this.config.user._id, fee: this.newTask.fee });
    let isPay = await this.config.payMoney(payargs);
    if (isPay) {
      this.newTask.publisher = this.config.user._id;
      await this.pubishTask(this.newTask);
      alert('支付成功,任务已经发布');
    } else {
      alert('支付失败');
    }

  }

  async pubishTask(task: Task) {
    return await this.config.Post('/share.publishTask.go', task)
  }
}
