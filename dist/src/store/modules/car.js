import {
    getInfoAndListById
} from "@/services/index"

const state = {
    carList: {},
    current: "全部",
    year: ["全部"],
    currentList: [],
    carId: ""
}
//给车款排序
function sortCarList(list) {
    list.sort((a, b)=>{
        if (a.exhaust_str == b.exhaust_str){
            if (a.max_power_str == b.max_power_str){
                return b.inhale_type > a.inhale_type;
            }else{
                return a.max_power - b.max_power;
            }
        }else{
            return a.exhaust - b.exhaust;
        }
    })
    return list;
}
//格式化数据
function formatCarList(list) {
    list = list.map(item => {
        item.key = `${item.exhaust_str}/${item.max_power_str} ${item.inhale_type}`;
        return item
    })
    let newList = [];
    list.forEach(item => {
        let index = newList.findIndex(value => value.key == item.key)
        if (index !== -1) {
            newList[index].list.push(item)
        } else {
            newList.push({
                key: item.key,
                list: [item]
            })
        }
    })
    window.console.log(state.currentList)
    return newList
}
const mutations = {  
    updateInfoAndListById(state, payload) {
        state.carList = payload.data
        localStorage.setItem("2017.official.carInfo",JSON.stringify(state.carList))
        // 拿到年份
        let year = payload.data.list.map(item => item.market_attribute.year);
        state.year=["全部"]
        state.year = [...new Set(state.year.concat([...new Set(year)]))]
        localStorage.setItem("2017.official.yearArr",JSON.stringify(state.year))
        // 拿到当前选择年份的数据
        let currentList = [];
        if (state.current == "全部") {
            currentList = payload.data.list
        } else {
            currentList = payload.data.list.filter(item => item.market_attribute.year == state.current)
        }
        // 给当前年份数据排序
        currentList = sortCarList(currentList)
        currentList = formatCarList(currentList)
        state.currentList = currentList
        localStorage.setItem("2017.official.sortArr",JSON.stringify(state.currentList))
        window.console.log(state.currentList)
    },
    setCurrent(state,payload){
        state.current=payload
    },
    setCarId(state,payload){
      state.carId=payload
      localStorage.setItem("2017.official.curId",state.carId) 
    }
}
const actions = {
    async getInfoAndListById({
        commit
    }, payload) {
        let res = await getInfoAndListById(payload)
        commit("updateInfoAndListById", res)
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}