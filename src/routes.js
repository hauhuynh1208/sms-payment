
import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard'
import SMS from './Pages/SMS'
import Account from './Pages/Account'
import About from './Pages/About'
import Setting from './Pages/Setting'

export default [
  {
    path: '/login',
    title: 'Login',
    breadcrumb: 'Login',
    breadcrumb_link: true,
    exact: true,
    component: Login,
  },
  {
    path: '/',
    title: 'Dashboard',
    breadcrumb: 'Dashboard',
    breadcrumb_link: true,
    exact: true,
    component: Dashboard,
    requireAuth: true,
  },
  {
    path: '/sms',
    title: 'SMS',
    breadcrumb: 'SMS',
    breadcrumb_link: true,
    exact: true,
    component: SMS,
    requireAuth: true,
  },
  {
    path: '/account',
    title: 'Account',
    breadcrumb: 'Account',
    breadcrumb_link: true,
    exact: true,
    component: Account,
    requireAuth: true,
  },
  {
    path: '/about',
    title: 'About',
    breadcrumb: 'About',
    breadcrumb_link: true,
    exact: true,
    component: About,
    requireAuth: true,
  },
  {
    path: '/setting',
    title: 'Setting',
    breadcrumb: 'Setting',
    breadcrumb_link: true,
    exact: true,
    component: Setting,
    requireAuth: true,
  },
  
]