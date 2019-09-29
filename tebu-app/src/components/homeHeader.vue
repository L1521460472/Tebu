<template>
    <div id="app">
        <div class="header">
            <span class="iconfont icon-sousuo" style="font-size:0.43rem;color:lightgrey"></span>
            <div class="headerin">
                <img src="../assets/QQ截图20190923202933.png" />
                <input @click="gotoSousuo" type="text">
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    name:'homeHeader',
    methods:{
        gotoSousuo(){
            setTimeout(() => {
                this.$router.push({path:'/search'})
            }, 100);
        }
    }
}
</script>

<style scoped>
.header{
    width: 100%;
    height: 1rem;
    position: fixed;
    background: #e60012;
    top: 0;
    z-index: 9;
}
.header .iconfont{
    position: absolute;
    top: 0.28rem;
    left: 2.25rem;
    z-index: 9;
}
.headerin{
    padding: 0.2rem 0.3rem;
}
.headerin>img{
    display: block;
    height: 0.5rem;
    float: left;
}
.headerin>input{
    width: 5.1rem;
    height: 0.6rem;
    float: right;
    border-radius: 0.15rem;
    font-size: 0.3rem;
    padding-left: 0.7rem;
    color: black;
    box-sizing: border-box;
}

</style>