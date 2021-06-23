import Vue from 'vue'
import VueRouter from 'vue-router'

const home = () => import('../view/home/home')
const categroy = () => import('../view/categroy/categroy')
const cart = () => import('../view/cart/cart')
const profile = () => import('../view/profile/profile')

Vue.use(VueRouter)
const routes = [         /*  创建路由数组 */
    {
        path:'',
        redirect:'/home'
    },
    {
        path:'/home',
        component:home
    },
    {
       path:'/cart',
       component:cart
   },
   {
       path:'/categroy',
       component:categroy
   },
   {
       path:'/profile',
       component:profile
   }
   
]


const router = new VueRouter({
    routes,
    mode:'history'
})
export default router