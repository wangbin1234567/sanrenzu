<template>
    <div class="type">
    <p v-if="!this.$route.query.carId">全部车款</p>
    <div>
      <p class="c-type">
         <span v-for="(v,i) in year" :key="i" :class="{active:curIndex==i}" @click="tab(v,i)">{{v}}</span>
      </p>
      <div v-for="(item,index) in currentList" :key="index">
          <p class="tip">{{item.key}}</p>
          <ul class="uls" v-for="(listItem,listIndex) in item.list" :key="listIndex" @click="clickType(listItem)">
              <li>
                  <p>
                    <span class="spnO">{{listItem.market_attribute.year}}款 {{listItem.car_name}}</span>  
                    <span class="spnT">{{listItem.market_attribute.dealer_price_min}}起</span>
                  </p>
                    <p>
                    <span class="spnS">{{listItem.horse_power}}马力{{listItem.gear_num}}档{{item.trans_type}}</span>  
                    <span class="spnF">指导价 {{listItem.market_attribute.dealer_price_max}}</span>
                  </p>
              </li>
          </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
 data(){
     return {
       year: JSON.parse(localStorage.getItem("2017.official.yearArr")).slice(1),
       curIndex: 0
     }
  },
    computed: {
    ...mapState({
     currentList: store => store.car.currentList
    })
  },
  methods:{
     ...mapActions({
      getInfoAndListById: "car/getInfoAndListById"
    }),
     ...mapMutations({
      setCurrent: "car/setCurrent",
      setCarId: "series/setCarId",
      setcarPage: "car/setcarPage"
    }),
      tab(item,i){
        this.curIndex=i
          this.setCurrent(item)
          this.getInfoAndListById(localStorage.getItem("id"))
      },
      clickType(listItem){
        this.setCarId(listItem.car_id)
        console.log(listItem)
        localStorage.setItem("carName",listItem.market_attribute.year+'款'+listItem.car_name)
        if(this.$route.query.carId){
          this.$router.back("/quotation")
          this.setcarPage(listItem)  
        }else{
         this.$router.back("/img") 
        //  window.history.back()
        }  
      }
  },
  mounted(){
       this.setCurrent(JSON.parse(localStorage.getItem("2017.official.yearArr"))[1])
     this.getInfoAndListById(localStorage.getItem("id"))
  }
}
</script>

<style lang="scss" scoped>
.type {
  width: 100%;
  height: 100%;
  background: #f4f4f4;
}
.type > p {
  margin: 7.5px 0;
  font-size: 17px;
  color: #00afff;
  background: #fff;
  text-align: center;
  line-height: 40px;
}
.type .c-type {
  margin: 7.5px 0 0;
  padding: 0 0 0 10px;
  background: #fff;
  overflow-x: scroll;
  line-height: 38px;
  height: 38px;
}
.type .c-type span {
  font-size: 15px;
  padding: 0 21px 0 0;
}
.type .c-type span.active{
  color:#00afff;
}
.tip{
   line-height: 25px;
   color: #666;
   font-size: 12px;
   background: #eee;
   padding: 0 10px; 
}
.uls{
    background: #fff;
}
.uls li{
   margin: 0 10px;
   padding: 14px 3px;
   height: 62px;
   border-bottom: 1px solid #eee;
}
.spnO{
    font-size: 15px;
}
.spnT{
    color: #ff0000;
    font-size: 13px;
    width: 60px;
    float: right;
}
.spnS{
    font-size: 12PX;
    color: #b3b3b3;
}
.spnF{
    font-size: 12PX;
    color: #818181;
    float: right;
}
.uls li p:nth-child(2){
    padding: 8px 0 0;
}
</style>