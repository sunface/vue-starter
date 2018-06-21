<template>
  <div class="index">
      <div style="margin-top:300px;margin-left:45%">Hello world</div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
    }
  },
  mounted() {
    console.log(this.$store.state.show)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import "../theme/common.less";
</style>
