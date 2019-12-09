import request from '@/utils/request';

export let getDealer = (params)=>{
    console.log(params)
    return request("/v2-dealer-alllist.html",{params})
}
