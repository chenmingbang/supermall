import {request} from 'network/request'   /* 安装组件request模块 */

export function getHomeMultidata(){
    return  request({
        url:'/home/multidata'
    })
}



/* request({
    url:'/home/multidata'
}).then(res => console.log(res)).catch(err=>{
    console.log(err);
})
 */
/* request({
    url:'/home/multidata'
},
    res => {
        console.log(res);
    },
    err=>{
        console.log(err);
    }
)
 */





/* 
instanlcel({
    url:'/home/multidata'
  
}).then(res => console.log(res))

instanlcel({
    url:'/home/data',
    params:{
        type:'pop',
        page: 1
    }
}).then(res => console.log(res))

 */

/* const app = createApp(App)

app.use(router) */

/* axios.defaults.baseURL = 'http://152.136.185.210:7878/api/m5'           s使用全局配置
axios.defaults.timeout = 5000
                      
axios.all([axios({
    url:'/home/multidata'                 
}),axios({
    url:'/home/data',
    params:{
        type:'sell',
        page: 5
    }
})]).then(axios.spread((res1,res2) =>{
    console.log(res1);
    console.log(res2);
}))
 */


/* axios({
    url:'http://152.136.185.210:7878/api/m5/home/multidata',         简单使用
}).then(res=>{
    console.log(res);
})  */