<template>
  <div>
    <van-nav-bar
      title="标题"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <!-- 关注   热门    现在  切换 -->
    <van-tabs swipeable>
      <van-tab v-for="index in 3" :title="'选项 ' + index" :key="index">
        内容 {{ index }}
        <div>
          <img
            src="../assets/logo.png"
            width="30px"
            style="border-radius: 50%"
            alt="头像加载中"
          />
          <span>名字</span>
          <span>2022年6月10日</span>
          <!-- 遍历图片 -->
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { Tab, Tabs } from "vant";
export default {
  data() {
    return {
      img: null,
    };
  },
  mounted() {
    this.keepimg();
  },
  ///写到着了大声道发生的发送大声道发生的发
  methods: {
    keepimg() {
      this.axios.get("https://xxx.xxx/acgurl.php").then((res) => {
        console.log(res);
      });
    },
    setClass(length, index) {
      //传入图片数量，和渲染的第几张图片
      if (length == 1) {
        //1张图片时
        return "img-w1";
      }
      if (length == 2 || length == 4) {
        //2或4张图片时
        return "img-w2";
      }
      if (length == 3) {
        // 3张图片时
        if (index == 1) {
          return "img-w1-1";
        } else {
          return "img-w2";
        }
        //返回第一张图片的类名和其他类名
      }
      if (length == 5 || length == 8) {
        // 5或8张图片时
        if (index == 1 || index == 2) {
          return "img-w2";
        } else {
          return "img-w3";
        }
        //第一张和第二张图片用相同的样式,
      }
      if (length == 6 || length == 9) {
        // 6或9张图片时
        return "img-w3";
      }
      if (length == 7) {
        // 7张图片时
        if (index == 1) {
          return "img-w1-1";
        } else {
          return "img-w3";
        }
      }
    },
    onClickLeft() {},
    onClickRight() {},
  },
};
</script>

<style lang="scss" scoped>
.img_box {
  width: 100%;
  max-height: 65vh; //设置最大高度，
  display: flex;
  flex-wrap: wrap; //允许换行
  img {
    width: 100%;
    height: 100%;
    object-fit: cover; //	保持原有尺寸比例。但部分内容可能被剪切。
  }
}
.img-w1 {
  //一张图片时
  margin: 0 auto;
  box-sizing: border-box;
}
.img-w2 {
  //2或4张图片时，5或8张图片的前两张图片时
  width: 50%;
  height: 25vh;
  padding: 2px;
  box-sizing: border-box;
}
.img-w1-1 {
  //3或7张图片的第一张图片时
  width: 100%;
  max-height: 28vh;
  padding-bottom: 2px;
  box-sizing: border-box;
  img {
    object-fit: contain; //	保持原有尺寸比例。内容被缩放。
  }
}
//6或9张图片时，5张图片的第3-5张图片时，7张图片的第2-7张图片时，8张图片的第3-8张图片时
.img-w3 {
  width: 33%;
  height: 18vh;
  padding: 2px;
  box-sizing: border-box;
}
</style>