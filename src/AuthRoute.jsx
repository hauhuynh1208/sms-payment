import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// import Unprivileged from './components/Pages/Unprivileged';

const PrivilegeComponent = ({ component: Component, props, rest }) => {
  // const userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
  // const { roles } = userInfo.userProfile;
  // const configPath = new RegExp(/^\/configure(\/.*)*$/);
  // const tenantsPath = new RegExp(/^\/tenants(\/.*)*$/);
  // const usersPath = new RegExp(/^\/users(\/.*)*$/);
  // const invitationsPath = new RegExp(/^\/invitations(\/.*)*$/);
  // if (
  //   (roles.includes('SuperAdmin') || roles.includes('User')) &&
  //   rest.path.match(configPath)
  // ) {
  //   return <Unprivileged />;
  // }
  // if (
  //   (roles.includes('TenantAdmin') || roles.includes('User')) &&
  //   rest.path.match(tenantsPath)
  // ) {
  //   return <Unprivileged />;
  // }
  // if (
  //   roles.includes('User') &&
  //   (rest.path.match(usersPath) || rest.path.match(invitationsPath))
  // ) {
  //   return <Unprivileged />;
  // }
  return <Component {...props} />;
};

export default ({ component: Component, ...rest }) => {
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  return (
    <Route
      {...rest}
      render={(props) => {
        return userInfo && 'token' in userInfo ? (
          // <Component {...props} />
          <PrivilegeComponent component={Component} props={props} rest={rest} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        );
      }}
    />
  );
};

// const isAuthorize = (role, path) => {
//   user.
// }
