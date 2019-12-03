import {getMasterBrandList} from '@/services/index'
const state = {
    list: []
}

const mutations = {
    updateList(state, payload){
      payload.map(item=>{
        let lets=item.Spelling[0]
        let newArr = payload.filter(
            item => item.Spelling[0] == lets
          );
          if (state.list.findIndex(item => item.lets == lets) == -1) {
            state.list.push({ lets, children: newArr });
          }
       
      })
    }
}

const actions = {
    async getMasterBrandList({commit}){
        let res = await getMasterBrandList();
        console.log('res...', res);
        commit('updateList', res.data);
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}