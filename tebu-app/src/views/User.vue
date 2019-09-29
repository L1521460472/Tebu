<template>
    <div class="body">
        <div class="header">
            <div v-if="isLogin">
                <span class="welcome">欢迎!~~~</span>
                <button @click="toLogout" class="logoutbtn">退出登录</button>
            </div>
            
            <div v-else>
                <div @click="toLogin" class="loginbtn">登录注册</div>
            </div>

            <div class="round">
                <!-- <img src="../assets/userlogo.jpg" alt=""> -->
            </div>
        </div>

        <div class="banner">
            <div class="mylist">
                <span>我的订单</span><span class="mylist_r">查看全部订单</span>
            </div>
            <div class="nav">
                <ul>
                    <li>
                        <img src="../assets/my_pay01.png" alt="">
                        <p>待付款</p>
                    </li>
                    <li>
                        <img src="../assets/my_pay01.png" alt="">
                        <p>待付款</p>
                    </li>
                    <li>
                        <img src="../assets/my_pay01.png" alt="">
                        <p>待付款</p>
                    </li>
                    <li>
                        <img src="../assets/my_pay01.png" alt="">
                        <p>待付款</p>
                    </li>
                    <li>
                        <img src="../assets/my_pay01.png" alt="">
                        <p>待付款</p>
                    </li>
                </ul>
            </div>
        </div>

        <div class="content">
            <ul>
                <li>我的拼团<img src="../assets/sanjiao.png" alt=""></li>
                <li>邀请有礼<img src="../assets/sanjiao.png" alt=""></li>
                <li>优惠券<img src="../assets/sanjiao.png" alt=""></li>
                <li>收货地址<img src="../assets/sanjiao.png" alt=""></li>
                <li>个人资料<img src="../assets/sanjiao.png" alt=""></li>
                <li>修改密码<img src="../assets/sanjiao.png" alt=""></li>
                <li>特步合伙人<img src="../assets/sanjiao.png" alt=""></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:'User',
    data() {
            return {
                isLogin: existCookie('token')
            }
        },
        // mounted() {
        //     this.$eventBus.$emit('showHideNav', true);
        // },
        methods: {
            toLogin() {
                this.$router.push({name: 'plogin'})
            },
            toLogout() {
                this.$router.go(0);
                removeCookie('token') 
            }
        }
    }

    function existCookie(name) {
        let parts = document.cookie.split('; ');
        for (let part of parts) {
            if (name === part.split('=')[0]) {
                return true
            }
        }
        return false;
    }

    function removeCookie(cname){
        var name = cname + "=";
        var ca = document.cookie.split(';');	
        var cookieStr="";
        for(var i=0; i<ca.length; i++) {
            var c = ca[i].trim();
            if (c.indexOf(name)==0) {
                document.cookie =c + ';expires=' + new Date(0).toUTCString()  
            }else{
                cookieStr+=c;
                cookieStr+=";";
            }
            document.cookie =cookieStr;
        }	
    }
</script>

<style scoped>
li {
    list-style: none;
}
.body {
    width:100%;
    height:100%;
    background-color: #eaeaea;
}
.header {
    width: 100%;
    height: 22%;
    background-image: url(../assets/beijing.jpg);
    background-repeat: no-repeat;
    background-size:100% 100%;
}
.logoutbtn {
    height: .7rem;
    margin-left: .75rem;
    width: 6rem;
    color: white;
    background-color: #d62424;
    border: none;
    font-size: .3rem;
    letter-spacing: 0.3rem;
    position: absolute;
    top:11rem;
}
.loginbtn {
    position: absolute;
    left: 2.5rem;
    top: 1.3rem;
    font-size: .3rem;
    letter-spacing: .1rem;
    color: white;
}
.welcome{
    position: absolute;
    left: 2.5rem;
    top: 1.3rem;
    font-size: .3rem;
    letter-spacing: .1rem;
    color: white;
}
.round {
    height: 1.5rem;
    width: 1.5rem;
    border-radius: 50%;
    overflow: hidden;
    background-image: url(../assets/userlogo.jpg);
    background-position: center;
    background-size: 1.5rem 1.5rem;
    position: absolute;
    left: .8rem;
    top: .8rem;
}
.banner{
    width: 95%;
    height: 2rem;
    background-color: white;
    margin-top: .3rem;
    margin-left: 2.5%;
    border-radius: 15px;
    overflow: hidden;
}
.content {
    margin-top: .3rem;
    margin-left: 2.5%;
    width: 95%;
    height: 4.96rem;
    background-color: white;
    border-radius: 15px;
    overflow: hidden;
}
.content li {
    width: 100%;
    height: .7rem;
    line-height: .7rem;
    font-size: .3rem;
    border-bottom:1px solid darkgrey; 
    padding-left: .3rem;
}
.mylist {
    width: 100%;
    height: .7rem;
    line-height: .7rem;
    font-size: .3rem;
    background-color: white;
    padding-left: .3rem;
    padding-right: .3rem;
    box-sizing: border-box;
    border-bottom:1px solid darkgrey; 
}
.mylist_r {
    float: right;
    color: darkgrey;
}
.nav ul {
    width: 100%;
    height: 1.3rem;
    box-sizing: border-box;
    padding-top: .2rem;
}
.nav li {
    display: inline-block;
    text-align: center;
    font-size: .3rem;
    margin: 0 .26rem;
}
.nav img {
    width: .5rem;
    height: .5rem;
}.content img {
    float: right;
    margin-right: .6rem;
    margin-top: .3rem;
}
</style>