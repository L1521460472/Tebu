<template>
    <div class="register_content">
      <img src="../assets/login_logo.gif" alt="">
      <br>
      <input class="username" type="text" placeholder="请输入您的用户名" ref="username"/>
      <br>
      <input class="pwdinp" type="password" placeholder="请输入您的密码" ref="userpwd"/>
      <br>
      <input class="pwdinp2" type="password" placeholder="请确认您的密码" ref="userpwd2"/>
      <br>
      <input class="phoneinp" type="text" placeholder="请输入您的手机号码" ref="userphone"/>
      <div class="agreement">
         <input  ref="check" id="check" type="checkbox">&nbsp;&nbsp;&nbsp;&nbsp;<i>我已看过并接受</i><span>＜＜特步用户协议＞＞</span>
      </div>
      <button class="registerbtn" @click="submit">立即注册</button>
      <br>
      <router-link to='/plogin' style="font-size:.3rem; margin-left:3.45rem; text-decoration-line: none;color: #5f5f5f;">返回</router-link>
    </div>
</template>

<script>
import axios from "axios";
export default {
   name:'register',
   methods: {
      submit() {
         let user_pwd = this.$refs.userpwd.value;
         let cnum = this.$refs.userpwd2.value;
            if(user_pwd!==cnum) {
               alert('前后密码不一致!');
               return;
            }
            if(!this.$refs.check.checked) {
               alert('请同意协议内容!');
               return;
            }
         let user={
            user_name:this.$refs.username.value,
            user_pwd:user_pwd,
            user_phone:this.$refs.userphone.value
         }
         axios.post('/user/register',user).then((result) => {
            // console.log('注册成功')
            if (result.data.success) {
               this.$router.push({name: 'plogin'});
               alert('注册成功,请登录!')
            } else {
               alert('该手机号已注册!');
            }
         }).catch(console.error)
      }
   }
}
</script>

<style scoped>
.register_content {
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
.username {
    background: url(../assets/login_account.gif) no-repeat .1rem ;
    background-size: .4rem .4rem;
    border-bottom:none; 
}
.pwdinp {
    background: url(../assets/login_password.gif) no-repeat .1rem ;
    background-size: .4rem .4rem;
    border-bottom:none; 
}
.pwdinp2 {
    background: url(../assets/login_password.gif) no-repeat .1rem ;
    background-size: .4rem .4rem;
    border-bottom:none; 
}
.phoneinp {
    background: url(../assets/mobilenum.png) no-repeat .1rem ;
    background-size: .4rem .4rem;
    margin-bottom: .2rem;
}
#check {
   width: .3rem;
   height: .3rem;
   vertical-align:middle;
}
.agreement {
   font-size: .3rem;
   margin-bottom: .4rem;
}
span {
   color: #5f5f5f;
   vertical-align:middle;
}
i {
   font-style: normal;
}
.registerbtn {
   height: .7rem;
   margin-left: .75rem;
   margin-bottom: .4rem;
   width: 6rem;
   color: white;
   background-color: #f52541;
   border: none;
   font-size: .3rem;
}
</style>