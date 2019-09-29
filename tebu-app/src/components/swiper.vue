<template>
      <div class="swiper-container">
    <div class="swiper-wrapper">
      <!-- <div class="swiper-slide" data-swiper-autoplay="5000"><img src="http://xtep.oss-cn-hangzhou.aliyuncs.com/2019/09/20/rongyanxie_640-648-.jpg" alt=""></div>
      <div class="swiper-slide" data-swiper-autoplay="5000"><img src="http://xtep.oss-cn-hangzhou.aliyuncs.com/2019/09/02/640-648.jpg" alt=""></div>
      <div class="swiper-slide" data-swiper-autoplay="5000"><img src="http://xtep.oss-cn-hangzhou.aliyuncs.com/2019/09/02/tebuyun.jpg" alt=""></div> -->
     
      <div class="swiper-slide" data-swiper-autoplay="3000" :key="page.id" v-for="page of pages"><img :src="page.pic" alt=""></div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
  </div>

</template>

<script>
import Swiper from 'swiper';
export default {
    name:'swiper',
    data(){
      return{
        pages:[
          {id:'10000',pic:'http://xtep.oss-cn-hangzhou.aliyuncs.com/2019/09/24/huodong_640-648.jpg'},
          {id:'10001',pic:'http://xtep.oss-cn-hangzhou.aliyuncs.com/2019/09/20/rongyanxie_640-648-.jpg'},
          {id:'10002',pic:'http://xtep.oss-cn-hangzhou.aliyuncs.com/2019/09/02/640-648.jpg'},
          {id:'10003',pic:'http://xtep.oss-cn-hangzhou.aliyuncs.com/2019/09/02/tebuyun.jpg'},
        ]
      }
    },
    mounted(){
        var swiper = new Swiper('.swiper-container', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            autoplay: {
            delay: 3000,//1秒切换一次
  },
        });
    },

}
</script>

<style scoped>
    html, body {
      position: relative;
    }
    body {
      background: #eee;
      font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
      font-size: 14px;
      color:#000;
      margin: 0;
      padding: 0;
    }
    .swiper-container {
        position: absolute;
        top: 1rem;
      width: 100%;
      height: 7.6rem;
    }
     .swiper-pagination{
        top: 7rem;
        z-index: 999;
    }
.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet {
    width: 20px;
    height: 20px;
    display: inline-block;
    border-radius: 100%;
    background: #000;
    opacity: .2;
}
    .swiper-slide {
      text-align: center;
      background: #fff;

      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
    }
    .swiper-slide>img{
        display: block;
        width: 100%;
        height: 100%;
    }
</style>