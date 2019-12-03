import request from '@/utils/request';

// 获取首页品牌列表
export let getMasterBrandList = ()=>{
    return request('/v2-car-getMasterBrandList.html')
}
