<template>
    <div class="image_item_list">
        <div class="image_ps" @click.stop="addList(item.Id, index, item.Count, item.List)">
            <p class="image_ps_wan">{{item.Name}}</p>
            <p>{{item.Count}}张</p>
        </div>
        <li v-for="(itemimg,key) in item.List" :key="key" @click="swiperPage(key,item.Id)">
            <span v-lazy:background-image="itemimg.Url.replace('{0}',itemimg.LowSize)"></span>
        </li>
    </div>
</template>
<script>
import { mapMutations, mapActions} from "vuex"
export default {
    props:{
        item:{
            type:Object,
            item:'item'
        },
        index:{
            type:Number,
            index:"index"
        }
    },
    methods:{
        ...mapMutations({
            //点击分类的时候把他的下标和ID都传过去
            setSeries:'series/setSeries',
            //点击的时候让车图片的展示为true
            setSwiperIndex:'series/setSwiperIndex'
        }),
        ...mapActions({
            getMasterDataList:'series/getMasterDataList'
        }),
        swiperPage(key,id){
            this.$emit('update:swiperShou',true)
            this.getMasterDataList(id)
            this.setSwiperIndex(key)
        },
        addList(ImageID,index,Count,list){
            this.$emit("update:serialShow",true)
            this.setSeries({ImageID,index,Count,list})
        },
    }
}

</script>
<style lang="scss" scoped>
.image_item_list{
    width: 100%;
    flex-wrap: wrap;
    overflow-y: scroll;
    background: #ffffff;
    position: relative;
    top: 0;
    height: 100%;
    li{
        float: left;
        margin-right: .06rem;
        margin-bottom: .06rem;
        width: 121px;
        height: 121px;
        padding: 0;
        overflow: hidden;
        span{
            width: 100%;
            display: inline-block;
            height: 100%;
            background-size: cover  
        }
    }
}
.image_ps{
    position: absolute;
    height: 121px;
    width:121px;
    top: 0;
    color: #ffffff;
    background: rgba(56,90,130,.5);
    font-size: 13px;
     text-align: center;
    .image_ps_wan{
        margin-top: 45px;
        font-size: 14px;
        margin-bottom: 3px;
    }
}
</style>