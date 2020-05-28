import blog from '@/api/blog'
export default {
  data () {
    return {
      title: '',
      description: '',
      content: '',
      atIndex: false
    }
  },
  created() {
    this.blogId = this.$route.params.blogId
    blog.getDetail({blogId: this.blogId}).then(res => {
      this.title = res.data.title
      this.content = res.data.content
      this.description = res.data.description
      this.atIndex = res.data.atIndex
    })
  },
  methods: {
    onEdit () {
      blog.updateBlog({blogId: this.blogId}, {title: this.title, content: this.content, description: this.description, atIndex: this.atIndex})
        .then(res => {
          // 创建博客成功
          this.$message.success(res.msg)
          // 成功后跳转到刚创建的博客详情页
          this.$router.push({path: `/detail/${res.data.id}`})
        })
    }
  }
}