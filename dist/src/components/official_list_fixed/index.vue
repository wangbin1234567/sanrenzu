<template>
    <div class="offcial_flex" 
        ref="offcialref"
        @touchstart="touchstart"
        @touchmove="touchmove"

        >
        <li>#</li>
        <li v-for="(item,index) in dataList" :key="index" @click="itemskip(item.lets)">{{item.lets}}</li>
    </div>
</template>
<script>
export default {
    props:{
        dataList:{
            type:Array,
            dataList:"dataList"
        }
    },
    data(){
        return{
            getOffheight:null
        }
    },
    methods:{
        itemskip(lets){
            document.getElementById(lets).scrollIntoView(true);
        },
        touchstart(e){
            this.getOffheight=(window.outerHeight - this.$refs.offcialref.offsetHeight)/2
            let y = e.changedTouches[0].clientY-this.getOffheight
            let index = Math.floor(y/18)-1
            document.getElementById(this.dataList[index].lets).scrollIntoView(true);
        },
        touchmove(e){
             let y = e.changedTouches[0].clientY-this.getOffheight
            let index = Math.floor(y/18)-1
            if(index > this.dataList.length-1){
                index=this.dataList.length-1
            }else if(index<1){
                index=0
            }
            
            document.getElementById(this.dataList[index].lets).scrollIntoView(true);
        },
       
    }
}
</script>

<style lang="scss" scoped>
.offcial_flex{
    position: fixed;
    right: 0;
    top: 50%;
    z-index: 99;
    padding-left: 4px;
    transform: translateY(-50%);
    li{
        font-size: 12px;
        color: #666;
        padding: 1px 5px;
    }
}
</style>