<template>
    <div class="image_item_list">
        <div class="image_ps" @click="addList(item.Id)">
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
// import axios from 'axios';

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
            imgFalg:"series/imgFalg"
            
        }),
        ...mapActions({
            getMasterDataList:'carlist/getMasterDataList'
        }),
        // magnifyImg(){
           
        // },
        addList(Id){
            let SerialID=this.$route.query.SerialID
            let Page=this.Page
            let PageSize=this.PageSize
            this.getMasterDataList({SerialID,Id,Page,PageSize})
            // axios.get("http://baojia.chelun.com/v2-car-getCategoryImageList.html?SerialID=2593&ImageID=6&Page=1&PageSize=30").then(res=>{
            //     console.log('res---------------------',res)
            // })
        },
        blowImage(Id,key){
            console.log("Id-------------------------",Id)
            this.imgFalg(key)
            let SerialID=this.$route.query.SerialID
            console.log('this.$route.query.SerialID-----------',this.$route.query.SerialID)
            let Page=this.Page
            let PageSize=this.PageSize
            this.getMasterDataList({SerialID,Id,Page,PageSize})
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
    li{
        width: 33.3%;
        height: 123px;
        padding: 2px 2px;
        img{
            width: 100%;
            height: 100%;
            background-size: cover  
        }
    }
}
.image_ps{
    position: absolute;
    height: 123px;
    width:123px;
    top: 0;
    left: 0;
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