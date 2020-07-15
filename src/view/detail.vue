/*
 * @Author: minchao 
 * @Date: 2020-07-12 02:33:51 
 * @Last Modified by:   minchao 
 * @Desc 详情页面
 */
<template>
  <div class="article">
    <div class="article-head">
      <h3 class="title">樟树市鼓励外商投资若干规定</h3>
      <p class="time">2020-06-10</p>
    </div>
    <div class="article-content">
      <van-image class="img" fit="none" src="../../static/img/detail/main_bg.jpg" />
      <p>
        第一条 为进一步加大我市开放型经济发展步伐，鼓励国
        内外客商前来投资，根据国家、省、宜春市有关法律、法
        规和文件精神，结合我市实际，特制定本规定。
      </p>
      <p>
        第二条 本规定中所指外商是指中华人民共和国境外（含
        港澳台）投资企业、社会团体和个人，国内企业、社会团
        体和个人在我市投资项目的，经市外经贸委登记备案，报
        市政府批准后，参照本规定执行。
      </p>
      <p>
        第三条 外商可以投资经营国家没有明令禁止的任何行业、项目、商品和服务，自主确定经营方式。
        第四条 凡投资的项目应符合国家产业政策，符合“环境
        友好型、资源节约型”的科学发展要求。
      </p>
    </div>
    <div class="article-attach">
      <div class="left">附件：</div>
      <ul class="attach-list">
        <li>
          <van-image class="img" fit="cover" src="../../static/img/detail/word.png" />
          <p>关于XXXXXXXXXXXXXXXXXXXXXXX....xlsx</p>
        </li>
        <li>
          <van-image class="img" fit="cover" src="../../static/img/detail/office.png" />
          <p>关于XXXXXXX的文档.doc</p>
        </li>
        <li>
          <van-image class="img" fit="cover" src="../../static/img/detail/pptx.png" />
          <p>关于XXXXXXX的文档.pptx</p>
        </li>
        <li>
          <van-image class="img" fit="cover" src="../../static/img/detail/pdf.png" />
          <p>关于XXXXXXX的文档.pdf</p>
        </li>
      </ul>
    </div>
    <div class="article-next">
      <p>
        <span>上一篇：</span>
        <a href>樟树门户是最好的门户网站</a>
      </p>
      <p>
        <span>下一篇：</span>
        <a href>樟树门户是最好的门户网站</a>
      </p>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Image as VanImage } from "vant";

Vue.use(VanImage);

import { maßpState } from "vuex";
import Url from "../utils/url";
export default {
  data() {
    return {};
  },
  created(){
    this.getArticleByArticleId()
  },
  methods:{
    getArticleByArticleId(){
      this.reqGet(Url.getArticleByArticleId+"/"+this.$route.query.id,{
      }).then(res=>{
        console.log("res",res);
        // this.categories = res.data[0].children
      })
    }
  }
};
</script>
<style lang="less" scoped>
.article {
  padding: 0 0.3rem;
  .article-head {
    margin: 0.3rem 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    .title {
      // width:490px;
      height: 0.47rem;
      font-size: 0.36rem;
      font-family: Microsoft YaHei;
      font-weight: 400;
      line-height: 0.47rem;
      color: rgba(51, 51, 51, 0.85);
    }
    .time {
      margin: 0.2rem 0 0.3rem 0;
      height: 0.31rem;
      font-size: 0.24rem;
      font-family: Microsoft YaHei;
      font-weight: 400;
      line-height: 0.31rem;
      color: rgba(173, 173, 173, 1);
    }
  }
  .article-content {
    .img {
      //   height: 3rem;
    }
    p {
      // width:68ß3px;
      // height:555px;
      margin-top: 0.5rem;
      font-size: 0.26rem;
      font-family: Microsoft YaHei;
      font-weight: 400;
      line-height: 0.5rem;
      color: rgba(102, 102, 102, 1);
    }
    p:nth-child(0) {
      margin-top: 0rem;
    }
    p:last-child {
      margin-top: 0.2rem;
    }
    padding-bottom: 0.5rem;
    border-bottom: 1px dotted rgba(0, 0, 0, 0.4);
  }
  //
  .article-attach {
    display: flex;
    margin: 0.4rem 0;
    padding-bottom: 0.5rem;
    border-bottom: 1px dotted rgba(0, 0, 0, 0.4);
    .left {
      width: 0.8rem;
      height: 0.35rem;
      font-size: 0.26rem;
      font-family: Microsoft YaHei;
      font-weight: 400;
      line-height: 0.35rem;
      color: rgba(51, 51, 51, 1);
      padding-top: 0.3rem;
    }
    .attach-list {
      // margin:.4rem 0;
      li {
        display: flex;
        align-items: center;
        margin-top: 0.2rem;
        .img {
          width: 0.52rem;
          height: 0.6rem;
        }
        p {
          height: 0.35rem;
          font-size: 0.26rem;
          font-family: Microsoft YaHei;
          font-weight: 400;
          line-height: 0.35rem;
          color: rgba(153, 153, 153, 1);
          margin-left: 0.09rem;
        }
      }
    }
  }
  //
  //
  .article-next {
      padding-bottom: .5rem;
    p {
      height: 0.35rem;
      font-size: 0.26rem;
      font-family: Microsoft YaHei;
      font-weight: 400;
      line-height: 0.35rem;
      color: rgba(44, 114, 206, 1);
      margin:.1rem 0;
      span{
          color:#333;
      }
      a{
          color: #2C72CE;
      }
    }
  }
}
</style>