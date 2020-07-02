import React from 'react';
import clsx from 'clsx';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import {
  AcUnit,
  Dashboard,
  Email,
  AccountTree,
  Info,
  Settings,
  PowerSettingsNew,
} from '@material-ui/icons';
import useStyles from './style';
import colors from '../../styles/colors';
import { history } from '../../utils/history';

var x = 0;
const Layout = (props) => {
  const [selectedIndex, setSelectedIndex] = React.useState(x);

  const handleListItemClick = (index) => {
    setSelectedIndex(index);
    x = index;
  };

  const onLogout = () => {
    localStorage.removeItem('userInfo');
    history.push('/login');
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box minWidth={260}>
        <Box
          className={classes.container__sideBar}
          // style={{
          // backgroundImage: props.bgImage
          //     ? `url(${props.bgImage})`
          //     : `url(${activity1})`,
          // }}
          style={{
            backgroundImage: `url(${'https://chothuexe7cho.com/wp-content/uploads/2016/03/cho-thue-xe-7-cho-di-bien-thien-cam-gia-re33.jpg'})`,
          }}
        >
          <Box className={classes.mask__image}></Box>
          <Box className={classes.container}>
            <Box
              py={3}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              alignContent="center"
            >
              <NavLink to="/" exact onClick={() => handleListItemClick(0)}>
                <AcUnit
                  style={{ fontSize: 56 }}
                  className={classes.icon__feature}
                />
              </NavLink>
              <Typography variant="h5" style={{ color: colors.white }}>
                Payment Service
              </Typography>
            </Box>

            <Box className={classes.divider_horizontal} />

            <List component="nav" aria-label="main mailbox folders">
              <NavLink
                to="/"
                className={clsx(classes.link, classes.link__hover)}
                onClick={() => handleListItemClick(0)}
              >
                <ListItem
                  button
                  selected={selectedIndex === 0}
                  style={{
                    color: selectedIndex === 0 ? classes.item__select : '',
                  }}
                >
                  <ListItemIcon>
                    <Dashboard className={classes.icon__feature} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Dashboard"
                    style={{ color: colors.white }}
                  />
                </ListItem>
              </NavLink>
              <NavLink
                to="/sms"
                className={clsx(classes.link, classes.link__hover)}
                onClick={() => handleListItemClick(1)}
              >
                <ListItem button selected={selectedIndex === 1}>
                  <ListItemIcon>
                    <Email className={classes.icon__feature} />
                  </ListItemIcon>
                  <ListItemText primary="SMS" style={{ color: colors.white }} />
                </ListItem>
              </NavLink>
              <NavLink
                to="/account"
                className={clsx(classes.link, classes.link__hover)}
                onClick={() => handleListItemClick(2)}
              >
                <ListItem button selected={selectedIndex === 2}>
                  <ListItemIcon>
                    <AccountTree className={classes.icon__feature} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Account"
                    style={{ color: colors.white }}
                  />
                </ListItem>
              </NavLink>
              <NavLink
                to="/about"
                className={clsx(classes.link, classes.link__hover)}
                onClick={() => handleListItemClick(3)}
              >
                <ListItem button selected={selectedIndex === 3}>
                  <ListItemIcon>
                    <Info className={classes.icon__feature} />
                  </ListItemIcon>
                  <ListItemText
                    primary="About"
                    style={{ color: colors.white }}
                  />
                </ListItem>
              </NavLink>
              <NavLink
                to="/setting"
                className={clsx(classes.link, classes.link__hover)}
                onClick={() => handleListItemClick(4)}
              >
                <ListItem button selected={selectedIndex === 4}>
                  <ListItemIcon>
                    <Settings className={classes.icon__feature} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Setting"
                    style={{ color: colors.white }}
                  />
                </ListItem>
              </NavLink>
              <ListItem button onClick={onLogout}>
                <ListItemIcon>
                  <PowerSettingsNew className={classes.icon__feature} />
                </ListItemIcon>
                <ListItemText
                  primary="Log out"
                  style={{ color: colors.white }}
                />
              </ListItem>
            </List>
          </Box>
        </Box>
      </Box>
      {props.children}
    </div>
  );
};

export default Layout;
