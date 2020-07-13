/*
 * @Author: minchao 
 * @Date: 2020-07-12 02:35:40 
 * @Last Modified by:   minchao 
 * @Desc 政策介绍
 */
<template>
  <div class="policy">
    <!-- top start -->
    <div class="top">
      <van-image class="img" fit="none" src="../../static/img/policy/banner_bg.jpg" />

      <div class="icon">
        <van-icon class="nav-icon" name="wap-nav" size=".48rem" color="#fff" />
        <!-- <van-icon name="wap-nav" /> -->
      </div>
    </div>
    <!-- top end -->
    <!-- 政策介绍 start -->
    <ul class="policy-content">
      <li class="policy-li">
        <div class="left">
          <van-image class="img" fit="none" src="../../static/img/policy/img1.jpg" />
        </div>
        <div class="right">
          <h3>品牌战略提升樟树工业新高...</h3>
          <p class="desc">
            2010年5月中旬，“全国白酒标准
            化技术委员会特香型白酒...
          </p>
          <p class="time">2020-06-10</p>
        </div>
      </li>
      <li class="policy-li">
        <div class="left" v-if="false"></div>
        <div class="right no-img">
          <h3>樟树：工商流动执法队，为药交会站好最后一班岗</h3>
          <p class="desc">
            在第四十一界全国药交会期间，樟树市工商局执法人员开展市
            场督查活动，为药交会的成功举...
          </p>
          <p class="time">2020-06-10</p>
        </div>
      </li>
      <li class="policy-li">
        <div class="left">
          <van-image class="img" fit="none" src="../../static/img/policy/img2.jpg" />
        </div>
        <div class="right">
          <h3>品牌战略提升樟树工业新高...</h3>
          <p class="desc">
            2010年5月中旬，“全国白酒标准
            化技术委员会特香型白酒...
          </p>
          <p class="time">2020-06-10</p>
        </div>
      </li>
    </ul>
    <!-- 政策介绍 end -->
  </div>
</template>
<script>
import Vue from "vue";
import { Image as VanImage } from "vant";
import { Icon } from "vant";
import { Col, Row } from "vant";

Vue.use(Col);
Vue.use(Row);
Vue.use(VanImage);

Vue.use(Icon);
export default {
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
.policy {
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
      .nav-icon {
        line-height: 0.78rem;
      }
    }
  }
  //  政策介绍 start
  .policy-content {
    padding: 0 0.3rem;
    .policy-li {
      display: flex;
      justify-content: center;
      align-content: center;
      margin: 0.5rem 0 0.55rem 0;
      border-bottom: 1px solid rgba(0, 0, 0, 0.12);
      padding-bottom: 0.5rem;
      .right {
        width: 3.78rem;
        padding: 0 0.12rem 0 0.2rem;
        h3 {
          height: 0.37rem;
          font-size: 0.28rem;
          font-family: Microsoft YaHei;
          font-weight: 400;
          line-height: 0.37rem;
          color: rgba(51, 51, 51, 1);
        }
        .desc {
          height: 0.67rem;
          font-size: 0.24rem;
          font-family: Microsoft YaHei;
          font-weight: 400;
          line-height: 0.36rem;
          color: rgba(102, 102, 102, 1);
          margin: 0.3rem 0 0.2rem;
        }
        .time {
          width: 1.44rem;
          height: 0.31rem;
          font-size: 0.24rem;
          font-family: Microsoft YaHei;
          font-weight: 400;
          line-height: 0.31rem;
          color: rgba(173, 173, 173, 1);
        }
      }
      .no-img {
        width: 100%;
      }
    }
  }
  // 政策介绍 end
}
</style>