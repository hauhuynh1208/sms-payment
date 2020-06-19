import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navigation extends Component {
  componentDidMount() {
    var strongNode = document.createElement('strong');
    var strongTextNode = document.createTextNode('3');
    strongNode.appendChild(strongTextNode);
    const navigationClass = document.getElementsByClassName('navigation')[1];
    if (navigationClass) {
      const ulTag = navigationClass.getElementsByTagName('ul')[0];
      if (ulTag.getElementsByClassName('active')[0]) {
        ulTag.getElementsByClassName('active')[0].appendChild(strongNode);
      }
    }
  }
  render() {
    return (
      <div className="navigation">
        <ul>
          <li>
            <NavLink to="/" exact={true} activeClassName="active">
              <i className="md-icon">dashboard</i> <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/sms" exact={true} activeClassName="active">
              <i className="md-icon">dashboard</i> <span>SMS</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/banks" exact={true} activeClassName="active">
              <i className="md-icon">dashboard</i> <span>Banks</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/users" exact={true} activeClassName="active">
              <i className="md-icon">dashboard</i> <span>Users</span>
            </NavLink>
          </li>
        </ul>

        <strong>Additional Links</strong>

        <ul>
          <li>
            <NavLink to="/login" activeClassName="active">
              <i className="md-icon">arrow_forward</i> <span>Login</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/icons" activeClassName="active">
              <i className="md-icon">grid_on</i> <span>Icons</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/forms" activeClassName="active">
              <i className="md-icon">input</i> <span>Forms</span>
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}
