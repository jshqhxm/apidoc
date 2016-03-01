



// ------------------------------------------------------------------------------------------
// 注册
// ------------------------------------------------------------------------------------------

/**
@api {get} /user_mobile_smscode_token  获取短信码TOKEN
@apiVersion 0.3.0
@apiName user_mobile_smscode_token
@apiGroup account
@apiDescription 用户手机号码注册时需要输入短信验证码，首先必须获得一个令牌。通过该该令牌识别用户操作的有效性,此接口同时返回图形校验码验证时的url


  @apiParam {String} token  登录用户的TOKEN.
  @apiParam {String} mobileNo    11位手机号码.
  @apiParam {String} appType    app 类型.
  @apiParam {String} channelId    channel来源.

  @apiSuccess  {number} code         错误码信息 非0位失败
  @apiSuccess  {String} describe       code对应描述
  @apiSuccess  {json} data       业务数据

  @apiSuccess  {String} data.mtoken         32位UUID.
  @apiSuccess  {json} data.imgUrl         图形验证码的url, 加上?mtoken=<上述mtoken>即可生成检验码图片，每调用一次都将将生成一个新的图形.
  @apiSuccess  {json} data.checkUrl       类似imgUrl， 传入mtoken和vcode参数，可以检查用户图形校验码输入是否正确.

*/



/**
@api {get} /user_register   用户注册
@apiVersion 0.3.0
@apiName user_register
@apiGroup account
@apiDescription 用户输入邮箱或者手机号码进行注册。 注册之后即是注册用户

  @apiParam {String} mtoken        服务端返回的注册令牌.
  @apiParam {String} code      短信验证码码（6位）.
  @apiParam {String} nickname      用户昵称.
  @apiParam {String} password      密码.
  @apiParam {String} channelId      渠道标识.



  @apiSuccess  {number} code         错误码信息 非0为失败
  @apiSuccess  {String} describe       code对应描述
  @apiSuccess  {json} data       业务数据
  @apiSuccess  {json} data.token     登录后token
  @apiSuccess  {json} data.user      用户数据
  @apiSuccess  {json} data.user         user对象.
  @apiSuccess {number} data.user.id         用户ID.
  @apiSuccess {String} data.user.nickname        用户昵称.
  @apiSuccess {String} data.user.title         头衔.
  @apiSuccess {String} data.user.email        用户邮箱.
  @apiSuccess {String} data.user.mobileNO         绑定的移动号码.
  @apiSuccess {String} data.user.avatar         头像链接.
  @apiSuccess {String} data.user.truename         真实姓名.
  @apiSuccess {String} data.user.signature         签名.
  @apiSuccess {String} data.user.about         介绍.
  @apiSuccess {String} data.user.company         公司.
  @apiSuccess {String} data.user.city         城市.
  @apiSuccess {String} data.user.mobile         手机联系方式.


*/



/**
@api {get} /user_mobile_bind_token    绑定手机号码
@apiVersion 0.3.0
@apiName bindmobile
@apiGroup account
@apiDescription 用户手机号码注册时获得MTOKEN之后，用户输入手机号码，需要做一次绑定，以便MTOKEN作为代表移动号码完成后续的操作。


  @apiParam {String} mtoken  短信码码MTOKEN.
  @apiParam {String} mobileNo      11位手机号码.

  @apiSuccess  {number} code         错误码信息 非0为失败
  @apiSuccess  {String} describe       code对应描述
  @apiSuccess  {json} data       业务数据


*/

/**
@api {get} /user_mobile_smscode  重发或校验短信验证码
@apiVersion 0.3.0
@apiName user_mobile_smscode
@apiGroup account
@apiDescription 发送短信验证码之后，由于网络或者其他原因，用户可能没能及时收到短信，这个时候需要重新发送短信码。一个号码一天只能发送10次。
用户输入校验码码之后，可以调用该该接口进行校验


  @apiParam {String} mtoken  短信码码MTOKEN.
  @apiParam {String} mobileNo      11位手机号码.

 * @apiSuccess  {String} data.token         32位UUID.
 * @apiSuccess  {json} data.user         user对象.
 * @apiSuccess {number} data.user.id         用户ID.
 * @apiSuccess {String} data.user.nickname        用户昵称.
 * @apiSuccess {String} data.user.title         头衔.
 * @apiSuccess {String} data.user.email        用户邮箱.
 * @apiSuccess {String} data.user.mobileNO         绑定的移动号码.
 * @apiSuccess {String} data.user.avatar         头像链接.
 * @apiSuccess {String} data.user.truename         真实姓名.
 * @apiSuccess {String} data.user.signature         签名.
 * @apiSuccess {String} data.user.about         介绍.
 * @apiSuccess {String} data.user.company         公司.
 * @apiSuccess {String} data.user.city         城市.
 * @apiSuccess {String} data.user.mobile         手机联系方式.


*/





// ------------------------------------------------------------------------------------------
// 登录
// ------------------------------------------------------------------------------------------


/**
@api {get} /user_login_with_email   用户登录
@apiVersion 0.3.0
@apiName user_login_with_email
@apiGroup account
@apiDescription 用户输入邮箱或者手机号码登录系统。

  @apiParam {String} email  邮箱（长度：4-200）
  @apiParam {String} mobileNo          服务端返回的注册令牌.
  @apiParam {String} password      密码.


  @apiSuccess  {number} code         错误码信息 非0为失败
  @apiSuccess  {String} describe       code对应描述
  @apiSuccess  {json} data       业务数据
  @apiSuccess  {json} data.token     登录后token
  @apiSuccess  {json} data.user      用户数据
  @apiSuccess  {json} data.user         user对象.
  @apiSuccess {number} data.user.id         用户ID.
  @apiSuccess {String} data.user.nickname        用户昵称.
  @apiSuccess {String} data.user.title         头衔.
  @apiSuccess {String} data.user.email        用户邮箱.
  @apiSuccess {String} data.user.mobileNO         绑定的移动号码.
  @apiSuccess {String} data.user.avatar         头像链接.
  @apiSuccess {String} data.user.truename         真实姓名.
  @apiSuccess {String} data.user.signature         签名.
  @apiSuccess {String} data.user.about         介绍.
  @apiSuccess {String} data.user.company         公司.
  @apiSuccess {String} data.user.city         城市.
  @apiSuccess {String} data.user.mobile         手机联系方式.



*
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * {
 *  "token": "6de3cxaet9c0okc0kwksw8kcgw88444",
 *   "user": {
 *       "id": "7",
 *       "nickname": "jshqhxm1",
 *       "title": "",
 *       "email": "",
 *       "mobileNo": "12345678999",
 *       "type": "default",
 *       "avatar": "http: \\/\\/demo.bw-xt.com\\/files\\/user\\/2015\\/12-22\\/1424364c3f73034887.jpg?3850.live420",
 *       "schoolId": "5",
 *       "truename": "5iketang",
 *       "city": "",
 *       "mobile": "",
 *       "signature": "rtttt",
 *       "about": "",
 *       "company": "",
 *       "job": "",
 *       "gender": "secret"
 *   },
 *   "deviceId": "6p7wzfq939c0gowosg4c08gk80koc0w",
 *   "secret": 1415883191,
 *   "refreshToken": "8vbetjnaz5s0wgkgkgoocc4408888wg"
 * }

 *

*/

