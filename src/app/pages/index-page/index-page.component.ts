import { Component, OnInit, HostListener, HostBinding } from '@angular/core';
import { ConfigService } from '../../service/config.service';
import { Task, Banner, TaskTag, User } from '../../types/task';
import { slideInDownAnimation } from '../../app.animation';
declare var myFrame: any;
@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.css'],
  animations: [slideInDownAnimation]
})
export class IndexPageComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';

  tasks: Task[] = [];
  banners: Banner[] = [];
  taskTags: TaskTag[] = [];
  selectedTaskTag = '';
  showingBanner = 0;
  openid: string;
  user: User;
  timmer;
  page = 0;
  loading = false;
  @HostListener('window:scroll')
  loadTasks() {
    let bottom = document.body.clientHeight - window.document.body.scrollTop - screen.height;

    if (bottom < 60) {
      this.loading = true;
      if (this.timmer) {
        clearTimeout(this.timmer);
      }
      this.timmer = setTimeout(async () => {
        await this.getTasks();
        this.loading = false;
      }, 3000);
    } else {
    }


  }

  async getTasks(taskTag?: string) {
    // 刷新
    if (taskTag) {
      this.page = 0;
      this.selectedTaskTag = taskTag;
      this.tasks = await this.config.Get('/share.tasks.go?page=0&taskTag=' + taskTag);
    } else {

      if (this.selectedTaskTag) {
        this.page++;

        var tasks = await this.config.Get(`/share.tasks.go?page=${this.page}&taskTag=${this.selectedTaskTag}`);
        this.tasks.push(...tasks);

      } else {
        this.page++;
        let tasks = await this.config.Get(`/share.tasks.go?page=${this.page}`);
        this.tasks.push(...tasks);

      }
    }

  }
  async loadDefaultTakss() {
    this.page = 0;
    this.tasks = this.tasks = await this.config.Get(`/share.tasks.go?page=${this.page}`);

  }


  constructor(public config: ConfigService) {

    this.checkUser();
  }
  async checkUser() {
    this.openid = this.config.route.snapshot.queryParams.openid
    if (this.openid) {
      this.config.clearUser();
      await this.getUser(this.openid)

    }
    else {
      this.user = this.config.user;
      this.openid = this.config.user.openid;
    }



    await this.getTaskListAndBannerList();


  }


  ngOnInit() {
  }

  async getUser(openid: string) {
    let user = await this.config.Get('/share.user.go?openid=' + this.openid);
    if (user) {
      this.config.user = user;
      this.user = user;

    } else {
      alert('用户不存在');
    }

  }

  async getTaskListAndBannerList() {
    let result: { tasks: Task[], banners: Banner[], taskTags: TaskTag[] } = await this.config.Get('/share.index.go')
    this.banners = result.banners;
    this.taskTags = result.taskTags;
    this.tasks = result.tasks;
    this.carousel();
  }


  carousel() {
    setInterval(() => {

      if (this.showingBanner < this.banners.length - 1) {
        this.showingBanner++;
      } else {
        this.showingBanner = 0;
      }

    }, 3000);

  }




}
