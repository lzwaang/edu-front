import request from '@/utils/request'

export default {
  //条件分页课程查询的方法
  getCourseList(page,limit,courseFrontQuery) {
    return request({
      url: `/eduservice/coursefront/getCourseFrontList/${page}/${limit}`,
      method: 'post',
      data: courseFrontQuery
    })
  },
  //查询所有分类的方法
  getAllSubject() {
    return request({
      url: '/eduservice/subjectfront/getSubjectFrontList',
      method: 'get'
    })
  },
  //课程详情的方法
  getCourseInfo(id) {
    return request({
      url: '/eduservice/coursefront/getCourseFrontInfo/'+id,
      method: 'get'
    })
  }
}
