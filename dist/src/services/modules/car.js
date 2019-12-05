import request from '@/utils/request';

export let getInfoAndListById=(SerialID)=>{
    return request(`/v2-car-getInfoAndListById.html?SerialID=${SerialID}`)
}