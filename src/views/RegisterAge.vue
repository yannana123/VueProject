<template>
  <div class="bd">
    <!-- 导航栏 -->
    <registerNav />
    <!-- 内容 -->
    <div class="nr">
      <h2>请选择您的出生日期：</h2>
      <div class="age">
        <!-- input框 -->
        <!-- <van-field :value="val" /> -->
        <!-- 日期选择器 -->
        <van-datetime-picker
          v-model="currentDate"
          type="date"
          :min-date="minDate"
          :max-date="maxDate"
          @confirm="click"
        />
      </div>
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
      minDate: new Date(1900, 0, 1),
      maxDate: new Date(),
      currentDate: new Date(),
    };
  },
  methods: {
    click(d) {
      let age =
        d.getFullYear() +
        "-" +
        (d.getMonth() + 1 < 10 ? "0" + (d.getMonth() + 1) : d.getMonth() + 1) +
        "-" +
        (d.getDate() + 1 < 10 ? "0" + (d.getDate() + 1) : d.getDate() + 1);
      console.log(age);
      this.$router.push(`/registerHeight?sex=${this.sex}&age=${age}`);
    },
  },
};
</script>

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
</style>
