<template>
  <div id="app">
    <homepage/>
    <router-view/>
  </div>
</template>

<script>
import homepage from '@/components/homepage.vue'

export default {
  name: 'app',
  components:{
    homepage    
  }
}
</script>

<style>
  body{
    background: #ffffff;
    font-family: Roboto;
    font-style: normal;
  }
</style>
