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

    </div>
    <!-- top end -->
    <!-- 政策介绍 start -->
    <ul class="policy-content">
       <li class="policy-li" v-for="(item,index) in records" :key="index" @click="toDetail(item)">
        <div class="left">
          <van-image v-if="!!item.thumbnail" class="img" 
          
           fit="none" :src="item.thumbnail" />
        </div>
        <div class="right" :class="{'no-img':item.thumbnail ==''}">
          <h3>{{item.title}}</h3>
          <p class="desc">
            2010年5月中旬，“全国白酒标准
            化技术委员会特香型白酒...
          </p>
          <p class="time">{{item.updateTime}}</p>
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
import Url from "../utils/url";
export default {
  data() {
    return {
      records:[]
    };
  },
  created(){
    this.getArticleList();
  },
  methods:{
    //获取文章列表
    getArticleList() {
      this.reqGet(Url.getArticleList, {}).then(res => {
        // this.images = res.data;
        this.records = res.data.records;
        // this.categories = res.data[0].children
      });
    },
    toDetail(item){
       this.$router.push({
          path: "/detail",
          query: {
            id: item.id
          }
       })
    }
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
          width: 2.44rem;
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