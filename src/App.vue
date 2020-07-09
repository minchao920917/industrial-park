<template>
  <div class="app">

    <!--中间内容-->
    <transition name="fade">
      <router-view>
        
      </router-view>
    </transition>  

  </div>
</template>

<script>

export default {
  name: 'app',
  data(){
    return {
     
    }
  },
  components:{
  }
}
</script>

<style>
@import './less/reset.less';

.fade-enter-active, .fade-leave-active {
    -webkit-transition: all .3s ease;
      transition: all .3s ease;
  }
.fade-enter, .fade-leave-to {
  opacity:0;
}
</style>
