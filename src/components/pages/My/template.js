import blog from '@/api/blog'
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      blogs: [],
      page: 1,
      total: 0
    }
  },
  computed: {
    // 当前已经登录的用户信息
    ...mapGetters(['user'])
  },
  created() {
    // 设定默认的this.page
    this.page = parseInt(this.$route.query.page) || 1
    blog.getBlogsByUserId(this.user.id, {page: this.page})
      .then(res => {
        // console.log(res)
        this.page = res.page
        this.total = res.total
        this.blogs = res.data
      })
  },
  methods: {
    // 拆分年 月 日
    splitDate(dateStr) {
      let dateObj = typeof dateStr === 'object' ? dataStr : new Date(dateStr)
      return {
        date: dateObj.getDate(),
        month: dateObj.getMonth() + 1,
        year: dateObj.getFullYear()
      }
    },
    onPageChange(newPage) {
      blog.getBlogsByUserId(this.user.id, { page: newPage }).then(res => {
        this.blogs = res.data
        this.total = res.total
        this.page = res.page
        // 跳转到当前用户的 第 newPage 页
        this.$router.push({ path: `/my`, query: { page: newPage}})
      })
    },
    // 删除博客，没有blogId的参数，则默认参数就是 当前的事件对象
    onDelete(blogId) {
      console.log(blogId)
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // 返回的是一个 promise对象
        return blog.deleteBlog({blogId})
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
        // 过滤掉刚刚删除的一项，避免删除之后dom依然存在
        this.blogs = this.blogs.filter(blog => blog.id !== blogId)
      })
    }
  }
}

