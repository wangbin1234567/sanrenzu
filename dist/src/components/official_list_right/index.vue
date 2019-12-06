<template>
    <div class="official_all_right" @touchstart="touchstart" @touchend="touchend" @touchmove="touchmove" @click="officialVanish">
         <div v-for="(items,index) in listMasterID" :key="index" class="official_header_item">
           <h5 @click="occlude">{{items.GroupName}}</h5>
                <!-- 渲染右面链表图片 -->
                <li v-for="(grounitem,key) in items.GroupList" 
                    :key="key" 
                    @click="particularsitem(grounitem.SerialID)"
                    ><img v-lazy="grounitem.Picture" alt="">
                    <div><p>{{grounitem.AliasName}}</p>
                    <p class="list_ps active">{{grounitem.DealerPrice}}</p>
                    </div>
                </li>
            
        </div> 
    </div>
</template>

<script>
import { mapMutations, mapState} from "vuex"
export default {
    computed:{
        ...mapState({
             listMasterID:state=>state.list.listMasterID,
        }),
    },
    methods:{
        ...mapMutations({
            amendstatefalse:"home/amendstatefalse"
        }),
        occlude(){
            this.amendstatefalse()
        },
        particularsitem(SerialID){
            this.$router.push(`/car?id=${SerialID}`)
        },
        touchstart(e){
            this.startPageX=e.touches[0].pageX
            this.startPageY=e.touches[0].pageY
            // console.log(e.touches[0].pageX)
            // console.log(e.touches[0].pageY)
        },
        touchmove(){
            // console.log(22)
        },
        touchend(e){
            let endPageX = e.changedTouches[0].clientX
            let endPageY = e.changedTouches[0].clientY
            console.log(this.startPageY-endPageY*1)
            if(endPageX-this.startPageX > 80 && Math.abs(this.startPageY-endPageY) < 50){
                 this.amendstatefalse()
            }
            // console.log(e.changedTouches[0].clientX)
            // console.log(e.changedTouches[0].clientY)
        },
        officialVanish(){
            this.amendstatefalse()
        }
    },
    data(){
        return {
            startPageX:'',
            startPageY:''
            
        }
    }
}
</script>
<style lang="scss" scoped>
.official_all_right{
    width: 75%;
    height: 100%;
    position: fixed;
    right: 0;
    top:0;
    overflow-y:scroll; 
    z-index: 200;
    background: #ffffff;
}
.official_header_item{
    h5{
        height: 24px;
        line-height: 24px;
        background: #eee;
        padding-left: 15px;
    }
    li{
        width: 100%;
        height: 70px;
        display: flex;
        margin-left: 10px;
        border-bottom: 1px solid #999;
        div{
            padding-left: 6px;
            p{
                margin: 14px 0;
            }
            .list_ps{
                color: red;
            }
        }
        img{
            height: 60px;
            width: 90px;
            margin: auto 0;
        }
    }
}
</style>