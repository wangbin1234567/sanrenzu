import axios from "axios"
const instance=axios.create({
    baseURL:"https://baojia.chelun.com",
    timeout: 1000
})
instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });
 
// Add a response interceptor
instance.interceptors.response.use(function (response) {
    // Do something with response data
    if(response.status==200){
      if(response.data.code===1){
        return response.data.data
      }else{
        return {
          mes:"数据错误"
        }
      }
     
    }else{
      this.$notify({
        type: 'warning',
        message: response.type
    });
    }
   
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });

  export default instance 