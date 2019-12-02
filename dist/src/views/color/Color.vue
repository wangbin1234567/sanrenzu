<template>
  <div class="color">
    <p>全部颜色</p>
    <div>
      <p class="c-type">
        <span v-for="(item, index, key) of list" :key="index" @click="handleC(item)" :class="{active: curIndex==key}">{{index}}</span>
      </p>
      <ul>
        <li v-for="(v,i) in colorData" :key="i">
          <span :style="{background: v.Value}"></span>
          {{v.Name}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  data(){
     return {
       list: {},
       colorData: [],
       curIndex: 0
     }
  },
   mounted(){
    axios.get("http://baojia.chelun.com/v2-car-getModelImageYearColor.html?SerialID=2593&_1575200950346").then(res=>{
      this.list=res.data.data
    }
    )
  },
  methods: {
    handleC(item){
      this.colorData=item
    }
  }

};
</script>

<style lang="scss" scoped>
.color {
  width: 100%;
  height: 100%;
  background: #f4f4f4;
}
.color > p {
  margin: 7.5px 0;
  font-size: 17px;
  color: #00afff;
  background: #fff;
  text-align: center;
  line-height: 40px;
}
.color .c-type {
  margin: 7.5px 0 0;
  padding: 0 0 0 10px;
  background: #fff;
  overflow-x: scroll;
  line-height: 38px;
}
.color .c-type span {
  font-size: 15px;
  padding: 0 21px 0 0;
}
.color ul {
  background: #fff;
  margin: 7.5px 0 0;
  padding: 0 10px;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
}
.color ul li {
  color: #000;
  font-size: 16px;
  float: left;
  border: 1px solid #3aacff;
  width: 48%;
  border-radius: 3px;
  line-height: 35px;
}
.color ul li:nth-child(odd){
margin: 10px 10px 10px 0;
}
.color ul li:nth-child(even){
margin: 10px 0 10px 0;
}
.color ul span {
  display: inline-block;
  width: 20px;
  height: 20px;
  vertical-align: -12%;
  border: 1px solid #818181;
  margin: 0 0 0 10px;
}
.active{
   color: #00afff;
}
</style>