import Vue from 'vue'
import Vuex from 'vuex'
import cache from '@/store/modules/cache'
import errorLog from '@/store/modules/errorLog'
import user from '@/store/modules/user'
import address from '@/store/modules/address'
import order from '@/store/modules/order'
import getters from '@/store/getters'


Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    cache,
    errorLog,
    user,
    address,
    order
  },
  getters
})

export default store
