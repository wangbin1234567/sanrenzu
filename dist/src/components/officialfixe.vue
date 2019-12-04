<template>
    <div class="offcial_flex">
        <li>#</li>
        <li v-for="(item,index) in dataList" :key="index" @click="itemskip(item.lets)">{{item.lets}}</li>
    </div>
</template>

<script>
export default {
    props:["dataList"],
    methods:{
        itemskip(lets){
            document.getElementById(lets).scrollIntoView(true);
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
        color: #999;
        padding: 3px 4px;
    }
}
</style>