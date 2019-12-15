import {getMasterSeries, getMasterDataList} from "@/services/index"
const state={
    seriesDate:[],//获取首次的图片 外观，官方。等
    numberColorId:null, //颜色的ID
    numberCarid:null,  //车款的ID
    SerialID:null, // 汽车的ID
    

    page:1, //当前分页的个数
    pageSize :30, //当前分页的数量
    count :'', //当前 分类图片的总数
    current:null, // 当前图片的下标
    ImageID: null, // 当前的车的分类ID
    // serialShow:false, // 控制车图片的展示
    SerialAllData:{}, //展示链表车系的总数据
    // :false, //控制轮播图的显示
    swiperIndex:null, //当前点击的下标
    }
   const mutations={
    setSwiperIndex(state,payload){
      state.swiperIndex=payload
    },  
     getSeries(state,payload){
       state.seriesDate=payload
     },
     setPage(state,payload){
      state.page=payload
     },
     addItemSwiprShou(state,payload){
        state.swiperIndex=payload
     },
     setSeries(state,payload){
       //获取当前点击的下标
       state.current=payload.index
       //获取当前图片的总个数
       state.count=payload.Count
       //获取当前汽车分类的ID
       state.ImageID=payload.ImageID
     },
     setSeriesId(state,payload){
       //获取汽车的ID
      state.SerialID=payload
     },


    //  setSerialShow(state){
    //    //设置车图片展示为true
    //     state.serialShow=true
    //  },
     
  //设置车颜色的ID
     setColorId(state,payload){
        state.numberColorId=payload
     },
     //设置 车款的ID
     setCarid(state,payload){
        state.numberCarid=payload
     },
     //获取图片展示的总数据
     setSerialData(state,payload){
      //判断 如果分页的个数大于1就给他拼接
       if(state.page>1){
        state.SerialAllData.List=[...state.SerialAllData.List.concat(payload.List)]
       }else{
        state.SerialAllData=payload
       }
       state.page=payload.Page
     }
    }
    // getMasterSeries
   const actions= {
     //获取当前外观,官方，等内容的图片
   async getMasterSeries({commit,state},payload){
     let params={SerialID:payload}
     //判断车款是否存在，如果存在则传过去
        if(state.numberCarid){
          params.CarID=state.numberCarid
        }
         //判断颜色是否存在，如果存在则传过去
        if(state.numberColorId){
          params.ColorID=state.numberColorId
        }
        
       let res=await getMasterSeries(params)
       await commit('getSeries',res.data)
   },
   //点击第一张发起axios请求，获取其中的数据
   async getMasterDataList({commit,state},payload){
     if(payload){
      state.ImageID=payload
     }
   
    let params={
      SerialID:state.SerialID,
       ImageID:state.ImageID,
       Page:state.page,
       PageSize:state.pageSize
     }
     //判断颜色是否存在，如果存在则传过去
     if(state.numberColorId){
      params.ColorID=state.numberColorId
    }
     //判断车款是否存在，如果存在则传过去
     if(state.numberCarid){
      params.CarID=state.numberCarid
    }
      let res= await getMasterDataList(params)
      commit("setSerialData",res.data)
   }
    }
export default {
  namespaced:true,
  state,
  mutations,
  actions
}