import request from '@/utils/request';

export let getMasterSeries=(params)=>{
    return request("/v2-car-getImageList.html",{params})
}