import React from 'react';
import { Box, Typography, TextField } from '@material-ui/core';
import classNames from 'classnames';
import styles from './style';

const Input = (props) => {
  const classes = styles();
  return (
    <Box
      width={props.isObligatory ? 500 : 400}
      pt={3}
      className={props.container__input}
    >
      <Typography className={classes.label__input}>
        {props.titleLabel}{' '}
        {props.isObligatory && <span style={{ color: 'red' }}>*</span>}
      </Typography>
      <TextField
        {...props}
        className={classNames(classes.input__style, props.input__style)}
        placeholder={props.placeholder}
        variant="outlined"
        size="small"
        value={props.value}
        onChange={props.onChange}
      />
    </Box>
  );
};
export default Input;
