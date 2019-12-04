<template>
  <div class="home" @touchstart="touche($event)" @touchend="touchend($event)">
    <div class="home_content">
      <OfficialLeft v-for="(item,key) in dataList" :key="key" :item="item"/>
    </div>
    <OfficialFixe :dataList="dataList"/>
    <div :class="colorlist?'car-type active':''" v-show="colorlist">
      <OfficialRight v-for="item in listMasterID" :key="item.GroupId" :items="item"/>
    </div>
  </div>
</template>
<script>
  import {mapActions, mapState,mapMutations} from "vuex"
  import OfficialLeft from "@/components/officialleft.vue"
  import OfficialFixe from "@/components/officialfixe.vue"
  import OfficialRight from "@/components/officialright.vue"
export default {
  components: {
    OfficialLeft,
    OfficialFixe,
    OfficialRight
  },
   data(){
    return {
      pageXleft:'',
      pageXtop:'',
      clientYleft:'',
      clientYTop:''
    }
  },
  computed:{
    ...mapState({
      dataList:state=>state.home.dataList,
      colorlist:state=>state.home.colorlist,
      listMasterID:state=>state.list.listMasterID
    })
  },
  methods:{
    ...mapActions({
      getMasterBrandList:'home/getMasterBrandList',
    }),
    ...mapMutations({
       amendstatefalse:'home/amendstatefalse'
    }),
    touche(e){
      this.pageXleft=e.changedTouches[0].pageX
      this.pageXtop=e.changedTouches[0].pageY
    },
    touchend(e){
      this.clientYleft=e.changedTouches[0].clientX
      this.clientYTop=e.changedTouches[0].clientY
      if(this.clientYleft-this.pageXleft>170){
        this.amendstatefalse()
      }
    }
  },
  data(){
    return {
      pageXleft:'',
      pageXtop:'',
      clientYleft:'',
      clientYTop:''
    }
  },
  mounted(){
    this.getMasterBrandList()
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
  transition: transform 5s ease;
  // transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
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
