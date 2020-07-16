/*
 * @Author: minchao 
 * @Date: 2020-07-09 23:19:55 
 * @Last Modified by: minchao
 * @Desc 首页
 */

<template>
  <div class="contanet">
    <!-- top start -->
    <div class="top">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image.coverPhoto" @click="clickImg(image)" class="img" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- top end -->
    <!-- 园区概况 start -->
    <div enter-active-class="animated bounceInUp" class="situation">
      <div class="situation-title">
        <div class="left">
          <span>园区概况</span>
        </div>
        <div class="right">
          <span>查看更多</span>
          <van-icon name="arrow" />
        </div>
      </div>
      <div class="situation-content">
        <p>{{content}}</p>
        <ul class="articles">
          <li class="article" v-for="(ad,index) in ad2" :key="index" @click="clickAd(ad)">
            <van-image class="image" :src="ad.coverPhoto" />
          </li>
        </ul>
        <ul class="articles">
          <li class="article" v-for="(ad,index) in ad1" :key="index" @click="clickAd(ad)">
            <van-image class="image" :src="ad.coverPhoto" />
          </li>
        </ul>
      </div>
    </div>
    <!-- 园区概况 end -->
    <!-- 园区动态 start -->
    <div class="situation">
      <div class="situation-title">
        <div class="left">
          <span>园区动态</span>
        </div>
        <div class="right">
          <span>查看更多</span>
          <van-icon name="arrow" />
        </div>
      </div>
      <div class="situation-content">
        <ul class="articles">
          <li class="article" v-for="(item,index) in records" :key="index" @click="clickAd(ad)">
            <van-image v-if="item.thumbnail" class="image" :src="item.thumbnail" />
            <div class="right">
              <h3 class="title">{{item.title}}</h3>
              <p class="desc">{{item.content}}</p>
              <p class="time">{{item.createTime.slice(0,10)}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 园区动态 end -->
    <!-- 招商合作 start -->
    <div class="situation attraction">
      <div class="situation-title">
        <div class="left">
          <span>招商合作</span>
        </div>
        <div class="right">
          <span v-if="false" @click="toPolicy('1283292656721588227')">查看更多</span>
          <van-icon v-if="false" name="arrow" />
        </div>
      </div>
      <div class="attract-content">
        <ul class="attracts animated bounceInUp">
          <li class="attract attract-red" @click="goPark('1283292657224904706')">
            <img src="../../static/kongbai.png" alt />
            <p></p>
          </li>
          <li class="attract attract-blue" @click="goPark('1283292657224904707')">
            <img src="../../static/ruyuan.png" alt />
            <p>入园流程</p>
          </li>
          <li class="attract attract-yellow" @click="goPark('1283292657350733825')">
            <img src="../../static/zhaoshang.png" alt />
            <p>招商政策</p>
          </li>
        </ul>
        <ul class="attracts animated bounceInUp">
          <li class="attract attract-green" @click="goPark('1283292657392676865')">
            <img src="../../static/dongtai.png" alt />
            <p>招商动态</p>
          </li>
          <li class="attract attract-purple" @click="goPark('1283292657128435713')">
            <img src="../../static/xiangmu.png" alt />
            <p>重点项目</p>
          </li>
        </ul>
      </div>
    </div>
    <!-- 招商合作 end -->
    <!-- 园区视频 start -->
    <div class="situation videos">
      <div class="situation-title">
        <div class="left">
          <span>园区视频</span>
        </div>
        <div class="right">
          <span @click="toPolicy('1283292656721588227')">查看更多</span>
          <van-icon name="arrow" />
        </div>
      </div>
      <div class="videos-content">
        <ul class="videos-list">
          <li class="video" v-for="(video,index) in videoList" :key="index">
            <video-player
              class="video-player vjs-custom-skin"
              ref="videoPlayer"
              :playsinline="true"
              :options="video.playerOptions"
            ></video-player>
            <div class="video-title">
              <h4>{{video.title}}</h4>
              <p>{{video.createTime.slice(0,10)}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 园区视频 end -->
    <!-- 园区服务 start -->
    <div class="situation services">
      <div class="situation-title">
        <div class="left">
          <span>园区服务</span>
        </div>
        <div class="right">
          <span v-if="false">查看更多</span>
          <van-icon v-if="false" name="arrow" />
        </div>
      </div>
      <div class="service-content">
        <ul class="services-list">
          <li class="service service-left" @click="goP('1283292657631752193')">
            <div class="restrain">
              <span>企业服务</span>
            </div>
          </li>
          <li class="service service-right" @click="goP('1283292657677889538')">
            <div class="restrain">
              <span>政务服务</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 园区服务 end -->
    <!-- 联系我们 start -->
    <div class="situation contact">
      <div class="contact-content">
        <h3>联系我们</h3>
        <p class="name">{{webSite.name}}</p>
        <p>电话：{{webSite.telPhone}}</p>
        <p>地址：{{webSite.address}}</p>
        <p>传真：{{webSite.fax}}</p>
        <p>邮箱：{{webSite.email}}</p>
      </div>
      <div class="address">
        <baidumap :map="map"></baidumap>
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
import { Swipe, SwipeItem } from "vant";
import { Lazyload } from "vant";

Vue.use(Lazyload);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Col);
Vue.use(Row);
Vue.use(VanImage);

Vue.use(Icon);

import sectionTitle from "../components/sectionTitle";
import baidumap from "../components/baidumap";
import { mapState } from "vuex";
import Url from "../utils/url";
export default {
  name: "index",
  data() {
    return {
      images: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg"
      ],
      playerOptions: {
        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: "zh-CN",
        //aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            type: "video/mp4", //这里的种类支持很多种：基本视频格式、直播、流媒体等，具体可以参看git网址项目
            src:
              "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm" //url地址
          }
        ],
        poster: "../../static/img/video-cast/video-cast.jpg", //你的封面地址
        // width: document.documentElement.clientWidth, //播放器宽度
        notSupportedMessage: "此视频暂无法播放，请稍后再试", //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true //全屏按钮
        }
      },
      content: "",
      ad1: [],
      ad2: [],
      records: [],
      videoList: [],
      webSite: {
        name: "某某园区",
        logo: "",
        copyright: "",
        telPhone: "18912341234",
        fax: "123",
        email: "123@qq.com",
        address: "江西省南昌市",
        latitude: "",
        longitude: ""
      },
      map: {
        center: { lng: "28.058492", lat: "115.566227" },
        zoom: 15,
        show: true,
        dragging: true
      }
    };
  },
  props: [],
  computed: mapState({}),
  created() {
    this.getAdvertisings0();
    this.getAdvertisings1();
    this.getAdvertisings2();
    this.getWebSite();
    this.getArticleByCategoryId();
    this.getArticleList();
    this.getArticleVideo();
  },

  mounted() {},
  methods: {
    getArticleList() {
      this.reqGet(Url.getArticleList, {
        categoryId: "1283292656721588227",
        limit: 3,
        page: 1
      }).then(res => {
        this.records = res.data.records;
      });
    },
    getArticleVideo() {
      this.reqGet(Url.getArticleList, {
        categoryId: "1283292657539477505",
        limit: 3,
        page: 1
      }).then(res => {
        console.log("article", res);

        res.data.records.map((item, index) => {
          let playerOptions = {
            playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
            autoplay: false, //如果true,浏览器准备好时开始回放。
            muted: false, // 默认情况下将会消除任何音频。
            loop: false, // 导致视频一结束就重新开始。
            preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
            language: "zh-CN",
            //aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
            fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
            sources: [
              {
                type: "video/mp4", //这里的种类支持很多种：基本视频格式、直播、流媒体等，具体可以参看git网址项目
                src: item.files //url地址
              }
            ],
            poster: item.thumbnail, //你的封面地址
            // width: document.documentElement.clientWidth, //播放器宽度
            notSupportedMessage: "此视频暂无法播放，请稍后再试", //允许覆盖Video.js无法播放媒体源时显示的默认信息。
            controlBar: {
              timeDivider: true,
              durationDisplay: true,
              remainingTimeDisplay: false,
              fullscreenToggle: true //全屏按钮
            }
          };
          item.playerOptions = playerOptions;

          this.videoList.push(item);
        });
        console.log(this.videoList);
        // this.categories = res.data[0].children
      });
    },
    getArticleByCategoryId() {
      this.reqGet(
        Url.getArticleByCategoryId + "/" + "1283292656562204674",
        {}
      ).then(res => {
        this.content = res.data.content;
      });
    },
    goP(id) {
      console.log(id)
      this.$router.push({ path: "/policy", query: id });
    },
    goPark(id) {
      console.log(id);
      this.$router.push({ path: "/policy", params: id });
    },
    clickImg(item) {
      console.log(item);
      location.href = item.link;
    },
    //获取首页的banner
    getAdvertisings0() {
      //首页特殊处理，根据位置依次为：0,1,2
      this.reqGet(Url.getAdvertisings + "/index/0", {}).then(res => {
        this.images = res.data;
        // this.categories = res.data[0].children
      });
    },
    //获取首页的广告位1
    getAdvertisings1() {
      this.reqGet(Url.getAdvertisings + "/index/1", {}).then(res => {
        console.log("1", res);
        this.ad1 = res.data;
      });
    },
    //获取首页的广告位2
    getAdvertisings2() {
      this.reqGet(Url.getAdvertisings + "/index/2", {}).then(res => {
        this.ad2 = res.data;
      });
    },
    //获取站点信息
    getWebSite() {
      this.reqGet(Url.getWebSite, {}).then(res => {
        this.webSite = res.data;
        this.map = {
          center: { lng: this.webSite.longitude, lat: this.webSite.latitude },
          zoom: 15,
          show: true,
          dragging: true
        };
      });
    },
    //点击广告位
    clickAd(item) {
      this.$router.push({
        path: "/detail",
        query: {
          id: item.id
        }
      });
    },
    //点击广告位
    toPolicy(id) {
      this.$router.push({
        path: "/policy",
        query: {
          id: id
        }
      });
    }
  },
  components: {
    sectionTitle,
    baidumap
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
      width: 100%;
    }
  }
  .situation {
    margin-top: 0.5rem;
    .situation-title {
      display: flex;
      justify-content: space-between;
      align-content: center;
      padding: 0 0.3rem;
      line-height: 0.6rem;
      .left {
        position: relative;
        width: 1.68rem;
        height: 0.6rem;
        background: #2c72ce;
        text-align: center;
        transform: skewX(-15deg);
        span {
          display: inline-block;
          font-size: 0.3rem;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #ffffff;
          transform: skewX(15deg);
        }
      }
      .left::after {
        display: inline-block;
        position: absolute;
        content: "";
        width: 0.04rem;
        height: 0.6rem;
        background: rgba(44, 114, 206, 1);
        left: 1.74rem;
      }
      .right {
        width: 5rem;
        text-align: right;
        border-bottom: 1px solid rgba(0, 0, 0, 0.12);
        font-size: 0.24rem;
        font-family: Microsoft YaHei;
        font-weight: 400;
        line-height: 0.6rem;
        color: rgba(9, 9, 9, 0.45);
        /deep/.van-icon {
          top: 0.02rem;
          font-size: 0.26rem;
        }
      }
    }
    .situation-content {
      padding: 0.3rem;
      p {
        line-height: 0.7rem;
        color: #666666;
      }
      .article-contet {
        width: 6.9rem;
        height: 2.4rem;
        font-size: 0.26rem;
        font-family: Microsoft YaHei;
        font-weight: 300;
        line-height: 0.5rem;
        color: rgba(102, 102, 102, 1);
        opacity: 1;
      }
      .img {
        margin: 0.37rem 0 0.3rem 0;
        box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.75);
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
      .articles {
        .article {
          margin-top: 0.5rem;
          display: flex;
          justify-content: space-between;
          .left {
            .img {
            }
          }
          .right {
            .title {
              width: 3.76rem;
              height: 0.37rem;
              font-size: 0.28rem;
              font-family: Microsoft YaHei;
              font-weight: 400;
              line-height: 0.37rem;
              color: rgba(51, 51, 51, 1);
              // letter-spacing:50px;
              // opacity:1;
            }
            .desc {
              width: 3.78rem;
              font-size: 0.24rem;
              font-family: Microsoft YaHei;
              font-weight: 400;
              line-height: 0.36rem;
              color: rgba(102, 102, 102, 1);
              margin: 0.32rem 0 0.21rem 0;
              // letter-spacing:50px;
              // opacity:1;
            }
            .time {
              // width:144px;
              height: 0.31rem;
              font-size: 0.24rem;
              font-family: Microsoft YaHei;
              font-weight: 400;
              line-height: 0.31rem;
              color: rgba(173, 173, 173, 1);
              // letter-spacing:50px;
              // opacity:1;
            }
          }
        }
        .article:nth-child(1) {
          margin-top: 0.2rem;
        }
      }
    }
  }
  // 招商合作 start
  .attraction {
    position: relative;
    height: 7.02rem;
    // background-color: rgba(255, 255, 255, 0.12);
    // opacity:1;
    .attract-content {
      padding: 0.55rem 0;
      .attracts {
        display: flex;
        justify-content: center;
        padding: 0 0.3rem;
        .attract {
          width: 2rem;
          height: 2rem;
          text-align: center;
          background: #ffffff;
          align-content: center;
          margin: 0.2rem 0.2rem;
          z-index: 2;
          img {
            width: 2rem;
            height: 2rem;
            display: block;
          }
          div {
            height: 0.1rem;
          }
          .attract-icon {
            margin-top: 0.5rem;
          }
          p {
            position: relative;
            bottom:0.7rem;
            font-size: 0.26rem;
            font-family: Microsoft YaHei;
            font-weight: 400;
            line-height: 0.35rem;
            color: rgba(51, 51, 51, 1);
            margin-top: 0.2rem;
          }
        }
      }
    }
  }
  .attraction::before {
    display: inline-block;
    width: 100%;
    height: 7.02rem;
    content: "";
    background-image: url("../../static/img/attract_bg.jpg");
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.4;
  }
  //招商合作 end
  // 园区视频 start
  .videos-list {
    padding: 0.3rem;
    .video {
      .video-title {
        border-bottom: 0.01rem solid #e3e3e3;
        margin-top: 0.2rem;
        h4 {
          width: 4.4rem;
          height: 0.37rem;
          font-size: 0.28rem;
          font-family: Microsoft YaHei;
          font-weight: 400;
          line-height: 0.37rem;
          color: rgba(51, 51, 51, 1);
        }
        p {
          width: 1.44rem;
          height: 0.31rem;
          font-size: 0.24rem;
          font-family: Microsoft YaHei;
          font-weight: 400;
          line-height: 0.31rem;
          padding: 0.2rem 0 0.3rem 0;
          color: rgba(173, 173, 173, 1);
        }
      }

      .video-player {
        margin-top: 0.2rem;
        .vjs-icon-placeholder {
          width: 100%;
          height: 100%;
          display: block;
        }
        /deep/ .vjs-poster {
          background-size: cover;
        }
        /deep/ .video-js {
          .vjs-big-play-button {
            // font-size:em;
            // height: 2em !important;
            width: 2em;
            border-radius: 4em;
          }
        }
      }
    }
  }
  // 园区视频 end
  //园区服务 start
  .services {
    .service-content {
      padding: 0.5rem 0;
      .services-list {
        display: flex;
        justify-content: space-evenly;
        .service {
          width: 3.35rem;
          height: 2.1rem;
          position: relative;
          .restrain {
            width: 2rem;
            height: 0.6rem;
            border: 1px solid #fff;
            border-bottom: none;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            span {
              position: absolute;
              top: 0.38rem;
              left: 50%;
              width: 1.25rem;
              height: 0.38rem;
              font-size: 0.3rem;
              font-family: Microsoft YaHei;
              font-weight: 300;
              color: rgba(255, 255, 255, 1);
              transform: translate(-50%, 0);
              &::before {
                content: "";
                position: absolute;
                height: 1px;
                width: 0.3rem;
                height: 1px;
                top: 0.22rem;
                right: -0.38rem;
                background: #fff;
              }
              &::after {
                content: "";
                position: absolute;
                height: 1px;
                width: 0.3rem;
                height: 1px;
                top: 0.22rem;
                left: -0.38rem;
                background: #fff;
              }
            }
          }
        }
        .service-left {
          background: rgba(255, 153, 0, 0.73);
          z-index: 1;
        }
        .service-left::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url("../../static/img/service/left_bg.jpg") 0 / cover;
          opacity: 0.4;
        }
        .service-right {
          background: rgba(44, 128, 255, 0.71);
        }
        .service-right::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url("../../static/img/service/right_bg.jpg") 0 / cover;
          opacity: 0.4;
        }
      }
    }
  }
  //园区服务 end
  // 联系我们 start
  .contact {
    height: 9.13rem;
    background: rgba(7, 32, 65, 1);
    .contact-content {
      // width: 100%;
      padding: 0.5rem 0.3rem 0;
      h3 {
        height: 0.47rem;
        font-size: 0.36rem;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        padding-bottom: 0.15rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.3);
      }
      p {
        height: 0.35rem;
        font-size: 0.26rem;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: rgba(255, 255, 255, 0.65);
        margin: 0.2rem 0;
      }
      .name {
        height: 0.4rem;
        font-size: 0.3rem;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        margin: 0.3rem 0;
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
