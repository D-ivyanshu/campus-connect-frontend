import { createStore } from 'vuex'
import UserModule from '@/stores/modules/user'
import PostModule from '@/stores/modules/post'

import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

const store = createStore({
  modules: {
    User: UserModule,
    Post: PostModule
  },
  plugins: [vuexLocal.plugin]
})

export default store
