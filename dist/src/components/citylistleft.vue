<<<<<<< HEAD
<template>
    <li @click="revealCity(item.CityID)">
        {{item.CityName}}
    </li>
=======

<template>

        
        <li @click="revealCity(item.CityID)">
            {{item.CityName}}
        </li>
>>>>>>> jyh
</template>

<script>

export default {
<<<<<<< HEAD
    
=======
>>>>>>> jyh
props:["item"],
data(){
    return {
      
    }
},
<<<<<<< HEAD

methods:{
    
    revealCity(CityID){
        this.$emit("revealCitys",CityID)  
=======
methods:{
    revealCity(CityID){
        this.$emit("revealCitys",CityID)   
>>>>>>> jyh
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