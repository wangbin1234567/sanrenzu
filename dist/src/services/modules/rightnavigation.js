import request from '@/utils/request';

export let rightList = (MasterID)=>{
    return request('/v2-car-getMakeListByMasterBrandId.html',{params:{MasterID}})
}