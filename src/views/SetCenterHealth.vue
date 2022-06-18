<template>
  <div class="health">
    <van-nav-bar left-arrow @click-left="onLeft" title="个人健康数据" />
    <br />

    <van-field
      v-model="value1"
      label="身高"
      placeholder=" cm"
      input-align="right"
    /><van-field
      v-model="value2"
      label="体重"
      placeholder=" kg"
      input-align="right"
    />
    <van-field
      v-model="value3"
      label="跑步时长"
      placeholder="小时"
      input-align="right"
    />
    <van-field
      v-model="value4"
      label="跑步公里数"
      placeholder="km"
      input-align="right"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: "",
      value1: "",
      value2: "",
      value3: "",
      value4: "",
    };
  },
  methods: {
    onLeft() {
      this.$router.go(-1);
    },
  },

  //参数为传递的数据  getStorage
    // const value = uni.getStorageSync('storage_key');
    // if (value) {
    //         console.log(value);
    //     }
    // } catch (e) {
    //     // error
    // },



  // addUser() {
  //       var name = this.userName;
  //       var password = this.password;
  //       axios.post('http://localhost:3000/users/datas?', {
  //         username: name,
  //         password: password
  //       }, {}).then((response) => { console.log(response); })
  //     },

  //     changeMsg () {
  //       axios.get('http://localhost:3000/users/datas?').then((response) => {
  //           console.log(response)
  //           console.log('--------')
  //       })
  //     },
};

</script>

<style lang="scss" scoped>
.health {
  background-color: #282c2f;
  width: 100vw;
  height: 100vh;
}
.van-field {
  background-color: #282c2f;
  color: #a1a2a5;
}
// .van-field-label {
//   color: #e4e5e6;
// }
.van-field {
  background-color: #282c2f;
}
.van-field:after {
  border: none;
}
.van-nav-bar {
  background-color: #282c2f;
}
::v-deep .van-nav-bar .van-icon {
  color: #e4e5e6;
}
.van-nav-bar {
  background-color: #3c3f48;
}
::v-deep .van-nav-bar__title {
  color: #e4e5e6;
}

::v-deep .van-nav-bar .van-icon {
  color: #e4e5e6;
}
.van-nav-bar {
  background-color: #3c3f48;
}
::v-deep .van-nav-bar__title {
  color: #e4e5e6;
}
.van-nav-bar::after {
  border: none;
}
</style>
