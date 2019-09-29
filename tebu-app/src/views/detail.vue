<template>
  <div>
    <div class="swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-ios">
    <div class="swiper-wrapper" >
      <div class="swiper-slide swiper-slide-active" data-swiper-autoplay="2000"><img class="box" src="http://image.xtep.com.cn/util/upload/product/201909111020/2019911102038730D376605841892F3F39AE2EFEFACC7126.jpg" alt=""></div>
      <div class="swiper-slide swiper-slide-next" data-swiper-autoplay="2000" ><img class="box" src="http://image.xtep.com.cn/util/upload/product/201909111020/2019911102037824F758854238DB6B165062CAC3B8E0882B.jpg" alt=""></div>
      <div class="swiper-slide" data-swiper-autoplay="2000"><img class="box" src="http://image.xtep.com.cn/util/upload/product/201909111020/20199111020382312A9BA4CCE424849F125E6A54E5625D81.jpg" alt=""></div>
      <div class="swiper-slide" data-swiper-autoplay="2000"><img class="box" src="http://image.xtep.com.cn/util/upload/product/201909111020/201991110203912B0AEC71C45CCC43D1387A0E2BCFD92A9.jpg" alt=""></div>
      <div class="swiper-slide" data-swiper-autoplay="2000"><img class="box" src="http://image.xtep.com.cn/util/upload/product/201909111020/201991110203844977AD7C1C6EC3BA676660408072A55191.jpg" alt=""></div>
    </div>
    <div class="swiper-pagination"></div>
    </div>
    
    <div class="proinner">
      <div class="proinner_tit">特步 专柜款 男子休闲鞋 2019秋新款复古老爹鞋气垫炫彩透气柔软休闲981319320020</div>
      <div class="marketprice">
        <div class="marketprice_left">
          吊牌价：<del class="scjia">￥379.00</del>           
           已售：<span class="saledNum">  0</span>件
        </div>
      <a><img class="couponBtn" src="http://image.xtep.com.cn/webcommon/images/yiqigou_w/coupons-btn-pc.png"></a>       
      </div>
      <div class="msBox">                   
        <span>会员价：<b class="RMB">￥</b><b class="showprice">339.00</b></span>                    
      </div>
      <div class="pro-sel" @click="show = true">
        <span>规格选择</span><p class="claSize_981319320020">请选择（尺码/颜色/数量）</p>
      </div>
    </div>

    <div class="nav-tabs clearfix">
      <ul>
        <li><a>详情</a></li>
        <li><a>评论</a>(0)</li>
      </ul>
    </div>

    <div class="herb">
      <div class="herb-part">
        <b>产品名称：</b>{{goods_list.text}}<br>
        <b>货&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;号：</b> 981319320020<br>
        <b>品&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;牌：</b>特步<br>
        <b>品&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类：</b>休闲鞋 
      </div>      
    </div>

    <div id="div_1843_1865" class="div_1843 active" style="display: block;">
      <tbody>
         <tr class="firstRow">
           <td><img src="http://xtep.oss-cn-hangzhou.aliyuncs.com/products1/taobao/981319320020_01.jpg"></td>
        </tr>

        <tr>
          <td><img src="http://xtep.oss-cn-hangzhou.aliyuncs.com/products1/taobao/981319320020_02.jpg"></td>
        </tr>

        <tr>
          <td><img src="http://xtep.oss-cn-hangzhou.aliyuncs.com/products1/taobao/981319320020_03.jpg"></td>
        </tr>

        <tr>
          <td><img src="http://xtep.oss-cn-hangzhou.aliyuncs.com/products1/taobao/981319320020_04.jpg"></td>
        </tr>

        <tr>
          <td><img src="http://xtep.oss-cn-hangzhou.aliyuncs.com/products1/taobao/981319320020_05.jpg"></td>
        </tr>

        <tr>
          <td><img src="http://xtep.oss-cn-hangzhou.aliyuncs.com/products1/taobao/981319320020_06.jpg"></td>
        </tr>

        <tr>
          <td><img src="http://xtep.oss-cn-hangzhou.aliyuncs.com/products1/taobao/981319320020_07.jpg"></td>
        </tr>

        <tr>
          <td><img src="http://xtep.oss-cn-hangzhou.aliyuncs.com/products1/taobao/981319320020_08.jpg"></td>
        </tr>

        <tr>
          <td><img src="http://xtep.oss-cn-hangzhou.aliyuncs.com/products1/taobao/981319320020_09.jpg"></td>
        </tr>

        <tr>
          <td><img src="http://xtep.oss-cn-hangzhou.aliyuncs.com/products1/taobao/981319320020_10.jpg"></td>
        </tr>

        <tr>
          <td style="word-break: break-all;"><img src="http://xtep.oss-cn-hangzhou.aliyuncs.com/products1/taobao/981319320020_11.jpg"></td>
        </tr>
      </tbody>

    </div>

    <footer class="footer2">
            <ul>
                <li class="lis">
                    <a>                   
                      <span>首页</span>
                    </a>
                </li>
                <li class="lis">
                    <a >                       
                        <span>客服</span>
                    </a>
                </li>
                <li class="lis" @click="add1Cart">
                    <a>                       
                        <span>购物车</span>
                    </a>
                </li>               
                <li class="footer_one" @click="show = true">
                   <a>      
                        加入购物车</a>
                </li>
                <li class="footer_two">
                    <a>立即购买</a>
                </li>
                
            </ul>
            
    </footer>
      
    <div v-if="show" style="width:7.5rem; height:9.2rem; position:fixed; bottom:0;font-size:0.3rem; left:0;right:0;background:#fff; z-index:10;">
        <div style="width: 7.5rem; height: 1.68rem;  position: relative;">
          <div style="float: left;"> 
            <img style="width:2rem;height:1.50rem; position: relative; top: -0.36rem ; left: 0;" src="../assets/shangp.jpg"> 
          </div>
          <div style="float: left; margin-top: 0.2rem">
            <h5 style="color: #c40000;"> ¥399.00</h5>
            <p >库存：234件<span></span></p>
            <p >请选择：</p>
          </div>
          <p style="float:right; "><img @click="show =!show"  style="width: 0.4rem;height: 0.4rem;margin: 0.1rem 0.2rem 0 1.8rem;" src="http://image.xtep.com.cn/WebCommon/images/close.png"></p>
        </div>
        <div >
          <div class="prod-spec" > 
          <div>
            <span  style="margin-left:0.1rem">颜色</span>
            <ul class="pro-class1" style="width:7.5rem;height: 1rem; padding-top: 0.2rem;margin-left: 0.1rem">
                <li @click="gotoPage1(read)" :key="read.color"  :class="{current: read === currentPage}" v-for="read of readss">{{read.color}}</li>
            </ul>
          </div>   
          <!-- 尺码 -->
          <div >
              <span  style="margin-left:0.1rem">尺码</span>
              <ul class="pro-class" style="width:7.5rem;height: 1.6rem; padding-top: 0.2rem;margin-left: 0.1rem">
                 <li @click="gotoPage(goods)" :key="goods.id"  :class="{current: goods === currentPage}" v-for="goods of goods_list"> {{ goods.name}}</li>
              </ul>
          </div>
          <!-- 数量 -->
          
          <div>
              <div>
                  <ol class="pro-size" style="width:7.5rem;height:0.81rem;margin-top: 0.4rem;margin-left: 0.1rem">
                      <p style="padding-left:0.1rem; margin:0.3rem 0;">数量</p>
                      <li><button @click="dec()"  style="background: gainsboro; width:0.6rem;height:0.6rem;font-size:0.5rem;color:red;">-</button></li>
                      <li >{{count}}</li>
                      <li><button @click="inc()" style="background:#b61d1d;width:0.6rem;height:0.6rem;font-size:0.5rem; color:#fff; ">+</button></li>
                  </ol>
              </div>
              </div>
          </div>
          
        </div>
  
        <button @click="add2Cart() ; delshow()"   style="width:7.5rem;height:1.04rem;background: #b61d1d;font-size:0.5rem;line-height:0.84rem;text-align: center;margin-top:0.6rem; color:#fff;">
          确定
        </button>
      </div>
  </div>
  
  
   
