 <!-- 废弃 未用到 -->
<template>
  <div class="introduce">
    <!-- top start -->
    <div class="top introduce-top">
      <div class="top-title">
        <h4>园区介绍</h4>
        <p>Introduction</p>
      </div>

    </div>
    <!-- top end -->
    <!-- 园区介绍 start -->
    <div class="introduce-content">
      <van-image class="img" fit="none" src="../../static/img/introduce/banner_bg.jpg" />
      <p
        class="p"
      >樟树市经济技术开发区由城北工业园、福城医药工业园、新基山盐化工业基地（二园一地）三部分组成。总体规划面积25.65平方公里，入园企业119家，其中投产企业102家，在建企业17家，2007年实现工业产值455970万元，销售收入480624万元，上交税金31857万元。</p>
      <van-row class="cross">
        <van-col class="cross-box cross-first" span="12">
          <p class="cross-title">
            2001
            <span>年</span>
          </p>
          <p class="cross-mean">成立时间</p>
        </van-col>
        <van-col class="cross-box cross-two" span="12">
          <p class="cross-title">
            25.65
            <span>平方公里</span>
          </p>
          <p class="cross-mean">面积</p>
        </van-col>
        <van-col class="cross-box cross-three" span="12">
          <p class="cross-title">
            230
            <span>家</span>
          </p>
          <p class="cross-mean">企业数量</p>
        </van-col>
        <van-col class="cross-box cross-four" span="12">
          <p class="cross-title">
            107.6
            <span>亿元</span>
          </p>
          <p class="cross-mean">工业产值</p>
        </van-col>
      </van-row>
      <div class="div" style="margin-top:.2rem">
        <h3>一、城北工业园</h3>
        <p>城北工业园位于樟树市城区北郊张家山街道境内，2001年10月规划兴建，总体规划面积9.7平方公里，已开发面积3.2平方公里，已完成“七通一平”基础设施建设和占地30亩的园区广场绿化、亮化、景观工程；园内长约20公里的“七纵四横”水泥道路网络已竣工通车，架设了15公里长的电力、电信、移动、广电管线，建成了日供水量1万吨的自来水厂，11万千伏安的供电站已竣工使用，市区中心至园区的城北大道（46米宽）已全线通车，园区整体环境评估已经通过上级评审。2006年3月被列为省级工业园，2007年12月被列为省级民营科技园。</p>
      </div>
    </div>
    <!-- 园区介绍 end -->
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
.introduce {
  width: 100%;
  background: #ffffff;
  .top {
    position: relative;
    left: 0;
    top: 0;
    width: 100%;
    .top-title {
      padding: 0.3rem 0;
      h4 {
        height: 0.44rem;
        font-size: 0.44rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        line-height: 0.75rem;
        color: rgba(51, 51, 51, 1);
        text-align: center;
      }
      p {
        height: 0.24rem;
        font-size: 0.24rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        line-height: 0.41rem;
        color: rgba(153, 153, 153, 1);
        text-align: center;
        margin: 0.1rem 0;
      }
    }
    .img {
      img {
        width: 100%;
      }
    }

  }
  //  园区介绍 start
  .introduce-content {
    padding: 0 0.3rem;
    p {
      margin-top: 0.3rem;
      height: 2.94rem;
      font-size: 0.26rem;
      font-family: Microsoft YaHei;
      font-weight: 400;
      line-height: 0.5rem;
      color: rgba(102, 102, 102, 1);
    }
    .cross {
      .cross-box {
        height: 1.54rem;
        .cross-title {
          text-align: center;
          // width:133px;
          height: 0.67rem;
          font-size: 0.6rem;
          font-family: Arial;
          font-weight: 400;
          // line-height:.69rem;
          color: rgba(44, 114, 206, 1);
          // opacity:1;
          span {
            // width:24px;
            height: 0.3rem;
            font-size: 0.24rem;
            font-family: Microsoft YaHei;
            font-weight: 300;
            vertical-align: text-top;
            // line-height:.31rem;
            color: rgba(0, 0, 0, 0.45);
            // opacity:1;
          }
        }
        .cross-mean {
          // width:96px;
          margin-top: 0;
          text-align: center;
          height: 0.31rem;
          font-size: 0.24rem;
          font-family: Microsoft YaHei;
          font-weight: 400;
          // line-height:31px;
          color: rgba(0, 0, 0, 0.45);
          // opacity:1;
        }
      }
      .cross-first,
      .cross-two {
        border-bottom: 1px solid rgba(0, 0, 0, 0.12);
      }
      .cross-first,
      .cross-three {
        border-right: 1px solid rgba(0, 0, 0, 0.12);
      }
      .cross-three,
      .cross-four {
        padding-top: 0.4rem;
      }
    }
    .div {
    //   margin-top: 0.5rem;
      h3 {
        margin: 0.7rem 0 .5rem 0;
        font-size: 0.26rem;
        font-family: Microsoft YaHei;
        font-weight: 400;
        line-height: 0.5rem;
        color: rgba(102, 102, 102, 1);
      }
      p{
          height: auto;
      }
    }
  }
  // 园区介绍 end
}
</style>