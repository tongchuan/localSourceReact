import axios from 'axios'
import queryString from 'query-string'
import globalStore from '@/stores/common/globalStore'
import config from '@/stores/config'
// console.log(config)



let instance =  axios.create({
  baseURL:config.baseURL,
  method: 'get',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  // withCredentials: !!config.env,
  responseType: 'json',
  timeout: 6000,
  transformRequest: [
    function(data){
      return data
    }
  ],
  transformResponse:[function(data){
    // console.log(data)
    return data
  }]
})

// 添加请求拦截器
instance.interceptors.request.use(function (conf) {
  globalStore.showWait()
  // 在发送请求之前做些什么
  if(!config.env && conf.method.toLowerCase() === 'post'){
  //   // console.log(!config.env)
    conf.method = 'get'
  }

  if(conf.headers['Content-Type']!='application/json;charset=utf-8'){
    if(conf.method.toLowerCase() === 'post'){
      conf.data = queryString.stringify(conf.data)
    }else{
      conf.params = queryString.stringify(conf.data)
    }
  }else{
    if(conf.method.toLowerCase() === 'post'){
      conf.data = JSON.stringify(conf.data)
    }else{
      conf.params = JSON.stringify(conf.data)
    }
    // conf.data = JSON.stringify(conf.data)
    // conf.params = JSON.stringify(conf.data)
  }

  
  // if(conf.method.toLowerCase() === 'get' && conf.headers['Content-Type']!='application/json;charset=utf-8'){
  //   conf.params = JSON.parse(conf.data)
  // }
  // console.log(config)
  return conf;
}, function (error) {
  globalStore.hideWait()
  // 对请求错误做些什么
  return error;
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  globalStore.hideWait()
  // 对响应数据做点什么
  return response.data;
}, function (error) {
  globalStore.hideWait()
  globalStore.showError('数据请求失败,错误信息：'+error.toString())
  // 对响应错误做点什么
  return error;
});
export default instance