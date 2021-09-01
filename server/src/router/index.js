import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'

import UserIndex from '@/components/Index'
import UserCreate from '@/components/CreateUser'
import UserEdit from '@/components/EditUser'
import UserShow from '@/components/ShowUser'

//Authen
import Login from '@/components/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/users',
      name: 'users',
      component: UserIndex
    },
    {
      path: '/user/Create',
      name: 'User-Create',
      component: UserCreate
    },
    {
      path: '/user/edit/:userId',
      name: 'User-Edit',
      component: UserEdit
    },
    {
      path: '/user/:userId',
      name: 'user',
      component: UserShow
    },
    //Authem
    {
      path: '/login',
      name: 'login',
      component: Login
    },
  ]
})
