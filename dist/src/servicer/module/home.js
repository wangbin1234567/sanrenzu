import request from "@/utils/request"
export let getMasterBrandList=()=>{
    return request("/v2-car-getMasterBrandList.html")
}
export let getMasterList=(MasterID)=>{
    return request("/v2-car-getMakeListByMasterBrandId.html",{params:{MasterID}})
}
export let getMasterStair=()=>{
    return request("/v1-city-alllist.html")
}
export let getMasterStairSite=(CityID)=>{
    return request("/v1-city-alllist.html",{params:{provinceid:CityID}})
}
export let getMasterSeries=(SerialID)=>{
    return request("/v2-car-getImageList.html",{params:{SerialID}})
}
export let getMasterDataList=(SerialID,ImageID,Page,PageSize)=>{
    return request(`/v2-car-getCategoryImageList.html?SerialID=${SerialID}&ImageID=${ImageID}&Page=${Page}&PageSize=${PageSize}`)
}
export let getMasterDataListAdd=(SerialID,ImageID,Page,PageSize)=>{
    return request(`/v2-car-getCategoryImageList.html?SerialID=${SerialID}&ImageID=${ImageID}&Page=${Page}&PageSize=${PageSize}`)
}
