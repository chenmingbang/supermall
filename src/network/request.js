import axios from 'axios'

export function request(config){
        /* 创建axios实例 */
        const instance = axios.create({
            baseURL:'http://152.136.185.210:7878/api/m5',     
            timeout:5000
        })
         /* 拦截器的用法 */
         instance.interceptors.request.use(aaa =>{   
                  console.log(aaa); 
                  return aaa        /* 拦截请求成功 ，必须返回数据 */
         },err =>{
                  console.log(err);      /*  请求失败 */
         })
         instance.interceptors.response.use(aaa =>{
            console.log(aaa);
            return aaa.data              /* 拦截响应成功， 必须返回数据 不然 你要干嘛 */
   },err =>{
            console.log(err);        /* 拦截响应失败 */
   })
        return instance(config)   /* 发送网络请求最终写法*/   

}
    
   




/* export function request(config){
    return new Promise((resolve,reject) =>{
        const instance = axios.create({
            baseURL:'http://152.136.185.210:7878/api/m5',
            timeout:5000
        })
    
       
    instance(config)
         .then(res=>{
            resolve(res)
    }) 
         .catch(err=>{
             reject(err)
    })
    
    })
}
 */



/*export function request(config,success,failure){
    const instance = axios.create({
        baseURL:'http://152.136.185.210:7878/api/m5',
        timeout:5000
    })


instance(config)
     .then(res=>{
         console.log(res); 
        success(res)
}) 
     .catch(err=>{
          console.log(err); 
         failure(err)
})

}*/







/* 
axios({
    url:'http://152.136.185.210:7878/api/m5/home/multidata',  
}).then(res=>{
    console.log(res);
})  */