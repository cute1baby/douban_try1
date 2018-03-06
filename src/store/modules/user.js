/**
 * Created by lizhong on 2018/1/16.
 */
import axios from 'axios'
/* 主要是登录页面 */
const state = {
  login_email: '',
  login_token: '',
  login_name: '',
  temp_email: '',
  temp_token: '',
  temp_name: ''
}
const getters = {
  currentUser: state => {
    return {
      email: state.login_email,
      token: state.login_token,
      name: state.login_name
    }
  }
}
const mutations = {
  updateData (state, payload) {
    switch (payload.name) {
      case 'email':
        state.temp_email = payload.value
        break
      case 'token':
        state.temp_token = payload.value
        break
      case 'name':
        state.temp_name = payload.name
        break
      default:
        console.log('Error:Dont directly mutate Vuex store')
    }
  },
  getLocalUser () {
    state.login_email = localStorage.getItem('login_email')
    state.login_token = localStorage.getItem('login_token')
    state.login_name = localStorage.getItem('login_name')
  },
  setUser (state, payload) {
    state.login_email = payload.email
    state.login_token = payload.token
    state.login_name = payload.name
  },
  logout (state) {
    localStorage.removeItem('email')
    localStorage.removeItem('token')
    localStorage.removeItem('name')
    state.login_email = ''
    state.login_token = ''
    state.login_name = ''
  }
}
const actions = {
  /* 这里有获取和存储的两个过程 */
  login ({commit}, payload) {
    axios.get('/v2/user/' + payload.email)
      .then((response) => {
        commit({
          type: 'setUser',
          email: response.body.email,
          token: response.body.token,
          name: response.body.name
        })
      })
      .catch((err) => {
        console.log('系统错误的问题是:' + err)
      })
  },
  /* 这里是进行提交存库的过程,这两个请求是什么意思 */
  register ({commit}, payload) {
    debugger
    axios.post('/v2/user/', {
      email: payload.email,
      pass: payload.pass,
      name: payload.name
    })
      .then((response) => {
        localStorage.getItem('token', response.body.token)
        localStorage.getItem('email', response.body.email)
        localStorage.getItem('name', response.body.name)
        debugger
        commit({
          type: 'setUser',
          email: response.body.email,
          token: response.body.token,
          name: response.body.name
        })
      })
      .catch((err) => {
        console.log('系统造成错误的原因是:' + err)
      })
  }
}
export default {
  state,
  getters,
  mutations,
  actions
}
