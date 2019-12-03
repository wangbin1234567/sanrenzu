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
            this.$router.push({path:"/quotation",query:{CityName}})
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
}
</style>