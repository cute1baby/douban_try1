/**
 * Created by lizhong on 2018/1/19.
 */
import axios from 'axios'
const state = {
  queryRes_movie: [],
  queryRes_book: [],
  queryRes_music: []
}
const mutations = {
  query (state, playload) {
    switch (playload.tag) {
      case 'movie':
        state.queryRes_movie = playload.res
        break
      case 'book':
        state.queryRes_book = playload.res
        break
      case 'music':
        state.queryRes_music = playload.res
        break
      default:
        console.log('你请求的api数据有错误')
    }
  }
}
const actions = {
  query ({commit}, payload) {
    axios.get('/v2/movie/search?q=' + payload.queryStr + '&count=3')
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
export default {
  state,
  mutations,
  actions
}
