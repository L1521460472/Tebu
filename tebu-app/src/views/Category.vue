<template>
    <div class="Category">
        <header class="category">
            <div class="back">
                <span @click="back" class="iconfont icon-zuojiankuohao1" style="color:pink;font-size:0.43rem;"></span>
            </div>
            <div class="box">
                <span class="iconfont icon-sousuo" style="color:lightslategray;font-size:0.45rem;"></span>
            </div>
            <div class="headerinput"><input type="text" value placeholder="搜索热门商品"></div>            
        </header>
        <div class="main">
            <div class="list_left">
                <ul>
                    <li @click="gotolist">全部</li>
                    <li @click="select(category)" :class="{currentcategory: category === currentcategory}" :key="category.id" v-for="category of category_list"> {{ category.name }} </li>
                </ul>
            </div>
            <CategoryContent :category_id="currentcategory.id"></CategoryContent>
        </div>
    </div>
</template>

<script>
import CategoryContent from '../components/CategoryContent'
export default {
    // const eventBus = new Vue(),
    name:'Category',
    data(){
        const category_list = [
            // {id:'20001',name:'全部',path:'/list'} , 
            {id:'20002',name:'男鞋'} , 
            {id:'20003',name:'女鞋'} , 
            {id:'20004',name:'男装'} , 
            {id:'20005',name:'女装'} , 
            {id:'20006',name:'童鞋'} , 
            {id:'20007',name:'童装'} ,
            {id:'20008',name:'运动部件'} ,    
        ]
        return{
            currentcategory:category_list[0],
            category_list,
        }
    },
    methods:{
        select(category){
            this.currentcategory = category;
        },
        gotolist(){
            this.$router.push('/list')
        },
        back(){
            this.$router.back();
        }
    },
    mounted(){
        // eventBus.$on('categorycontent',(event)=>{
        //     show:true;
        // })
        this.$eventBus.$emit('index',true);

    },
    components:{
        CategoryContent
    }
}
</script>

<style scoped>
.Category{
    width: 100%;
    height: 100%;
}
.category{
    width: 100%;
    height: 0.9rem;
    border-bottom: 0.02rem solid lightgrey;
}
.category>div{
    float: left;
}
.back{
    width: 0.88rem;
    height: 0.88rem;
}
.back>.iconfont{
    position: absolute;
    top: 0.15rem;
    left: 0.18rem;
    width: 0.88rem;
    height: 0.88rem;
}
.headerinput>input{
    width: 6.2rem;
    height: 0.6rem;
    border: none;
    background: #ececec;
    border-radius: 0.08rem;
    margin: 0.15rem 0.2rem 0 0;
    font-size: 0.3rem;
    color: grey ;
    padding-left: 2.5rem;
}
.box>.iconfont{
    position: absolute;
    top: 0.17rem;
    left: 0.2rem;
    z-index: 9;
}
.main{
    position: absolute;
    top: 0.9rem;
    bottom: 1.16rem;
    left: 0;
    right: 0;
    margin:  0 auto;
}
.list_left{
    position: fixed;
    width: 1.7rem;
    top: 0.9rem;
    bottom: 1.16rem;
    left: 0;
    right: 0;
    background: #f5f5f5;
}
.list_left ul li{
    width: 100%;
    height: 1rem;
    text-align: center;
    line-height: 1rem;
    font-size: 0.3rem;
    border-bottom: 0.02rem solid lightgray;
}

.currentcategory{
    background: white;
}


</style>