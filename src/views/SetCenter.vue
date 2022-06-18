<template>
  <div class="center">
    <van-nav-bar left-arrow @click-left="$router.go(-1)" title="设置" />
    <van-cell-group>
      <br />

      <van-cell title="个人健康数据" is-link to="SetCenterHealth" />
      <br />
      <van-cell title="紧急联系人" is-link to="SetCenterSos" />
      <br />
      <van-cell title="关于我们" is-link to="SetCenterUs" />
      <br />
      <van-cell title="用户协议" is-link to="SetCenterAgreement" />
      <br />
      <van-cell title="隐私" is-link to="SetCenterPrivacy" />
    </van-cell-group>
    <br />

    <van-button
      @click="logout"
      size="large"
      style="color: red; margin-top: 2rem; background-color: #282c2f"
      >退出登录</van-button
    >

    <!-- 退出登录确认框 -->
    <van-dialog
      v-model="show"
      @confirm="confirm"
      title="请确认是否退出登录"
      show-cancel-button
    >
    </van-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  methods: {
    logout() {
      this.show = true;
      console.log("退出");
    },
    confirm() {
      this.$router.push("/view");
    },
  },
};
</script>
<style lang="scss" scoped>
.center {
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
::v-deep .van-nav-bar .van-icon {
  color: #e4e5e6;
}
.van-nav-bar {
  background-color: #3c3f48;
}
::v-deep .van-nav-bar__title {
  color: #e4e5e6;
}
.van-nav-bar::after {
  border: none;
}
</style>
