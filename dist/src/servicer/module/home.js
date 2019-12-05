import request from "@/utils/request"
export let getMasterBrandList=()=>{
    return request("/v2-car-getMasterBrandList.html")
}
export let getMasterList=(MasterID)=>{
    return request("/v2-car-getMakeListByMasterBrandId.html",{params:{MasterID}})
}
//详情
export let getInfoAndListById=(SerialID)=>{
    return request(`v2-car-getInfoAndListById.html?SerialID=${SerialID}`)
}
export let getMasterStair=()=>{
    return request("/v1-city-alllist.html")
}
export let getMasterStairSite=(CityID)=>{
    return request("/v1-city-alllist.html",{params:{provinceid:CityID}})
}
export let getMasterSeries=(params)=>{
    return request("/v2-car-getImageList.html",{params})
}
