/*
 * @Author: minchao 
 * @Date: 2020-07-09 23:19:55 
 * @Last Modified by: minchao
 * @Last Modified time: 2020-07-10 00:43:38
 */

<template>
  <div class="contanet">
    <div class="top">
      <van-image class="img" fit="none" src="../../static/img/main_bg.jpg" />
      <div class="icon" >
          <van-icon class="nav-icon" name="wap-nav" size=".4rem" color="#fff"/>
      </div>
    </div>
    <!-- top end -->
    <!-- 园区概况 start -->
    <!-- <section class="section">
      <sectionTitle></sectionTitle>
    </section> -->
    <!-- 园区概况 end -->
  </div>
</template>

<script>
import Vue from "vue";
import { Image as VanImage } from "vant";
import { Icon } from "vant";

Vue.use(VanImage);

Vue.use(Icon);

import sectionTitle from "../components/sectionTitle"
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
  components: {
    sectionTitle
  }
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
      top: 0.38rem;
      right: 0.3rem;
      text-align: center;
      // line-height: .78rem;
      .nav-icon{
        // line-height: .78rem;
      }
    }
  }
  .section{
    width: 100%;
    overflow-x: hidden;
  }
}
</style>
