<template>
  <div class="app">
    <navigation></navigation>
    <!--中间内容-->
    <transition name="fade">
      <router-view>
        
      </router-view>
    </transition>  

    <bottom></bottom>
  </div>
</template>

<script>
import bottom from "./components/bottom";
import navigation from "./components/nav";
export default {
  name: 'app',
  data(){
    return {
     
    }
  },
  components:{
    bottom,
    navigation
  }
}
</script>
<style lang="less" scoped>

@import './less/reset.less';
.app{
    position: relative;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
}
.fade-enter-active, .fade-leave-active {
    -webkit-transition: all .3s ease;
      transition: all .3s ease;
  }

</style>
