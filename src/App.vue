<template>
  <div class="html">
    <navigation></navigation>
    <!--中间内容-->
    <transition name="fade">
      <router-view>
        
      </router-view>
    </transition>  
    <div style="height: 0.97rem;"></div>
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
<style >

@import './less/reset.less';

.html{
    position: relative;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    margin:0 auto;
    overflow-x: hidden;
}
.fade-enter-active, .fade-leave-active {
    -webkit-transition: all .3s ease;
      transition: all .3s ease;
  }
.fade-enter, .fade-leave-to {
  opacity:0;
}
</style>
