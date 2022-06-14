<!--
 * @Author: Tedu 228322454@qq.com
 * @Date: 2022-06-14 12:57:30
 * @LastEditors: Tedu 228322454@qq.com
 * @LastEditTime: 2022-06-14 13:56:25
 * @FilePath: \VueProject\src\views\RegisterSex.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="bd">
    <!-- 导航栏 -->
    <registerNav />
    <!-- 内容 -->
    <div class="nr">
      <h2>个性化您的夜跑</h2>
      <div class="words">
        夜跑需要了解一些您的信息，从而更精准的计算你的运动数据，提供更适合您的运动建议。
      </div>
      <h3>您的性别是：</h3>
      <div class="sex">
        <van-radio-group v-model="radio" direction="horizontal" class="imgs">
          <van-radio name="1">
            男
            <template #icon="props">
              <img
                class="img-icon"
                :src="
                  props.checked
                    ? require('/public/img/sex0.png')
                    : require('/public/img/man0.png')
                "
              />
            </template>
          </van-radio>
          <van-radio name="0">
            女
            <template #icon="props">
              <img
                class="img-icon"
                :src="
                  props.checked
                    ? require('/public/img/sex1.png')
                    : require('/public/img/woman1.png')
                "
              />
            </template>
          </van-radio>
          <van-button size="normal" @click="go">确认</van-button>
        </van-radio-group>
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
      radio: "",
    };
  },
  methods: {
    go() {
      console.log(this.radio);
      this.$router.push(`/registerAge?sex=${this.radio}`);
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
.words {
  color: #aaa;
}
.img-icon {
  height: 20px;
}
.imgs {
  display: flex;
  justify-content: center;
  margin-top: 40vh;
}
.van-button {
  background-color: #f3bc45;
  color: #e4e5e6;
  border-color: #f3bc45;
  font-size: 16px;
}
</style>
