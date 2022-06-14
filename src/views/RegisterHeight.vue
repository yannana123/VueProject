<template>
  <div class="bd">
    <!-- 导航栏 -->
    <registerNav />
    <!-- 内容 -->
    <div class="nr">
      <h2>请输入您的身高</h2>
      <van-field v-model="value" placeholder="厘米">
        <template #button>
          <van-button size="normal" @click="go">确认</van-button>
        </template>
      </van-field>
    </div>
  </div>
</template>

<script>
import registerNav from "@/components/registerNav.vue";
export default {
  components: { registerNav },
  data() {
    return {
      sex: this.$route.query.sex,
      age: this.$route.query.age,
      value: "",
    };
  },
  methods: {
    go() {
      if (this.value == "") {
        this.$messagebox("注意", "身高不能为空");
      } else {
        console.log(this.value);
        this.$router.push(
          `/registerWeight?sex=${this.sex}&age=${this.age}&height=${this.value}`
        );
      }
    },
  },
};
</script>
<style>
.van-field__control {
  color: #e4e5e6;
}
</style>
<style lang="scss" scoped>
.bd {
  background-color: #282c2f;
  width: 100vw;
  height: 100vh;
  color: #e4e5e6;
}
.nr {
  padding: 5vw;
}
.van-field {
  margin-top: 20vh;
  font-size: 1.5em;
  background-color: #282c2f;
}
.van-number-keyboard {
  color: #282c2f;
}
.van-button {
  background-color: #f3bc45;
  color: #e4e5e6;
  border-color: #f3bc45;
  font-size: 16px;
}
</style>
