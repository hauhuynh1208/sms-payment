import React, {Component} from 'react'
import {Router, Switch, Route } from 'react-router-dom'
import About from '../page/About/About'
import Account from '../page/Account/Account'
import Dashboard from '../page/Dashboard/Dashboard'
import SMS from '../page/SMS/SMS'

import { history } from '../history'
import theme from './theme'

class Root extends Component{
  render(){
    return (   
      <Router history={history} theme={theme}> 
        <Switch>
          <Route path="/" component={Dashboard} exact/>
          <Route path="/About" component={About}/>
          <Route path="/Account" component={Account}/>
          <Route path="/SMS" component={SMS}/>
        </Switch>
      </Router>
    )
  }
 
}
export default Root