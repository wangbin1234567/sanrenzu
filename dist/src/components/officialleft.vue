<template>
    <div class="wrap">
        <div class="wrap_comtext">           
            <h2 :id="item.lets">{{item.lets}}</h2>
            <!-- 点击listitem显示链表 -->
            <div v-for="(listitem,index) in item.children" :key="index" class="item_list" @click="listitemclick(listitem.MasterID)"><img v-lazy="listitem.CoverPhoto" alt=""><span>{{listitem.Name}}</span></div>
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
    h2{
        width: 100%;
        height:22px;
        line-height: 22px;
        padding-left: 3%;
        background: #eee;
    }
}
.item_list{
    height: 50px;
    width: 92%;
    margin: 0 auto;
    display: flex;
    line-height: 50px;
    border-bottom: 1px solid #ccc;
    img{
        height: 40px;
        margin-top: 5px;
    }
    span{
        margin-left: 8px;
    }
}
</style>