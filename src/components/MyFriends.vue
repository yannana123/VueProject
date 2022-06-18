<template>
  <div>
    <template v-if="!data">
      <div>你没有好友了</div>
    </template>

    <template v-else>
      <van-swipe-cell
        v-for="items in data.msg"
        :key="items.uid"
        :id="items.uid"
        @click.native="$router.push(`/mydata?uuid=${items.uid}`)"
        :article="items"
      >
        <van-card
          none
          :desc="items.uheight"
          :title="items.uname"
          class="goods-card"
          :thumb="items.uimg"
        />
        <template #right>
          <van-button
            square
            text="删除"
            type="danger"
            @click="getbes(items.uid)"
            class="delete-button"
          />
        </template>
      </van-swipe-cell>
    </template>
  </div>
</template>


</div>
</template>

<script>
export default {
  data() {
    return {
      data: null,
      uuid:''
  
    };
  },
  watch: {},
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      // 获取朋友列表
      let url = `http://127.0.0.1:3000/users/friends?uuid=${this.uuid}`;
      this.axios.get(url).then((res) => {
        console.log(res.data.msg);
        this.data = res.data;
      });
    },
    getbes(fid) {
      // 删除好友
      // console.log(uid)
      const params=`fid=${fid}`
      this.axios.post("/users/friends/del",params).then((result) => {
        console.log(result);
        if (result.data.code == 200) {
          console.log("删除成功");
          this.getData();
        } else {
          console.log("删除失败");
          console.log(uid);
        }
      });
    },

  },
};
</script>

<style>
.van-card__thumb img {
  display: table-cell;
  border-radius: 50%;
}
.delete-button {
  height: 100%;
}
.goods-card {
  margin: 0;
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  padding: 8px 10px;
  background: #fff;
  box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
}
</style>

