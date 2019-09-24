<template>
  <div id="app" style="font-size:0.24rem">
    <footer>
    <div @click="gotoPage(page)" :class="{current:page === currentPage}" :key="page.name" v-for="page of pages"> {{page.text}} </div>
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
        {name:'home',text:'首页',path:'/'},
        {name:'category',text:'分类',path:'/category'},
        {name:'cart',text:'购物车',path:'/cart'},
        {name:'user',text:'我的',path:'/user'},
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
  }

  .current{
    color: green;
  }

  footer>div{
    display: inline-block;
    text-align: center;
    font-size: 0.3rem;
    line-height: 1.16rem;
    flex: 1;
  }
</style>
