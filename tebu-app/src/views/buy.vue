<template>
    <div style="font-size:0.3rem;width:7.5rem;margin-bottom:1rem">
        <div><div class="old">提交订单30分钟后未付款，订单将自动关闭</div></div>
        <div><div class="head_two">收货信息</div></div>
        <div><div class="nav_list" @click="show = !show" v-if=" con =con"><div class="nav">选择地址</div></div>
        <ul style="padding-left:0.3rem" @click="show = !show" >
            <li v-for="add of address_list">
                <p>收货人姓名：{{ add.name}}</p>
                <p>手机：{{ add.phone}}</p>
                <p>详细地址：{{ add.address}}</p>
                
            </li>
        </ul>
        <div class="form" v-if="show">
            <div>
                收货人姓名: <input ref="uname" />
            </div>
            <div>
               <span style="padding-right:0.5rem">手</span><span style="padding-right:0.5rem">机:</span><input ref="uphone" />
            </div>
            <div>
               <span style="padding-right:0.3rem">详细地址:</span><input ref="uaddress" />
            </div>
            <p style="text-align: center; height:0.8rem; line-height:0.8rem; "><button @click="saveAddress() ; delshow() ">确定</button>  <button @click="show = false">取消</button></p>
        </div>
        </div>
        <div><div class="head_two">配送方式</div></div>
        <div class="navbox_two">
            <div class="rad" ><input style="width:0.32rem;height: 0.32rem; " type="radio"  checked="checked"> <span style="padding-left:0.3rem;">快递</span></div>
        </div>
        <div><div class="head_two">支付方式</div></div>
        <div class="navbox_two">
            <div class="rad" ><input style="width:0.32rem;height: 0.32rem; " type="radio"  checked="checked"> <span style="padding-left:0.3rem;">支付宝网页支付
		    </span></div>
        </div>
        <div><div class="head_two">订单详情</div></div>
        <div><div class="buy">买产品买3件8.00折 </div></div>
        <ul  >
            <li v-for="item of cartItems" style="border:1px solid gray;height:1.4rem; padding-left:0.3rem ">

                <div style="height:1.08rem">
                <img style="width:1.08rem;height:1.08rem;float:left"  :src="item.pic" alt="">
                <p style="font-size:0.3rem;color:red;">{{item.name}}</p>
                <p style="font-size:0.2rem;">{{item.text}}</p>
                <p style="font-size:0.3rem;color:red;">￥{{item.price}} </p>
                </div>
            </li>
        </ul>

        <div>
            <div class="buybox">
            <h3>
                <b class="juan">券</b>可使用的优惠(点击使用)
            </h3>
            <a style="background:#b61d1d; color:#fff">¥ 50 优惠券</a>
        </div>
        </div>

        <div class="liuyanbox">使用积分：
            <input placeholder="您剩余688积分" class="useuserpoints" name="txtpints" style="width: 60%;">
            
        </div>
            <div class="liuyanbox1"><p>买家留言：</p>
            <p style="padding-left:0.08rem"><input placeholder="若您对订单有特殊需求，可在此备注" class="useuserpoints" name="txtpints" style="width: 90%; height:0.7rem;padding-left: 0.3rem;"></p>           
        </div>
        
        <div class="payboxlist">
            <div class="payitem"><i>商品金额：</i><span class="spTotalPrice">￥{{ total_price }}</span></div>
            <div class="payitem"><i>运费：</i> <span class="spTotalPrice">￥0</span></div>
            <div class="payitem"><i>优惠劵：</i> <span class="spTotalPrice">-￥0.0</span></div>
        </div>

        <footer>
            <div class="footer_center">
                应付总额 : <span style="color: #FDA802;">{{ total_price }}元</span>
            </div>

            <a class="footer_right">付款</a>
        </footer>

    </div>


    

</template>

<script>
    import BScroll from 'better-scroll';
    import { cartItems,delCart, addAddress,address_list} from '../cartItems';
    export default {
        name: "buy",
        data() {
            return {
                show:false,
                con:true,
                cartItems: cartItems,
                address_list: address_list,
            }
        },
        computed: {
            total_price() {
                return this.cartItems.reduce((pre, item) => {
                    return pre + (item.price * item.count);
                }, 0);
            }
        },
        methods: {
            saveAddress() {
                const addressObj = {
                    name: this.$refs.uname.value,
                    phone: this.$refs.uphone.value,
                    address: this.$refs.uaddress.value
                };
                 addAddress(addressObj);
                console.log(addressObj)
            },
            delshow(){
            this.show = false;
            this.con = false;
            }
        },
        mounted(){
            this.$eventBus.$emit('showHide',true);
        }
    }