/**
@api {get} /user/smscode/login  短信验证码登录
@apiVersion 0.3.0
@apiName smscodeLogin
@apiGroup account
@apiDescription 短信验证码登录


  @apiParam {String} mtoken  手机绑定的mtoken.
  @apiParam {String} code    短信验证码.
  @apiParam {String} mobileNo    手机号码.
  @apiParam {String} channelId    channel来源.

  @apiSuccess  {number} code         错误码信息 非0位失败
  @apiSuccess  {String} describe       code对应描述
  @apiSuccess  {json} data       业务数据

  @apiSuccess  {String} data.mtoken         32位UUID.
  @apiSuccess  {json} data.imgUrl         图形验证码的url, 加上?mtoken=<上述mtoken>即可生成检验码图片，每调用一次都将将生成一个新的图形.
  @apiSuccess  {json} data.checkUrl       类似imgUrl， 传入mtoken和vcode参数，可以检查用户图形校验码输入是否正确.

*/


/**
@api {get} /user_snslogin_callback   第三方登录回调
@apiVersion 0.3.0
@apiName user_snslogin_callback
@apiGroup account
@apiDescription 用户通过QQ或者其他帐号在移动端登录

  @apiParam {String} type       登录类型'qq'| 'renren' | 'weibo'
  @apiParam {String} nickname   用户昵称 showName.
  @apiParam {String} sid       第三方登录返回的的会话ID.
  @apiParam {String} token       登录后token
  @apiParam {String} expiredTime          失效时间.
  @apiParam {String} gender      性别 male | female | secret.
  @apiParam {String} smallAvatar      头像链接（小）
  @apiParam {String} mediumAvatar      头像链接（中）
  @apiParam {String} largeAvatar      头像链接（大）



  @apiSuccess  {number} code         错误码信息 非0为失败
  @apiSuccess  {String} describe       code对应描述
  @apiSuccess  {json} data       业务数据
  @apiSuccess  {json} data.token     登录后token
  @apiSuccess  {json} data.user      用户数据
  @apiSuccess  {json} data.user         user对象.
  @apiSuccess {number} data.user.id         用户ID.
  @apiSuccess {String} data.user.nickname        用户昵称.
  @apiSuccess {String} data.user.title         头衔.
  @apiSuccess {String} data.user.email        用户邮箱.
  @apiSuccess {String} data.user.mobileNO         绑定的移动号码.
  @apiSuccess {String} data.user.avatar         头像链接.
  @apiSuccess {String} data.user.truename         真实姓名.
  @apiSuccess {String} data.user.signature         签名.
  @apiSuccess {String} data.user.about         介绍.
  @apiSuccess {String} data.user.company         公司.
  @apiSuccess {String} data.user.city         城市.
  @apiSuccess {String} data.user.mobile         手机联系方式.


*/


  /**
@api {get} /user_email_bind   邮箱绑定
@apiVersion 0.3.0
@apiName user_email_bind
@apiGroup account
@apiDescription 用户移动号码注册或者第三方登录之后，可能将帐号绑定到邮箱，以后就可以通过邮箱登录。


  @apiParam {String} token       登录后token
  @apiParam {String} email            邮箱.
  @apiParam {String} password      登录密码.
 



  @apiSuccess  {number} code         错误码信息 非0为失败
  @apiSuccess  {String} describe       code对应描述
  @apiSuccess  {json} data       业务数据
  @apiSuccess  {json} data.email     绑定成功的邮箱地址




*/


    /**
@api {get} /user_mobile_bind   手机号码绑定
@apiVersion 0.3.0
@apiName user_mobile_bind
@apiGroup account
@apiDescription 用户邮箱注册或者第三方登录之后，可能将帐号绑定到手机号码，后续就可以通过手机号码登录。


  @apiParam {String} token       登录后token
  @apiParam {String} mtoken        服务端返回的注册令牌.
  @apiParam {String} code        短信验证码.
  @apiParam {String} password      登录密码.
 



  @apiSuccess  {number} code         错误码信息 非0为失败
  @apiSuccess  {String} describe       code对应描述
  @apiSuccess  {json} data       业务数据


*/


      /**
@api {get} /mapi_user_feedback   用户反馈
@apiVersion 0.3.0
@apiName mapi_user_feedback
@apiGroup account
@apiDescription 用户在线反馈意见。反馈意见将将发布给学校管理员邮箱


  @apiParam {String} [email]       用户输入的邮箱地址
  @apiParam {String} notes        反馈信息.

 

  @apiSuccess  {number} code         错误码信息 非0为失败
  @apiSuccess  {String} describe       code对应描述
  @apiSuccess  {json} data       业务数据


*/

  

      /**
@api {get} /user_forgetpass   邮箱密码重置
@apiVersion 0.3.0
@apiName user_forgetpass
@apiGroup account
@apiDescription 邮箱帐号用户忘记密码时可以通过该接口重置密码


  @apiParam {String} [email]       用户输入的邮箱地址
  @apiParam {String} token          如果登录，则从后台获取email信息.

 

  @apiSuccess  {number} code         错误码信息 非0为失败
  @apiSuccess  {String} describe       code对应描述
  @apiSuccess  {json} data       业务数据
  @apiSuccess  {String} data.userId       业务数据
  @apiSuccess  {String} data.nickname       showName 用户的昵称
  @apiSuccess  {String} data.email       邮箱
  @apiSuccess  {String} data.emailLoginUrl       重置密码链接



*/



