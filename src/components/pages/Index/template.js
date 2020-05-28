import blog from '@/api/blog.js'

export default {
  data() {
    return {
      blogs: [],
      total: 0,
      page: 1
    }
  },
  // created数据已经全部拿到
  created() {
    // 在没有设定参数的情况默认为首页
    this.page = parseInt(this.$route.query.page) || 1
    blog.getIndexBlogs({page: this.page}).then(res => {
      // 在控制台打印出，查看详细的res包含的属性值
      // console.log(res)
      // console.log(res.data)
      this.blogs = res.data
      this.total = res.total
      this.page = res.page
    })
  },
  methods: {
    // 页面发生改变
    onPageChange(newPage) {
      console.log('MARk', newPage)
      blog.getIndexBlogs({ page: newPage }).then(res => {
        this.blogs = res.data
        this.total = res.total
        this.page = res.page
        // 跳转第第 newPage 页
        // this.$router.push({path: `/?page=${newPage}`})
        this.$router.push({ path: `/`, query: {page: newPage}})
      })
    }
  }
}