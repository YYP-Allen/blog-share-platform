// 获取博客相关的各种状态详情状态
import request from '@/helpers/request.js'

const URL = {
  GET_LIST: '/blog',
  GET_DETAIL: 'blog/:blogId',
  CREATE: '/blog',
  UPDATE: '/blog/:blogId',
  DELETE: 'blog/:blogId'
}
export default {  
  // 获取博客列表
  getBlogs({page=1, userId, atIndex} = {page: 1}) {
    return request(URL.GET_LIST, 'GET', {page, userId, atIndex})
  },
  // 获取首页博客列表
  getIndexBlogs({page = 1} = { page: 1} ) {
    return this.getBlogs({page, atIndex: true})
  },
  // 每个id对应的用户的博客
  getBlogsByUserId(userId, {page=1, atIndex } = { page: 1}) {
    return this.getBlogs({userId, page, atIndex})
  },
  // 获取id 为 blogId 的博客详情
  getDetail({blogId}) {
    return request(URL.GET_DETAIL.replace(':blogId', blogId))
  },
  // 更新修改博客 id 为:blogI博客
  updateBlog({blogId}) {
    return request(URL.GET_DETAIL.replace(':blogId', blogId), 'PATCH', {title, content, description, atIndex})
  },

  // 删除博客
  deleteBlog({blogId}) {
    return request(URL.DELETE.replace(':blogId', blogId), 'DELETE')
  },
  // 创建博客
  createBlog({title= '', content= '', description= '', atIndex=false} = {title: '', content: '', description: '', atIndex: false}) {
    return request(URL.CREATE, 'POST', {title, content, description})
  }
}