/**
@api {get} /user_forgetpass_mobile   手机号码密码重置
@apiVersion 0.3.0
@apiName user_forgetpass_mobile
@apiGroup account
@apiDescription 手机号码用户忘记密码时可以通过该接口重置密码


  @apiParam {String} mtoken       服务器令牌token
  @apiParam {String} code          短信校验码码.
  @apiParam {String} password          新口令.


  @apiSuccess  {number} code         错误码信息 非0为失败
  @apiSuccess  {String} describe       code对应描述
  @apiSuccess  {json} data       业务数据
 

*/


  /**
@api {get} /user_info_update   更新用户信息
@apiVersion 0.3.0
@apiName user_info_update
@apiGroup account
@apiDescription 更新用户资料。


  @apiParam {String} token       登录token
  @apiParam {String} nickname          新的showName.
  @apiParam {String} signature          签名信息.
  @apiParam {String} gender          性别 male | female | secret.


  @apiSuccess  {number} code         错误码信息 非0为失败
  @apiSuccess  {String} describe       code对应描述
  @apiSuccess  {json} data       业务数据
  @apiSuccess  {json} data.user      user 对象
 

*/


    /**
@api {post} /user_avatar_upload   更新用户头像
@apiVersion 0.3.0
@apiName user_avatar_upload
@apiGroup account
@apiDescription 更新用户头像


  @apiParam {String} token       登录token
  @apiParam {String} file          图像文件，后缀名支持png,jpg,gif.
  @apiParam {int} [x]          其中x,y,width,height定义的是剪裁区域。 缺省（0,0,原始宽度,原始高度）.
  @apiParam {int} [y]          
  @apiParam {int} [width]          剪裁区宽度.
  @apiParam {int} [height]          剪裁区高度.



  @apiSuccess  {number} code         错误码信息 非0为失败
  @apiSuccess  {String} describe       code对应描述
  @apiSuccess  {json} data       业务数据
  @apiSuccess  {json} data.avatar     图像连接
 

*/


/**
 * @api {get} /course/pay 生成订单
 * @apiVersion 0.3.0
 * @apiName course_pay
 * @apiGroup order
 * @apiPermission none
 *
 * @apiDescription 支付开启时，用于生成订单,同一个产品类型只会生成一个订单，订单未失效时，
 * 重复调用返回已存在订单，订单有效时间30分钟
 *
 * @apiParam {int} targetId 用于支付的产品编号，id，可能为课程，课程包，活动等
 * @apiParam {String} targetType  产品类型，可选'course','coursegrade','textpaper,'activity'
 *
 * @apiSuccess  {number} id          订单id
 * @apiSuccess  {String} sn          订单号，唯一.
 * @apiSuccess {number} schoolId     学校id
 * @apiSuccess {String} status        状态
 * @apiSuccess {String} title         订单产品名
 * @apiSuccess {String} amount        支付价格.
 * @apiSuccess {String} balanceCode1   折扣1
 * @apiSuccess {String} balanceCode2   折扣2
 * @apiSuccess {String} balanceCode3   折扣3
 * @apiSuccess {String} balanceCode4   折扣4
 * @apiSuccess {String} balanceCode5   折扣5
 * @apiSuccess {String} balanceStatus  折扣状态
 * @apiSuccess {String} canBalance     
 * @apiSuccess {String} cashSn         
 * @apiSuccess {String} choiceCode     
 * @apiSuccess {String} coinAmount     
 * @apiSuccess {String} coinRate       
 * @apiSuccess {String} coupon         
 * @apiSuccess {String} couponDiscount 
 * @apiSuccess {String} createdTime     
 */

/**
 * 
 * @api {get} /order/:orderId/submit_app_pay_request  获得订单签名，用于支付
 * @apiVersion 0.3.0
 * @apiName order_submit_app_pay_request
 * @apiGroup order
 * 
 * @apiDescription 生成订单后去支付时调用，用于支付签名生成
 * 
 * @apiParam {String} token  用户token，唯一标识
 * @apiParam {int} orderId  订单id
 * @apiParam {String} payment  支付方式，可选值 'alipay','wxpay',支付宝支付和微信支付
 * 
*/

/**
 * @api {get} /my_order_list 获取订单列表
 * @apiVersion 0.3.0
 * @apiName my_order_list
 * @apiGroup order
 * 
 * @apiDescription 用于获取个人订单列表
 * 
 * @apiParam {String} token  用户token，唯一标识
 * @apiParam {int} page  页码，每页20条，获取该页的订单
 *  
*/

/**
 * @api {get} /get/:orderId/order 获取单个订单详情
 * @apiVersion 0.3.0
 * @apiName get_order
 * @apiGroup order
 * 
 * @apiDescription 用于获取单个订单详情，用于订单的详情展示
 * 
 * @apiParam {String} token  用户token，唯一标识
 * @apiParam {int} orderId  订单id
 * 
*/

/**
 * @api {get} /order/refund 订单退款
 * @apiVersion 0.3.0
 * @apiName order_refund
 * @apiGroup order
 * 
 * @apiDescription 用于可退款订单的退款操作，一般用于为开课的直播互动课程的退款
 * 
 * @apiParam {String} token  用户token，唯一标识
 * @apiParam {String} orderSn 订单编号
 * @apiParam {String} reason  退款原因，需要用户选择或者输入
 * @apiParam {String} note  用户输入的退款原因或者信息
 * 
*/

/**
 * @api {get} /my_course_note_list 我的课程的笔记
 * @apiVersion 0.3.0
 * @apiName my_course_note_list
 * @apiGroup my
 * 
 * @apiDescription 获取我的课程的笔记
 * 
 * @apiParam {String} token  用户token，唯一标识
 * @apiParam {int} courseId  课程ID
 * @apiParam {int} lessonId  课时ID
 *  
 * @apiSuccess  {JSON} noteList  课程笔记的数组
 * 
*/

/**
 * @api {get} /my_course_thread_list 我的课程讨论清单
 * @apiVersion 0.3.0
 * @apiName my_course_thread_list
 * @apiGroup my
 * 
 * @apiDescription 获取我的课程讨论清单
 * 
 * @apiParam {String} token  用户token，唯一标识
 * @apiParam {int} courseId  课程ID
 * @apiParam {int} lessonId  课时ID
 * 
 * @apiSuccess  {JSON} threadList  课程讨论的数组
 * 
*/

