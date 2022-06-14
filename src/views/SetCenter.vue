<template>
  <div>
    <van-cell-group>
      <van-cell
        icon="arrow-left"
        to="CenterView"
        title="设置"
        style="text-align: center; font-size: 1.5rem"
      />
      <br />

      <van-cell title="个人健康数据" is-link to="SetCenterHealth" />
      <van-cell title="紧急联系人" is-link to="SetCenterSos" />
      <van-cell title="关于我们" is-link to="SetCenterUs" />
      <van-cell title="用户协议" is-link to="SetCenterAgreement" />
      <van-cell title="隐私" is-link to="SetCenterPrivacy" />
    </van-cell-group>
    <br />
    <van-button
      @click="gotoLogout"
      size="large"
      style="color: red; margin-top: 2rem"
      >退出登录</van-button
    >

    <!-- 退出登录确认框 -->
    <van-dialog
      v-model="isShowLogoutModal"
      title="请确认是否退出登录"
      show-cancel-button
    >
    </van-dialog>
    <home-view></home-view>
  </div>
</template>

<script>
import HomeView from "./HomeView.vue";
export default {
  components: { HomeView },
  data() {
    return {
      isShowLogoutModal: false,
    };
  },
  methods: {
    gotoLogout() {
      (this.isShowLogoutModal = true),
        //退出登录
        console.log("执行退出登录");
    },
  },
};
</script>
<style lang="scss" scoped>
.van-icon-arrow-left {
  font-size: 1.5rem;
}
</style>