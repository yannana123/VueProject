<template>
  <div>
    <div class="article" v-if="uid">
      <!-- 顶部导航开始 -->
      <header>
        <el-page-header @click.native="$router.push(`/myfriends`)">
        </el-page-header>
      </header>
      <!-- 导航导航结束 -->
      <!-- 正文区域开始 -->
      <div class="question">
        <!-- 标题开始 -->
        <div class="question-header">
          <div class="question-header-title">
            <img src="/favicon.ico" alt="" />
          </div>
          <div class="question-header-datetime">
            <h3>小月</h3>
            <p>悦动号</p>
            <p>2020年11月30日16:49</p>
          </div>
        </div>
        <!-- 标题结束 -->
        <!-- 作者信息开始 -->
        <mt-navbar v-model="selected">
          <mt-tab-item id="1">选项一</mt-tab-item>
          <mt-tab-item id="2">选项二</mt-tab-item>
          <mt-tab-item id="3">选项三</mt-tab-item>
        </mt-navbar>
        <!-- 内容结束 -->
      </div>
      <div>
        <friends />
      </div>
    </div>
  </div>
</template>
<script>
import friends from "@/components/FriEnds.vue";
export default {
  components: { friends },
  data() {
    return {
      uid: this.$route.query.uid,
      selected: "1",
    };
  },

  mounted() {
    this.getdata();
  },
  methods: {
    getdata() {
      console.log(this.uid);
      let url = `http://127.0.0.1:3000/users/datas?uid=${this.uid}`;
      console.log(url);
      this.axios.get(url).then((res) => {
        console.log(res);
        console.log(1);
      });
    },
  },
};
</script>
<style scoped>
.article {
  background: #f6f6f6;
  height: 100vh;
}
.question-header {
  height: 200px;
  margin-bottom: 5px;
  padding: 10px;
  background: #fff;
  box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
}
.question-header-title {
  margin: 10px;
  font-size: 18px;
  color: #1a1a1a;
  line-height: 1.5;
}
.question-header-datetime {
  margin-top: 5px;
  font-size: 14px;
  color: #646464;
}
</style>