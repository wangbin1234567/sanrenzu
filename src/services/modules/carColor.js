import request from '@/utils/request';

export let getCarColor = (SerialID)=>{
    return request(`/v2-car-getModelImageYearColor.html?SerialID=${SerialID}`)
}