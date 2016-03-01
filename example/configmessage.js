/**
 * @api {get} /site/config/info  获取站点配置
 * @apiVersion 0.3.0
 * @apiName config
 * @apiGroup config
 * @apiPermission none
 *
 * @apiDescription 获取本站点配置
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
 * HTTP/1.1 200 OK
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

/**
  @api {get} /app_version_check   app版本检测
  @apiVersion 0.3.0
  @apiName app_version_check
  @apiGroup config

  @apiDescription app版本检测接口 后台会根据http请求中带的useragent的类型来判断检测的是Android版本还是ios版本


@apiHeaderExample {json} Header-Example:
{
  "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/600.1.3 (KHTML, like Gecko) Version/8.0 Mobile/12A4345d Safari/600.1.4"
}

@apiSuccessExample Success-Response:
  HTTP/1.1 200 OK
 {
    "pkgName": "com.demo.needs.app",
    "versionName": "3.2.9",
    "versionCode": "281",
    "plist": [],
    "versionDesc": null,
    "url": "http://demo.bw-xt.com/mobile/download",
    "downloadUrl": "http://demo.bw-xt.com/mobile/666/download/5iKetang-eNeeds-v3.2.9.apk",
    "appName": "5i课堂",
    "siteName": "5i课堂",
    "menus": {
        "1": "http://www.baidu.com",
        "teacher": "/teachers",
        "dddd": "/article",
        "code1": "teachers",
        "support": "#",
        "aboutus": "page/about"
    },
    "mgatehost": "proxy.5iketang.com:3014",
    "about": "<p>\r\n\t深圳博为讯通技术有限公司成立于2013年，公司专注于教育培训的技术与产品研发、运营与服务，主要客户为职业教育培训机构、职业教育学校（中高职）、企业培训部门等。\r\n</p>\r\n<p>\r\n\t&nbsp;<img src=\"/files/default/2015/10-23/094446e5e29e520860/vi-vim-cheat-sheet.png?2301.live1x629\" alt=\"\" /> \r\n</p>\r\n<p>\r\n\t<strong>公司愿景：打造中国领先的在线课堂O2O平台运营与服务提供商;</strong> \r\n</p>\r\n<p>\r\n\t<strong>公司核心价值观：激情、创新、艰苦奋斗、团队协作;</strong> \r\n</p>\r\n<p>\r\n\t<strong>公司使命：提供“人人皆学、处处能学、时时可学”的机会。</strong> \r\n</p>\r\n<p>\r\n\t&nbsp;\r\n</p>\r\n<p>\r\n\t公司主营产品为5i课堂，运用“互联网+”技术手段对传统教育培训进行转型，采用是线上与线下融合的业务模式，为教育培训客户打造“互动教学”与“移动学\r\n习”的O2O在线课堂平台，让在线教育变得很简单。凭借国内领先的平台技术和最佳的用户体验的实力，公司已为中财华路商学院、广州致知、新励成、广东清华\r\n等十多个教育培训客户提供服务。\r\n</p>\r\n<p>\r\n\t&nbsp;\r\n</p>\r\n<p>\r\n\t公司总部设在深圳，在南京设立产品研发中心，并在广州、南宁等地设立分支机构。 \r\n公司创始人主要来自前华为人，分别来自研发、销售和营销等领域，在华为超过10年以上工作经验，具有很强的团队协作和执行落地的精神。公司的运营总监等来\r\n自教育培训行业和互联网行业，具有丰富的运营和推广经验。\r\n</p>\r\n<p>\r\n\t&nbsp;\r\n</p>\r\n<p>\r\n\t未来1~3年，是公司快速发展的时期，公司将坚持聚焦5i课堂这个O2O教育的创新领域，并邀请和吸引更多优秀人才加盟进来，持续创新、提升服务，持续打造中国领先的在线课堂O2O平台运营与服务提供商。\r\n</p>\r\n<br />",
    "logo": "http://demo.bw-xt.com/files/system/mobis-1439292036.png"
}

*/



/**
 * @api {get} /site/profile   站点第三方配置获取
 * @apiVersion 0.3.0
 * @apiName Config
 * @apiGroup config
 * @apiPermission none
 *
 * @apiDescription 获取第三方库（保利、叁体、融云）连接需要的参数，重要接口，返回的内容是加密的，内容只有data 字段一个内容 具体内容需要base64解密
 *
 * @apiParam {String} key    随机字符串str.
 * @apiParam {String} token  用户token.
 * @apiParam {String} sign   随机字符串str,经md5(md5(str))得到的字符串.
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
 * @api {get} /ims/user/online    通知portal上线
 * @apiVersion 0.3.0
 * @apiName online
 * @apiGroup Message
 * @apiPermission none
 *
 * @apiDescription 通知portal用户上线，后台用以触发上线通知
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
 * @api {get} /ims/user/offline   通知portal下线
 * @apiVersion 0.3.0
 * @apiName offline
 * @apiGroup Message
 * @apiPermission none
 *
 * @apiDescription 通知portal用户已经下线
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
 * @api {get} /ims/user/send/message    通知portal通用接口
 * @apiVersion 0.3.0
 * @apiName sendMessage
 * @apiGroup Message
 * @apiPermission none
 *
 * @apiDescription 原有通过叁体的控制信息，通过该接口通知到portal，portal再通过IM通道广播出去
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
 * @api {get} /ims/user/get/token   获取融云初始化参数
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
 * @apiSuccess  {String} im_userId    用户在portal上唯一标示.
 * @apiSuccess  {String} im_token    融云平台上的token.
 * @apiSuccess  {String} im_appKey    融云平台上app对应的appKey.
 * @apiSuccess  {String} im_roomId    聊天室roomId.
 * @apiSuccess  {String} im_userName    用户昵称.
 * @apiSuccess  {String} im_portraitUri    用户头像地址.


 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * {
 *      result : "OK"
 * }
 */

function getIm_Token(){
    return;
}









