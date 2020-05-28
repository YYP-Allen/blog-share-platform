import blog from '@/api/blog'

export default {
  data () {
    return {
      blogs: [],
      user: {},
      page: 1,
      total: 0
    }
  },
  created() {
    this.userId = this.$route.params.userId
    // 设定默认的this.page
    this.page = this.$route.query.page || 1
    blog.getBlogsByUserId(this.userId, {page: this.page})
      .then(res => {
        // console.log(res)
        this.page = res.page
        this.total = res.total
        this.blogs = res.data
        if(res.data.length > 0) {
          this.user = res.data[0].user
        }
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
      blog.getBlogsByUserId(this.userId, { page: newPage }).then(res => {
        this.blogs = res.data
        this.total = res.total
        this.page = res.page
        this.$router.push({ path: `/user/${this.userId}`, query: { page: newPage}})
      })
    }
  }
}

