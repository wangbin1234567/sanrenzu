import request from '@/utils/request';

export let getDealer = (params)=>{
    return request("/v2-dealer-alllist.html",{params})
}
