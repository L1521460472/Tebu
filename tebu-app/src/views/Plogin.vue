<template>
    <div class="pl_content">
        <img src="../assets/login_logo.gif" alt="">
        <br>
        <input ref='phone' class="phoneinp" type="text" placeholder="请输入您的手机号"/>
        <br>
        <input ref="pwd" class="pwdinp" type="password" placeholder="请输入您的密码"/>
        <br>
        <button class="loginbtn" @click="login">确定登录</button>
        <div class="othersway">
            <router-link to='/register' class="link01">注册新账号</router-link>&nbsp;&nbsp;丨&nbsp;&nbsp;<router-link to='/vlogin' class="link01">忘记密码</router-link>
        </div>
        <img class="qqlogin" src="../assets/qqlogin.png" alt="">
    </div>
</template>

<script>
import axios from "axios";
export default {
   name:'plogin',
   methods: {
       login() {
        let user={
            pwd:this.$refs.pwd.value,
            phone:this.$refs.phone.value
        }
           axios.post('/user/plogin',user).then((result) => {
               if (result.data.login_ok) {
               this.$router.push({name: 'user'});
            } else {
               alert('密码错误!');
            }
               
         }).catch(console.error)

       }
   }
}
</script>

<style scoped>
.pl_content {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    -webkit-transform: translate(-50%,-50%);
    margin-left: 0 auto
}
img {
    width:2.5rem;
    margin-left: 2.2rem;
    margin-bottom: .5rem;
}
input {
    margin-left: .75rem;
    font-size: .3rem;
    height: .7rem;
    width: 6rem;
    border: 1px solid #dcdcdc;
    text-indent: .6rem;
    color: #5f5f5f;
}
.phoneinp {
    background: url(../assets/mobilenum.png) no-repeat .1rem ;
    background-size: .4rem .4rem;
    border-bottom:none; 
}
.pwdinp {
    background: url(../assets/login_password.gif) no-repeat .1rem ;
    background-size: .4rem .4rem;
    margin-bottom: .2rem;
}
.loginbtn {
    height: .7rem;
    margin-left: .75rem;
    margin-top: .2rem;
    margin-bottom: .2rem;
    width: 6rem;
    color: white;
    background-color: #f52541;
    border: none;
    font-size: .3rem;
}
.link01 {
    color: #5f5f5f;
    font-size: .3rem;
    text-decoration-line: none;
}
.othersway {
    margin-left: 2.1rem;
    margin-bottom: .6rem;
}
.qqlogin {
    width: 7rem;
    height: 2rem;
    margin-left: .3rem;
}
</style>