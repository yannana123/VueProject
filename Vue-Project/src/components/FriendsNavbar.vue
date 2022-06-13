<template>
  <!-- 友圈详情：遍历得到多组数据 -->
  <!-- 未关注 -->
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
        <span>{{ box.cuid }}</span>
        <span>{{ box.coftime }}</span>
      </div>
    </div>
    <!-- 个人心情 -->
    <div class="box_text">
      {{ box.cofword }}
    </div>
    <!-- 图片 -->
    <div class="box_img">
      <van-image width="17rem" height="17rem" fit="cover" :src="box.cofimg" />
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
          <template #icon="props" @click="getdood()">
            <img
              class="img-icon"
              :src="props.checked ? like_active : like_inactive"
            />
            <!-- 喜欢数 -->
            <span>{{ box.cofgood }}</span>
          </template>
        </van-checkbox>
      </div>
    </div>
  </div>

  <!-- 关注 -->
</template>

<script>
export default {
  props: ["box"],
  data() {
    return {
      friendsoff: '',  
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
    getgood() {},
    getBox() {
      // let url; //地址
      // let params; //值
      // this.axios.post(url, params).then((res) => {
      //   console.log(res);
      // });
    },
  },
};
</script>

<style lang="scss" scoped>
.box {
  padding: 12px;
  background-color: white;
  margin-bottom: 12px;
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
  .img-icon {
    height: 20px;
  }

  .checked {
    display: flex;
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
}
</style>