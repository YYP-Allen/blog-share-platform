import { mapActions } from 'vuex'

export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(['login']),
    // login 是一个promise对象
    onLogin() {
      this.login({username: this.username, password: this.password})
        .then(() => {
          // 跳转到首页
          this.$router.push({path: this.$route.query.redirect || '/'})
        })
      // console.log(`${this.username}:${this.password}`)
    }
  }
}