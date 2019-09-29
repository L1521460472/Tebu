<template>
    <div id="search">
        <!-- <homeHeader></homeHeader> -->
        <div class="list_t">
            <div class="header">
            <span class="iconfont icon-sousuo" style="font-size:0.43rem;color:lightgrey"></span>
            <div class="headerin">
                <img src="../assets/QQ截图20190923202933.png" />
                <input v-on:keyup.enter="gotoList" type="text">
            </div>
        </div>
        </div>
        <h1>热门搜索：</h1>
        <div class="list_s">
            <ul>
                <li @click="gotolist(page)" :key="page.name" v-for="page of pages">
                    {{ page.name }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import homeHeader from '../components/homeHeader'
export default {
    name:'Search',
    data(){
        return{
            current:undefined,
            pages:[
                {id:'111',name:"跑步鞋",path:'/'},
                {id:'222',name:"休闲鞋",path:'/'},
                {id:'333',name:"老爹鞋",path:'/'},
                {id:'444',name:"小白鞋",path:'/'},
                {id:'555',name:"明日之子",path:'/'},
                {id:'666',name:"动力巢",path:'/'},
                {id:'777',name:"景甜同款",path:'/'},
                {id:'888',name:"烽火鞋",path:'/'},
                {id:'999',name:"刀锋跑鞋",path:'/'},
                {id:'1000',name:"马拉松跑鞋",path:'/'},
            ]
        }
    },
    methods:{
        gotolist(page){
            if(this.current !== page){
                this.current = page;
                this.$router.push('/list');
            }
        },
        gotoList(){
            setTimeout(() => {
                this.$router.push('/list');
            }, 500);
        }
    },
    created(){
        document.onkeydown = function(e){
            let key = window.event.keyCode;
            if(key == 13){
            }
        }
    },
    components:{
        homeHeader
    }
}
</script>

<style scoped>
h1{
    width: 100%;
    height: 0.5rem;
    line-height: 0.5rem;
    margin-top: 1.6rem;
    font-size: 0.3rem;
    margin-left: 0.6rem;
    color: #555;
    background: url(https://lidamao.oss-cn-hangzhou.aliyuncs.com/cyl/20190727/hot.png) no-repeat;
    background-size: 0.4rem 0.4rem;
    padding-left: 0.6rem;

}
.list_s ul{
    padding-left: 0.9rem;
}
.list_s ul li{
    float: left;
    margin-right: 0.32rem;
    background: #eee;
    border: 0.01rem solid #eee;
    border-radius: 0.1rem;
    padding: 0.1rem 0.25rem;
    list-style: none;
    color: #969696;
    margin-top: 0.2rem;
    font-size: 0.24rem;
}
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
    top: 0.27rem;
    left: 2.6rem;
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
    padding-left: 1.1rem;
    color: black;
    box-sizing: border-box;
}

</style>