/**
 * @api {get} /my_course_post_thread_list 我的课程的讨论回帖列表
 * @apiVersion 0.3.0
 * @apiName my_course_post_thread_list
 * @apiGroup my
 * 
 * @apiDescription 获取我的课程的讨论回帖列表
 * 
 * @apiParam {String} token  用户token，唯一标识
 * @apiParam {int} courseId  课程ID
 * @apiParam {int} lessonId  课时ID
 * @apiParam {int} threadId  讨论ID
 * 
 * @apiSuccess  {JSON} threadPostList  课程讨论回帖的数组
 * 
*/

/**
 * @api {get} /my_course_list 我的课程
 * @apiVersion 0.3.0
 * @apiName my_course_list 
 * @apiGroup my
 * 
 * @apiDescription 获得我已加入的所有课程
 * 
 * @apiParam {String} token  用户token，唯一标识
 * @apiParam {String} type  用于筛选课程，可选值 video|live|ppt|text|testpaper
 * @apiParam {String} sort  排序方式，可选值 latest|Rating|studentNum （最新|评分最高|按在学人数）
 * @apiParam {int} page  0开始的页数，不传默认为0
 * @apiParam {int} liveStatus 0|1|2
 * 
 * @apiSuccess  {JSON} courseList  课程数组
 * 
*/

/**
 * @api {get} /my_course_lesson_position_update 更新学习状态
 * @apiVersion 0.3.0
 * @apiName my_course_lesson_position_update
 * @apiGroup my
 * 
 * @apiDescription 更新我已学习状态
 * 
 * @apiParam {String} token  用户token，唯一标识
 * @apiParam {int} courseId  课程ID
 * @apiParam {int} lessonId  课时ID
 * @apiParam {int} position  播放位置（秒）
 * @apiParam {int} status  learning|finished|start使用start参数值启动配额减1运算
 * 
 * @apiSuccess  {bool} success true
 * @apiSuccess  {int} courseQ  成功后返回总配额
 * @apiSuccess  {int} lessonQ  成功后返回剩余配额
 * 
*/

/**
 * @api {get} /my_course_lesson_quota_update 更新配额
 * @apiVersion 0.3.0
 * @apiName my_course_lesson_quota_update
 * @apiGroup my
 * 
 * @apiDescription 更新配额
 * 
 * @apiParam {String} token  用户token，唯一标识
 * @apiParam {int} courseId  课程ID
 * @apiParam {int} lessonId  课时ID
 * @apiParam {int} quota  配额
 * 
 * @apiSuccess  {bool} success  true
 * @apiSuccess  {int} courseQ  成功后返回总配额
 * @apiSuccess  {int} lessonQ  成功后返回剩余配额
 * 
*/

/**
 * @api {get} /my_course_lesson_position_last 获取最新学习状态
 * @apiVersion 0.3.0
 * @apiName my_course_lesson_position_last
 * @apiGroup my
 * 
 * @apiDescription 获取我的最新学习状态
 * 
 * @apiParam {String} token  用户token，唯一标识
 * @apiParam {int} courseId  课程ID
 * 
 * @apiSuccess  {lesson} lesson  最近学习的lesson, 结构参见章节清单
 * 
*/

/**
 * @api {get} /my_course_materials_list 我的课时资料列表
 * @apiVersion 0.3.0
 * @apiName my_course_materials_list
 * @apiGroup my
 * 
 * @apiDescription 获取课时资料列表
 * 
 * @apiParam {String} token  用户token，唯一标识
 * @apiParam {int} courseId  课程ID
 * @apiParam {int} lessonId  课时ID
 * 
 * @apiSuccess  {JSON} materialList  资料数组
 * 
*/

/**
 * @api {get} /my_course_lesson_position_update 减少配额
 * @apiVersion 0.3.0
 * @apiName my_course_lesson_position_update
 * @apiGroup my
 * 
 * @apiDescription 学员播放点播课程，播放一次配额减少一
 * 
 * @apiParam {String} token  用户token，唯一标识
 * @apiParam {int} courseId  课程ID
 * @apiParam {int} lessonId  课时ID
 * @apiParam {int} position  播放位置（秒）
 * @apiParam {int} status  learning|finished|start使用start参数值启动配额减1运算
 * 
 * @apiSuccess  {bool} success 0减少失败,1成功减少
 * @apiSuccess  {int} courseQ  剩余配额数
 * @apiSuccess  {int} lessonQ  课时剩余配额数
 * 
*/

/**
 * @api {get} /my_course_lesson_position_update 更新配额
 * @apiVersion 0.3.0
 * @apiName my_course_lesson_position_update 
 * @apiGroup my
 * 
 * @apiDescription 用于本地收费缓存视频播放多次后更新服务器中配额
 * 
 * @apiParam {String} token  用户token，唯一标识
 * @apiParam {String} quotas  缓存播放次数
 * 
 * @apiSuccess  {bool} success 0减少失败,1成功减少
 * @apiSuccess  {int} courseQ  剩余配额数
 * @apiSuccess  {int} lessonQ  课时剩余配额数
 * 
*/


