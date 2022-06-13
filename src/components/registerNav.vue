<!--
 * @Author: Tedu 228322454@qq.com
 * @Date: 2022-06-09 18:43:00
 * @LastEditors: Tedu 228322454@qq.com
 * @LastEditTime: 2022-06-09 21:23:26
 * @FilePath: \VueProject\src\components\register_nav.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <van-nav-bar left-arrow @click-left="onClickLeft" />
  </div>
</template>

<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
.van-nav-bar {
  background-color: #282c2f;
  color: #e4e5e6;
}
::v-deep .van-nav-bar .van-icon {
  color: #aaa;
}
[class*="van-hairline"]::after {
  border: none;
}
</style>
