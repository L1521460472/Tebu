<template>

<div style="font-size:0.3rem">
    <div class="head">
    <a @click="back"><img class="back" src="../assets/head_back.png" alt=""></a>
    <h3 class="cart_shop">购物车</h3>
    <a><img class="home" src="../assets/home2.png" alt=""></a>
    
</div>  
        <div v-if="cartItems && cartItems.length > 0" style="margin-bottom:0.8rem">
        <ul  >
            <li v-for="item of cartItems" style="border:1px solid gray;height:3.9rem ">
                <div style="height:2.5rem">
               
                <img style="width:2.5rem;height:2.5rem;float:left"  :src="item.pic" alt="">
                <p style="font-size:0.4rem;color:red;">{{item.name}}/{{item.color}}</p>
                <p style="font-size:0.3rem;">{{item.text}}</p>
                <p style="font-size:0.4rem;color:red;">￥{{item.price}} </p>
                </div>
                
                <div style="width:5rem;height:1.4rem;float:right">
                <span style="padding-right:0.3rem">数量</span><button style="width:1rem;height:1rem; background:#fff; font-size:0.3rem;" @click="dec(item)">-</button> <button style="width:1rem;height:1rem; background:#ebebeb; font-size:0.3rem;">{{item.count}}</button><button style="width:1rem;height:1rem; background:#b61d1d; font-size:0.3rem" @click="inc(item)">+</button>
                <button style="width:1rem;height:1rem; background:grey; font-size:0.3rem;" @click="del(item.id)">删除</button>
                </div>
            </li>
        </ul>
        </div>
       <div class="shopCart_no" v-else>
            <img style="width:2.4rem; height:2.4rem;padding-top: 1.6rem;" src="../assets/shopCart.png" alt="">
            <p>购物车快饿瘪了T·T</p>
        </div>
        
        <footer>
            <div class="footer_center">
                合计 : ￥ <span>{{ total_price }}</span>
            </div>

            <a @click="add3Cart" class="footer_right">结算</a>
        </footer>

</div>
</template>

<script>
    import BScroll from 'better-scroll';
   import { cartItems,delCart} from '../cartItems';
    export default {
        name: "Cart",
        data() {
            return {
                cartItems: cartItems
            }
        },
        methods: {
        inc(item){
            if(item.count < 10 ){
               item.count ++ ;
                }
            },
        dec(item){
        if(item.count > 1){
            item.count --;
                }
            },
        del(id){
            delCart(id)
        },
        back() {
        // 返回, 相当于 点击 浏览器的后退 按钮
        this.$router.back();
        },
        add3Cart(){
        this.$router.push({name:"buy"})
        }
        },       
        computed: {
            total_price() {
                return this.cartItems.reduce((pre, item) => {
                    return pre + (item.price * item.count);
                }, 0);
            }
        }
    }
</script>

<style scoped>
    .head{
        width: 7.5rem;
        height: 0.9rem;
        line-height: 0.88rem;
        border-bottom: 1px solid #e8e8e8;
        margin-left: 0.1rem;
        font-size: 0.3rem;
        color: #333;
    }
    .head a{
        display: block;
        width: 0.7rem;
        height: 0.88rem;
        float: left;
    }
    .back,.home{
        width: 0.4rem;
        height: 0.4rem;
        float: left;
         padding: 0.2rem 0;
    }
    .cart_shop{
        float: left;
        width: 6rem;
        height: 0.88rem;
        text-align: center;
    }
    .shopCart_no {
    text-align: center;
    overflow: hidden;
    color: #646464;   
    }

    .shopCart_no p {
    color: #646464;
    font-size: 0.4rem;
    padding: 0.4rem 0 0.2rem;
    }

    footer {
        position: absolute;
        width: 7.5rem;
        height: 1rem;
        line-height: 1rem;
        bottom: 0;
        width: 100%;
        position: fixed;
        left: 0;
        bottom: 0;
        background: #333;
        color: #fff;
    }

    .footer_left{
        float: left;
        padding-left: 0.3rem;
    }
    .footer_left_info{
       width: 0.25rem;
       height: 0.25rem; 

    }
    .footer_center{
        float: left;
        width: 3.8rem;
        height: 1rem;
        text-align: right;
    }
    .footer_right {
        width:2.4rem;
        height: 0.98rem;
        background: #b61d1d;
        color: #fff;
        font-size: 0.3rem;
        float: right;
        text-align: center;
    }
</style>