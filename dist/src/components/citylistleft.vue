
<template>
    <div class="Citylist">
        <li @click="revealCity(item.CityID)">
            {{item.CityName}}
        </li>
    </div>
</template>

<script>
import {mapActions,mapMutations} from "vuex"
export default {
    props:["item"],
    methods:{
        ...mapMutations({
            falg:'site/falg'
        }),
        ...mapActions({
            getMasterStairSite:'site/getMasterStairSite'
        }),
        revealCity(CityID){
            this.falg()
            this.getMasterStairSite(CityID)  
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