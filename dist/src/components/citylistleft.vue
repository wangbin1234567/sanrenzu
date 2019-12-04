
<template>
    <div class="Citylist">
        
        <li @click="revealCity(item.CityID)">
            {{item.CityName}}
        </li>
    </div>
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
.Citylist{
    flex: 1;
    li{
        height: 40px;
        border-bottom: 1px solid #eee;
        line-height: 40px;
        padding-left: 10px;
    }
}
</style>