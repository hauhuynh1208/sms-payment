import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import AcUnit from '@material-ui/icons/AcUnit';
import useStyles from './style';
import colors from '../../styles/colors';
import sidebar3 from '../../assets/img/sidebar-3.jpg';
import Navigation from './Navigation';

const Layout = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box minWidth={260}>
        <img src={sidebar3} className={classes.sideBar__bgImage} />
        <Box className={classes.mask__image} />
        <Box className={classes.container}>
          <Box
            py={3}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            alignContent="center"
          >
            <NavLink to="/" exact>
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

          {/* <List component="nav">
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
              to="/order"
              className={clsx(classes.link, classes.link__hover)}
              onClick={() => handleListItemClick(4)}
            >
              <ListItem button selected={selectedIndex === 4}>
                <ListItemIcon>
                  <Book className={classes.icon__feature} />
                </ListItemIcon>
                <ListItemText primary="Order" style={{ color: colors.white }} />
              </ListItem>
            </NavLink>
            <NavLink
              to="/setting"
              className={clsx(classes.link, classes.link__hover)}
              onClick={() => handleListItemClick(5)}
            >
              <ListItem button selected={selectedIndex === 5}>
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
              <ListItemText primary="Log out" style={{ color: colors.white }} />
            </ListItem>
          </List> */}
          <Navigation />
        </Box>
      </Box>
      {props.children}
    </div>
  );
};

export default Layout;