/**
 * @api {get} /academy_list  获取学院列表
 * @apiVersion 0.3.0
 * @apiName academy_list 
 * @apiGroup my
 * 
 * @apiDescription 获取学院列表
 * 
 * @apiParam {String} token  用户token，唯一标识
 * 
@apiSuccessExample Success-Response:
 HTTP/1.1 200 OK
{
    "academys": [
        {
            "id": "44",
            "schoolId": "5",
            "academyName": "\u4e92\u52a8\u76f4\u64ad",
            "remark": "0",
            "addr": null,
            "createdTime": "1435981203",
            "updatedTime": "1435981203",
            "code": "",
            "largeLogo": "http:\/\/demo.bw-xt.com
\/files\/default\/2015\/12-31\/151130213d50001356.jpg?3850.live594",
            "smallLogo": "http:\/\/demo.bw-xt
.com\/files\/default\/2015\/12-31\/151130218a7a217197.jpg?3850.live594",
            "weight": "0",
            "status": "2",
            "showCategory": "mapi_course_list",
            "backgroundColor": "#357a9e",
            "showWeb": "1",
            "seoTitle": "",
            "seoKeyword": "          
                     ",
            "seoDesc": "                               ",
            "schoolname": "\u535a\u4e3a\u8baf\u901aDEMO",
            "uiType": 0,
            "pageUrl": "",
            "categories": [
                {
                    "id": "17",
                    "code": "codettt",
                    "name": "MBA",
                    "path": "",
                    "weight": "0",
                    "groupId": "2",
                    "parentId": "0",
                    "schoolId": "5",
                    "academyId": "44",
                    "largeLogo": "",
                    "smallLogo": "",
                    "status": "2"
                }
            ]
        },
        {
            "id": "68",
            "schoolId": "5",
            "academyName": "\u6d4b\u8bd5\u54a8\u8be2",
            "remark": "0",
            "addr": null,
            "createdTime": "1441876404",
            "updatedTime": "1441876404",
            "code": "",
            "largeLogo": "http:\/\/demo.bw-xt.com\/bundles\/bwxtfrontend
\/common\/images\/default\/academy-default-250x250.png?3850.live594",
            "smallLogo": "http:\/\/demo.bw-xt
.com\/bundles\/bwxtfrontend\/common\/images\/default\/academy-default-48x48.png?3850.live594",
            "weight": "0",
            "status": "2",
            "showCategory": "mapi_page_url",
            "backgroundColor": "#eeeeee",
            "showWeb": "1",
            "seoTitle": "",
            "seoKeyword": "    ",
            "seoDesc": "    ",
            "schoolname": "\u535a\u4e3a\u8baf\u901aDEMO",
            "uiType": 0,
            "pageUrl": "http:\/\/demo.bw-xt.com\/page\/aboutus\/webview",
            "categories": null
        },
        {
            "id": "69",
            "schoolId": "5",
            "academyName": "\u5730\u4e3b\u5bb6\u8001\u7237",
            "remark": "0",
            "addr": null,
            "createdTime": "1441937719",
            "updatedTime": "1441937719",
            "code": "",
            "largeLogo": "http:\/\/demo.bw-xt.com\/files\/default\/2015\/09-11\/1015484c29b1391410.jpg
?3850.live594",
            "smallLogo": "http:\/\/demo.bw-xt.com\/files\/default\/2015\/09-11\/1015484c62a5705599
.jpg?3850.live594",
            "weight": "0",
            "status": "2",
            "showCategory": "mapi_activity_url",
            "backgroundColor": "#eeeeee",
            "showWeb": "0",
            "seoTitle": "",
            "seoKeyword": "           ",
            "seoDesc": "           ",
            "schoolname": "\u535a
\u4e3a\u8baf\u901aDEMO",
            "uiType": "1",
            "pageUrl": "zhaoyuns",
            "categories": null
        },
        {
            "id": "70",
            "schoolId": "5",
            "academyName": "\u8d44\u8baf\u9875\u9762",
            "remark": "0",
            "addr": null,
            "createdTime": "1445334484",
            "updatedTime": "1445334484",
            "code": "",
            "largeLogo": "http:\/\/demo.bw-xt.com\/bundles\/bwxtfrontend\/common\/images\
/default\/academy-default-250x250.png?3850.live594",
            "smallLogo": "http:\/\/demo.bw-xt.com\/bundles\/bwxtfrontend
\/common\/images\/default\/academy-default-48x48.png?3850.live594",
            "weight": "0",
            "status": "2",
            "showCategory": "mapi_article_url",
            "backgroundColor": "#eeeeee",
            "showWeb": "0",
            "seoTitle": "",
            "seoKeyword": "       ",
            "seoDesc": "       ",
            "schoolname": "\u535a\u4e3a\u8baf\u901aDEMO",
            "uiType": 0,
            "pageUrl": "1",
            "categories": null
        },
        {
            "id": "71",
            "schoolId": "5",
            "academyName": "\u54a8\u8baf\u7ba1\u7406",
            "remark": "0",
            "addr": null,
            "createdTime": "1445481897",
            "updatedTime": "1445481897",
            "code": "",
            "largeLogo": "http:\/\/demo.bw-xt.com\/files\/default
\/2015\/10-22\/1044579a64fb735074.jpg?3850.live594",
            "smallLogo": "http:\/\/demo.bw-xt.com\/files\/default
\/2015\/10-22\/1044579a9004590044.jpg?3850.live594",
            "weight": "0",
            "status": "2",
            "showCategory": "mapi_article_url",
            "backgroundColor": "#eeeeee",
            "showWeb": "1",
            "seoTitle": "",
            "seoKeyword": "         ",
            "seoDesc": "       
  ",
            "schoolname": "\u535a\u4e3a\u8baf\u901aDEMO",
            "uiType": 0,
            "pageUrl": "1",
            "categories": [
                {
                    "id": "16",
                    "code": "zixun",
                    "name": "\u6d4b\u8bd5\u8d44\u8baf\u7ba1\u7406",
                    "path": "www.baidu.com",
                    "weight": "0",
                    "groupId": "2",
                    "parentId": "0",
                    "schoolId": "5",
                    "academyId": "71",
                    "largeLogo": "public:\/\/course\/2015\/10-22\/105059308aff819510
.jpg",
                    "smallLogo": "public:\/\/course\/2015\/10-22\/10505930b607331926.jpg",
                    "status": "2"
                }
            ]
        },
        {
            "id": "72",
            "schoolId": "5",
            "academyName": "\u8d44\u672c\u65f6\u4ee3",
            "remark": "0",
            "addr": null,
            "createdTime": "1445482515",
            "updatedTime": "1445482515",
            "code": "",
            "largeLogo": "http:\/\/demo.bw-xt.com\/bundles\/bwxtfrontend\/common
\/images\/default\/academy-default-250x250.png?3850.live594",
            "smallLogo": "http:\/\/demo.bw-xt.com\/bundles
\/bwxtfrontend\/common\/images\/default\/academy-default-48x48.png?3850.live594",
            "weight": "0",
            "status": "2",
            "showCategory": "mapi_article_url",
            "backgroundColor": "#eeeeee",
            "showWeb": "1",
            "seoTitle": "",
            "seoKeyword": "      ",
            "seoDesc": "      ",
            "schoolname": "\u535a\u4e3a\u8baf\u901aDEMO",
            "uiType": 0,
            "pageUrl": "4",
            "categories": null
        },
        {
            "id": "73",
            "schoolId": "5",
            "academyName": "\u5728\u7ebf\u62a5\u540d ",
            "remark": "0",
            "addr": null,
            "createdTime": "1445572251",
            "updatedTime": "1445572251",
            "code": "",
            "largeLogo": "http:\/\/demo.bw-xt.com\/files\/default
\/2015\/10-23\/115051b9838a817133.png?3850.live594",
            "smallLogo": "http:\/\/demo.bw-xt.com\/files\/default
\/2015\/10-23\/115051b9bfd4155694.png?3850.live594",
            "weight": "0",
            "status": "2",
            "showCategory": "mapi_activity_url",
            "backgroundColor": "#eeeeee",
            "showWeb": "1",
            "seoTitle": "",
            "seoKeyword": "",
            "seoDesc": "",
            "schoolname": "
\u535a\u4e3a\u8baf\u901aDEMO",
            "uiType": "3",
            "pageUrl": "enroll_online",
            "categories": null
        },
        {
            "id": "92",
            "schoolId": "5",
            "academyName": "\u6211\u7684\u6d4b\u8bd5",
            "remark": "0",
            "addr": null,
            "createdTime": "1452735946",
            "updatedTime": "1452735946",
            "code": "",
            "largeLogo": "http:\/\/demo.bw-xt.com\/bundles\/bwxtfrontend\/common\/images\
/default\/academy-default-250x250.png?3850.live594",
            "smallLogo": "http:\/\/demo.bw-xt.com\/bundles\/bwxtfrontend
\/common\/images\/default\/academy-default-48x48.png?3850.live594",
            "weight": "0",
            "status": "2",
            "showCategory": "mapi_course_list",
            "backgroundColor": "#eeeeee",
            "showWeb": "1",
            "seoTitle": "",
            "seoKeyword": "          
  ",
            "seoDesc": "            ",
            "schoolname": "\u535a\u4e3a\u8baf\u901aDEMO",
            "uiType": 0,
            "pageUrl": "",
            "categories": [
                {
                    "id": "21",
                    "code": "F1",
                    "name": "\u5206\u7c7b\u4e00",
                    "path": "",
                    "weight": "0",
                    "groupId": "2",
                    "parentId": "0",
                    "schoolId": "5",
                    "academyId": "92",
                    "largeLogo": "",
                    "smallLogo": "",
                    "status": "2"
                },
                {
                    "id": "22",
                    "code": "F2",
                    "name": "\u5206\u7c7b2",
                    "path": "",
                    "weight": "2",
                    "groupId": "2",
                    "parentId": "0",
                    "schoolId": "5",
                    "academyId": "92",
                    "largeLogo": "",
                    "smallLogo": "",
                    "status": "0"
                }
            ]
        },
        {
            "id": "7",
            "schoolId": "5",
            "academyName": "\u6295\u7968
\u6d3b\u52a8",
            "remark": "0",
            "addr": null,
            "createdTime": "1433490709",
            "updatedTime": "1433490709",
            "code": "",
            "largeLogo": "http:\/\/demo.bw-xt.com\/files\/default\/2015\/08-08\/160446eb4a5a776922.png?3850.live594",
            "smallLogo": "http:\/\/demo.bw-xt.com\/files\/default\/2015\/08-08\/160446eb6869357488.png?3850.live594",
            "weight": "1",
            "status": "2",
            "showCategory": "mapi_activity_url",
            "backgroundColor": "#94b38f",
            "showWeb": "0",
            "seoTitle": "",
            "seoKeyword": "                                      ",
            "seoDesc": "                    
                  ",
            "schoolname": "\u535a\u4e3a\u8baf\u901aDEMO",
            "uiType": "2",
            "pageUrl": "student-vote-005",
            "categories": null
        },
        {
            "id": "1",
            "schoolId": "5",
            "academyName": "MBA",
            "remark": "0",
            "addr": null,
            "createdTime": "1433164189",
            "updatedTime": "1433164189",
            "code": "",
            "largeLogo": "http:\/\/demo.bw-xt.com\/files\/default
\/2015\/08-12\/102738a26ca4185973.png?3850.live594",
            "smallLogo": "http:\/\/demo.bw-xt.com\/files\/default
\/2015\/08-12\/102738a289bc253774.png?3850.live594",
            "weight": "2",
            "status": "2",
            "showCategory": "mapi_course_category_list",
            "backgroundColor": "#f5be33",
            "showWeb": "1",
            "seoTitle": "",
            "seoKeyword": "           ",
            "seoDesc": "     
      ",
            "schoolname": "\u535a\u4e3a\u8baf\u901aDEMO",
            "uiType": 0,
            "pageUrl": "",
            "categories": [
                {
                    "id": "3",
                    "code": "one",
                    "name": "\u7c7b\u522b\u4e00",
                    "path": "",
                    "weight": "1",
                    "groupId": "2",
                    "parentId": "0",
                    "schoolId": "5",
                    "academyId": "1",
                    "largeLogo": "",
                    "smallLogo": "",
                    "status": "1"
                },
                {
                    "id": "5",
                    "code": "three",
                    "name": "\u7c7b
\u522b\u4e09",
                    "path": "",
                    "weight": "3",
                    "groupId": "2",
                    "parentId": "0",
                    "schoolId": "5",
                    "academyId": "1",
                    "largeLogo": "",
                    "smallLogo": "",
                    "status": "2"
                },
                {
                    "id": "4",
                    "code": "two",
                    "name": "\u7c7b\u522b\u4e8c",
                    "path": "",
                    "weight": "2",
                    "groupId": "2",
                    "parentId": "0",
                    "schoolId": "5",
                    "academyId": "1",
                    "largeLogo": "",
                    "smallLogo": "",
                    "status": "2"
                }
            ]
        },
        {
            "id": "2",
            "schoolId": "5",
            "academyName": "\u5efa\u7b51\u5e08",
            "remark": "0",
            "addr": null,
            "createdTime": "1433164215",
            "updatedTime": "1433164215",
            "code": "",
            "largeLogo": "http:\/\/demo.bw-xt.com\/files\/default
\/2015\/08-02\/112059b78f7f976306.png?3850.live594",
            "smallLogo": "http:\/\/demo.bw-xt.com\/files\/default
\/2015\/08-02\/112059b7addf172675.png?3850.live594",
            "weight": "3",
            "status": "2",
            "showCategory": "mapi_course_list",
            "backgroundColor": "#bfad86",
            "showWeb": "1",
            "seoTitle": "",
            "seoKeyword": "                           ",
            "seoDesc": "                           ",
            "schoolname": "\u535a\u4e3a\u8baf\u901aDEMO",
            "uiType": 0,
            "pageUrl": "",
            "categories": [
                {
                    "id": "14",
                    "code": "s0001",
                    "name": "\u5b66\u9662\u4e00",
                    "path": "",
                    "weight": "0",
                    "groupId": "2",
                    "parentId": "0",
                    "schoolId": "5",
                    "academyId": "2",
                    "largeLogo": "",
                    "smallLogo": "",
                    "status": "2"
                },
                {
                    "id": "15",
                    "code": "s0002",
                    "name": "\u5b66\u9662\u4e8c",
                    "path": "",
                    "weight": "0",
                    "groupId": "2",
                    "parentId": "0",
                    "schoolId": "5",
                    "academyId": "2",
                    "largeLogo": "",
                    "smallLogo": "",
                    "status": "2"
                }
            ]
        },
        {
            "id": "3",
            "schoolId": "5",
            "academyName": "\u5173\u4e8e
\u6211\u4eec",
            "remark": "0",
            "addr": null,
            "createdTime": "1433164309",
            "updatedTime": "1433164309",
            "code": "",
            "largeLogo": "http:\/\/demo.bw-xt.com\/files\/default\/2015\/07-30\/2126444599ee019659.png?3850.live594",
            "smallLogo": "http:\/\/demo.bw-xt.com\/files\/default\/2015\/07-30\/21264445b751610189.png?3850.live594",
            "weight": "4",
            "status": "1",
            "showCategory": "mapi_page_url",
            "backgroundColor": "#eeeeee",
            "showWeb": "0",
            "seoTitle": "",
            "seoKeyword": "     ",
            "seoDesc": "     ",
            "schoolname": "\u535a\u4e3a\u8baf\u901aDEMO",
            "uiType": 0,
            "pageUrl": "http:\/\/demo.bw-xt.com\/page\/aboutus\/webview",
            "categories": null
        },
        {
            "id": "4",
            "schoolId": "5",
            "academyName": "\u8ba1\u7b97\u673a",
            "remark": "0",
            "addr": null,
            "createdTime": "1433164336",
            "updatedTime": "1433164336",
            "code": "",
            "largeLogo": "http:\/\/demo.bw-xt.com\/files\/default\/2015\/06-01\/21121603965f451352.jpg
?3850.live594",
            "smallLogo": "http:\/\/demo.bw-xt.com\/files\/default\/2015\/06-01\/21121603cdb2882489
.jpg?3850.live594",
            "weight": "5",
            "status": "0",
            "showCategory": "mapi_course_list",
            "backgroundColor": "#eeeeee",
            "showWeb": "1",
            "seoTitle": "",
            "seoKeyword": "  ",
            "seoDesc": "  ",
            "schoolname": "\u535a\u4e3a\u8baf\u901aDEMO",
            "uiType": 0,
            "pageUrl": "",
            "categories": [
                {
                    "id": "13",
                    "code": "live",
                    "name": "\u76f4\u64ad",
                    "path": "",
                    "weight": "0",
                    "groupId": "2",
                    "parentId": "0",
                    "schoolId": "5",
                    "academyId": "4",
                    "largeLogo": "",
                    "smallLogo": "",
                    "status": "2"
                }
            ]
        },
        {
            "id": "5",
            "schoolId": "5",
            "academyName": "\u901a\u4fe1",
            "remark": "0",
            "addr": null,
            "createdTime": "1433164368",
            "updatedTime": "1433164368",
            "code": "",
            "largeLogo": "http:\/\/demo.bw-xt.com\/files\/default
\/2015\/06-01\/211249102649543032.jpg?3850.live594",
            "smallLogo": "http:\/\/demo.bw-xt.com\/files\/default
\/2015\/06-01\/21124910553c344158.jpg?3850.live594",
            "weight": "6",
            "status": "0",
            "showCategory": "mapi_course_list",
            "backgroundColor": "#eeeeee",
            "showWeb": "1",
            "seoTitle": "",
            "seoKeyword": "  ",
            "seoDesc": "  ",
            "schoolname": "\u535a\u4e3a\u8baf\u901aDEMO",
            "uiType": 0,
            "pageUrl": "",
            "categories": null
        },
        {
            "id": "6",
            "schoolId": "5",
            "academyName": "\u673a\u68b0",
            "remark": "0",
            "addr": null,
            "createdTime": "1433164388",
            "updatedTime": "1433164388",
            "code": "",
            "largeLogo": "http:\/\/demo.bw-xt.com\/files\/default\/2015\/06-01\/2113084b1170708909.jpg?3850.live594",
            "smallLogo": "http:\/\/demo.bw-xt.com\/files\/default\/2015\/06-01\/2113084b41dc621211.jpg?3850.live594",
            "weight": "7",
            "status": "0",
            "showCategory": "mapi_course_list",
            "backgroundColor": "#eeeeee",
            "showWeb": "1",
            "seoTitle": "",
            "seoKeyword": "  ",
            "seoDesc": "  ",
            "schoolname": "\u535a\u4e3a\u8baf\u901aDEMO",
            "uiType": 0,
            "pageUrl": "",
            "categories": null
        },
        {
            "id": "66",
            "schoolId": "5",
            "academyName": "\u6d4b\u8bd5\u8bfe\u7a0b
\u5305",
            "remark": "0",
            "addr": null,
            "createdTime": "1438659340",
            "updatedTime": "1438659340",
            "code": "",
            "largeLogo": "http:\/\/demo.bw-xt.com\/files\/default\/2016\/01-13\/1629360751c8868781.jpg?3850.live594",
            "smallLogo": "http:\/\/demo.bw-xt.com\/files\/default\/2016\/01-13\/16293607914e176386.jpg?3850.live594",
            "weight": "8",
            "status": "2",
            "showCategory": "mapi_grade_course_list",
            "backgroundColor": "#eeeeee",
            "showWeb": "1",
            "seoTitle": "",
            "seoKeyword": "             ",
            "seoDesc": "             ",
            "schoolname": "\u535a\u4e3a\u8baf\u901aDEMO",
            "uiType": 0,
            "pageUrl": "",
            "categories": [
                {
                    "id": "20",
                    "code": "a",
                    "name": "\u8bfe\u7a0b\u5305\u4e00",
                    "path": "",
                    "weight": "0",
                    "groupId": "2",
                    "parentId": "0",
                    "schoolId": "5",
                    "academyId": "66",
                    "largeLogo": "",
                    "smallLogo": "",
                    "status": "2"
                }
            ]
        },
        {
            "id": "65",
            "schoolId": "5",
            "academyName": "123",
            "remark": "0",
            "addr": null,
            "createdTime": "1437558705",
            "updatedTime": "1437558705",
            "code": "",
            "largeLogo": "http:\/\/demo.bw-xt.com\/files\/default
\/2015\/07-25\/225719fa7c59194198.jpg?3850.live594",
            "smallLogo": "http:\/\/demo.bw-xt.com\/files\/default
\/2015\/07-25\/225719faa382504729.jpg?3850.live594",
            "weight": "10",
            "status": "0",
            "showCategory": "mapi_course_list",
            "backgroundColor": "#eeeeee",
            "showWeb": "1",
            "seoTitle": "",
            "seoKeyword": "   ddd",
            "seoDesc": "   ddd",
            "schoolname": "\u535a\u4e3a\u8baf\u901aDEMO",
            "uiType": 0,
            "pageUrl": "http:\/\/demo.bw-xt.com\/fff\/ddd\/webview",
            "categories": null
        },
        {
            "id": "67",
            "schoolId": "5",
            "academyName": "\u6d3b\u52a8\u6d4b\u8bd5",
            "remark": "0",
            "addr": null,
            "createdTime": "1441190442",
            "updatedTime": "1441190442",
            "code": "",
            "largeLogo": "http:\/\/demo.bw-xt.com\/files\/default
\/2015\/10-24\/1008419bfa96862699.jpg?3850.live594",
            "smallLogo": "http:\/\/demo.bw-xt.com\/files\/default
\/2015\/10-24\/1008419c55c8858596.jpg?3850.live594",
            "weight": "10",
            "status": "2",
            "showCategory": "mapi_activity_url",
            "backgroundColor": "#eeeeee",
            "showWeb": "1",
            "seoTitle": "",
            "seoKeyword": "                   ",
            "seoDesc": "                   ",
            "schoolname": "\u535a\u4e3a\u8baf\u901aDEMO",
            "uiType": "3",
            "pageUrl": "aaa",
            "categories": null
        }
    ],
    "schoolname": "\u535a\u4e3a\u8baf\u901aDEMO"
}
 * 
*/


