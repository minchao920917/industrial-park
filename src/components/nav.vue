<template>
  <div class="nav">
    <div class="icon" @click="showNav">
      <van-icon class="nav-icon" name="wap-nav" size=".48rem" color="#fff" />
    </div>
    <van-popup
      v-model="show"
      :close-on-click-overlay="false"
      position="right"
      :style="{ height: '100%' }"
    >
      <div class="nav-box">
        <div class="left">
          <div class="icon-close" @click="showNav">
            <van-icon class="nav-icon" name="cross" size=".48rem" color="#fff" />
          </div>
        </div>
        <div class="right">
          <sideRight :categories="categories"></sideRight>
        </div>
      </div>
    </van-popup>
  </div>
</template>
<script>
import Vue from "vue";
import { Popup } from "vant";
import { Icon } from "vant";
import { Sidebar, SidebarItem } from "vant";

Vue.use(Sidebar);
Vue.use(SidebarItem);
Vue.use(Popup);
Vue.use(Icon);
import { Notify } from "vant";
Vue.use(Notify);
import sideRight from "../components/sideRight";
import Url from "../utils/url";

export default {
  name: "top",
  data() {
    return {
      show: false,
      activeKey: 0,
      categories:[]
    };
  },
  created(){
    this.getCategoryTree();
  },
  methods: {
    getCategoryTree(){
      this.reqGet(Url.getCategoryTree,{}).then(res=>{
   
        this.categories = res.data[0].children
      })
    },
    showNav() {
      this.show = !this.show;
    },
    onChange(index) {
      Notify({ type: "primary", message: index });
    }
  },
  components:{
    sideRight
  }
};
</script>
<style lang="less" scoped>
.nav {
  position: relative;
  z-index: 10;
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

  .van-popup {
    background: transparent;
    .nav-box {
      display: flex;
      justify-content: space-between;
      width: 6rem;
      height: 100%;
      background: transparent;
      .left {
        .icon-close {
          width: 0.78rem;
          height: 0.78rem;
          background: rgba(44, 114, 206, 0.8);
          margin: 0.38rem 0.3rem;
          text-align: center;
          .nav-icon {
            line-height: 0.78rem;
          }
        }
      }
      .right {
        width: 4.7rem;
        height: 100%;
        background: #fff;
      }
    }
  }
}
</style>