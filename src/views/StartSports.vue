<template>
  <div class="startsports">
    <map-container></map-container>
    <van-button round type="info">圆形按钮</van-button>
  </div>
</template>

<script>
import MapContainer from "@/components/MapContainer.vue";
export default {
  components: { MapContainer },
};
</script>

<style lang="scss" scoped>
.startsports {
  position: relative;
}
</style>