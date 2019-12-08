<template>
    <li @click="siteitem(item.CityName)">
        {{item.CityName}}
    </li>
</template>

<script>
export default {
    props:["item"],
    methods:{
        siteitem(CityName){
            this.$emit("siteitemlist",CityName)
        }
    }
}   
</script>

<style lang="scss" scoped>
li{
    width: 100%;
    height: 40px;
    padding: 10px;
    border-bottom: 1px solid #eee;
    font-size: 14px;
}
</style>