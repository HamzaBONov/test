import { createStore } from 'vuex'
import VuexPersist from 'vuex-persist'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

const vuexLocalStorage = new VuexPersist({ storage: localStorage })

const store = createStore({
    state,
    getters,
    mutations,
    actions,
    plugins: [vuexLocalStorage.plugin]
  })
export default store;