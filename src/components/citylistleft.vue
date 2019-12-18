
<template>

        
        <li @click="revealCity(item.CityID)">
            {{item.CityName}}
        </li>
</template>

<script>

export default {
props:["item"],
data(){
    return {
      
    }
},
methods:{
    revealCity(CityID){
        this.$emit("revealCitys",CityID)   
    }
}
}
</script>

<style lang="scss" scoped>
    li{
        border-bottom: 1px solid #eee;
        line-height: 40px;
        padding: 0 0 0 15px;
        margin: 0 0 0 5px;
        font-size: 14px;
    }
</style>