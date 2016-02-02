/**
 * @api {get} /site/config/info   siteinfo
 * @apiVersion 0.3.0
 * @apiName config
 * @apiGroup Config
 * @apiPermission none
 *
 * @apiDescription 获取配置
 *
 * @apiSuccess  {String} about         app简介.
 * @apiSuccess  {number} anonymous     是否支持游客 0不支持，1支持.
 * @apiSuccess  {String} deviceId      设备ID.
 * @apiSuccess  {number} httpsPort     端口号.
 * @apiSuccess  {String} logo          app logo图片.
 * @apiSuccess  {number} menus         视频路径.
 * @apiSuccess  {number} mgatehost     网关域名.
 * @apiSuccess  {number} payment_apple_enabled  IOS是否支持支付 1支持，0不支持.
 * @apiSuccess  {number} payment_enabled    Android是否支持支付 1支持，0不支持.
 * @apiSuccess  {number} schoolId       学院ID.
 * @apiSuccess  {String} siteName       网站名字.
 * @apiSuccess  {String} splash1        引导页第一个图片.
 * @apiSuccess  {String} splash2        引导页第二个图片.
 * @apiSuccess  {String} splash3        引导页第三个图片.
 * @apiSuccess  {String} splash4        引导页第四个图片.
 * @apiSuccess  {String} splash5        引导页第五个图片.
 * @apiSuccess  {String} uitype         app首页网格格式.
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * {
 *  about = "fdsfdsdfs"
 *  anonymous = 1;
 *  deviceId = "";
 *  httpsPort = 443;
 *  logo = "http://ke.5iketang.com/files/system/mobis-1439300037.png";
 *  menus =     {
 *  video = "course/videoCourse";
 *  };
 *  mgatehost = "proxy.5iketang.com:3014";
 *  "payment_apple_enabled" = 0;
 *  "payment_enabled" = 1;
 *  schoolId = 23;
 *  siteName = "5i\U8bfe\U5802-\U5728\U7ebf\U8bfe\U5802\U4e3a\U60a8\U6240\U9700";
 *  splash1 = "http://ke.5iketang.com/files/system/mobis-1448873662.jpg";
 *  splash2 = "http://ke.5iketang.com/files/system/mobis-1448873673.jpg";
 *  splash3 = "http://ke.5iketang.com/files/system/mobis-1448873682.jpg";
 *  splash4 = "http://ke.5iketang.com/files/system/mobis-1448873691.jpg";
 *  splash5 = "";
 *  uitype = circle4x2;
 * }
 */

function getConfig(){
    return;
}


/**
 * @api {get} /site/profile   siteprofile
 * @apiVersion 0.3.0
 * @apiName Config
 * @apiGroup Config
 * @apiPermission none
 *
 * @apiDescription 获取第三方库连接需要的参数
 *
 * @apiParam {String} key    随机字符串str.
 * @apiParam {String} token  用户token.
 * @apiParam {String} sign   随机字符串str,经base64(base64(str))得到的字符串.
 *
 * @apiSuccess  {String} downloadId         保利下载ID.
 * @apiSuccess  {String} downloadSecretkey     保利下载秘钥.
 * @apiSuccess  {String} im_appKey          im秘钥.
 * @apiSuccess  {String} im_password        im密码.
 * @apiSuccess  {String} im_portraitUri     im头像链接.
 * @apiSuccess  {String} im_userId          im成员id.
 * @apiSuccess  {String} im_userName        im成员名称.
 * @apiSuccess  {String} ms_accessToken     ms口令.
 * @apiSuccess  {String} ms_https_serverIp  ms服务器域名.
 * @apiSuccess  {String} ms_serverIp        ms服务器ip.
 * @apiSuccess  {String} privatekey         初始化保利引擎私钥.
 * @apiSuccess  {String} provider           视频服务提供者名称.
 * @apiSuccess  {String} readtoken          初始化保利引擎读token.
 * @apiSuccess  {String} url                保利服务器地址.
 * @apiSuccess  {String} userId             初始化保利引擎个人id.
 * @apiSuccess  {String} vid_appsign         app首页网格格式.
 * @apiSuccess  {String} writetoken         初始化保利引擎写token.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *  {
 * downloadId = 6f3bb5e6c5;
 * downloadSecretkey = d8b2802a926d4a3c9653dc701af06108;
 * "im_appKey" = tdrvipksr5gr5;
 * "im_password" = 01758420;
 * "im_portraitUri" = "https://ke.5iketang.com/files/user/2015/10-21/100828c129d0578725.jpg?3850.live419";
 * "im_token" = "yKN6/i0V+y4r7cUK4g2CbKebdZ3N9p5PmknEvH4AAty3RjCkdHzIl+EDGgUEzKUcViOCB0+GhnXxm/fpzpsGBA==";
 * "im_userId" = "127---23";
 * "im_userName" = 1221;
 * "ms_accessToken" = "ZGQzN2MwMjcyYTg2Zjk2MGEyZDU4Mjc0N2FjZmVlOTA4MjRiZmY5Zg==";
 * "ms_https_serverIp" = "proxy.5iketang.com";
 * "ms_serverIp" = "121.201.59.121:8080";
 * privatekey = BFfwPHDXoj;
 * provider = polyv;
 * readtoken = "EY1iLovxQm-foW8CazYSb-OAc7UVROY0";
 * url = "http://v.polyv.net/uc/services/rest";
 * userId = 6f3bb5e6c5;
 * "vid_appsign" = "";
 * writetoken = "v2JgCbBbp5Gp91W-mtbFkDrzIjbacCyM";
 * }
 */

function getProfile(){
    return;
}


/**
 * @api {get} /ims/user/online    useronline
 * @apiVersion 0.3.0
 * @apiName online
 * @apiGroup Message
 * @apiPermission none
 *
 * @apiDescription 通知im上线
 *
 * @apiParam {number} lessonId    课时id.
 * @apiParam {String} token  用户token.
 *
 * @apiSuccess  {String} result    成功返回OK.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * {
 *      result : "OK"
 * }
 */

function online(){
    return;
}

/**
 * @api {get} /ims/user/offline   useroffline
 * @apiVersion 0.3.0
 * @apiName offline
 * @apiGroup Message
 * @apiPermission none
 *
 * @apiDescription 通知im下线
 *
 * @apiParam {number} lessonId    课时id.
 * @apiParam {String} token  用户token.
 *
 * @apiSuccess  {String} result    成功返回OK.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * {
 *      result : "OK"
 * }
 */

function offline(){
    return;
}


/**
 * @api {get} /ims/user/send/message    message
 * @apiVersion 0.3.0
 * @apiName sendMessage
 * @apiGroup Message
 * @apiPermission none
 *
 * @apiDescription 发送im消息
 *
 * @apiParam {number} lessonId    课时id.
 * @apiParam {number} node_id     node.
 * @apiParam {number} status      im用户状态.
 * @apiParam {String} token       用户token.
 *
 *
 * @apiSuccess  {String} result    成功返回OK.
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK 
 * {
 *      result : "OK"
 * }
 */

function imUserSendMessage(){
    return;
}

/**
 * @api {get} /ims/user/get/token   imtoken
 * @apiVersion 0.3.0
 * @apiName getImToken
 * @apiGroup Message
 * @apiPermission none
 *
 * @apiDescription 获取IM token
 *
 * @apiParam {number} lessonId    课时id.
 * @apiParam {String} token       用户token.
 *
 *
 * @apiSuccess  {String} result    成功返回OK.
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * {
 *      result : "OK"
 * }
 */

function getIm_Token(){
    return;
}









