<template>
  <div class="footer">

    <ul class="grids">
      <li class="grids-item">
        <van-icon class="nav-icon" name="wap-home-o" size=".48rem" color="#fff" />
      </li>
      <li class="grids-item">
        <van-icon class="nav-icon" name="phone-o" size=".48rem" color="#fff" />
      </li>
      <li class="grids-item">
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

    };
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
}
</style>