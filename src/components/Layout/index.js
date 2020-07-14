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
        <img
          src={sidebar3}
          className={classes.sideBar__bgImage}
          alt="app-img"
        />
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
          <Navigation />
        </Box>
      </Box>
      <Box p={5} width="100%">
        {props.children}
      </Box>
    </div>
  );
};

export default Layout;
