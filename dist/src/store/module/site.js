 import {getMasterStairSite} from "@/servicer/index.js"
 
 const state={
    provinceidData:[],
    flag:false,
    cityJudgeFals:false,
    getCityData:''
    }
   const mutations={
    provinceid(state,payload){
        state.provinceidData=payload
    },
    //选中地址以后。关闭地址栏
    falg(state){
      state.cityJudgeFals=false,
      state.flag=false
    },
    //点击显示地址
    ctxfalg(state){
      state.flag=true
    },
    // 点击显示地址的右面侧栏
    cityJudge(state){
      state.cityJudgeFals=true
    },
    getCityName(state,payload){
      state.getCityData=payload
    }
    }
   const actions= {
   async getMasterStairSite({commit},payload){
    let res=await getMasterStairSite(payload)
    commit('provinceid',res)
   }
    }
export default {
  namespaced:true,
  state,
  mutations,
  actions
}