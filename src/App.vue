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
<style lang="less" scoped>

@import './less/reset.less';
.app{
  max-width: 750px;
  width: 7.5rem;
  overflow-x: hidden;
  margin: 0 auto;

  .fade-enter-active, .fade-leave-active {
      -webkit-transition: all .3s ease;
        transition: all .3s ease;
    }
  .fade-enter, .fade-leave-to {
    opacity:0;
  }
}
</style>