/**
 * @api {get} /activity/status  活动状态
 * @apiVersion 0.3.0
 * @apiName activity/status 
 * @apiGroup my
 * 
 * @apiDescription 获取活动状态
 * 
 * @apiParam {String} token  用户token，唯一标识
 * @apiParam {String} quotas  缓存播放次数
 * 
 * @apiSuccess  {bool} success 0减少失败,1成功减少
 * @apiSuccess  {int} courseQ  剩余配额数
 * @apiSuccess  {int} lessonQ  课时剩余配额数
 * 
*/


/**
 * @api {get} /activity/course/measure/record  活动状态记录
 * @apiVersion 0.3.0
 * @apiName activity/course/measure/record
 * @apiGroup my
 * 
 * @apiDescription 记录活动状态，如投票、报名等
 * 
 * @apiParam {String} token  用户token，唯一标识
  * @apiParam {String} activityCode  活动码标示
  * @apiParam {String} courseId  课程ID
 * @apiParam {String} measure  用户token，唯一标识

 * 
 * @apiSuccess  {bool} success 0减少失败,1成功减少
 * 
*/


/**
 * @api {get} /activity/enroll/online  活动报名
 * @apiVersion 0.3.0
 * @apiName activity/enroll/online
 * @apiGroup my
 * 
 * @apiDescription 活动报名
 * 
 * @apiParam {String} token  用户token，唯一标识
 * 
 * @apiSuccess  {bool} success 0减少失败,1成功减少
 * @apiSuccess  {int} courseQ  剩余配额数
 * @apiSuccess  {int} lessonQ  课时剩余配额数
 * 
*/


