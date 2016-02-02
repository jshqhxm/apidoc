
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
 * @apiDescription courseId不能为空（课程编码）
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
 * @apiDescription courseId不能为空（课程编码）
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
 * @api {get} /course_note_list  课程笔记
 * @apiVersion 0.3.0
 * @apiName user_course_join
 * @apiGroup course
 * @apiPermission non
  *
 * @apiDescription courseId不能为空（课程编码）
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
 * @apiDescription  输入都可以为空
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
 