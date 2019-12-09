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
import {mapMutations,mapActions, mapState} from "vuex"
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
    computed:{
        ...mapState({
            numberColorId:state=>state.series.numberColorId,
            numberCarid:state=>state.series.numberCarid

        })
    },
    methods:{
        ...mapMutations({
            imgFalg:"series/imgFalg",
            setCarAllImg:'series/setCarAllImg'
            
        }),
        ...mapActions({
            getMasterDataList:'carlist/getMasterDataList'
        }),
        addList(ImageID){
            let SerialID=this.$route.query.SerialID||localStorage.getItem("id")
            let Page=this.Page
            let PageSize=this.PageSize
            let ColorID=this.numberColorId
          
            if(ColorID){
                this.getMasterDataList({SerialID,ImageID,Page,PageSize,ColorID})
            }else{
                 this.getMasterDataList({SerialID,ImageID,Page,PageSize})
            }
            this.setCarAllImg()
        },
        blowImage(ImageID,key){
            this.imgFalg(key)
            let SerialID=this.$route.query.SerialID||localStorage.getItem("id")
            let Page=this.Page
            let PageSize=this.PageSize
            let ColorID=this.numberColorId
            if(ColorID){
                this.getMasterDataList({SerialID,ImageID,Page,PageSize,ColorID})
            }else{
                 this.getMasterDataList({SerialID,ImageID,Page,PageSize})
            }
            
        },
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