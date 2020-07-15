<template>
  <div class="nav-category">
    <van-sidebar v-model="activeKey">
        <van-sidebar-item
            class="category"
            :title="'首页'"
            @click="toMain"
        />
      <van-collapse v-model="activeNames" accordion>
        <div v-for="(item,index) in categories" :key="index">
          <van-collapse-item
            v-if="item.children && item.children.length>0"
            :name="item.name"
          >
        <template #title>
            <div>{{item.name}} <van-icon class="icon-right" name="plus" /></div>
            </template>
            <van-sidebar-item
              class="category"
              v-for="(side,index) in item.children"
              :key="index"
              @click="onChange(side)"
              :title="side.name"
            />
          </van-collapse-item>
          <van-sidebar-item
            v-if="!item.children "
            class="category"
            :key="index"
            :title="item.name"
             @click="onChange(item)"
          />
        </div>
      </van-collapse>
    </van-sidebar>
  </div>
</template>
<script>
import Vue from "vue";
import { Popup } from "vant";
import { Icon } from "vant";
import { Sidebar, SidebarItem } from "vant";
import { Collapse, CollapseItem } from "vant";

Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Sidebar);
Vue.use(SidebarItem);
Vue.use(Popup);
Vue.use(Icon);
import { Notify } from "vant";
Vue.use(Notify);
import category from "../mocks/navcation";
export default {
  name: "sideRight",
  props: {
    categories: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      activeKey: "",
      activeNames: ["园区概况"]
    };
  },
  methods: {
    onChange(item) {
        console.log("item",JSON.stringify(item));
        if(item.categoryAttr == 0){//0 有子栏目 点击不会进
        }
        if(item.categoryAttr == 1){//1 单文章栏目 点击进文章详情
            this.$router.push({
                path:"/detail",
                query:{
                    id:item.id
                }
            });
        }
        if(item.categoryAttr == 2){//2 多文章栏目 点击进文章列表(招商政策页)
            this.$router.push({
                path:"/policy",
                query:{
                    id:item.id
                }
            });
        }
        if(item.categoryAttr == 3){//3 多视频栏目 点击进视频列表
            this.$router.push({
                path:"/videos",
                query:{
                    id:item.id
                }
            });
        }
        if(item.categoryAttr == 9){//9 其他
            this.$router.push({
                path:"/apply",
                query:{
                    id:item.id
                }
            });
        }
    //   Notify({ type: "primary", message: item.name });
    },
    toMain(){
        this.$router.push("main");
    }
  }
};
</script>
<style lang="less" scoped>
.nav-category {
  width: 100%;
  /deep/ .van-cell__title{
      font-size: 0.3rem;
    font-family: Microsoft YaHei;
    font-weight: 400;
    line-height: 1rem;
    color: rgba(0, 0, 0, 0.45);
    padding-left: 1rem;
  }
  .category {
    font-size: 0.3rem;
    font-family: Microsoft YaHei;
    font-weight: 400;
    line-height: 1rem;
    color: rgba(0, 0, 0, 0.45);
    background: #fff;
    padding-left: 1.12rem;
  }
  /deep/ .icon-right{
      left: 1.6rem;
  }
  /deep/ .van-sidebar {
    width: 100%;
  }
  /deep/ .van-sidebar-item--select::before{
      position: absolute;
    top: 50%;
    left: .85rem;
    width: .04rem;
    height: .26rem;
    background-color: #2C72CE;

    transform: translateY(-50%);
    content: '';
  }
  /deep/ .van-collapse-item__content{
      padding: 0;
  }
  /deep/ .van-cell__right-icon{
      display: none;
  }
}
</style>