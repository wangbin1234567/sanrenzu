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
import { mapMutations, mapState } from "vuex"
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
            localStorage.setItem("id",SerialID)
        },
        touchstart(e){
             //获取手指按下的X与Y轴的坐标
            this.startPageX=e.touches[0].pageX
            this.startPageY=e.touches[0].pageY
            // console.log(e.touches[0].pageX)
            // console.log(e.touches[0].pageY)
        },
        touchmove(){
            // console.log(22)
        },
        touchend(e){
             //获取手指抬起的X与Y轴的坐标
            let endPageX = e.changedTouches[0].clientX
            let endPageY = e.changedTouches[0].clientY
            // console.log(this.startPageY-endPageY*1)
            //判断抬起的坐标减去按下的坐标大于80并且Y轴的按下坐标减去抬起的坐标。取绝对值变成正数。大于50，
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
    z-index: 200;
    background: #ffffff;
    overflow-y: auto;
}
.official_header_item{
    h5{
        height: 24px;
        line-height: 24px;
        background: #f2f2f2;
        padding-left: 15px;
        color: #717171;
        font-size: 14px;
        margin: 0 0 0 1px;
        padding: 0 0 0 15px;
        font-weight: 500;
    }
    li{
        height: 70px;
        display: flex;
        margin-left: 5px;
        border-bottom: 1px solid #ddd;
           align-items: center;
    display: flex;
        div{
            p{
                font-size: 17px;
                color: #5f687a;
            }
            .list_ps{
                color: #ff0000;
                font-size: 14px;
                margin: 5px 0 0;
            }
        }
        img{
            height: 60px;
            width: 90px;
            margin: 0 5px 0 10px;
        }
    }
}
</style>