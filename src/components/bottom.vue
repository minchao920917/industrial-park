<template>
  <div class="footer">
     <van-popup
      v-model="show"
      :close-on-click-overlay="true"
     
    >
    <div class="prop-erweima">
    <p> 扫码关注，掌握更多信息！</p>
      <van-image class="img" fit="none" src="../../static/img/erweima.png" />
    </div>
    </van-popup>
    <ul class="grids">
      <li class="grids-item" @click="toMain()">
        <van-icon class="nav-icon" name="wap-home-o" size=".48rem" color="#fff" />
      </li>
      <li class="grids-item" @click="toCall()">
        <van-icon class="nav-icon" name="phone-o" size=".48rem" color="#fff" />
      </li>
      <li class="grids-item" @click="toShowErWeiMa()">
         <van-icon class="nav-icon" name="chat-o" size=".48rem" color="#fff" />
      </li>
    </ul>
  </div>
</template>
<script>
import Vue from "vue";
import { Grid, GridItem } from "vant";
import { Icon } from "vant";
Vue.use(Icon);
Vue.use(Grid);
Vue.use(GridItem);
export default {
  data() {
    return {
      show:false
    };
  },
  methods:{
    toMain(){
      this.$router.push("main");
    },
    toCall(){
      this.$refs.tels.href = `tel://400-920-5245`
      this.$refs.tels.click()
    },
    toShowErWeiMa(){
      this.show = true;
    }
  }
};
</script>
<style lang="less" scoped>
.footer {
  position: fixed;
  bottom: 0;
  max-width: 7.5rem;
  width:100%;
  height: 0.97rem;
  background: #2c72ce;
  z-index: 22;
  .grids{
    height: 0.97rem;
    background: #2c72ce;
    display: flex;
    justify-content: space-evenly;
    align-content: center;
    .grids-item{
      align-self: center;
      background: #2c72ce;
    }
  }
  .prop-erweima{
    padding: .3rem;
    p{
      text-align: center;
      margin-bottom: .3rem;
    }
  }
}
</style>