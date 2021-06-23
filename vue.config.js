module.exports ={
    configureWebpack:{
        resolve:{
            alias:{
                 'assets':'@/assets',                                    /* '配置别名' */
                 'common':'@/common',
                 'components':'@/components',
                 /* 'router':'@/router',  一般不用的，因为用的少*/  
                 'network':'@/network',
                 'view':'@/view',
                }
        }
    }
}