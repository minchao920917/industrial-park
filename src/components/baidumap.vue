<template>
  <baidu-map class="map" :center="map.center" :zoom="map.zoom" @ready="handler">
    <!--缩放-->
    <bm-navigation anchor="BMAP_ANCHOR_TOP_LEFT"></bm-navigation>
    <!--定位-->
    <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
    <!--点-->
    <bm-marker :position="map.center" :dragging="map.dragging" animation="BMAP_ANIMATION_DROP">
      <!--提示信息-->
      <bm-info-window class="map-tips" :show="map.show">江西樟树工业园</bm-info-window>
    </bm-marker>
  </baidu-map>
</template>
<script>
export default {
  name: "baidumap",
  props: {
    map: {
      type: Object,
      default: {}
    },

  },
  whatch:{
    // longitude(val){
    //   this.map = {
    //       center: { lng: val, lat: this.latitude },
    //     zoom: 15,
    //     show: true,
    //     dragging: true
    //   }
    // }
  },
  data() {
    return {
      // map: {
      //   center: { lng: this.longitude, lat: this.latitude },
      //   zoom: 15,
      //   show: true,
      //   dragging: true
      // }
    };
  },

  methods: {
    handler({ BMap, map }) {
      let me = this;
      console.log(BMap, map);
      // 鼠标缩放
      map.enableScrollWheelZoom(true);
      // 点击事件获取经纬度
      map.addEventListener("click", function(e) {
        console.log(e.point.lng, e.point.lat);
      });
    }
  }
};
</script>
 
<style scoped lang="less">
.map {
  width: 100%;
  height: 4rem;
  /deep/ .map-tips{
    margin-top:16px;
  }
}
</style>