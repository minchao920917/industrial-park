<template>
  <div class="policy">
    <!-- top start -->
    <div class="top" >
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img style="width:8rem;height:3.2rem" v-lazy="image.coverPhoto" @click="clickImg(image)" class="img" />
        </van-swipe-item>
      </van-swipe>
      <van-image v-if="this.showOne" height="3.2rem" width="8rem" src="../../static/img/article1.jpg" />
    </div>
    <!-- top end -->
    <!-- 政策介绍 start -->
    <div>
      <mescroll-vue ref="mescroll" :down="mescrollDown" :up="mescrollUp" @init="mescrollInit">
        <ul class="policy-content">
          <li
            class="policy-li"
            v-for="(item,index) in records"
            :key="index"
            @click="toDetail(item)"
          >
            <div class="left">
              <van-image
                v-if="!!item.thumbnail"
                class="img"
                style="width:3rem;height:3rem"
                :src="item.thumbnail"
              />
            </div>
            <div class="right" :class="{'no-img':item.thumbnail ==''}">
              <h3>{{item.title}}</h3>
              <p class="desc">
                2010年5月中旬，“全国白酒标准
                化技术委员会特香型白酒...
              </p>
              <p class="time">2020-07-10</p>
            </div>
          </li>
        </ul>
      </mescroll-vue>
    </div>

    <!-- 政策介绍 end -->
  </div>
</template>
<script>
import Vue from "vue";
import MescrollVue from "mescroll.js/mescroll.vue";
import { Image as VanImage } from "vant";
import { Icon } from "vant";
import { Col, Row } from "vant";
import { Swipe, SwipeItem } from "vant";
Vue.use(Col);
Vue.use(Row);
Vue.use(VanImage);
Vue.use(SwipeItem);
Vue.use(Swipe);
Vue.use(Icon);
import Url from "../utils/url";
export default {
  data() {
    return {
      showOne:false,
      records: [],
      id: this.$route.query.id,
      images: [],
      mescroll: null, // mescroll实例对象
      mescrollDown: {},
      mescrollUp: {
        callback: this.upCallback
      }
    };
  },
  watch: {
    $route(to, from) {
      if (to.query.id != from.query.id) {
        this.id = to.query.id;
        this.getArticleList(); //重新加载数据
      }
    }
  },
  components: {
    MescrollVue // 注册mescroll组件
  },
  created() {
    // this.getArticleList();
    this.getAdvertisings0();
  },
  methods: {
    getAdvertisings0() {
      //首页特殊处理，根据位置依次为：0,1,2
      this.reqGet(Url.getAdvertisings + "/" + this.id + "/1", {}).then(res => {
        this.images = res.data;
        
        if(this.images.length == 0){
          this.showOne = true
        }else{
          this.showOne = false
        }
        console.log(this.showOne)
        // this.categories = res.data[0].children
      });
    },
    mescrollInit(mescroll) {
      this.mescroll = mescroll; // 如果this.mescroll对象没有使用到,则mescrollInit可以不用配置
    },
    upCallback(page, mescroll) {
      this.reqGet(Url.getArticleList, {
        categoryId:this.id,
        limit: page.size,
        page: page.num
      }).then(res => {
        let arr = res.data.records;
        // 如果是第一页需手动置空列表
        if (page.num === 1) this.records = [];
        this.records = this.records.concat(arr);
        // 数据渲染成功后,隐藏下拉刷新的状态
        this.$nextTick(() => {
          mescroll.endSuccess(arr.length);
        });
      });
    },
    //获取文章列表
    getArticleList() {
      this.reqGet(Url.getArticleList, {
        categoryId:this.id,
        limit: 10,
        page: 1
      }).then(res => {
        // this.images = res.data;
        this.records = res.data.records;
        // this.categories = res.data[0].children
      });
    },
    toDetail(item) {
      this.$router.push({
        path: "/detail",
        query: {
          id: item.id
        }
      });
    },
    clickImg(item) {
      console.log(item);
      if (item.link != "") {
        location.href = item.link;
      }
    }
  }
};
</script>
<style lang="less" scoped>
.mescroll {
  position: fixed;
  bottom: 0.6rem;
  top: 3.2rem;
  height: auto;
}
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
        display: flex;
        flex-direction: column;
        justify-content: space-around;
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