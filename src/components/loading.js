import React from 'react';
import { makeStyles, Box } from '@material-ui/core';
import { CircularProgress } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
  },
}));

const Loading = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <CircularProgress />
    </Box>
  );
};
export default Loading;
