<template>
  <div class="home" @touchstart="touche($event)" @touchend="touchend($event)">
         <div class="home_content">
           <OfficialLeft v-for="(item,key) in list" :key="key" :item="item" @addlist="addlist"/>
         </div>
          <OfficialFixe :dataList="list"/>
          <div :class="colorlist?'car-type active':''" v-show="colorlist">

            <OfficialRight v-for="item in listMasterID" :key="item.GroupId" :items="item" @occludes="occludes"/>
          </div>
  </div>
</template>

<script>
import OfficialLeft from "@/components/officialleft.vue"
import OfficialFixe from "@/components/officialfixe.vue"
import OfficialRight from "@/components/officialright.vue"
import {mapActions,mapState} from "vuex"
export default {
  name: 'home',
  components: {
    OfficialLeft,
    OfficialFixe,
    OfficialRight
  },
   data(){
    return {
      colorlist:false,
      pageXleft:'',
      pageXtop:'',
      clientYleft:'',
      clientYTop:''
    }
  },
  computed:{
   ...mapState({
     list: state=>state.home.list,
     listMasterID: state=>state.rightnavigation.listMasterID
   })
  },
  methods:{
    addlist(MasterID){
      this.colorlist=true,
      console.log(MasterID)
      this.rightList(MasterID)
    },
    occludes(){
      this.colorlist=false
    },
    touche(e){

      this.pageXleft=e.changedTouches[0].pageX
      this.pageXtop=e.changedTouches[0].pageY

    },
    touchend(e){
      this.clientYleft=e.changedTouches[0].clientX
      this.clientYTop=e.changedTouches[0].clientY
      if(this.clientYleft-this.pageXleft>170){
        this.colorlist=false
      }

    },
      ...mapActions({
      getMasterBrandList: 'home/getMasterBrandList',
      rightList: 'rightnavigation/rightList'
    })
  },
 
   created() {
    // 获取首页的数据 
    console.log('$store...', this.$store);
    this.getMasterBrandList();
  }
}
</script>
<style lang="scss" scoped>
.home{
  width: 100%;
  height: 100%;
  display: flex;
  font-size: 16px;
  flex-direction: column;
}
.home_content{
  flex: 1;
  overflow: auto;
}
.car-type.active{
    width: 75%;
    height: 100%;
    overflow: auto;
    // transform: (translate-x 70%);
    // transition: transform .4s linear;
    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
}
.car-type{
    position: fixed;
    top: 0;
    z-index: 200;
    transition:all 1s ease;
    
    right: 0;
    background: #ffffff;
}

</style>
