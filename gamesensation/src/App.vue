<template>
  <div id="app">
    <Navbar />
    <router-view/>
  </div>
</template>

<script>
import Navbar from './Navbar';
export default {
  name: 'App',
  components: {
    Navbar
  },
  created(){
    document.body.className = 'custom-background'
  }
}
</script>

<style>
  .custom-background{
    background-image: url('https://media.contentapi.ea.com/content/dam/apex-legends/images/2020/05/apex-grid-tile-legends-loba.png.adapt.crop16x9.png');
    background-repeat: no-repeat;
    background-position: 80% 0%;
  }
  @media (max-width: 920px) {
    .custom-background{
      background: none;
    }
  }
</style>
