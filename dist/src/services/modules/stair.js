import request from '@/utils/request';

export const getMasterStair=()=>{
    return request("https://baojia.chelun.com/v1-city-alllist.html")
}
