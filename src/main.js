// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import axios from 'axios'
import store from './store'
import routes from './routes'
import VueScrollBehavior from 'vue-scroll-behavior'

Vue.config.productionTip = false
const router = new VueRouter({
  mode: 'history',
  routes
})
/* 为我的智商捉急 */
Vue.use(VueRouter)
/* 没有具体的研究该插件使用，大概意思就是当路由组件切换之后能够控制滚动条到某个位置 */
Vue.use(VueScrollBehavior, {router})
Vue.prototype.$http = axios
/* 个人理解是：template类似于vue文件中的<template>,这里的components表示后面注册了某个组件 */
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
