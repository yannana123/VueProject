<template>
  <div class="us">
    <van-nav-bar left-arrow @click-left="onLeft" title="关于我们" />
    <van-cell-group>
      <br />


      <van-cell title="关注夜跑微博" is-link />
      <van-cell title="商务合作" is-link />
      <van-cell title="企业夜跑合伙人" is-link />
      <van-cell title="官方客服热线" is-link />
      <van-cell title="证照信息" is-link />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  methods: {
    onLeft() {
      this.$router.go(-1);
    },
  },
};
</script>


<style lang="scss" scoped>
.us {
  background-color: #282c2f;
  width: 100vw;
  height: 100vh;
}
.van-cell {
  background-color: #3c3f48;
  color: #e4e5e6;
}
.van-cell-group {
  background-color: #282c2f;
}
.van-cell::after {
  border: none;
}
.van-cell-group:after {
  border: none;
}
.van-nav-bar {
  background-color: #3c3f48;
}
::v-deep .van-nav-bar .van-icon {
  color: #e4e5e6;
}
::v-deep .van-nav-bar__title {
  color: #e4e5e6;
}
.van-nav-bar::after {
  border: none;
}
</style>
