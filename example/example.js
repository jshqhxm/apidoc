
/**
 * @api {get} /user_login_with_email Login wiht email
 * @apiVersion 0.3.0
 * @apiName login
 * @apiGroup Login
 * @apiPermission none
 *
 * @apiDescription 用户登陆接口， 邮箱或手机必选一个
 *
 * @apiParam {String} [email]  用户邮箱
 * @apiParam {String} [mobileNo]  用户手机号码.
 * @apiParam {String} password 用户密码.
 *
   @apiSuccess  {number} code         错误码信息 非0位失败
   @apiSuccess  {String} describe       code对应描述
   @apiSuccess  {json} data       业务数据

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
 * @api {get} /user_mobile_smscode_token 获取短信验证码token
 * @apiVersion 0.3.0
 * @apiName getsmscode_token
 * @apiGroup Login
 *
 * @apiParam {String} token  登录用户的TOKEN.
 * @apiParam {String} mobileNo  11位为手机号码.
 *
 * @apiSuccess {String} mtoken         短信码TOKEN.即mtoken.
 * @apiSuccess  {String} imgUrl         图形验证码的url, 加上?mtoken=<上述mtoken>即可生成检验码图片，每调用一次都将将生成一个新的图形.
 * @apiSuccess  {String} checkUrl       类似imgUrl， 传入mtoken和vcode参数，可以检查用户图形校验码输入是否正确.
 * @apiSuccess  {String} testt             test.
 *
 *
 * @apiError UserNotLogin The <code>id</code> of the User was not Logined.
 *
 */






/**
* @api {get} /my_course_lesson_quota_update  加入课程学习
  @apiVersion 0.3.0
  @apiName user_course_join3
  @apiGroup Course


  @apiParam {String} token  登录用户的TOKEN.
  @apiParam {number} courseId  课程ID.
 
  @apiSuccess {String} success        true.
 *



*/

// ------------------------------------------------------------------------------------------
// 登陆 注册
// ------------------------------------------------------------------------------------------

/**
@api {get} /user_mobile_smscode_token  获取短信码TOKEN
@apiVersion 0.3.0
@apiName user_mobile_smscode_token
@apiGroup Register
@apiDescription 用户手机号码注册时需要输入短信验证码，首先必须获得一个令牌。通过该该令牌识别用户操作的有效性


  @apiParam {String} token  登录用户的TOKEN.
  @apiParam {String} mobileNo    11位手机号码.

  @apiSuccess  {number} code         错误码信息 非0位失败
  @apiSuccess  {String} describe       code对应描述
  @apiSuccess  {json} data       业务数据

  @apiSuccess  {String} data.mtoken         32位UUID.
  @apiSuccess  {json} data.imgUrl         图形验证码的url, 加上?mtoken=<上述mtoken>即可生成检验码图片，每调用一次都将将生成一个新的图形.
  @apiSuccess  {json} data.checkUrl       类似imgUrl， 传入mtoken和vcode参数，可以检查用户图形校验码输入是否正确.

*/


/**
@api {get} /user_mobile_bind_token  关联手机到MTOKEN
@apiVersion 0.3.0
@apiName user_mobile_bind_token
@apiGroup Register
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
@apiGroup Register
@apiDescription 发送短信验证码之后，由于网络或者其他原因，用户可能没能及时收到短信，这个时候需要重新发送短信码。一个号码一天只能发送10次。
用户输入校验码码之后，可以调用该该接口进行校验


  @apiParam {String} mtoken  短信码码MTOKEN.
  @apiParam {String} mobileNo      11位手机号码.

  @apiSuccess  {number} code         错误码信息 非0为失败
  @apiSuccess  {String} describe       code对应描述
  @apiSuccess  {json} data       业务数据


*/


/**
@api {get} /user_register   用户注册
@apiVersion 0.3.0
@apiName user_register
@apiGroup Register
@apiDescription 用户输入邮箱或者手机号码进行注册。 注册之后即是注册用户

  @apiParam {String} email  邮箱（长度：4-200）
  @apiParam {String} mtoken        服务端返回的注册令牌.
  @apiParam {String} code      短信验证码码（4位）.
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


*/


/**
@api {get} /user_login_with_email   用户登录
@apiVersion 0.3.0
@apiName user_login_with_email
@apiGroup Register
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


*/




/**
@api {get} /user_snslogin_callback   第三方登录回调
@apiVersion 0.3.0
@apiName user_snslogin_callback
@apiGroup Register
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
@apiGroup Register
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
@apiGroup Register
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
@apiGroup Register
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
@apiGroup Register
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
@apiGroup Register
@apiDescription 手机号码用户忘记密码时可以通过该接口重置密码


  @apiParam {String} mtoken       短信码码mtoken
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
@apiGroup Register
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
@apiGroup Register
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
 * @api {get} order/:orderId/submit_app_pay_request  获得订单签名，用于支付
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

