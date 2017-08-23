import { SafeUrl } from '@angular/platform-browser';
export interface Task {
    active?: boolean;
    _id?: string;
    title: string;
    imageUrl: string;
    createDt?: Date;
    shareMoney: number;
    fee: number;
    totalMoney?: number;
    clickNum?: number;
    content: string;
    publisher?: string;
    websiteUrl?: string | SafeUrl;
    bannerImg?: string;
}

export interface Banner {
    _id?: string;
    createDt: Date;
    task: Task;
    bannerImg;
    imageUrl;


}
export interface TaskTag {
    _id?: string;
    name: string;
}

export interface User {
    _id?: string;
    headimgurl: string;
    openid: string;
    nickname: string;
    todayMoney: number;
    totalMoney: number;
    isFinish: boolean;
    todayStudent: number;
    totalStudent: number;
    phone: string;
    password: string;
    rePassword: string;


}


export interface GetMoneyRecord {
    _id?: string;
    createDt?: Date;
    money?: number;

}
export interface TaskRecord {
    task?: any;
    shareDetail: { user: string, money: number }[];
    createDt?: Date;
}