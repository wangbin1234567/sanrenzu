import request from '@/utils/request';

export let getDealer = ({carId,cityId})=>{
    return request(`/v2-dealer-alllist.html?carId=${carId}&cityId=${cityId}`)
}
