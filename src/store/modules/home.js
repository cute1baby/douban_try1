/**
 * Created by lizhong on 2018/1/14.
 */
import axios from 'axios'
const state = {
  events: [],
  skip: 0
}
const mutations = {
  loadMore (state, val) {
    state.skip += 5
    state.events = state.events.concat(val)
  }
}

const actions = {
  loadMore ({commit, state}) {
    axios.get('/v2/event/list?loc=108288&start=' + state.skip + '&count=3')
      .then((response) => {
        if (response.status === 200) {
          commit('loadMore', response.data.events)
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

export default {
  state,
  mutations,
  actions
}
