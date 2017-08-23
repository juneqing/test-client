import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'rxjs/add/operator/toPromise';

import { HttpModule } from '@angular/http';

import { ConfigService } from './service/config.service';
import { AppComponent } from './app.component';
import { SharePageComponent } from './pages/share-page/share-page.component';
import { IndexPageComponent } from './pages/index-page/index-page.component';
import { TaskDetailPageComponent } from './pages/task-detail-page/task-detail-page.component';
import { PersonCenterPageComponent } from './pages/person-center-page/person-center-page.component';
import { MoneyPipe } from './pipes/money.pipe';
import { MyMoneyPageComponent } from './pages/my-money-page/my-money-page.component';
import { RecruitStudentPageComponent } from './pages/recruit-student-page/recruit-student-page.component';
import { GetMoneyRecordPageComponent } from './pages/get-money-record-page/get-money-record-page.component';
import { MoneyLogPageComponent } from './pages/money-log-page/money-log-page.component';
import { GetMoneyPageComponent } from './pages/get-money-page/get-money-page.component';
import { FansMoneyPageComponent } from './pages/fans-money-page/fans-money-page.component';
import { GuidePageComponent } from './pages/guide-page/guide-page.component';
import { FullInfoPageComponent } from './pages/full-info-page/full-info-page.component';
import { ShopCenterPageComponent } from './pages/shop-center-page/shop-center-page.component';
import { PublishTaskPageComponent } from './pages/publish-task-page/publish-task-page.component';
import { TaskListPageComponent } from './pages/task-list-page/task-list-page.component';


@NgModule({
  declarations: [
    AppComponent,
    SharePageComponent,
    IndexPageComponent,
    TaskDetailPageComponent,
    PersonCenterPageComponent,
    MoneyPipe,
    MyMoneyPageComponent,
    RecruitStudentPageComponent,
    GetMoneyRecordPageComponent,
    MoneyLogPageComponent,
    GetMoneyPageComponent,
    FansMoneyPageComponent,
    GuidePageComponent,
    FullInfoPageComponent,
    ShopCenterPageComponent,
    PublishTaskPageComponent,
    TaskListPageComponent,

  ],
  imports: [
    BrowserModule,
    // FormsModule,
    RouterModule.forRoot([{
      path: 'share', component: SharePageComponent,
      children: [
        { path: 'index', component: IndexPageComponent },
        { path: 'taskDetail', component: TaskDetailPageComponent },
        { path: 'person-center', component: PersonCenterPageComponent },
        { path: 'myMoney', component: MyMoneyPageComponent },
        { path: 'recruit-student', component: RecruitStudentPageComponent },
        { path: 'get-money-record', component: GetMoneyRecordPageComponent },
        { path: 'money-log', component: MoneyLogPageComponent },
        { path: 'fans-money', component: FansMoneyPageComponent },
        { path: 'getMoney', component: GetMoneyPageComponent },
        { path: 'guide', component: GuidePageComponent },
        { path: 'full-info', component: FullInfoPageComponent },
        { path: 'shop-center', component: ShopCenterPageComponent },
        { path: 'publish-task', component: PublishTaskPageComponent },
        { path: 'task-list', component: TaskListPageComponent }
      ]
    }]),
    HttpModule,
    BrowserAnimationsModule

  ],
  providers: [ConfigService, MoneyPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }


window['exitFullScreen'] = function () {
  if (document.fullscreenElement) {
    document.exitFullscreen()
  } else {
    document.documentElement.requestFullscreen()
  }
}