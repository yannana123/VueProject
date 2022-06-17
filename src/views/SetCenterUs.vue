<template>
  <div>
    <van-cell-group>
      <van-cell
        icon="arrow-left"
        to="setcenter"
        title="关于我们"
        style="text-align: center; font-size: 1.5rem"
      />
      <br />

      <van-cell title="关注夜跑微博" is-link />
      <van-cell title="商务合作" is-link />
      <van-cell title="企业夜跑合伙人" is-link />
      <van-cell title="官方客服热线" is-link />
      <van-cell title="证照信息" is-link />
    </van-cell-group>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.van-icon-arrow-left {
  font-size: 1.5rem;
}
</style>
