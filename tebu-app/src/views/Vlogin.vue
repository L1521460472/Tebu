<template>
    <div class="vl_content">
        <img src="../assets/login_logo.gif" alt="">
        <div>
            <input  class="phoneinp" ref="phone" type="text" placeholder="请输入您的手机号"/>
        </div>
        <div>
            <input  class="codeinp" ref="code" type="text" placeholder="请输入您的验证码"/><button class="codebtn" @click="sendCode">发送验证码</button>
            </div>
        <div>
            <button @click="login" class="loginbtn">登录</button>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    export default {
        name:'vlogin',
        methods: {
                sendCode() {
                    axios.post('/user/sendVerifyCode', {
                        phone: this.$refs.phone.value
                    }).then((result) => {
                        alert('已经发送');
                    }).catch(console.error)
                },
                login() { 
                    axios.post('/user/loginByCode', {
                        phone: this.$refs.phone.value, 
                        code: this.$refs.code.value,
                    }).then((result) => {
                        console.log(result.data);
                        this.$router.push({name: 'user'});
                    }).catch(console.error)
                }
        }
    }
</script>

<style scoped>
.vl_content {
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
}
.phoneinp {
    background: url(../assets/mobilenum.png) no-repeat .1rem ;
    background-size: .4rem .4rem;
    height: .7rem;
    border: 1px solid #dcdcdc;
    color: #5f5f5f;
    text-indent: .6rem;
    font-size: .3rem;
    margin-left: .75rem;
    margin-top: .5rem;
    width: 6rem;
}
.codeinp {
    margin-left: .75rem;
    height: .7rem;
    margin-top: .2rem;
    border: 1px solid #dcdcdc;
    color: #5f5f5f;
    text-indent: .6rem;
    font-size: .3rem;
    background: url(../assets/login_password.gif) no-repeat .1rem ;
    background-size: .4rem .4rem;
}
.codebtn {
    height: .7rem;
    width: 2.15rem;
    margin-left: .2rem;
    color: white;
    background-color: #f52541;
    border: none;
    font-size: .3rem;
    
}
.loginbtn {
    height: .7rem;
    margin-left: .75rem;
    margin-top: .2rem;
    width: 6rem;
    color: white;
    background-color: #f52541;
    border: none;
    font-size: .3rem;
}
</style>