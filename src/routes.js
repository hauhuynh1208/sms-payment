import Dashboard from './components/Pages/Dashboard';
import Users from './components/Pages/Users';
import Banks from './components/Pages/Banks';
import SMS from './components/Pages/SMS';

export const routes = [
  {
    path: '/',
    title: 'Dashboard',
    breadcrumb: 'Dashboard',
    breadcrumb_link: true,
    exact: true,
    component: Dashboard,
  },
  {
    path: '/users',
    title: 'Users',
    breadcrumb: 'Users',
    breadcrumb_link: true,
    exact: true,
    component: Users,
  },
  {
    path: '/banks',
    title: 'Banks',
    breadcrumb: 'Banks',
    breadcrumb_link: true,
    exact: true,
    component: Banks,
  },
  {
    path: '/sms',
    title: 'SMS',
    breadcrumb: 'SMS',
    breadcrumb_link: true,
    exact: true,
    component: SMS,
  },
];
