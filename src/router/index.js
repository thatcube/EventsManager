import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Events from '@/components/Event/Events'
import CreateEvent from '@/components/Event/CreateEvent'
import Signup from '@/components/User/Signup'
import Signin from '@/components/User/Signin'
import Event from '@/components/Event/Event'
import AuthGuard from './auth-guard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/events',
      name: 'Events',
      component: Events
    },
    {
      path: '/event/new',
      name: 'CreateEvent',
      component: CreateEvent,
      beforeEnter: AuthGuard
    },
    {
      path: '/events/:id',
      name: 'Event',
      props: true,
      component: Event
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    }
  ],
  mode: 'history'
})
