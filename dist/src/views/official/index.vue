<template>
  <div class="home" @touchstart="touche($event)" @touchend="touchend($event)">
         <div class="home_content">
           <OfficialLeft v-for="(item,key) in dataList" :key="key" :item="item" @addlist="addlist"/>
         </div>
          <OfficialFixe :dataList="dataList"/>
          <div :class="colorlist?'car-type active':''" v-show="colorlist">

            <OfficialRight v-for="item in listMasterID" :key="item.GroupId" :items="item" @occludes="occludes"/>
          </div>

  </div>
</template>

<script>

import axios from "axios"
import OfficialLeft from "@/components/officialleft.vue"
import OfficialFixe from "@/components/officialfixe.vue"
import OfficialRight from "@/components/officialright.vue"

export default {
  name: 'home',
  components: {
    OfficialLeft,
    OfficialFixe,
    OfficialRight
  },
  computed:{
    // ...mapState(["dataList"])
  },
  methods:{
    // ...mapActions(["getDate"]),
    addlist(MasterID){
      // window.console.log(MasterID)
      this.colorlist=true
      axios.get("https://baojia.chelun.com/v2-car-getMakeListByMasterBrandId.html",{params:{MasterID}}).then(res=>{
        
               if(res.data.code===1){
                   this.listMasterID=res.data.data
               }

           })
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

    }
  },
  data(){
    return {
      dataList:[],
      listMasterID:[],
      colorlist:false,
      pageXleft:'',
      pageXtop:'',
      clientYleft:'',
      clientYTop:''
    }
  },
  mounted(){

   
        axios.get("https://baojia.chelun.com/v2-car-getMasterBrandList.html").then(res=>{
      if(res.data.code===1){
        let data=res.data.data

        data.map(item=>{
          let lets=item.Spelling[0]
          let newArr = data.filter(
              item => item.Spelling[0] == lets
            );
            if (this.dataList.findIndex(item => item.lets == lets) == -1) {
              this.dataList.push({ lets, children: newArr });
            }
         
        })
      }

    })
    
  }
}
</script>
<style lang="scss" scoped>
.home{
  width: 100%;
  height: 100%;
  display: flex;
  
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
