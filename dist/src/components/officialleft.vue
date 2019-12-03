<template>
    <div class="wrap">
        <!-- <img v-lazy="'/static/imgs/timg.jpg'+item.tagurl" alt=""> -->
        <div class="wrap_comtext">
            
            <h2 :id="item.lets">{{item.lets}}</h2>
            <!-- 点击listitem显示链表 -->
            <div v-for="(listitem,index) in item.children" :key="index" class="item_list" @click="listitemclick(listitem.MasterID)"><img v-lazy="listitem.CoverPhoto" alt=""><span>{{listitem.Name}}</span></div>
        </div>
    </div>
</template>

<script>
// import axios from "axios"
export default {
    props:["item"],
    data(){
        return{
            listMasterID:[]
        }
    },
    methods:{
        listitemclick(MasterID){
            // window.console.log(MasterID)
            this.$emit("addlist",MasterID)   
        }
    }
}
</script>

<style lang="scss" scoped>
.wrap{
   flex: 1;
}

.item_list{
    height: 50px;
    text-align: center;
    width: 100%;
    display: flex;
    line-height: 50px;
    border: 1px solid #ccc;
    img{
        height: 40px;
        margin-top: 5px;
    }
    span{
        margin-left: 8px;
    }
}
</style>