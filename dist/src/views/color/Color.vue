<template>
    <div class="color">
        <p>全部颜色</p>
        <div>
        <p class="c-type">
            <span v-for="(item, index, key) of colorList" :key="index" @click="handleC(item,key)" :class="{active: curIndex==key}">{{index}}</span>
        </p>
        <ul>
            <li v-for="(v,i) in colorData" :key="i" @click="clickColor(v.ColorId)">
            <span :style="{background: v.Value}"></span>
            {{v.Name}}
            </li>
        </ul>
        </div>
    </div>
</template>

<script>
import {mapActions,mapState} from "vuex"
export default {
    data(){
        return {
            colorData: [],
            curIndex: 0,//年份下标
            arr: []
        }
    },
    computed: {
        ...mapState({
            colorList: state=>state.carColor.colorList
        })
    },
    mounted(){  
        this.getCarColor(2593) 
        let obj=JSON.parse(JSON.stringify(this.colorList))
        this.arr=Object.values(obj)  
        this.handleC(this.arr[0],0)  
        this.$loading.show()
        setTimeout(()=>{
            this.$nextTick(()=>{
                this.$loading.hide()
            })
        },150)
    },
    methods: {
        ...mapActions({
            getCarColor: 'carColor/getCarColor'
        }),
        //点击年份切换高亮并切换数据
        handleC(item,key){
            this.colorData=item
            this.curIndex=key
        },
        clickColor(colorId){
            this.getCarColor(colorId);
            // window.history.back();
        },
    }
};
</script>

<style lang="scss" scoped>
    .color {
        width: 100%;
        height: 100%;
        background: #f4f4f4;
    }
    .color > p {
        margin: 7.5px 0;
        font-size: 17px;
        color: #00afff;
        background: #fff;
        text-align: center;
        line-height: 40px;
    }
    .color .c-type {
        margin: 7.5px 0 0;
        padding: 0 0 0 10px;
        background: #fff;
        overflow-x: scroll;
        line-height: 38px;
    }
    .color .c-type span {
        font-size: 15px;
        padding: 0 21px 0 0;
    }
    .color ul {
        background: #fff;
        margin: 7.5px 0 0;
        padding: 0 10px;
        display: flex;
        width: 100%;
        flex-wrap: wrap;
    }
    .color ul li {
        color: #000;
        font-size: 16px;
        float: left;
        border: 1px solid #3aacff;
        width: 48%;
        border-radius: 3px;
        line-height: 35px;
    }
    .color ul li:nth-child(odd){
        margin: 10px 10px 10px 0;
    }
    .color ul li:nth-child(even){
        margin: 10px 0 10px 0;
    }
    .color ul span {
        display: inline-block;
        width: 20px;
        height: 20px;
        vertical-align: -12%;
        border: 1px solid #818181;
        margin: 0 0 0 10px;
    }
    .active{
        color: #00afff;
    }
</style>