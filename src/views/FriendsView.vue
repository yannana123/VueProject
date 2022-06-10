<template>
  <div>
    <van-nav-bar title="跑友圈" left-text="返回" left-arrow>
      <template #left>
        <van-icon
          name="https://b.yzcdn.cn/vant/icon-demo-1126.png"
          size="2em"
        />
      </template>
    </van-nav-bar>
    <!-- 搜索 -->
    <van-search
      v-model="value"
      show-action
      placeholder="请输入搜索关键词"
      @search="onSearch"
    >
      <template #action>
        <div @click="onSearch">搜索</div>
      </template>
    </van-search>
    <!-- 关注   热门    现在  切换 -->

    <!-- 友圈详情 -->
    <div class="box">
      <!-- 头像 -->
      <div class="box_xq">
        <van-image
          round
          fit="cover"
          width="3rem"
          height="3rem"
          src="https://img01.yzcdn.cn/vant/cat.jpeg"
        />
        <div class="box_user">
          <span>用户名：数据库拿</span>
          <span>发布时间:数据库拿</span>
        </div>
      </div>
      <div class="box_img">
        <van-image
          width="11rem"
          height="11rem"
          fit="cover"
          src="https://img01.yzcdn.cn/vant/cat.jpeg"
        />
      </div>
      <!-- 点赞 -->
      <van-checkbox v-model="checked">
        自定义图标
        <template #icon="props">
          <img
            class="img-icon"
            :src="props.checked ? activeIcon : inactiveIcon"
          />
        </template>
      </van-checkbox>
    </div>

    <!-- 底部 -->
    <van-tabbar>
      <van-tabbar-item icon="home-o">健康</van-tabbar-item>
      <van-tabbar-item icon="location-o">附件</van-tabbar-item>
      <van-tabbar-item icon="logistics">运动</van-tabbar-item>
      <van-tabbar-item icon="friends-o">好友</van-tabbar-item>
      <van-tabbar-item icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      value: "", //搜索的内容
      //点赞
      checked: true,
      activeIcon: "https://img01.yzcdn.cn/vant/user-active.png",
      inactiveIcon: "https://img01.yzcdn.cn/vant/user-inactive.png",
    };
  },
  methods: {
    //搜索栏事件
    onSearch(val) {
      console.log(val);
      console.log(this.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.van-hairline--bottom:after {
  border-bottom-width: 0px;
}
.box {
  padding: 10px;
  .box_xq {
    display: flex;
    margin-bottom: 10px;
    .box_user {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      margin-left: 10px;
      font-size: 0.5rem;
    }
  }
}
.img-icon {
  height: 20px;
}
</style>