<template>
    <div class="offcial_flex" 
        ref="offcialref"
        @touchstart="touchstart"
        @touchmove="touchmove"
        @touchend="touchend"
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
    watch:{
        //watch监听dataList数据的改变，获取到他减去该元素的高度，然后给需要滚动的元素原型上面添加offsetTop
        dataList:function(){
            // console.log(window)
            // console.log(this.$refs.offcialref.offsetHeight)
            this.$nextTick(()=>{
                this.offsetTop=(window.innerHeight - this.$refs.offcialref.offsetHeight)/2
                // console.log(window.innerHeight - this.$refs.offcialref.offsetHeight)
                // console.log('this.offsetTop---------------',this.offsetTop)
            })
        }
    },
    methods:{
        itemskip(lets){
            document.getElementById(lets).scrollIntoView(true);
        },
        touchstart(e){
            console.log(this,"============?????????????")
            let y = e.changedTouches[0].pageY-this.offsetTop
            let index = Math.floor(y/18)
            console.log('index-------------',index)
            
        },
        touchmove(e){
             let y = e.changedTouches[0].pageY-this.offsetTop
            let index = Math.floor(y/18)-1
            console.log('index------------------',index)
            index < 1 ? index = 0 : 
            console.log(this.dataList.length-1)
            if(index > this.dataList.length-1){
                index=this.dataList.length-1
            }else if(index<1){
                index=0
            }
            index > this.dataList.length-1 ? 20 : null
            console.log(index)
            console.log(document.getElementById(this.dataList[index].lets),index)
            document.getElementById(this.dataList[index].lets).scrollIntoView(true);
            console.log('index------------------',index)
        },
        touchend(e){
            console.log('e----------------',e)
        }
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