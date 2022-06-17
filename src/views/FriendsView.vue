<template>
  <div>
    <div class="mine">
      <van-nav-bar title="跑友圈" fixed>
        <template #right>
          <router-link to="/friendcreate">
            <van-icon name="photo-o" size="2em" />
          </router-link>
        </template>
      </van-nav-bar>
    </div>
    <!-- 搜索 -->
    <form action="/" style="margin-top: 40px; width: 100vw">
      <van-search
        v-model="values"
        show-action
        background="#282B30"
        placeholder="看看好友动态"
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>
    <!-- 搜索后 -->
    <div v-if="uuser">
      <friends-navbar
        v-for="(box, index) in friendsbox"
        :key="index"
        :box="box"
        v-show="uuser == box.cuid"
      />
      <div style="height: 60px"></div>
    </div>
    <!--搜索前  关注   热门     切换 -->
    <van-tabs
      swipeable
      v-else
      background="#282B30"
      color="yellow"
      title-inactive-color="gray"
      title-active-color="white"
    >
      <van-tab title="热门" name="a">
        <!-- 友圈详情：遍历得到多组数据 -->
        <friends-navbar
          v-for="(box, index) in friendsbox"
          :key="index"
          :box="box"
        />
        <div style="height: 60px"></div>
        <!-- 防止底部显示不出 -->
      </van-tab>

      <van-tab title="关注" name="b">
        <!-- 友圈详情：遍历得到多组数据 -->
        <!-- v-show="box.like == true"  关注了才显示 -->
        <friends-navbar
          v-for="(box, index) in friendsbox"
          :key="index"
          :box="box"
          v-show="box.like == true"
        />
        <div style="height: 60px"></div>
        <!-- 防止底部显示不出 -->
      </van-tab>
    </van-tabs>

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
    // this.onSearch();
    this.getBox();
  },
  methods: {
    //盒子遍历数据
    getBox() {
      // let url; //地址
      let url = "http://localhost:3000/users/friends/hotdatas";
      //值
      this.axios.get(url).then((res) => {
        console.log(res);
        this.friendsbox = res.data.msg;
      });
    },

    //搜索事件
    onSearch(val) {
      // 在数据拿出uuser用户名与输入值进行对比
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
.van-nav-bar {
  background-color: #282b30;
}
</style>
<style>
body {
  background-color: #23272a;
}
</style>