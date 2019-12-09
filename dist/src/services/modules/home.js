import request from '@/utils/request';
export let getMasterBrandList=()=>{
    return request("/v2-car-getMasterBrandList.html")
}

export let getMasterList=(MasterID)=>{
    return request(`/v2-car-getMakeListByMasterBrandId.html?MasterID=${MasterID}`)
}