<template>
  <div class="color">
    <p>全部颜色</p>
    <div>
      <p class="c-type">
        <span v-for="(item, index) in colorList" :key="index" @click="handleC(index)" :class="{active:index==curIndex}">{{Object.keys(item).join(' ')}}</span>
      </p>
      <ul>
        <li v-for="(v,i) in colorItem" :key="i" @click="setcolor(v.ColorId)">
          <span :style="{background: v.Value}"></span>
            {{v.Name}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState, mapMutations} from "vuex"
// import axios from 'axios';
export default {

   computed: {
   ...mapState({
     colorList: state=>state.carColor.colorList,
     colorItem:state=>state.carColor.colorItem,
     curIndex:state=>state.carColor.curIndex
   })
   },
   mounted(){
     
        this.getCarColor(this.$route.query.SerialID||localStorage.getItem("id")) 
   },
  methods: {
    //点击获取vuex的方法
    ...mapMutations({
      colorIndex:'carColor/colorIndex',
      setColorId:'series/setColorId'
    }),
    //获取进来时候获取的数据
    ...mapActions({
      getCarColor: 'carColor/getCarColor'
    }),
    //切换数据
    handleC(key){
      this.colorIndex(key)
    },
    setcolor(ColorId){
      this.setColorId(ColorId)
      
        this.$router.push("/img")
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