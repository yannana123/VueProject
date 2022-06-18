<template>
  <div>
    <van-nav-bar
      title="跑友圈"
      left-text="返回"
      right-text="发布"
      left-arrow
      @click-left="$router.go(-1)"
      @click-right="onClickRight"
    >
    </van-nav-bar>
    <!-- 上传信息 -->
    <div class="box">
      <van-field
        v-model="fvalue"
        rows="3"
        autosize
        type="textarea"
        maxlength="100"
        placeholder="这一刻的想法..."
        show-word-limit
      />
      <!-- 图片 -->
      <van-uploader class="box_img" v-model="imgs" multiple :max-count="1" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgs: [], //图片
      fvalue: "", //内容
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push("/friendsview");
    },
    onClickRight() {
      //数据交互，图片，和内容，用户名
    },
  },
};
</script>

<style lang="scss" scoped>
.box {
  padding: 10px;
  .box_img {
    margin-top: 10px;
    margin-left: 20px;
  }
}
</style>