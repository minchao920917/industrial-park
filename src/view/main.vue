/*
 * @Author: minchao 
 * @Date: 2020-07-09 23:19:55 
 * @Last Modified by: minchao
 * @Last Modified time: 2020-07-11 11:48:14
 */

<template>
  <div class="contanet">
    <div class="top">
      <van-image class="img" fit="none" src="../../static/img/main_bg.jpg" />
      <div class="icon" >
          <van-icon class="nav-icon" name="wap-nav" size=".48rem" color="#fff"/>
          <!-- <van-icon name="wap-nav" /> -->
      </div>
      
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Image as VanImage } from "vant";
import { Icon } from "vant";

Vue.use(VanImage);

Vue.use(Icon);
import { mapState } from "vuex";
export default {
  name: "index",
  data() {
    return {};
  },
  props: [],
  computed: mapState({
    // wateritem: state => state.wateritem,
    // fenglist : state => state.indexdata.styleTagList,
    // stylelist : state => state.indexdata.scaneTagList,
    // indeximg : state => state.indexdata.banner
  }),
  created() {},

  mounted() {},
  methods: {},
  components: {}
};
</script>
<style lang="less" scoped>
.contanet {
  width: 100%;
  background: #ffffff;
  .top {
    position: relative;
    left: 0;
    top: 0;
    width: 100%;
    .img {
      img {
        width: 100%;
      }
    }
    .icon {
      position: absolute;
      width: 0.78rem;
      height: 0.78rem;
      background: rgba(44, 114, 206, 0.8);
      opacity: 1;
      top: 0.38rem;
      right: 0.3rem;
      text-align: center;
      .nav-icon{
        line-height: .78rem;
      }
    }
  }
}
</style>
