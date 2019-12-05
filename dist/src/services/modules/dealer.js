import request from '@/utils/request';

export let getDealer = (carId)=>{
    return request(`/v2-dealer-alllist.html?carId=${carId}&cityId=201`)
}
