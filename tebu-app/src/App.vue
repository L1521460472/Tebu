<template>
  <div id="app" style="font-size:0.24rem">

    <footer>
    <div v-for="page of pages" @click="gotoPage(page)" :class="{current:page === currentPage}" :key="page.name"><span style="font-size:0.3rem" v-bind:class="page.icon"></span>{{page.text}} </div>
    </footer>
    <router-view/>
  </div>
</template>

<script>
export default {
  name:'app',
  data(){
    return{
      currentPage:undefined,
      pages:[
        {name:'home',text:'首页',path:'/',icon:'iconfont icon-zhiyuanshouye9'},
        {name:'category',text:'分类',path:'/category',icon:'iconfont icon-fenlei'},
        {name:'cart',text:'购物车',path:'/cart',icon:'iconfont icon-cart_icon'},
        {name:'user',text:'我的',path:'/user',icon:'iconfont icon-profile'},
      ]
    }
  },
  methods:{
    gotoPage(page){
      if(this.currentPage !== page){
        this.currentPage = page;
        this.$router.push({name:page.name})
      }
    }
  }
}
</script>

<style scoped>
  #app{
    width: 100%;
    height: 100%;
  }
  footer{
    position: fixed;
    display: flex;
    bottom: 0;
    height: 1.16rem;
    width: 100%;
    background: white;
    box-shadow: -1px -1px 5px lightgreen;
    z-index: 999;
    justify-content: space-around;
  }

  .current{
    color: green;
  }
  .iconfont{
    font-size: 0.6rem;
  }

  footer>div{
    display: flex;
    text-align: center;
    font-size: 0.25rem;
    flex-direction: column;
    margin-top: 0.25rem;
    color: black;
  }
</style>
