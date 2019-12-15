import {
    getInfoAndListById
} from "@/services/index.js"

const state = {
    carList: {},
    current: "全部",
    year: ["全部"],
    currentList: [],
    carId: ""
}
//给车款排序
function sortCarList(list) {
    list.sort((a, b) => {
        if (a.exhaust_str == b.exhaust_str) {
            if (a.max_power_str == b.max_power_str) {
                return b.inhale_type > a.inhale_type;
            } else {
                return a.max_power - b.max_power;
            }
        } else {
            return a.exhaust - b.exhaust;
        }
    })
    return list;
}
//格式化数据
function formatCarList(list) {
    list = list.map(item => {
        item.key = `${item.exhaust_str}/${item.max_power_str} ${item.inhale_type}`;
         //判断燃油量 千瓦 为空的情况下
        if(item.exhaust_str==""&&item.max_power_str==""&&item.inhale_type==""){
            item.key=""
        }
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
    return newList
}
const mutations = {
    updateInfoAndListById(state, payload) {
        state.carList = payload
        // 拿到年份
        let year = payload.list.map(item => item.market_attribute.year);
        //初始年份为全部
        state.year = ["全部"]
        state.year = state.year.concat([...new Set(year)])

        //判断拿不到年份的情况下
        if(year==""){
            state.year=""
        }

        // 拿到当前选择年份的数据
        let currentList = [];
        if (state.current == "全部") {
            currentList = payload.list
        } else {
            currentList = payload.list.filter(item => item.market_attribute.year == state.current)
        }
        
        // 给当前年份数据排序
        currentList = sortCarList(currentList)
        currentList = formatCarList(currentList)
        state.currentList = currentList

    },
    setCurrent(state, payload) {
        state.current = payload
    },
    setCarId(state,payload){
      state.carId=payload
      localStorage.setItem("2017.official.sortArr",JSON.stringify(state.currentList))
      localStorage.setItem("2017.official.curId",state.carId) 
    }
}
const actions = {
    async getInfoAndListById({
        commit
    }, payload) {
        let res = await getInfoAndListById(payload)
        commit("updateInfoAndListById", res.data)
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}