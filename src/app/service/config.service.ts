import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http, RequestOptionsArgs, } from '@angular/http';
import { User } from '../types/task';
declare var WeixinJSBridge: any;
@Injectable()
export class ConfigService {
    crossDomain = true;
    jsApiList = ['checkJsApi',
        'onMenuShareTimeline', //分享到朋友圈
        'onMenuShareAppMessage', //分享给朋友
        'onMenuShareQQ', //分享到QQ
        'onMenuShareWeibo', //分享到腾讯微博
        'onMenuShareQZone', //分享到QQ空间
        'hideMenuItems',
        'showMenuItems',
        'hideAllNonBaseMenuItem',
        'showAllNonBaseMenuItem',
        'translateVoice',
        'startRecord',
        'stopRecord',
        'onVoiceRecordEnd',
        'playVoice',
        'onVoicePlayEnd',
        'pauseVoice',
        'stopVoice',
        'uploadVoice',
        'downloadVoice',
        'chooseImage',
        'previewImage',
        'uploadImage',
        'downloadImage',
        'getNetworkType',
        'openLocation',
        'getLocation',
        'hideOptionMenu',
        'showOptionMenu',
        'closeWindow',
        'scanQRCode',
        'chooseWXPay',
        'openProductSpecificView',
        'addCard',
        'chooseCard',
        'openCard'
    ];
    serverIp = 'http://wq8.youqulexiang.com';


    get advert() {
        var admin = localStorage.getItem('advert');
        return admin ? JSON.parse(admin) : {};
    }
    set advert(advert: Object) {
        localStorage.setItem('advert', JSON.stringify(advert));

    }


    get user() {
        var user = localStorage.getItem('user');
        return user ? JSON.parse(user) : false;

    }
    set user(obj: User) {
        localStorage.setItem('user', JSON.stringify(obj));
    }
    clearUser() {
        localStorage.clear();
    }
    /**同步用户信息 */
    async syncUser(openid?: string): Promise<User> {
        if (openid) {
            this.user = await this.Get('/share.user.go?openid=' + openid);

            return this.user;

        } else {
            if (this.user) {
                this.user = await this.Get('/share.user.go?openid=' + this.user.openid);
                return this.user
            } else {
                alert('user not found')
            }
        }
    }

    Get(url: string, options?: RequestOptionsArgs) {
        return this.http.get(`${this.serverIp}${url}`, options).toPromise().then(rtn => { let result = rtn.json(); return result.ok ? result.data : alert(result.data); })
    }
    Post(url: string, body?: any, options?: RequestOptionsArgs) {
        return this.http.post(`${this.serverIp}${url}`, body, options).toPromise().then(rtn => { let result = rtn.json(); return result.ok ? result.data : alert(result.data); });
    }

    Delete(url: string, options?: RequestOptionsArgs) {
        return this.http.delete(`${this.serverIp}${url}`, options).toPromise().then(rtn => { let result = rtn.json(); return result.ok ? result.data : alert(result.data); });
    }

    Put(url: string, body, options?: RequestOptionsArgs) {
        return this.http.put(`${this.serverIp}${url}`, body, options).toPromise().then(rtn => { let result = rtn.json(); return result.ok ? result.data : alert(result.data); });
    }

    async shareTimeline(opt: { title: string, desc: string, link?: string, imageUrl: string }) {
        opt.link = opt.link ? opt.link : location.href;


        wx.onMenuShareTimeline({
            title: opt.title, // 分享标题
            desc: opt.desc, // 分享描述
            link: opt.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: opt.imageUrl, // 分享图标
            type: '', // 分享类型,music、video或link，不填默认为link
            dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
            success: function () {
                alert('分享朋友圈成功')
                window['myFrame'].playVideo();
                // 用户确认分享后执行的回调函数
                // resolve(true)

            },
            cancel: function () {
                //分享失败
                alert('分享朋友圈失败');
                // 用户取消分享后执行的回调函数

            }
        });


    }

    payMoney(payargs) {
        return new Promise(resolve => {
            WeixinJSBridge.invoke('getBrandWCPayRequest', payargs, function (res) {
                if (res.err_msg == "get_brand_wcpay_request:ok") {
                    resolve(true)
                    // 这里可以跳转到订单完成页面向用户展示
                } else {
                    resolve(false);
                }
            });

        })

    };
    async getJSSDKConfig() {
        let config = await this.Post('/wechat.jssdk.go', { url: location.href });
        // console.log(config);
        config.debug = false;
        config.jsApiList = this.jsApiList;
        return config;
    }
    async shareAppMessage(opt: { title: string, desc: string, link?: string, imageUrl: string }) {
        opt.link = opt.link ? opt.link : location.href;

        wx.onMenuShareAppMessage({
            title: opt.title, // 分享标题
            desc: opt.desc, // 分享描述
            link: opt.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: opt.imageUrl, // 分享图标
            type: '', // 分享类型,music、video或link，不填默认为link
            dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
            success: function () {
                alert('分享朋友成功')
                window['myFrame'].playVideo();

            },
            cancel: function () {
                alert(' app error')
            }
        });



    }





    /**
     * 
     * @param url   file
    * 
     * @param outputFormat string
     * 
     * 将文件转成base64
     */
    compressBase64(base64: string, maxsize: number = 40000, outputFormat = "image/png"): Promise<string> {

        return new Promise((resolve, reject) => {
            var canvas = document.createElement('canvas');
            var ctx = canvas.getContext('2d');
            var img = new Image;
            img.crossOrigin = 'Anonymous';
            img.onload = function () {
                var width = img.width;
                var height = img.height;
                let compress = 1;
                let rate = 1
                if (width * height > maxsize) { rate = Math.ceil(width * height / 40000); }
                compress = 1 / rate;
                canvas.width = width * compress;
                canvas.height = height * compress;
                ctx.drawImage(img, 0, 0, width, height, 0, 0, width * compress, height * compress);
                let compressData = canvas.toDataURL(outputFormat)
                resolve(compressData);
            };
            img.src = base64;
        });
    }

    convertFileToBase64(file: File): Promise<string> {
        let reader = new FileReader();
        return new Promise((resolve, reject) => {
            reader.onload = (e) => {
                let base64: string = <string>e.target['result']
                resolve(base64);
            }
            reader.readAsDataURL(file);
        });

    }




    constructor(public router: Router, public route: ActivatedRoute, public http: Http) { }

}
