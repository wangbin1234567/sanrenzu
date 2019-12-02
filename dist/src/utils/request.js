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
    // console.log(response)
    if(response.status==200){
      return response.data
    }
   
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });

  export default instance 