</script>

<style scoped>

    .old{
        height: 0.72rem;
        padding-left: 1.2rem;
        line-height: 0.72rem;
        font-size: 0.24rem;
        color: #555;
    }
    .head_two{

        height: 0.76rem;
        background: #f0f0f0;
        line-height: 0.76rem;
        padding-left:0.3rem;
        color: #65523f;
        font-size: 0.24rem;
        
    }
    .nav_list{
 
        height: 1.08rem;
    }
    .nav{
        color: #333;
        padding: 0.3rem 0.28rem;
        line-height: 0.52rem;
    }
    .nav_two{

        height: 0.8rem;
        background: #f0f0f0;
        line-height: 0.8rem;
        padding-left:0.3rem;
        color: #65523f;
        font-size: 0.24rem;
    }
    .navbox{

        height: 1.6rem;
        font-size: 0.3rem;
        color: #666666;
        background: #fff;
        border-bottom: 1px solid #D6D6D6;
    }
    .rad{
        padding-left:0.3rem;
    }
    .navbox_two{

        height: 0.8rem;
        line-height: 0.8rem;
    }
    .buy{
 
        height:1.22rem;
        line-height: 1.22rem;
        padding-left:0.3rem;
        border-bottom: 1px solid #e4e4e4;
    }

    .buybox {
        padding-left:0.3rem;
        line-height: 0.8rem;
        font-size: 0.3rem;
        color: #666666;
        background: #fff;
        border-bottom: 1px solid grey;
    }

    b.juan {
        width:0.4rem;
        height: 0.4rem;
        background-color: #FF5300;
        color: #fff;
        display: inline-block;
        line-height: 0.4rem;
        text-align: center;
        border-radius: 2px;
        margin-right: 5px;
    }

    .liuyanbox {
        height: 1.1rem;
        background: #FFFFFF;
        color: #7f7f7f;
        text-indent: 0.1rem;
        line-height: 1.1rem;      
    }
    .liuyanbox1 {
        height: 1.8rem;
        background: #FFFFFF;
        color: #7f7f7f;
        text-indent: 0.1rem;
        line-height: 0.8rem;      
    }

    .useuserpoints {
        color: #333;
        height: 0.75rem;
        line-height:0.75px;
        background-color: #F7F7F7;
        border-radius: 0.1rem;
        font-size: 0.3rem;
        font-family: "微软雅黑";
        box-shadow: inset 1px 1px 5px rgba(0,0,0,0.1);
        width: 93%;

    }

    .payboxlist{
        height: 4.46rem;
         color: #6d523d;
        font-weight: bold;
    }

    .payitem{
        width: 7.5rem;
        height: 0.82rem;
        float: left;
        line-height: 0.82rem;
        border-top: 1px solid grey;
    }
    .payitem i{
        padding-left: 0.3rem;
        font-style: normal;      

    }
    
    .spTotalPrice{
        float:right;
        padding-right: 0.3rem;
    }

    footer {
        position: absolute;
        width: 7.5rem;
        height: 0.9rem;
        line-height: 0.9rem;
        bottom: 1.16rem;
        width: 100%;
        position: fixed;
        left: 0;
        background: #fff;
        color: #333;
        border-top: 1px solid grey;
        z-index: 999;
    }
    .footer_center{
        float: left;
        width: 3.8rem;
        height: 1rem;
        text-align: right;
        padding-left: 1.2rem;
    }
    footer .footer_right {
        width:2.4rem;
        height: 0.98rem;
        background: #b61d1d;
        color: #fff;
        font-size: 0.3rem;
        float: right;
        text-align: center;
    }

    .form{
        height: 3.8rem;
        background: #fff;
    }

    .form > div > input {
        width: 70%;
        height: 0.6rem;
        font-size: 0.4rem;
        border-bottom: solid 1px grey;
    }

    .form > div {
        height: 1rem;
        border-bottom: solid 1px grey;
        line-height: 1rem;
        padding-left: 0.3rem;
    }

    .form > p > button{
        width:1.2rem;
        height:0.6rem;
        background: #b61d1d;
        font-size:0.3rem
        
    }
</style>