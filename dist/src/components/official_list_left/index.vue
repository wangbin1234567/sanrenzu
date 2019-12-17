<template>
    <div class="wrap">
        <div class="wrap_comtext">           
            <p :id="item.lets">{{item.lets}}</p>
            <!-- 点击listitem显示链表 -->
            <div class="itemList">
            <div v-for="(listitem,index) in item.children" :key="index" class="item_list" @click="listitemclick(listitem.MasterID)"><img v-lazy="listitem.CoverPhoto" alt=""><span>{{listitem.Name}}</span></div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations,mapActions} from "vuex"
export default {
    props:["item"],
    data(){
        return{
        }
    },
    methods:{
        ...mapActions({
        getMasterList:'list/getMasterList'
        }),
        ...mapMutations({
            amendstate:"home/amendstate"
        }),
        listitemclick(MasterID){
            // this.amendstate()
            // this.getMasterList(MasterID)
            this.amendstate()
            this.getMasterList(MasterID)
         
           
            
        },
    },
}
</script>
<style lang="scss" scoped>
.wrap{
   flex: 1;
}
.wrap_comtext{ 
    p{
        width: 100%;
        line-height: 20px;
        padding: 0 0 0 15px;
        background: #f4f4f4;
        color: #aaaaaa;
        font-size: 14px;
    }
}
.item_list{
    height: 50px; 
    border-bottom: 1px solid #ddd;
    align-items: center;
    display: flex;
    img{
        height: 40px;
        width: 40px;
    }
    span{
        margin-left: 20px;
        font-size: 16px;
    }
}
.itemList{
    margin: 0 12px;
}
</style>