<template>
  <div class="bd">
    <!-- 导航栏 -->
    <registerNav />
    <!-- 内容 -->
    <div class="nr">
      <h3>请输入您的身高</h3>
      <van-field
        readonly
        clickable
        :value="value"
        placeholder="厘米"
        @touchstart.native.stop="show = true"
      >
        <template #button>
          <van-button size="small" type="default" @click="go">确认</van-button>
        </template>
      </van-field>
      <van-number-keyboard
        v-model="value"
        :show="show"
        :maxlength="3"
        @blur="show = false"
      />
    </div>
  </div>
</template>

<script>
import registerNav from "@/components/registerNav.vue";
export default {
  components: { registerNav },
  data() {
    return {
      value: "",
      show: false,
      value: "",
    };
  },
  methods: {
    go() {
      this.$router.push("/RegisterWeight");
    },
  },
};
</script>

<style lang="scss" scoped>
.bd {
  background-color: #000;
  width: 100vw;
  height: 100vh;
  color: #fff;
}
.nr {
  padding: 5vw;
}
.van-field {
  margin-top: 20vh;
  font-size: 1.5em;
  background-color: #000;
}
.van-number-keyboard {
  color: #000;
}
</style>
