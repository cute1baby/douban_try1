/**
 * Created by lizhong on 2018/1/14.
 */
import Vue from 'vue'
import Vuex from 'vuex'

import homevuex from './modules/home'
import user from './modules/user'
import movie from './modules/movie'
import search from './modules/search'
import book from './modules/book'
import group from './modules/group'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    homevuex,
    user,
    movie,
    search,
    book,
    group
  }
})
