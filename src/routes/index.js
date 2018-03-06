/**
 * Created by lizhong on 2018/1/14.
 */
import Home from '../components/home.vue'
import Movies from '../components/movies.vue'
import Books from '../components/books.vue'
import Radios from '../components/radios.vue'
import Groups from '../components/groups.vue'
import PagesView from '../components/pagesView.vue'
/* 下面是几个非list部分的组件 */
import registerView from '../components/other/register.vue'
import loginView from '../components/other/login.vue'
// 为何路由这里需要设置一个default和search
import SearchView from '../components/SearchView.vue'

export default [
  {path: '/', redirect: '/pages/'},
  {
    path: '/pages',
    name: 'pagesView',
    component: PagesView,
    children: [
      {path: '', redirect: '/pages/home'},
      {name: 'HomeView', path: 'home', component: Home},
      {name: 'MoviesView', path: 'movies', component: Movies},
      {name: 'BooksView', path: 'books', component: Books},
      {name: 'RadiosView', path: 'radios', component: Radios},
      {name: 'GroupsView', path: 'groups', component: Groups}
    ]
  },
  {
    name: 'SearchView',
    path: '/search',
    component: SearchView
  },
  {name: 'registerView', path: '/register', component: registerView},
  {name: 'loginView', path: '/login', component: loginView}
]
