<template>
    <div class="section-title">
        <div class="title-left">
            <span>{{title}}</span>
        </div>
        <div class="more-right">
            <router-link to="demo2">
                <span>更多</span>
                <van-icon name="arrow" />
            </router-link>
            
        </div>
    </div>
</template>
<script>
import Vue from "vue";
import { Icon } from "vant";

Vue.use(Icon);
export default {
    props:{
        title:{
            type:String,
            default:"园区概况"
        }
    },
    data(){
        return {}
    }
}
</script>
<style lang="less" scoped>
.section-title{

        overflow: hidden;
    padding: 0 .3rem;
    height: .6rem;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: start;
    .title-left{
        width:1.68rem;
        height:.6rem;
        text-align: center;
        background:#2C72CE;
        font-size:.3rem;
        font-family:Microsoft YaHei;
        font-weight:400;
        line-height:.6rem;
        color:#fff;
        transform:skewX(-15deg);
        span{
          transform:skewX(15deg);  
        }
    }
    .more-right{
        color:#333;

    }
}
</style>