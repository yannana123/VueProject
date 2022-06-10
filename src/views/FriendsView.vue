<template>
  <div>
    <van-nav-bar title="跑友圈">
      <template #right>
        <router-link to="/friendcreate">
          <van-icon name="photo-o" size="2em" />
        </router-link>
      </template>
    </van-nav-bar>
    <!-- 搜索 -->
    <form action="/">
      <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>
    <!-- 关注   热门     切换 -->
    <van-tabs swipeable>
      <van-tab title="关注" name="a">
        <!-- 友圈详情：遍历得到多组数据 -->
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
              <span>用户名：数据库拿111</span>
              <span>发布时间:数据库拿</span>
            </div>
          </div>
          <!-- 个人心情 -->
          <div class="box_text">
            阿斯顿发送到发送到发送到阿斯蒂芬阿斯蒂芬，阿斯蒂芬阿斯蒂芬阿斯蒂芬阿斯蒂芬阿萨德阿斯蒂芬阿萨。
          </div>
          <!-- 图片 -->
          <div class="box_img">
            <van-image
              width="17rem"
              height="17rem"
              fit="cover"
              src="https://img01.yzcdn.cn/vant/cat.jpeg"
            />
          </div>
          <van-divider />
          <!-- 点赞 -->
          <div class="checked">
            <div class="checkedimg">
              <van-checkbox v-model="zan_checked">
                <template #icon="props">
                  <img
                    class="img-icon"
                    :src="props.checked ? zan_active : zan_inactive"
                  />
                  <span>赞数</span>
                </template>
              </van-checkbox>
            </div>
            <div class="checkedimg">
              <van-checkbox v-model="like_checked">
                <template #icon="props">
                  <img
                    class="img-icon"
                    :src="props.checked ? like_active : like_inactive"
                  />
                  <span>喜欢</span>
                </template>
              </van-checkbox>
            </div>
          </div>
        </div>
      </van-tab>

      <van-tab title="热门" name="b">
        <!-- 友圈详情：遍历得到多组数据 -->
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
              <span>用户名：数据库拿222</span>
              <span>发布时间:数据库拿222</span>
            </div>
          </div>
          <!-- 个人心情 -->
          <div class="box_text">
            阿给对方是个啥地方官单方事故森岛帆高森岛帆高水电费告诉对方告诉对方感受到法规森岛帆高
          </div>
          <!-- 图片 -->
          <div class="box_img">
            <van-image
              width="17rem"
              height="17rem"
              fit="cover"
              :src="require('/public/img/weather/100.png')"
            />
          </div>
          <van-divider />
          <!-- 点赞 -->
          <div class="checked">
            <div class="checkedimg">
              <van-checkbox v-model="zan_checked">
                <template #icon="props">
                  <img
                    class="img-icon"
                    :src="props.checked ? zan_active : zan_inactive"
                  />
                  <span>赞数</span>
                </template>
              </van-checkbox>
            </div>
            <div class="checkedimg">
              <van-checkbox v-model="like_checked">
                <template #icon="props">
                  <img
                    class="img-icon"
                    :src="props.checked ? like_active : like_inactive"
                  />
                  <span>喜欢</span>
                </template>
              </van-checkbox>
            </div>
          </div>
        </div>
      </van-tab>

      <van-tab title="搜索" name="c"> 测试3 </van-tab>
    </van-tabs>

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
      uname: "测试3", //用户名
      //点赞，数据库判断
      zan_checked: true,
      zan_active: require("/public/img/zan.png"),
      zan_inactive: require("/public/img/zan1.png"),
      //喜欢，数据库判断
      like_checked: true,
      like_active: require("/public/img/like.png"),
      like_inactive: require("/public/img/like-active.png"),
    };
  },
  methods: {
    //搜索事件
    onSearch(val) {},
    onCancel() {},
  },
};
</script>

<style lang="scss" scoped>
.van-hairline--bottom:after {
  border-bottom-width: 0px;
}
.box {
  padding: 10px;
  background-color: white;
  margin-bottom: 10px;
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
  .box_text {
    font-size: 1rem;
    margin-bottom: 10px;
  }
  .box_img {
    text-align: center;
  }
}
.img-icon {
  height: 20px;
}
.checked {
  display: inline-flex;
  justify-content: space-evenly;
  .checkedimg {
    width: 50vw;
    .van-checkbox {
      padding: 0 0 0 15vw;
    }
    span {
      font-size: 0.8rem;
      vertical-align: middle;
    }
  }
}
</style>
<style>
body {
  background-color: whitesmoke;
}
</style>