import request from '@/utils/request';
export let getMasterStairSite=(CityID)=>{
    return request("/v1-city-alllist.html",{params:{provinceid:CityID}})
}

