import {getMasterBrandList} from '@/services/index'
    const state={
        dataList:[],
            colorlist:false
        }
        const mutations={
        setData(state,payload){
            payload.map(item=>{
            let lets=item.Spelling[0]
            let newArr = payload.filter(
                item => item.Spelling[0] == lets
                );
                if (state.dataList.findIndex(item => item.lets == lets) == -1) {
                state.dataList.push({ lets, children: newArr });
                }
            })
        },
        amendstate(state){
            state.colorlist=true
        },
        amendstatefalse(state){
            state.colorlist=false
        }
    }
 const actions= {
    async getMasterBrandList({commit}){
    let res=await getMasterBrandList()
        commit("setData",res.data)  
    }
}
export default {
    namespaced:true,
    state,
    mutations,
    actions
}