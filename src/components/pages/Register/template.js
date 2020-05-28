import { mapActions } from 'vuex'
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(['register']),
    // register 是一个promise对象
    onRegister() {
      this.register({username: this.username, password: this.password})
        .then(() => {
          // 调到首页
          this.$router.push({path: '/'})
        })
      // console.log(`${this.username}:${this.password}`)
    }
  }
}