<template>
  <div>
    <!-- 二级路由 占位符 -->
    <router-view />

    <!-- 底部选项卡 -->
    <mt-tabbar v-model="tabSelected" id="tabbar">
      <mt-tab-item id="index">
        <!-- <img
          v-if="tabSelected == 'index'"
          src="@/assets/common/main_1.png"
          slot="icon"
        /> -->
        <!-- <img v-else src="@/assets/common/main_0.png" slot="icon" /> -->
        首页
      </mt-tab-item>

      <mt-tab-item id="near">
        <!-- <img
          v-if="tabSelected == 'me'"
          src="@/assets/common/me_1.png"
          slot="icon"
        /> -->
        <!-- <img v-else src="@/assets/common/me_0.png" slot="icon" /> -->
        附近
      </mt-tab-item>

      <mt-tab-item id="sport">
        <!-- <img
          v-if="tabSelected == 'me'"
          src="@/assets/common/me_1.png"
          slot="icon"
        /> -->
        <!-- <img v-else src="@/assets/common/me_0.png" slot="icon" /> -->
        运动
      </mt-tab-item>

      <mt-tab-item id="friends">
        <!-- <img
          v-if="tabSelected == 'me'"
          src="@/assets/common/me_1.png"
          slot="icon"
        /> -->
        <!-- <img v-else src="@/assets/common/me_0.png" slot="icon" /> -->
        圈子
      </mt-tab-item>

      <mt-tab-item id="user">
        <!-- <img
          v-if="tabSelected == 'me'"
          src="@/assets/common/me_1.png"
          slot="icon"
        /> -->
        <!-- <img v-else src="@/assets/common/me_0.png" slot="icon" /> -->
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabSelected: this.$route.path.split("/").pop(),
    };
  },
  watch: {
    tabSelected(newValue, oldValue) {
      console.log(oldValue, newValue);
      // console.log(this.$route.path.split("/").pop());
      if (newValue == this.$route.path.split("/").pop()) {
        return;
      }
      // this.$router.push(`/home/${newValue}`)
      if (newValue == "index") {
        this.$router.push("/home/index");
      } else if (newValue == "user") {
        this.$router.push("/home/user");
      } else if (newValue == "near") {
        this.$router.push("/home/near");
      } else if (newValue == "sport") {
        this.$router.push("/home/sport");
      } else if (newValue == "friends") {
        this.$router.push("/home/friends");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#tabbar {
  background-color: #2e3235;
  color: #a1a2a5;
  position: absolute;
  bottom: 0;
  z-index: 30;
}
.mint-tabbar > .mint-tab-item.is-selected {
  background-color: #2e3235 !important;
}
</style>
