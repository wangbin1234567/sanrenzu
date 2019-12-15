import request from '@/utils/request';
export let getMasterDataList=(params)=>{
    return request("/v2-car-getCategoryImageList.html",{params})
}
