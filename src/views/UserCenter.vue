<template>
  <div>
    <van-nav-bar title="个人主页" style="border-bottom: 2px solid gray">
      <template #left>
        <van-icon name="setting-o" size="25" @click="$router.push(`/setcenter`)" />
      </template>
      <template #right class="ss">
        <img class="ok" src="../assets/imgs/sex0.png" style="width: 30px" />
      </template>
    </van-nav-bar>
    <div class="as"></div>
    <template>
      <div class="o">
        <img src="../assets/imgs/sex0.png" alt="" />

        <div><span>用户名:周克华</span> <span>ID:54088</span></div>
        <p>积分:6666</p>
      </div>
      <div class="o2"></div>
      <van-tabs v-model="active"
        ><van-tab title="我的动态"></van-tab>
        <van-tab title="好友列表" >
    
        </van-tab
      ></van-tabs>
      <div class="k">
        <template v-if="data">
          <div class="lol">
            <div class="ol" v-for="i in data.msg" :key="i.uid">
              <div>
                <div>
                  <p>{{ i.coftime.substring(5, 10) }}</p>
                  <span>{{ i.coftime.substring(11, 16) }}</span>
                </div>
                <div class="i"></div>
                <span>{{ i.cofword }}</span>
                <img src="../assets/imgs/VCG41162221489.jpg" alt="" />
                <template>
                  <el-popconfirm title="这是一段内容确定删除吗？">
                    <el-button slot="reference">删除</el-button>
                  </el-popconfirm>
                </template>
              </div>
            </div>
          </div></template
        >
      </div></template
    >
  </div>
</template>
                <!-- <p><img src="../assets/img/333.jpeg" height="200" alt="" /></p> -->


<script>

export default {

  data() {
    return {
      active: 0,
      count: 0,
      isLoading: false,
      data: null,
      show: false,
    };
  },
  methods: {
    getData() {
      const url = "http://127.0.0.1:3000/users/datas?uid=111111";
      this.axios
        .get("http://127.0.0.1:3000/users/datas?uid=111111")
        .then((res) => {
          console.log(res);
          this.data = res.data;
        });
    },

    onRefresh() {
      setTimeout(() => {
        Toast("刷新成功");
        this.isLoading = false;
        this.count++;
      }, 1000);
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style lang="scss" scoped>
.act {
  color: red;
  border-bottom: red 1px solid;
}
* {
  margin: 0;
  padding: 0;
}
body {
  background-color: rgb(161, 161, 161);
}
.o {
  margin: 5px 0;
  background-color: rgb(255, 255, 255);
  width: 100%;
  height: 10vh;
  display: flex;
  img {
    width: 20vw;
    height: 10vh;
  }
  div {
    margin: 5vw;
    span {
      display: block;
      margin: 1vh 0;
      color: black;
      font-size: 18px;
      font-weight: bold;
    }
  }
  p {
    margin: 10vw 0;
    color: gray;
    font-size: 18px;
  }
  .i {
    width: 100%;
  }
}
.o2 {
  height: 20px;
  background-color: rgb(230, 230, 230);
}
.jk {
  margin-top: 3vw;
  margin-bottom: 6vw;
  background-color: rgb(250, 249, 249);
  font-size: 5.5vw;
}
.k {
  width: 100%;
  background-color: rgba(243, 243, 243, 0.4);
}
.lol {
  height: 60vh;
  position: relative;
  font: 30px;
}
.ol {
  width: 100%;
  margin: 1vh;

  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  padding-bottom: 20px;
  border-bottom: 1px solid gray;

  div:first-child {
    width: 100%;

    text-align: center;
    p {
      font-size: 26px;
      font-family: "华文中宋";
      font-weight: bold;
    }
  }

  img {
    display: inline-block;
    width: 80%;
    height: 150px;
  }

  span {
    display: block;
    line-height: 40px;

    display: flex;
    flex-wrap: wrap;
    font-size: 19px;
  }
}
.as {
  height: 20px;
  background-color: rgb(230, 230, 230);
}
</style>