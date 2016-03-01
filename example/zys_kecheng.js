
/**
 * @api {get} /course_category_list 获取课程类别
 * @apiVersion 0.3.0
 * @apiName course_category_list
 * @apiGroup course
 * @apiPermission none
 *
 * @apiDescription 查询课程列表
 *
 * @apiParam {String} code  缺省为‘course’
 * @apiParam {String} type  课程类别 video | live | ppt
 * @apiParam {int} academyId  学院ID
 *
 * @apiSuccess  {categoryList} categoryList  categoryList={categoryItem}
*/



/**
 * 
 * @api {get} /course_list  获取课程清单
 * @apiVersion 0.3.0
 * @apiName course_list
 * @apiGroup course
 * @apiPermission non
 *
 * @apiDescription type不能为空（课程类别 video | live | ppt）
 * 
 * @apiParam {String} token  用户token，唯一标识
 * @apiParam {String} type  课程类别 video | live | ppt
 * @apiParam {String} payment  支付方式，可选值 'alipay','wxpay',支付宝支付和微信支付
 * 

*{
*     "id": "564",
*     "title": "sadfadsfads",
*     "subtitle": "fffff",
*     "type": "ppt",
*     "price": "0.00",
*     "serializeMode": "none",
*     "rating": "0",
*     "categoryId": "14",
*     "middlePicture": "http://demo.bw-xt.com/bundles/bwxtfrontend/common/images/default/course-large.png?3850.live425",
*     "recommended": "0",
*     "recommendedSeq": "0",
*     "recommendedTime": "0",
*     "studentNum": "1",
*     "maxStudentNum": "0",
*     "hitNum": "14",
*     "length": "00:00:00",
*     "realStudentNum": "1",
*     "oldprice": "0.00",
*     "maxLiveStudentNum": "0",
*     "liveType": "3",
*     "shareType": "0",
*     "startTimeC": null,
*     "practice": 0,
*     "shareUrl": "http://demo.bw-xt.com/wap5/showCourse?courseId=564&modal=1",
*     "teacherName": "李老师-测试",
*     "teacherTitle": "教师",
*     "lessonCount": 0,
*     "iLearning": 0,
*     "iFinished": 0,
*     "approvalStatus": "unapprove",
*     "startTime": 0,
*     "iJoined": 0,
*     "measure": 0
*  }
*/

/**
 * 
 * @api {get} /course_summary  课程简介
 * @apiVersion 0.3.0
 * @apiName course_summary
 * @apiGroup course
 * @apiPermission non
 *
 * @apiDescription 获取课程内容简介，返回课程基本信息，courseId不能为空（课程编码）
 * 
 * @apiParam {int} courseId  
 *
 *
 * @apiSuccess  {String} title  
 * @apiSuccess  {String} tags  tag（字符串）数组
 * @apiSuccess  {String} about
 * @apiSuccess  {userList} teachers  user的列表对象
*/

/**
 * 
 * @api {get} /course_chapter_list  章节清单
 * @apiVersion 0.3.0
 * @apiName course_chapter_list
 * @apiGroup course
 * @apiPermission non
  *
 * @apiDescription 获取课程对应的章节信息 
 * 
 * @apiParam {int} courseId  
 * @apiParam {String} token
 *
 @apiSuccess {String} courseId不能为空（课程编码
*/

/**
 * 
 * @api {get} /user_course_join  加入课程
 * @apiVersion 0.3.0
 * @apiName user_course_join
 * @apiGroup course
 * @apiPermission non
  *
 * @apiDescription courseId不能为空（课程编码）
 * 
 * @apiParam {int} courseId 课程ID  
 * @apiParam {String} token 登录token
 *
 @apiSuccess {bool} success
*/

/**
 * 
 * @api {get} /course_note_list  课程笔记列表
 * @apiVersion 0.3.0
 * @apiName user_course_join
 * @apiGroup course
 * @apiPermission non
  *
 * @apiDescription 获取课程标记列表 courseId不能为空（课程编码）
 * 
 * @apiParam {int} courseId 课程ID  
 * @apiParam {String} token 登录token
 * @apiParam {int} lessonId 课时ID 
 *
 @apiSuccess {String} noteList 课程笔记的数组
*/

