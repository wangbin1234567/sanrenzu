<template>
    <div class="image_item_list">
        <div class="image_ps" @click.stop="addList(item.Id)">
            <p class="image_ps_wan">{{item.Name}}</p>
            <p>{{item.Count}}张</p>
        </div>
        <li v-for="(itemimg,key) in item.List" :key="key" @click="blowImage(item.Id,key)">
            <img src='' :style="{backgroundImage:'url('+itemimg.Url+')'}">
        </li>
    </div>
</template>

<script>
import {mapMutations,mapActions} from "vuex"
export default {
    props:{
        item:{
            type:Object,
            item:'item'
        }
    },
    data(){
        return{
            Page:1,
            PageSize:30
        }
    },
    methods:{
        ...mapMutations({
            imgFalg:"series/imgFalg",
            setCarAllImg:'series/setCarAllImg'
            
        }),
        ...mapActions({
            getMasterDataList:'carlist/getMasterDataList'
        }),
        addList(Id){
            let SerialID=localStorage.getItem("id")
            let Page=this.Page
            let PageSize=this.PageSize
            this.getMasterDataList({SerialID,Id,Page,PageSize})
            this.setCarAllImg()
        },
        blowImage(Id,key){
            this.imgFalg(key)
            let SerialID=localStorage.getItem("id")
            let Page=this.Page
            let PageSize=this.PageSize
            this.getMasterDataList({SerialID,Id,Page,PageSize})
        },
        bbb(){
            
        }
    }
}
</script>
<style lang="scss" scoped>
.image_item_list{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    background: #fff;
    li{
        width: 123px;
        height: 123px;
        margin: 0 2.3px 2.3px 0;
        img{
            width: 100%;
            height: 100%;
            background-size: cover  
        }
    }
    li:nth-child(3n+4) {
    margin-right: 0;
}
    li:nth-child(6n+6) {
    margin-bottom: 6px;
    }
}
.image_ps{
    position: absolute;
    height: 123px;
    width:123px;
    top: 0;
    left: 0;
    background: rgba(56,90,130,.5);
    text-align: center; 
    .image_ps_wan{
        margin-top: 45px;
        color: #ffffff;
        font-size: 14px;
        margin: 40px 0 0;
    }
    p:nth-child(2){
         color: #ffffff;
        font-size: 13px;
    }
}
</style>