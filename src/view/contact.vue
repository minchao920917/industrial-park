/*
 * @Author: minchao 
 * @Date: 2020-07-12 02:33:19 
 * @Last Modified by:   minchao 
 * @Desc 联系我们
 */
<template>
  <div class="contact">
    <!-- top start -->
    <div class="top">
      <van-image class="img" fit="none" src="../../static/img/contact/contact_banner.jpg" />
      <div class="icon">
        <van-icon class="nav-icon" name="wap-nav" size=".48rem" color="#fff" />
        <!-- <van-icon name="wap-nav" /> -->
      </div>
    </div>
    <!-- top end -->
    <!-- 联系我们 start -->
    <div class="contact-us">
      <div class="contact-content">
        <h3>江西樟树工业园</h3>
        <!-- <p class="name">江西樟树工业园</p> -->
        <p>电话：0795-7853281</p>
        <p>地址：樟树市四特大道288正南方向105米</p>
        <p>传真：0795-7853281</p>
        <p>邮箱：zsgyy@163.com</p>
      </div>
      <div class="address">
        <van-image class="img" fit="cover" src="../../static/img/contact/address.jpg" />
      </div>
    </div>
    <!-- 联系我们 end -->
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
.contact {
  width: 100%;
  background: #ffffff;
  .top {
    position: relative;
    left: 0;
    top: 0;
    width: 100%;
    height: 3.2rem;
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
  // 联系我们 start
  .contact-us {
    height: 9.13rem;
    background: #fff;
    .contact-content {
      // width: 100%;
      padding: 0.5rem 0.3rem 0.5rem 0.3rem;
      h3 {
        height: 0.47rem;
        font-size: 0.36rem;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: rgba(0, 0, 0, 0.85);
        padding-bottom: 0.15rem;
        border-bottom: 1px solid rgba(0, 0, 0, 0.15);
        margin-bottom: 0.3rem;
      }
      p {
        height: 0.35rem;
        font-size: 0.26rem;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: rgba(0, 0, 0, 0.45);
        margin: 0.2rem 0;
      }
    }
    .address {
      padding: 0 0.22rem;
      .img {
        width: auto;
        height: 4rem;
      }
    }
  }
  // 联系我们 end
}
</style>