/**
 * 
 * @api {get} /course_note_create  创建课程笔记
 * @apiVersion 0.3.0
 * @apiName course_note_create
 * @apiGroup course
 * @apiPermission non
  *
 * @apiDescription courseId、token、lessonid、content、noteList都不能为空
 * 
 * @apiParam {int} courseId 课程ID  
 * @apiParam {String} token 登录token
 * @apiParam {int} lessonId 课时ID 
 * @apiParam {String} content 笔记内容 
 *
 @apiSuccess {note} note 课程笔记， 参见课程笔记列表
*/
/**
 * 
 * @api {get} /my_course_note_list  我的课程笔记
 * @apiVersion 0.3.0
 * @apiName my_course_note_list
 * @apiGroup course
 * @apiPermission non
  *
 * @apiDescription token 不能为空
 * 
 * @apiParam {int} courseId 课程ID  
 * @apiParam {String} token 登录token
 * @apiParam {int} lessonId 课时ID  
 *
 @apiSuccess {String} noteList 课程笔记的数组
*/

/**
 * 
 * @api {get} /course_lesson_review_list  课程评价
 * @apiVersion 0.3.0
 * @apiName course_lesson_review_list
 * @apiGroup course
 * @apiPermission non
  *
 * @apiDescription  获取课程评价
 * 
 * @apiParam {int} courseId 课程ID  
 * @apiParam {String} token 登录token
 * @apiParam {int} lessonId 课时ID  
 *
 @apiSuccess {String} reviewList 课程笔记的数组
 */
 
 /**
 * 
 * @api {get} /course_review_create  创建课程评价
 * @apiVersion 0.3.0
 * @apiName course_review_create
 * @apiGroup course
 * @apiPermission non
  *
 * @apiDescription  token、courseId、lessonId、rating、content都不可输入空
 * 
 * @apiParam {int} courseId 课程ID  
 * @apiParam {String} token 登录token
 * @apiParam {int} lessonId 课时ID  
 * @apiParam {int} rating 分值 0-5
 * @apiParam {String} content 评价内容
 * @apiSuccess {review} review 课程评价
 */
 
  /**
 * 
 * @api {get} /course_lesson_thread_list  课程讨论列表
 * @apiVersion 0.3.0
 * @apiName course_lesson_thread_list
 * @apiGroup course
 * @apiPermission non
  *
 * @apiDescription  token、courseId、lessonId可以为空
 * 
 * @apiParam {int} courseId 课程ID  
 * @apiParam {String} token 登录token
 * @apiParam {int} lessonId 课时ID  
 * 
 * @apiSuccess {String} threadList 课程讨论的数组
 */
 

  /**
 * 
 * @api {get} /course_recommended 获取推荐课程列表
 * @apiVersion 0.3.0
 * @apiName course_recommended
 * @apiGroup course
 * @apiPermission non
  *
 * @apiDescription  获取推荐课程列表
 * 
 * @apiParam {String} token 登录token
 * 
 * @apiSuccess {List} academys  学院列表




 */
 


   /**
 * 
 * @api {get} /navigation_index 轮播数据获取
 * @apiVersion 0.3.0
 * @apiName getSlideImgs
 * @apiGroup course
 * @apiPermission non
  *
 * @apiDescription  获取轮播数据
 * 
 * @apiParam {String} token 登录token
 * 
 * @apiSuccess {List} navigations  轮播数据列表
@apiSuccessExample Success-Response:
 HTTP/1.1 200 OK
{
    "navigations": [
        {
            "id": "330",
            "name": "\u6d4b\u8bd5\u56fe\u7247",
            "code": "0",
            "sequence": "1",
            "parentId": "0",
            "createdTime": "1446517144",
            "updateTime": "1456285991",
            "isOpen": "1",
            "isNewWin": "0",
            "badge": null,
            "schoolId": "5",
            "largeLogo": "http:\/\/demo.bw-xt.com\/files\/default\/2015\/11-20\/103705165bd8805036.jpg?3850.live594",
            "smallLogo": "http:\/\/demo.bw-xt.com\/files\/default\/2015\/11-20\/10370516cc4d245078.jpg?3850.live594",
            "backgroundColor": "#EEEEEE",
            "uiType": 0,
            "showCategory": "mapi_page_url",
            "pageUrl": "http:\/\/demo.bw-xt
.com\/page\/z66666"
        },
        {
            "id": "331",
            "name": "\u94fe\u63a5\u6d4b\u8bd5",
            "code": "0",
            "sequence": "1",
            "parentId": "0",
            "createdTime": "1446527823",
            "updateTime": "1456133409",
            "isOpen": "1",
            "isNewWin": "0",
            "badge": null,
            "schoolId": "5",
            "largeLogo": "http:\/\/demo.bw-xt.com\/files\/default\/2015\/11-20\/103719f83865674039.jpg?3850.live594",
            "smallLogo": "http:\/\/demo.bw-xt.com\/files\/default\/2015\/11-20\/103719f87fdc666672.jpg?3850.live594",
            "backgroundColor": "#EEEEEE",
            "uiType": 0,
            "showCategory": "mapi_course",
            "pageUrl": "232",
            "courseInfo": {
                "id": "232",
                "schoolId": "5",
                "title": "\u9ed2\u6212\u4e50\u961f\u5e7f\u5dde\u4e13\u573a\u97f3\u4e50\u4f1a(\u8ddf
\u97f3\u76f4\u64ad\uff09",
                "subtitle": "\u8ddf\u97f3-\u4e2d\u56fd\u5728\u7ebf\u97f3\u4e50\u5b66\u9662",
                "status": "published",
                "type": "live",
                "lessonTypes": "|live|",
                "price": "0",
                "expiryDay": "0",
                "showStudentNumType": "closed",
                "serializeMode": "opening",
                "income": "0",
                "lessonNum": "1",
                "giveCredit": "0",
                "rating": "5",
                "ratingNum": "4",
                "vipLevelId": "0",
                "categoryId": "0",
                "tags": [
                    
                ],
                "smallPicture": "public:\/\/course\/2015\/10-30\/170752862b26567933
.jpg",
                "middlePicture": "public:\/\/course\/2015\/10-30\/170752860cbf640905.jpg",
                "largePicture": "public
:\/\/course\/2015\/10-30\/17075285b8a2462377.jpg",
                "about": "\u003Cp\u003E\n\t\u003Cimg src=\u0022\/files
\/course\/2015\/10-30\/170901ddd12c773542\/%E8%B7%9F%E9%9F%B3-1-1-1.jpg?2301.live1x679\u0022 alt=\u0022
\u0022 \/\u003E\u003C\/p\u003E\n\u003Cp\u003E\n\t\u003C\/p\u003E\u003Cp class=\u0022MsoNormal\u0022\u003E
\n\t\tDark\u00a0Ring\u003Cspan\u003E\uff08\u9ed1\u6212\uff09\uff0c\u4e2d\u56fd\u5357\u65b9\uff08\u5e7f
\u5dde\uff09\u7684\u6781\u7aef\u91d1\u5c5e\u4e50\u961f\u3002\u003C\/span\u003E\n\t\u003C\/p\u003E\n\t
\u003Cp class=\u0022MsoNormal\u0022\u003E\n\t\t\u00a0\u00a0\u00a0\u4e3b\u5531\u00a0\u003Cspan\u003EVocals
\u003C\/span\u003E\u003Cspan\u003E\uff1a\u51af\u946b\u6d9b\u00a0\u003C\/span\u003E\u003Cspan\u003EXintao
\u00a0Feng\u003C\/span\u003E\u003Cspan\u003E\uff08\u4f0a\u5e0c\u62c9\u592b\u00a0\u003C\/span\u003E\u003Cspan
\u003E\/\u00a0\u003C\/span\u003E\u003Cspan\u003E\u4e8c\u5c11\u00a0\u003C\/span\u003E\u003Cspan\u003E
\/\u00a0\u003C\/span\u003E\u003Cspan\u003E\u6613\u7b11\uff09\u003C\/span\u003E\n\t\u003C\/p\u003E\n\t
\u003Cp class=\u0022MsoNormal\u0022\u003E\n\t\t\u00a0\u00a0\u00a0\u5409\u4ed6\u00a0\u003Cspan\u003EGuitars
\u003C\/span\u003E\u003Cspan\u003E\uff1a\u83ab\u709c\u6770\u00a0\u003C\/span\u003E\u003Cspan\u003EWeijie
\u00a0Mo\u003C\/span\u003E\u003Cspan\u003E\uff08\u8001\u6770\uff09\u003C\/span\u003E\n\t\u003C\/p\u003E
\n\t\u003Cp class=\u0022MsoNormal\u0022\u003E\n\t\t\u00a0\u00a0\u00a0\u5409\u4ed6\u00a0\u003Cspan\u003EGuitars
\u003C\/span\u003E\u003Cspan\u003E\uff1a\u5f20\u91d1\u946b\u00a0\u003C\/span\u003E\u003Cspan\u003EJinxin
\u00a0Zhang\u003C\/span\u003E\u003Cspan\u003E\uff08\u963f\u946b\uff09\u003C\/span\u003E\n\t\u003C\/p
\u003E\n\t\u003Cp class=\u0022MsoNormal\u0022\u003E\n\t\t\u00a0\u00a0\u00a0\u4f4e\u97f3\u5409\u4ed6\u00a0
\u003Cspan\u003EBass\u003C\/span\u003E\u003Cspan\u003E\uff1a\u5f20\u6b63\u5143\u00a0\u003C\/span\u003E
\u003Cspan\u003EZhengyuan\u00a0Zhang\u003C\/span\u003E\u003Cspan\u003E\uff08\u6b63\u5c11\uff09\u003C
\/span\u003E\n\t\u003C\/p\u003E\n\t\u003Cp class=\u0022MsoNormal\u0022\u003E\n\t\t\u00a0\u00a0\u00a0
\u952e\u76d8\u4e0e\u5408\u6210\u5668\u00a0\u003Cspan\u003EKeyboards\u003C\/span\u003E\u003Cspan\u003E
\uff1a\u738b\u82cf\u598d\u00a0\u003C\/span\u003E\u003Cspan\u003ESuyan\u00a0Wang\u003C\/span\u003E\u003Cspan
\u003E\uff08\u5305\u5305\uff09\u003C\/span\u003E\n\t\u003C\/p\u003E\n\t\u003Cp class=\u0022MsoNormal
\u0022\u003E\n\t\t\u00a0\u00a0\u00a0\u9f13\u00a0\u003Cspan\u003EDrums\u003C\/span\u003E\u003Cspan\u003E
\uff1a\u5f20\u6bc5\u5143\u00a0\u003C\/span\u003E\u003Cspan\u003EYiyuan\u00a0Zhang\u003C\/span\u003E\u003Cspan
\u003E\uff08\u95aa\u5143\uff09\u003C\/span\u003E\n\t\u003C\/p\u003E\n\t\u003Cp class=\u0022MsoNormal
\u0022\u003E\n\t\t\u00a0\n\t\u003C\/p\u003E\n\t\u003Cp class=\u0022MsoNormal\u0022\u003E\n\t\t\u00a0
\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u4e3b\u5531\uff08\u4e8c\u5c11\uff09\u6709\u7740\u5bbd\u9614
\u7684\u97f3\u57df\uff0c\u5e76\u5728\u4eba\u58f0\u4e0a\u5c1d\u8bd5\u8fd0\u7528\u591a\u79cd\u5531\u8154
\u6f14\u5531\uff0c\u80fd\u591f\u4ece\u4e2d\u9886\u7565\u9ed1\u6b7b\u55d3\u4ee5\u53ca\u5176\u4ed6\u6781
\u7aef\u55d3\u97f3\u76f8\u4e92\u4ea4\u7ec7\u6240\u5e26\u6765\u7684\u7279\u6b8a\u7f8e\u611f\u3002\u4e50
\u961f\u4e24\u4f4d\u5409\u4ed6\u624b\uff08\u8001\u6770\u3001\u963f\u946b\uff09\u9ed8\u5951\u5929\u6210
\uff0c\u9664\u4e86\u5f39\u594f\u51fa\u7d27\u51d1\u4e14\u9971\u542b\u5f20\u529b\u7684\u003Cspan\u003ERIFF
\u003C\/span\u003E\u003Cspan\u003E\uff0c\u66f2\u4e2d\u4e5f\u4e0d\u4e4f\u8010\u542c\u4f18\u7f8e\u7684
\u65cb\u5f8b\uff1b\u9f13\u624b\uff08\u95aa\u5143\uff09\u8fc5\u731b\u6709\u529b\u4e14\u5bcc\u6709\u5f8b
\u52a8\u7684\u9f13\u70b9\u4e3a\u6b4c\u66f2\u63d0\u4f9b\u4e86\u5f3a\u5927\u7684\u540e\u76fe\u652f\u6491
\uff1b\u8d1d\u65af\u624b\uff08\u6b63\u5c11\uff09\u5bf9\u4f4e\u97f3\u7406\u89e3\u6df1\u539a\uff0c\u4f4e
\u6c89\u7684\u58f0\u97f3\u4e0b\u6c14\u52bf\u7a81\u589e\uff0c\u97f3\u573a\u539a\u5b9e\uff1b\u952e\u76d8
\u624b\uff08\u5305\u5305\uff09\u4ee5\u5341\u6307\u8425\u9020\u51fa\u7684\u9634\u90c1\u5374\u4e0d\u5931
\u53e4\u5178\u4f18\u96c5\u7684\u6c1b\u56f4\u548c\u65cb\u5f8b\u66f4\u4ee4\u6b4c\u66f2\u987f\u663e\u5927
\u6c14\uff0c\u66f4\u663e\u7f16\u66f2\u7684\u7cbe\u7ec6\u3002\u5982\u6b64\u79cd\u79cd\uff0c\u76f8\u5f97
\u76ca\u5f70\uff0c\u662f\u4e3a\u9ed1\u6212\u3002\u003C\/span\u003E\n\t\u003C\/p\u003E\n",
                "teacherIds": [
                    "221"
                ],
                "goals": [
                    
                ],
                "audiences": [
                    
                ],
                "recommended": "1",
                "recommendedSeq": "1",
                "recommendedTime": "1446197867",
                "locationId": "0",
                "address": "",
                "studentNum": "19",
                "maxStudentNum": "0",
                "hitNum": "352",
                "userId": "43",
                "createdTime": "1446195920",
                "length": null,
                "speakerId": "0",
                "grades": [
                    
                ],
                "quota": "0",
                "totalStudentNum": "19",
                "airStudentNum": "19",
                "academyId": "44",
                "realRating": "5",
                "realRatingNum": "4",
                "realStudentNum": "19",
                "realHitNum": "340",
                "seoTitle": "",
                "seoKeyword": "     \u9ed2\u6212\u4e50\u961f \u9ed1\u6b7b\u55d3  \u4e07\u5723\u8282  ",
                "seoDesc": "     \u9ed2\u6212\u4e50\u961f \u9ed1\u6b7b\u55d3  \u4e07\u5723\u8282  ",
                "maxRoomNum": "0",
                "roomLimit": "0",
                "memberLimit": "0",
                "miniType": "0",
                "oldprice": "0",
                "ownerId": "0",
                "balanceCode": "*",
                "smsNotify": "0",
                "miniAbout": "\u3000\u3000\u3000\u65f6\u9694\u4e00\u5e74\u9ed1\u6212\u4e50\u961f\u5e7f\u5dde\u4e13
\u573a\u518d\u5ea6\u5f00\u542f\uff0c\u9ed1\u6b7b\u55d3\u3001\u6781\u7aef\u8282\u594f\u4e0e\u9634\u90c1
\u65cb\u5f8b\u7eb5\u6a2a\u4ea4\u9519\u7f16\u7ec7\u6210\u7684\u7f51\uff0c\u5c06\u5728\u4e07\u5723\u8282
\u5f53\u665a\u5168\u9762\u8986\u76d6\u3002\u4ee5\u8fdb\u653b\u53d1\u8d77\u65e5D-DAY\u4e3a\u540d\u6380
\u8d77\u4e00\u573a\u97f3\u4e50\u5723\u6218\uff0c\u9ed1\u6212\u5c06\u5e26\u7740\u65b0\u4f5c\u4e3a\u540a
\u8f68\u7684\u4e16\u4e8b\u6572\u4e0a\u6700\u540e\u4e00\u9897\u68fa\u9489\u3002",
                "maxLiveStudentNum": "0",
                "liveStartTime": "0",
                "liveEndTime": "0",
                "liveType": "3",
                "shareType": "1",
                "baseLiveCount": "1200",
                "appliedStudentNum": "0",
                "liveStatus": "0",
                "updatedTime": "1446195920"
            }
        },
        {
            "id": "333",
            "name": "\u8d44\u8baf\u65f6\u4ee3",
            "code": "0",
            "sequence": "1",
            "parentId": "0",
            "createdTime": "1447039443",
            "updateTime": "1447987062",
            "isOpen": "1",
            "isNewWin": "0",
            "badge": null,
            "schoolId": "5",
            "largeLogo": "http:\/\/demo.bw-xt.com\/files\/default\/2015
\/11-20\/1037426b3e7b508683.jpg?3850.live594",
            "smallLogo": "http:\/\/demo.bw-xt.com\/files\/default\/2015
\/11-20\/1037426b8739387525.jpg?3850.live594",
            "backgroundColor": "#EEEEEE",
            "uiType": 0,
            "showCategory": "mapi_article_url",
            "pageUrl": "1"
        },
        {
            "id": "338",
            "name": "\u4e92\u52a8\u76f4\u64ad",
            "code": "0",
            "sequence": "1",
            "parentId": "0",
            "createdTime": "1447145711",
            "updateTime": "1454408175",
            "isOpen": "1",
            "isNewWin": "0",
            "badge": null,
            "schoolId": "5",
            "largeLogo": "http:\/\/demo.bw-xt.com\/files\/default\/2015\/11-20\/1128320df15b293716.jpg?3850.live594",
            "smallLogo": "http:\/\/demo.bw-xt.com\/files\/default\/2015\/11-20\/1128320e3439533525.jpg?3850.live594",
            "backgroundColor": "#EEEEEE",
            "uiType": 0,
            "showCategory": "mapi_course_list",
            "pageUrl": "44"
        },
        {
            "id": "342",
            "name": "ddd",
            "code": "0",
            "sequence": "1",
            "parentId": "0",
            "createdTime": "1447146205",
            "updateTime": "1448024799",
            "isOpen": "1",
            "isNewWin": "0",
            "badge": null,
            "schoolId": "5",
            "largeLogo": "http:\/\/demo.bw-xt.com\/files
\/default\/2015\/11-11\/105555b777a8732594.png?3850.live594",
            "smallLogo": "http:\/\/demo.bw-xt.com\/files
\/default\/2015\/11-11\/105555b7dc44276868.png?3850.live594",
            "backgroundColor": "#EEEEEE",
            "uiType": 0,
            "showCategory": "mapi_page_url",
            "pageUrl": "http:\/\/demo.bw-xt.com\/page\/aaa"
        },
        {
            "id": "345",
            "name": "\u65b0\u4e09\u677f
\u516c\u5f00\u8bfe",
            "code": "0",
            "sequence": "1",
            "parentId": "0",
            "createdTime": "1447940042",
            "updateTime": "1448519261",
            "isOpen": "1",
            "isNewWin": "0",
            "badge": null,
            "schoolId": "5",
            "largeLogo": "http:\/\/demo.bw-xt
.com\/files\/default\/2015\/11-19\/213402a886b3734670.png?3850.live594",
            "smallLogo": "http:\/\/demo.bw-xt
.com\/files\/default\/2015\/11-19\/213402a9adab840091.png?3850.live594",
            "backgroundColor": "#EEEEEE",
            "uiType": "0",
            "showCategory": "mapi_activity_url",
            "pageUrl": "zcxsb1228"
        },
        {
            "id": "358",
            "name": "\u6d4b\u8bd5\u62a5
\u540d",
            "code": "0",
            "sequence": "1",
            "parentId": "0",
            "createdTime": "1448353874",
            "updateTime": "1448353973",
            "isOpen": "1",
            "isNewWin": "0",
            "badge": null,
            "schoolId": "5",
            "largeLogo": "http:\/\/demo.bw-xt.com\/files
\/default\/2015\/11-24\/1631142258f6183635.jpg?3850.live594",
            "smallLogo": "http:\/\/demo.bw-xt.com\/files
\/default\/2015\/11-24\/163114227cd3284524.jpg?3850.live594",
            "backgroundColor": "#EEEEEE",
            "uiType": 0,
            "showCategory": "mapi_page_url",
            "pageUrl": "http:\/\/demo.bw-xt.com\/page\/aaa1"
        },
        {
            "id": "359",
            "name": "\u65b0\u4e09\u677f
\u76f4\u64ad\u6d4b\u8bd5",
            "code": "0",
            "sequence": "1",
            "parentId": "0",
            "createdTime": "1448518231",
            "updateTime": "1448521027",
            "isOpen": "1",
            "isNewWin": "0",
            "badge": null,
            "schoolId": "5",
            "largeLogo": "http:\/\/demo.bw-xt
.com\/files\/default\/2015\/11-26\/14111757bc3c144938.jpg?3850.live594",
            "smallLogo": "http:\/\/demo.bw-xt
.com\/files\/default\/2015\/11-26\/141117581ab6635105.jpg?3850.live594",
            "backgroundColor": "#EEEEEE",
            "uiType": 0,
            "showCategory": "mapi_page_url",
            "pageUrl": "http:\/\/demo.bw-xt.com\/page\/zcxsb"
        }
    ]
}
 @apiErrorExample {json} Error-Response:
 HTTP/1.1 404 Not Found
 {
  "error": "UserNotFound"
  }

 */


 /**
 * @api {get} /get/course 获取单个课程详情
 * @apiVersion 0.3.0
 * @apiName 获取课程详情 
 * @apiGroup course
 * 
 * @apiDescription 获取单个课程详情
 * 
 * @apiParam {String} token  用户token，唯一标识
   @apiParam {String} courseId  课程对应Id

 * 
 * 
*/

