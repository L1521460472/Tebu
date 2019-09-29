<template>
    <div class="list">
        <div class="header">
            <div>
                <select name="" id="list_option">
                    <option value="分类">分类</option>
                    <option value="活动商品">活动商品</option>
                    <option value="热卖推荐">热卖推荐</option>
                    <option value="男鞋">男鞋</option>
                    <option value="女鞋">女鞋</option>
                    <option value="男装">男装</option>
                    <option value="女装">女装</option>
                    <option value="童鞋">童鞋</option>
                    <option value="童装">童装</option>
                    <option value="运动配件">运动配件</option>
                </select>
            </div>
            <div class="nav">
                <span class="iconfont icon-sousuo"></span>
                <input type="text" value placeholder="商品关键字">
            </div>
            <div @click="gotogoods" class="button">搜索</div>
        </div>
        <div class="list_nav">
            <ul style="display:flex;">
                <li>综合排名</li>
                <li>按销量</li>
                <li>按价格</li>
                <li>按时间</li>
                <li>按评价</li>

            </ul>
        </div>
        <div class="banner">
            <ul>
                <li :key="product.id" v-for="product of products">
                    <img :src="product.pic" alt=""> 
                    <div class="list_right">
                        <p class="name">{{product.name}}</p> 
                        ￥<span class="price">{{product.price.toFixed(2)}}</span>
                        <p class="pricel"> 市场价： ￥{{product.pricel.toFixed(2)}} </p>
                        <span class="Sleft">免运费</span>
                        <span class="Sright">销量： {{product.sales}} </span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name:'List',
    data(){
        return {
            products:[
                {id:'40001',name:'【风火鞋22代】谢霆锋同款 特步 专柜款 男子跑鞋2019秋季新品运动跑鞋男981419110528',price:339.00,pricel:369.00,pic:'http://image.xtep.com.cn/util/upload/product/201909021652/201992165229496D284FEBE3A93EAD317EDD6B873F244C2.jpg_800x800q90.jpg',sales:50},
                {id:'40002',name:'【风火鞋22代】谢霆锋同款 特步 专柜款 男子跑鞋2019秋季新品运动跑鞋男981419110528',price:339.00,pricel:369.00,pic:'http://image.xtep.com.cn/util/upload/product/201908161430/201981614305935571EBC0F407692DB3FBC695A4FC1BDD31.jpg',sales:50},
                {id:'40003',name:'【风火鞋22代】谢霆锋同款 特步 专柜款 男子跑鞋2019秋季新品运动跑鞋男981419110528',price:339.00,pricel:369.00,pic:'http://image.xtep.com.cn/util/upload/product/201908291443/2019829144320387DE9451AB2ACD3E08D952855706C2C0A9.jpg',sales:50},
                {id:'40004',name:'【风火鞋22代】谢霆锋同款 特步 专柜款 男子跑鞋2019秋季新品运动跑鞋男981419110528',price:339.00,pricel:369.00,pic:'http://image.xtep.com.cn/util/upload/product/201908191724/201981917245659D0BF9054BBE92D26B27950789D77CE4A.jpg',sales:50},
                {id:'40005',name:'【风火鞋22代】谢霆锋同款 特步 专柜款 男子跑鞋2019秋季新品运动跑鞋男981419110528',price:339.00,pricel:369.00,pic:'http://image.xtep.com.cn/util/upload/product/201906211115/20196211115369809038EDC92EA48156C436045C39401363.jpg',sales:50},
                {id:'40006',name:'【风火鞋22代】谢霆锋同款 特步 专柜款 男子跑鞋2019秋季新品运动跑鞋男981419110528',price:339.00,pricel:369.00,pic:'http://image.xtep.com.cn/util/upload/product/201908191721/2019819172159684794FBA5FF51C29CBC03B773F17329F90.jpg',sales:50},
            ]
        }
    },
    mounted(){

    },
    methods:{
        gotogoods(){
            this.$router.push('/')
        }
    }
}
</script>

<style scoped>
.list{
    background:#f7f7f7;
    width: 100%;
    height: 100%; 
}
.header{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 1rem;
    display: flex;
    align-items: center;
    background: #f7f7f7;
    z-index: 9;

}
#list_option{
    font-size: 0.24rem;
    width: 1.08rem;
    height: 0.68rem;
    -webkit-appearance: none;
    outline-style: none;
    line-height: 100%;
    color: #909090;
    border: 1px solid #cdcdcb;
    border-radius: 4px;
    padding-left: 0.06rem;
    margin-left: 0.15rem;
    background: #f7f7f7 url(../assets/option01.png) no-repeat right;
}
#list_option option{
    font-weight: normal;
    display: block;
    width: 1.16rem;
    font-size: 0.05rem;
    white-space: pre;
    min-height: 1.2em;
    text-align: center;
}
.iconfont{
    position: absolute;
    display: block;
    width: 0.68rem;
    height: 0.68rem;
    font-size: 0.35rem;
    font-weight: 600;
    color: pink;
    top: 0.1rem;
    left: 0.3rem;
    z-index: 9;
}
.nav input{
    width: 4.95rem;
    height: 0.68rem;
    border-radius: 0.1rem;
    outline-style: none;
    background: #fff;
    border: none;
    padding-left: 0.68rem;
    margin-left: 0.15rem;
    box-sizing: border-box;
    font-size: 0.24rem;
}
.button{
    width: 0.8rem;
    height: 0.65rem;
    line-height: 0.65rem;
    text-align: center;
    background: #f7f7f7;
    margin-left: 0.15rem;
    border: 0.02rem solid pink;
    border-radius: 0.15rem;
    color: #909090;
}

.list_nav{
    width: 100%;
    height: 0.7rem;
    background: #fff;
    margin-top: 1rem;
}
.list_nav ul li{
    width: 1.5rem;
    line-height: 0.7rem;
    color: #969696;
    list-style: none;
    font-size: 0.22rem;
    text-align: center;
}

.banner{
    position: absolute;
    width: 100%;
    height: auto;
    top: 0.7rem;
    bottom: 1.16rem;
    margin-left: 1%;
}
.banner ul li{
    width: 98%;
    height: 3.7rem;
    background: #fff;
    margin:0.1rem 0;
    border-radius: 0.1rem;
    padding: 0.2rem 0.15rem;

}
.banner ul li img{
    display: block;
    width: 3.28rem;
    height: 3.28rem;
    float: left;
}
.list_right{
    width: 3.65rem;
    height: 3.28rem;
    float: right;
    margin-right: 0.2rem;
}
.list_right .name{
    font-size: 0.28rem;
    color: #4e4735;
    width: 3.65rem;
    /* padding-left: 0.1rem;
    padding-right: 0.2rem; */
    height: 0.76rem;
    line-height: 0.38rem;
    margin-top: 0.08rem;
    overflow: hidden;
    text-decoration: none;
}
.price{
    display: inline-block;
    color: #fd0707;
    font-size: 0.4rem;
    font-weight: bold;
    margin-top: 0.3rem;
}
.pricel{
    display: block;
    text-decoration: line-through;
    color: #969696;
    font-size: 0.24rem;
    margin-bottom: 0.4rem;
}
span{
    color: #969696;
}
.Sleft{
    float: left;
    font-size: 0.28rem;
}
.Sright{
    float: right;
    font-size: 0.28rem;
    margin-right: 0.3rem;
}
</style>