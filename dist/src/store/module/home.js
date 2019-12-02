import {getMasterBrandList} from "@/servicer/index"
console.log(getMasterBrandList)
 const state={
  // dataList:[]
  }
 const mutations={
  //  setData(state,payload){
  //   payload.map(item=>{
  //     let lets=item.Spelling[0]
  //     let newArr = payload.filter(
  //         item => item.Spelling[0] == lets
  //       );
  //       if (this.dataList.findIndex(item => item.lets == lets) == -1) {
  //         state.dataList.push({ lets, children: newArr });
  //       }
     
  //   })
  //  }
  }
 const actions= {
  async getData({commit}){
    console.log(22)
   let res=await getMasterBrandList()
      console.log(res)
        commit("setData",1)  
   }
  }
  export default {
    namespaced:true,
    state,
    mutations,
    actions
  }