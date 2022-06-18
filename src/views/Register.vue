<template>
  <div class="bd">
    <!-- 导航栏 -->
    <registerNav />
    <!-- 内容 -->
    <van-form style="margin-top: 5vh">
      <van-field
        v-model="uname"
        label="用户名"
        placeholder="请输入您的用户名"
        :rules="[
          { required: true, message: '请输入用户名' },
          { pattern: /^\w{3,15}$/, message: '用户名格式不正确' },
        ]"
      />
      <van-field
        v-model="pwd"
        type="password"
        label="密码"
        placeholder="请设置您的密码"
        :rules="[
          { required: true, message: '请输入密码' },
          { pattern: /^\d{6}$/, message: '密码格式不正确' },
        ]"
      />
      <van-field
        v-model="repwd"
        type="password"
        label="密码"
        placeholder="请确认您的密码"
        :rules="[
          { required: true, message: '请输入确认密码' },
          { pattern: /^\d{6}$/, message: '密码格式不正确' },
          { validator, message: '两次密码不一致' },
        ]"
      />
      <van-field
        v-model="phone"
        label="手机号"
        placeholder="请输入您的手机号"
        :rules="[
          { required: true, message: '请输入手机号' },
          { pattern: /^1[3-9]\d{9}$/, message: '手机号格式不正确' },
        ]"
      >
        <template #button>
          <van-button size="small" @click="sendMsg" type="primary"
            >发送验证码</van-button
          >
        </template>
      </van-field>
      <!-- 验证码 -->
      <van-field
        v-model="sms"
        label="验证码"
        placeholder="请输入验证码"
        :rules="[{ required: true, message: '请输入验证码' }]"
      />

      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit" @click="regist"
          >注册</van-button
        >
      </div>
    </van-form>
  </div>
</template>
<script>
import registerNav from "@/components/registerNav.vue";
export default {
  components: { registerNav },
  data() {
    return {
      sms: "",
      uname: "",
      pwd: "",
      repwd: "",
      phone: "",
    };
  },
  methods: {
    validator() {
      return this.pwd == this.repwd;
    },
    regist() {
      if (this.uname == "" || this.uname == null) {
        this.$messagebox("警告", "用户名不能为空！");
        return;
      }
      this.axios.post("/users/checkSms", `phone=${this.phone}`).then((res) => {
        if (res.data.code == 200) {
          if (res.data.msg == this.sms) {
            let param = `uname=${this.uname}&upwd=${this.pwd}&uphone=${this.phone}`;
            this.axios.post("/users/register", param).then((res) => {
              console.log("注册结果：", res);
              if (res.data.code == 200) {
                // 注册成功
                this.$messagebox("注册成功", "恭喜！");
                this.$router.push("/registerSex");
              } else {
                // 注册失败
                this.$toast("注册失败");
              }
            });
          } else {
            this.$toast("验证码错误");
          }
        } else {
          this.$toast("请先发送短信");
        }
      });
    },
    sendMsg() {
      // 验证电话号码
       this.axios
        .get(`users/register/phone?uphone=${this.phone}`)
        .then((res) => {
          console.log(res);
          if (res.data.code == 201) {
            return;
          }
        });
      const sms = require("ali-sms");
      const accessKeyID = process.env.ALI_SMS_ACCESSKEYID;
      const accessKeySecret = process.env.ALI_SMS_ACCESSKEYSECRET;
      let phone = this.phone;
      let RandomSixStr = "";
      for (let i = 0; i < 6; i++) {
        RandomSixStr += String(Math.floor(Math.random() * 10));
      }

      const config = {
        accessKeyID: "LTAI4FqCcEPVBEio7PxVRY4c",
        accessKeySecret: "u9AI74QBN8Fzv00d8hHS3NLsUXOc3E",
        paramString: { code: RandomSixStr },
        recNum: [phone],
        signName: "星星电竞新闻网站",
        templateCode: "SMS_181191317",
      };
      sms(config, (err, body) => {
        let jsonObj = JSON.parse(body);
        // if (jsonObj.Code == "OK") {
        let param = `phone=${this.phone}&sms=${RandomSixStr}`;
        this.axios.post("/users/sendSms", param).then((res) => {
          if (res.data.code == 200) {
            // 注册成功
            this.$toast("发送成功");
            // this.$router.push("/registerSex");
          } else {
            // 注册失败
            this.$toast("该用户已存在");
          }
        });
        // }
      });
    },
    checkSms(phone) {
      let param = `phone=${phone}`;
      this.axios.post("/users/checkSms", param).then((res) => {
        if (res.data.code == 200) {
          if (res.data.msg == this.sms) {
            return success;
          } else {
            return false;
          }
        } else {
          return false;
        }
      });
    },
  },
};
</script>
<style lang="scss">
.bd {
  background-color: #282c2f;
  width: 100vw;
  height: 100vh;
  color: #e4e5e6;
}
.van-field__control {
  color: #e4e5e6;
}
.van-cell {
  background-color: #282c2f;
}
.van-cell::after {
  border: none;
}
// .van-checkbox__label > .aaaa {
//   color: #e4e5e6;
// }
.van-cell {
  margin: 10px auto;
}
.van-tabbar {
  background-color: transparent;
}
</style>
