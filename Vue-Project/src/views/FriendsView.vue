<template>
  <div>
    <van-nav-bar title="跑友圈" fixed>
      <template #right>
        <router-link to="/friendcreate">
          <van-icon name="photo-o" size="2em" />
        </router-link>
      </template>
    </van-nav-bar>
    <!-- 搜索 -->
    <form action="/" style="margin-top: 40px; width: 100vw">
      <van-search
        v-model="values"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>
    <!-- 搜索后 -->
    <div v-if="uuser">
      {{ uuser }}
      <friends-navbar />
    </div>
    <!--搜索前  关注   热门     切换 -->
    <van-tabs swipeable v-else>
      <van-tab title="热门" name="a">
        <!-- 友圈详情：遍历得到多组数据 -->
        <friends-navbar
          v-for="box in friendsbox"
          :key="box.cofgood"
          :box="box"
        />
        <div style="height: 60px"></div>
        <!-- 防止底部显示不出 -->
      </van-tab>

      <van-tab title="关注" name="b">
        <!-- 友圈详情：遍历得到多组数据 -->
        <friends-navbar />
        <div style="height: 60px"></div>
        <!-- 防止底部显示不出 -->
      </van-tab>
    </van-tabs>

    <!-- 底部 -->
    <van-tabbar fixed>
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
import FriendsNavbar from "@/components/FriendsNavbar.vue";
export default {
  components: { FriendsNavbar },
  data() {
    return {
      uname: "测试3", //用户名
      //点赞，数据库判断
      zan_checked: true,
      zan_active: require("/public/img/zan.png"),
      zan_inactive: require("/public/img/zan1.png"),
      //喜欢，数据库判断
      like_checked: true,
      like_active: require("/public/img/like.png"),
      like_inactive: require("/public/img/like-active.png"),

      //遍历的内容
      friendsbox: "",

      //搜索内容
      uuser: "", //搜索后内容绑定数据
      values: "",
    };
  },
  watch: {
    values(newvalue, oldvalue) {
      this.onSearch(newvalue);
    },
  },
  mounted() {
    this.onSearch();
    this.getBox();
  },
  methods: {
    //盒子遍历数据
    getBox() {
      // let url; //地址
      let url = "http://localhost:3000/users/friends/datas?uuid=111111";
      //值
      this.axios.get(url).then((res) => {
        console.log(res);
        this.friendsbox = res.data.msg;
      });
    },

    //搜索事件
    onSearch(val) {
      //在数据拿出uuser用户名与输入值进行对比
      console.log(val);
      const values = val;
      this.uuser = values;
    },
    onCancel() {},
  },
};
</script>

<style lang="scss" scoped>
.van-hairline--bottom:after {
  border-bottom-width: 0px;
}
</style>
<style>
body {
  background-color: whitesmoke;
}
</style>