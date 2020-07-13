import React from 'react';
import clsx from 'clsx';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import {
  Dashboard,
  Email,
  AccountTree,
  Settings,
  PowerSettingsNew,
  Book,
} from '@material-ui/icons';
import useStyles from './style';
import colors from '../../styles/colors';

export default () => {
  return (
    <List>
      <NavItem to="/" label="Dashboard" icon={<Dashboard />} />
      <NavItem to="/sms" label="SMS" icon={<Email />} />
      <NavItem to="/account" label="Account" icon={<AccountTree />} />
      <NavItem to="/order" label="Order" icon={<Book />} />
      <NavItem to="/setting" label="Setting" icon={<Settings />} />
      <NavItem to="/login" label="Log out" icon={<PowerSettingsNew />} />
    </List>
  );
};

const NavItem = ({ to, label, icon }) => {
  const classes = useStyles();
  return (
    <li>
      <NavLink
        to={to}
        exact
        className={classes.navLink}
        activeClassName={classes.item__select}
      >
        <ListItem>
          <ListItemIcon>
            {React.cloneElement(icon, { className: classes.icon__feature })}
          </ListItemIcon>
          <ListItemText primary={label} style={{ color: colors.white }} />
        </ListItem>
      </NavLink>
    </li>
  );
};