</template>

<script>

 import BScroll from 'better-scroll';
 import axios from 'axios';
 import {add2Cart} from '../cartItems'
export default {
  name:'app',
  data(){
    return {
      show:false,
      count:1,
      currentPage: undefined,
      goods_list:[],
      pages:[],
      box:[],
      goodbox:[],
      readss:[]
    }
  },
  mounted(){
    this.$eventBus.$emit('showHide',false);
    axios.get('/product/detail' ).then((result) =>{
          this.goods_list = result.data
          
      }).catch((err) =>{

      })

    axios.get('/product/about').then((result) =>{
          this.readss = result.data
      }).catch((err) =>{

      })

    var mySwiper = new Swiper('.swiper-container',{
    autoplay: {
    disableOnInteraction: false,
      },
    pagination: {
        el: '.swiper-pagination',       
      }
    })   
  },
  
  methods:{
    inc(){
      if(this.count < 10 ){
        this.count = this.count + 1
      }
      console.log(this.count)
    },
    dec(){
      if(this.count > 1){
        this.count = this.count - 1
      }
      console.log(this.count)
    },
    gotoPage(goods) {
        if (this.currentPage !== goods) {
          this.currentPage = goods;
        }
        this.pages = []
        if(goods != undefined){
          this.pages.push(goods)
        }

      },
      gotoPage1(read) {
        if (this.currentPage !== read) {
          this.currentPage = read;
        }
        this.goodbox = [];
        this.goodbox.push(read)   
        console.log(read)
      },
      add2Cart(){

        this.box.push({...this.pages[0],count:this.count,...this.goodbox[0]})
        if(this.pages != []){
          
          add2Cart(this.box);
    
        } 

        console.log(this.box)
        this.$router.push({name:"shopcart"})     
      },
      add1Cart(){
        this.$router.push({name:"shopcart"})
      },
      delshow(){
        this.show = false;
      }
      
  }
}
</script>
 

