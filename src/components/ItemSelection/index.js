import React from 'react';
import { Box, Typography, Select, MenuItem } from '@material-ui/core';
import styles from './style';

const ItemSelection = (props) => {
  const classes = styles();
  return (
    <Box width={400} pt={3}>
      <Typography>{props.titleLabel}</Typography>
      <Select
        onChange={props.onChange}
        value={props.value}
        className={classes.select__style}
      >
        {props.menuItem1 && (
          <MenuItem value={props.menuItem1}>{props.menuItem1}</MenuItem>
        )}
        {props.menuItem2 && (
          <MenuItem value={props.menuItem2}>{props.menuItem2}</MenuItem>
        )}
        {props.menuItem3 && (
          <MenuItem value={props.menuItem3}>{props.menuItem3}</MenuItem>
        )}
        {props.menuItem4 && (
          <MenuItem value={props.menuItem4}>{props.menuItem4}</MenuItem>
        )}
      </Select>
    </Box>
  );
};
export default ItemSelection;
