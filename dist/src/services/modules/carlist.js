import request from '@/utils/request';
export let getMasterDataList=(params)=>{
    console.log('params----------------',params)
    return request("/v2-car-getCategoryImageList.html",{params})
}
export let getMasterDataListAdd=(params)=>{
    return request("/v2-car-getCategoryImageList.html",{params})
}