<template>
  <div class="app-container">
      <div style="margin-top:300px;margin-left:45%">{{hello}} {{world}}</div>
      <div style="margin-left:45%">
        {{world}}
        <div>{{getAddr}}</div>
      </div>

      
  
  </div>
</template>

<script>
import request from '@/utils/request' 
export default {
  name: 'tmpl',
  data () {
    return {
      hello: '',
      world: ''
    }
  },
  watch: {
    $route() {
      // 当路由变化时，调用此函数
    },
    world(val) {
      // world发生变化时
    }
  },
  computed: {
    getAddr() {
      return process.env.API_ADDR
    }
  },
  methods: {
  },
  mounted() {
    this.$store.dispatch('setService', 'hello')
    // this.$store.state.misc.service = 'hello'
    this.hello = this.$store.state.misc.service
    this.world = this.$t('common.test')

    setTimeout(() => {
        this.world = "new world"
    }, 3000)

    request({
        url: '/login',
        method: 'POST',
        params: {
          user: '111'
        }
    }).then(res => {
        console.log(res)
    })
  }
}
</script>

<style lang="less">
.ivu-modal-close {
  visibility: hidden !important;
}
</style>

<style lang="less" scoped>
@import "../theme/common.less";

</style>
