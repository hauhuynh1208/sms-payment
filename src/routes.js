import About from './Pages/About/About'
import Account from './Pages/Account/Account'
import Dashboard from './Pages/Dashboard/Dashboard'
import SMS from './Pages/SMS/SMS'
import Login from './Pages/Login'

export default [
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
    path: '/login',
    title: 'Login',
    breadcrumb: 'Login',
    breadcrumb_link: true,
    exact: true,
    component: Login,
  },
]