<style scoped>
.current {
    color: #c40000;
  }
  body {
    width: 100%;
    height: 100%;
    font-size: 0.3rem;
  }
  ul li{
    list-style: none;
  }
  .box{
    display: block;
    width: 7.5rem;
    height:7.5rem ;
    
  }
  .proinner{
    width: 7.5rem;
    height: 4.46rem;
    
  }
  
  .proinner_tit {
    widows: 3.7rem;
    padding: 0.1rem 0.3rem 0rem; 
    font-size: 0.3rem;
    background-color: #F0F0F0;
    
  }
  .scjia{
    margin-right: 0.1rem;
  }
  .marketprice{
    width: 7.5rem;
    height: 0.92rem;
    line-height: 0.92rem;
    background-color: #F0F0F0;
    
  }

  .marketprice_left {
    float: left; padding-left: 0.2rem;
    font-size: 0.3rem
  }
  .marketprice a{
    margin-top: -0.1rem;
    display: block;
    float: right;
    padding-right: 0.3rem;
  }
  .couponBtn {
    width: 1.8rem;
    height: 0.48rem;
  }

  .msBox{
    height: 1rem;
    background: linear-gradient(180deg, #fc9a9a, #e61b25);
    line-height: 1rem;
    padding-left: 0.2rem;
    color:#FFF;
    font-size: 0.4rem;
    margin-bottom: 0.5rem;
  }
  .pro-sel{
    height: 0.94rem;
    background: #F3F3F3;
    line-height: 0.94rem;
    padding-left: 0.2rem;
    border-bottom: 1px solid #cdcecf;
    font-size: 0.32rem;
  }
  .claSize_981319320020 {
    float: right;
    font-size: 0.3rem;
    padding-right: 2rem;
    color:silver;
  }
  .nav-tabs{
    height: 0.9rem;
    border-bottom: #E1E1E1 0.01rem solid;
    margin-top: -0.1rem; 
    
  }

  .nav-tabs li{
    width: 3.74rem;
    float: left;
    font-size: 0.3rem;
    text-align: center;
    line-height: 0.9rem;
    color: #b61d1d
  }

  .nav-tabs li:nth-child(2){
    border-left: 0.01rem solid #E1E1E1;
    color: #333;
  }

  .herb{
    height: 3.02rem;
    color: #958a80;
    font-size: 0.23rem;
    border-bottom: #E1E1E1 1px solid;
  }
  .herb-part{
    padding: 0.5rem 0.3rem;   
  }
  .herb-part b{
    color: #958a80;
    font-size: 0.3rem;
  }
  img{
    width: 7.5rem;
    height: 13.44rem;   
  }

  .footer2{
    width: 7.5rem;
    height: 1.04rem;
    position: fixed;
    left: 0;
    bottom: 0!important;
    line-height: 1.04rem;
    text-align: center;
    background: #FFF;
  }
  .lis{
    width: 0.9rem;
    height: 1.04rem;
    color: #969696;
  }
  .footer2 li.lis a {
    display: block;
    width: 100%;
    height: 0.8rem;
    line-height: 0.8rem;
    padding: 7px 0;
    border-right: 1px solid #fff;
    }
  .footer2 li{
    float: left;
    font-size: 0.25rem;
    
  }
  .footer_one{
    width: 2.4rem;
    height: 1.04rem;
    background: #f31705;
    color: #FFF;
  }
  .footer_two{
    width: 2.4rem;
    height: 1.04rem;
    background: #feb000;
    color: #FFF;
  }
  .default{
    width: 0.2rem;
    height: 0.2rem;
  }
  .spec-menu-content {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 70%;
    background-color: #fff;
    border-top: 1px solid #dadada;
    z-index: 999;
    /* display: none; */
}
.img_981319320020{
  width: 2rem;
  height: 2rem;
}
.spec-menu-top{
  height: 1.68rem;
  width: 7.5rem;
}
.spec-menu-top {
  float: left;
}

.pro-class1 li{
  width: 0.84rem;
  height: 0.64rem;
  border: 1px solid gainsboro;
  float: left;
  line-height: 0.64rem;
  text-align: center;
  margin:0.1rem;
  }

.pro-class li{
  width: 0.84rem;
  height: 0.64rem;
  border: 1px solid gainsboro;
  float: left;
  line-height: 0.64rem;
  text-align: center;
  margin:0.1rem;
  }
.pro-size li{
  list-style: none;
  float: left;
  margin: 0 0.1rem;
}
</style>
