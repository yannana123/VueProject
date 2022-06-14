<template>
  <div id="container"></div>
</template>

<script>
import AMapLoader from "@amap/amap-jsapi-loader";
window._AMapSecurityConfig = {
  securityJsCode: "395a3a0d5f5f1e2b5021b47fcf2b28a1",
};
export default {
  data() {
    return {
      map: null,
    };
  },
  mounted() {
    AMapLoader.load({
      key: "f5707490e23065a6760af758aa723d4d", // 申请好的Web端开发者Key，首次调用 load 时必填
      version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
      plugins: ["AMap.Geolocation"], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
    })
      .then((AMap) => {
        // let geoloc = window.navigator.geolocation;
        // geoloc.getCurrentPosition(function (res) {
        //   let lat = res.coords.latitude; //获取纬度
        //   let lng = res.coords.longitude; //获取经度
        //   console.log(lat, lng);
        // });
        this.map = new AMap.Map("container", {
          //设置地图容器id
          viewMode: "3D", //是否为3D地图模式
          zoom: 15, //初始化地图级别
          //初始化地图中心点位置
        });
        AMap.plugin("AMap.Geolocation", function () {
          var geolocation = new AMap.Geolocation({
            // 是否使用高精度定位，默认：true
            enableHighAccuracy: true,
            // 设置定位超时时间，默认：无穷大
            timeout: 10000,
            // 定位按钮的停靠位置的偏移量
            offset: [10, 20],
            //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
            zoomToAccuracy: true,
            //  定位按钮的排放位置,  RB表示右下
            position: "RB",
            showCircle: true, //定位成功后用圆圈表示定位精度范围，默认：true
            showButton: true, //显示定位按钮，默认：true
            showMarker: true, //定位成功后在定位到的位置显示点标记，默认：true
          });
          geolocation.getCurrentPosition(function (status, result) {
            if (status == "complete") {
              onComplete(result);
            } else {
              onError(result);
            }
          });

          function onComplete(data) {
            // data是具体的定位信息
            console.log(data);
          }

          function onError(data) {
            // 定位出错
          }
        });
      })
      .catch((e) => {
        console.log(e);
      });
  },
};
</script>

<style lang="scss" scoped>
#container {
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: 100vh;
}
</style>