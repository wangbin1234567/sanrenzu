<template>
    <div class="image_item_list">
        <div class="image_ps" @click.stop="addList(item.Id)">
            <p class="image_ps_wan">{{item.Name}}</p>
            <p>{{item.Count}}张</p>
        </div>
        <li v-for="(itemimg,key) in item.List" :key="key" @click="blowImage(item.Id,key)">
<<<<<<< HEAD
            <span src='' :style="{backgroundImage:'url('+itemimg.Url+')'}"></span>
=======
            <img src='' :style="{backgroundImage:'url('+itemimg.Url+')'}">
>>>>>>> jyh
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
<<<<<<< HEAD
            let SerialID=this.$route.query.SerialID
=======
            let SerialID=localStorage.getItem("id")
>>>>>>> jyh
            let Page=this.Page
            let PageSize=this.PageSize
            this.getMasterDataList({SerialID,Id,Page,PageSize})
            this.setCarAllImg()
        },
        blowImage(Id,key){
            this.imgFalg(key)
<<<<<<< HEAD
            let SerialID=this.$route.query.SerialID
=======
            let SerialID=localStorage.getItem("id")
>>>>>>> jyh
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
<<<<<<< HEAD
    li{
        width: 33.3%;
        height: 123px;
        padding: 2px 2px;
        span{
            width: 100%;
            height: 100%;
            display: inline-block;
            background-size: cover  
        }
    }
=======
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
>>>>>>> jyh
}
.image_ps{
    position: absolute;
    height: 123px;
    width:123px;
    top: 0;
    left: 0;
<<<<<<< HEAD
    color: #ffffff;
    background: rgba(56,90,130,.5);
    font-size: 13px;
     text-align: center;
    .image_ps_wan{
        margin-top: 45px;
        font-size: 14px;
        margin-bottom: 3px;
=======
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
>>>>>>> jyh
    }
}
</style>