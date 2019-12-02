<template>
    <div class="type">
    <p>全部车款</p>
    <div>
      <p class="c-type">
         <span v-for="(v,i) in list" :key="i">{{v.market_attribute.year}}</span>
      </p>
      <div v-for="(item,index) in list" :key="index">
          <p class="tip">{{item.exhaust_str}}/{{item.max_power_str}} {{item.inhale_type}}</p>
          <ul class="uls">
              <li>
                  <p>
                    <span class="spnO">{{item.market_attribute.year}}款 {{item.car_name}}</span>  
                    <span class="spnT">{{item.market_attribute.dealer_price_min}}起</span>
                  </p>
                    <p>
                    <span class="spnS">{{item.horse_power}}马力{{item.gear_num}}档{{item.trans_type}}</span>  
                    <span class="spnF">指导价 {{item.market_attribute.dealer_price_max}}</span>
                  </p>
              </li>
          </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
 data(){
     return {
       list: []
     }
  },
  mounted(){
      axios.get('http://baojia.chelun.com/v2-car-getInfoAndListById.html?SerialID=2593').then(res=>{
          console.log(res.data.data.list)
          this.list=res.data.data.list
      })
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
}
.type .c-type span {
  font-size: 15px;
  padding: 0 21px 0 0;
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