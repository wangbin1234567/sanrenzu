import {getCityAddress} from '@/services/index'
const state = {
    address: "",
<<<<<<< HEAD
    cityID:""
}
const mutations = {
    updateAddress(state, payload){
        state.address=payload.CityName
        state.cityID = payload.CityID
    },
    getListAddress(state, payload){
        state.address=payload.CityName
        state.cityID = payload.CityID
        
    },
=======
    cityId: ""
}
const mutations = {
    updateAddress(state, payload){
      state.address=payload.CityName
      state.cityId=payload.CityID
      localStorage.setItem("cityId",state.cityId)
    },
    setAddress(state,payload){
        state.address=payload
    },
    setCityId(state,payload){
        state.cityId=payload
        localStorage.setItem("cityId",state.cityId)
    }
>>>>>>> jyh
}

const actions = {
    async getCityAddress({commit}){
        let res = await getCityAddress();
        commit('updateAddress', res.data);
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}