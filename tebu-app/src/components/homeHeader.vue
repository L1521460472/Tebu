<template>
    <div id="app">
        <div class="header">
            <div class="headerin">
                <img src="../assets/QQ截图20190923202933.png" />
                <div>
                    <span class="icon-sousuo"></span>
                    <input type="text">
                </div>
            </div>
        </div>
        <img src="http://xtep.oss-cn-hangzhou.aliyuncs.com/2019/09/20/rongyanxie_640-648-.jpg" alt="">
        <img src="http://xtep.oss-cn-hangzhou.aliyuncs.com/2019/09/02/640-648.jpg" alt="">
        <img src="http://xtep.oss-cn-hangzhou.aliyuncs.com/2019/09/02/tebuyun.jpg" alt="">
    </div>
</template>

<script>
export default {
    name:'homeHeader'
}
</script>

<style scoped>
.header{
    width: 100%;
    height: 1rem;
    position: fixed;
    background: #e60012;
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
}
#app>img{
    display: block;
    width: 100%;
    height: 7.6rem;
    display: none;
}

</style>