/** 
 @api {get} /courses/package/list  课程包列表 
 @apiVersion 0.3.0
 @apiName courses/package/list 
 @apiGroup course
 
 @apiDescription 课程包查询接口
 
 @apiParam {String} token  用户token，唯一标识
 
 @apiSuccess  {bool} success 0减少失败,1成功减少
 
*/



/** 
 @api {get} /get/courses/package  课程包详情
 @apiVersion 0.3.0
 @apiName get/courses/package 
 @apiGroup course
 
 @apiDescription 课程包查询接口
 
 @apiParam {String} token  用户token，唯一标识
 @apiParam {String} gradeId  课程包Id

 
 @apiSuccess  {bool} success 0减少失败,1成功减少
 
*/

/** 
 @api {get} /my/course/package/list  我的课程包
 @apiVersion 0.3.0
 @apiName my/course/package/list 
 @apiGroup course
 
 @apiDescription 课程包查询接口
 
 @apiParam {String} token  用户token，唯一标识
 
 @apiSuccess  {bool} success 0减少失败,1成功减少
 
*/

/** 
 @api {get} /user_grade_join  购买课程包
 @apiVersion 0.3.0
 @apiName user_grade_join 
 @apiGroup course
 
 @apiDescription 加入课程包
 
 @apiParam {String} token  用户token，唯一标识
 
 @apiSuccess  {bool} success 0减少失败,1成功减少
 
*/



/** 
 @api {get} /course_student_study_apply  在线报名，收集报名用户接口
 @apiVersion 0.3.0
 @apiName course_student_study_apply 
 @apiGroup course
 
 @apiDescription 在线报名接口
 
 @apiParam {String} token  用户token，唯一标识
 @apiParam {String} courseId  课程Id
 @apiParam {String} showName  姓名
 @apiParam {String} idcard  身份证号码
 @apiParam {String} mobileNo  手机号码
 @apiParam {String} email  邮箱


 
 @apiSuccess  {bool} success 0减少失败,1成功减少
 
*/


