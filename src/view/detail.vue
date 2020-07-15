/*
 * @Author: minchao 
 * @Date: 2020-07-12 02:33:51 
 * @Last Modified by:   minchao 
 * @Desc 详情页面
 */
<template>
  <div class="article">
    <div class="article-head">
      <h3 class="title">{{article.title}}</h3>
      <p class="time">{{article.updateTime}}</p>
    </div>
    <div class="article-content">
      <p v-html="article.content"></p>
      <!-- <p>
        第三条 外商可以投资经营国家没有明令禁止的任何行业、项目、商品和服务，自主确定经营方式。
        第四条 凡投资的项目应符合国家产业政策，符合“环境
        友好型、资源节约型”的科学发展要求。
      </p> -->
    </div>
    <div class="article-attach">
      <div class="left">附件：</div>
      <ul class="attach-list">
        <li v-for="(file,index) in article.files" :key="index">
            <van-image v-if="file.attType == 'docx'" class="img" fit="cover" src="../../static/img/detail/word.png" />
            <van-image v-if="file.attType == 'xlsx'" class="img" fit="cover" src="../../static/img/detail/office.png" />
            <van-image v-if="file.attType == 'pptx'" class="img" fit="cover" src="../../static/img/detail/pptx.png" />
            <van-image v-if="file.attType == 'pdf'" class="img" fit="cover" src="../../static/img/detail/pdf.png" />
             <p><a :href="file.link" target="_blank">{{file.attName}}</a></p>
        </li>
        <!-- <li>
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
        </li> -->
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
    return {
      article: {
        createTime: "2020-07-09 22:18:20",
        updateTime: "2020-07-09 22:18:20",
        id: "1281231214472069121",
        title: "附件测试文章...",
        content:
          "这是文章内容......这是文章内容......这是文章内容......这是文章内容......",
        categoryId: "1283292657677889538",
        previous: {},
        next: {},
        files: [
          {
            attId: "732999560825413632",
            attName: "QQ截图20200611132658.png",
            attType: "png",
            link: "http://rh.2hrh.com/Attachment/file/732999560825413632",
            thumbnailId: ""
          },
          {
            attId: "732999906947768320",
            attName: "Word.docx",
            attType: "docx",
            link: "http://rh.2hrh.com/Attachment/file/732999906947768320",
            thumbnailId: ""
          }
        ]
      }
    };
  },
  created() {
    this.getArticleByArticleId();
  },
  methods: {
    getArticleByArticleId() {
      this.reqGet(
        Url.getArticleByArticleId+"/"+this.$route.query.id,
        {
          articleId:this.$route.query.id
        }
      ).then(res => {
        this.article = res.data;
        console.log("article",this.article);
        // this.categories = res.data[0].children
      });
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
    padding-bottom: 0.5rem;
    p {
      height: 0.35rem;
      font-size: 0.26rem;
      font-family: Microsoft YaHei;
      font-weight: 400;
      line-height: 0.35rem;
      color: rgba(44, 114, 206, 1);
      margin: 0.1rem 0;
      span {
        color: #333;
      }
      a {
        color: #2c72ce;
      }
    }
  }
}
</style>