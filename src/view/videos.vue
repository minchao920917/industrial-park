<template>
  <div class="videos">
    <!-- top start -->
    <div class="top" v-if="this.images">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image.coverPhoto" @click="clickImg(image)" class="img" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- top end -->
    <!-- 视频列表 start -->
    <ul class="videos-list">
      <li class="video" v-for="(video,index) in videoList" :key="index">
        <div class="video-title">
          <h4>{{video.title}}</h4>
          <p>{{video.createTime.slice(0,10)}}</p>
        </div>
        <video-player
          class="video-player vjs-custom-skin"
          ref="videoPlayer"
          :playsinline="true"
          :options="video.playerOptions"
        ></video-player>
      </li>
    </ul>
    <!-- 视频列表 end -->
  </div>
</template>
<script>
import Vue from "vue";
import { Image as VanImage } from "vant";
import { Icon } from "vant";
import { Col, Row } from "vant";
import { Swipe, SwipeItem } from "vant";

Vue.use(Col);
Vue.use(Row);
Vue.use(VanImage);
Vue.use(SwipeItem);

Vue.use(Icon);
import Url from "../utils/url";
export default {
  data() {
    return {
      id:this.$route.query.id,
      videoList: [],
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
      }
    };
  },
  created() {
    this.getVideosList();
    this.getAdvertisings0();
  },
  methods: {
    getAdvertisings0() {
      //首页特殊处理，根据位置依次为：0,1,2
      this.reqGet(Url.getAdvertisings + "/"+this.id+"/1", {}).then(res => {
        this.images = res.data;
        // this.categories = res.data[0].children
      });
    },
    getVideosList() {
      this.reqGet(
        Url.getArticleList + "?categoryId=" + this.$route.query.id,
        {}
      ).then(res => {
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
        console.log(this.videoList)
        // this.categories = res.data[0].children
      });
    }
  }
};
</script>
<style lang="less" scoped>
.videos {
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
  }
  //  视频列表 start
  .videos-list {
    padding: 0.3rem;
    .video {
      .video-title {
        display: flex;
        justify-content: space-between;
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
  // 视频列表 end
}
</style>