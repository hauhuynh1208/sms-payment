import React from 'react'
import {Router, Switch, Route } from 'react-router-dom'
import routes from './routes'
import AuthRoute from './AuthRoute'
import { history } from './utils/history'
import theme from './styles/theme'

class App extends React.Component{
  render() {
    return (
      <Router history={history}>
        <Switch>
          {routes.map((route, index) => {
            return route.requireAuth ? (
              <AuthRoute
                key={index}
                path={route.path}
                component={route.component}
                exact={route.exact}
                {...this.props}
              />
            ) : (
              <Route
                key={index}
                path={route.path}
                component={route.component}
                exact={route.exact}
              />
            );
          })}
          {/* <Route component={NotFound} /> */}
        </Switch>
      </Router>
    );
  }
}
export default App