/**
 * @api {get} /article/list  资讯列表
 * @apiVersion 0.3.0
 * @apiName article/list
 * @apiGroup my
 * 
 * @apiDescription 资讯列表
 * 
 * @apiParam {String} token  用户token，唯一标识


 * 
 * @apiSuccess  {bool} success 0减少失败,1成功减少
 * @apiSuccess  {int} courseQ  剩余配额数
 * @apiSuccess  {int} lessonQ  课时剩余配额数
 * 
*/

/**
 * @api {get} /course/test/do  试卷详情 
 * @apiVersion 0.3.0
 * @apiName course/test/do 
 * @apiGroup my
 * 
 * @apiDescription 资讯列表
 * 
 * @apiParam {String} token  用户token，唯一标识
 * 
 * @apiSuccess  {bool} success 0减少失败,1成功减少
 * @apiSuccess  {int} courseQ  剩余配额数
 * @apiSuccess  {int} lessonQ  课时剩余配额数
 * 
*/



/** 
 @api {get} /categoryQuestion/list  获取试卷种类 
 @apiVersion 0.3.0
 @apiName categoryQuestion/list 
 @apiGroup my
 
 @apiDescription 资讯列表
 
 @apiParam {String} token  用户token，唯一标识
 
 @apiSuccess  {bool} success 0减少失败,1成功减少
 
*/


/** 
 @api {get} /questionCategory/list 按照种类获取试卷 
 @apiVersion 0.3.0
 @apiName questionCategory/list
 @apiGroup my
 
 @apiDescription 资讯列表
 
 @apiParam {String} token  用户token，唯一标识
 
 @apiSuccess  {bool} success 0减少失败,1成功减少
 
*/


/** 
 @api {get} /question/favorite 收藏试卷接口 
 @apiVersion 0.3.0
 @apiName question/favorite
 @apiGroup my
 
 @apiDescription 收藏或取消收藏试题接口
 
 @apiParam {String} token  用户token，唯一标识
 
 @apiSuccess  {bool} success 0减少失败,1成功减少
 
*/

/** 
 @api {get} /course/test/submit  试卷提交 
 @apiVersion 0.3.0
 @apiName question/favorite
 @apiGroup my
 
 @apiDescription 试卷提交接口
 
 @apiParam {String} token  用户token，唯一标识
 
 @apiSuccess  {bool} success 0减少失败,1成功减少
 
*/


