import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        cartlist:[]
    },
    getters,
    mutations:{
       addcounter(state,payload){
           payload.count++
           
       },
       addtoCart(state,payload){
            payload.checked=true
            state.cartlist.push(payload)
           
       }
    },
    actions:{
        addCart(context,payload){
           return new Promise((resolve,reject) =>{
            const oldinfo = context.state.cartlist.find(item =>item.iid === payload.iid)
            if(oldinfo){
               /*  oldinfo.count+=1 */
                context.commit('addcounter',oldinfo)
                resolve("商品+1")
            }else{
                payload.count=1
               context.commit('addtoCart',payload)
               resolve("新商品+1")
               /*  context.state.cartlist.push(payload) */
            }
           })
         }
    }
})
export default store
