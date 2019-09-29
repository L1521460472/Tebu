<template>
  <div class="home">
    <homeHeader></homeHeader>
    <swiper></swiper>
    <navgoods></navgoods>
  </div>
</template>

<script>
import homeHeader from '../components/homeHeader';
import swiper from '../components/swiper';
import navgoods from '../components/navgoods'
// @ is an alias to /src
export default {
  name: 'home',
  components: {
    homeHeader,
    swiper,
    navgoods
  },

}
</script>

<style scoped>
</style>
