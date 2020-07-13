import React from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import styles from './style';

var openPanel2 = false;
const SettingPage = (props) => {
  const { loading, mainAccount, message } = props;
  console.log(mainAccount, 'mainAccount');
  const [state, setExpanded] = React.useState({
    panel1: true,
    panel2: openPanel2,
  });

  const [password, setPassword] = React.useState({
    newPassword: '',
    confirmPassword: '',
    error: '',
    success: '',
    loading: true,
  });

  const handleChange = (panel) => (event, newExpanded) => {
    if (panel == 'panel1') {
      setExpanded({ ...state, panel1: !state.panel1 });
    }
    if (panel == 'panel2') {
      setExpanded({ ...state, panel2: !state.panel2 });
      openPanel2 = true;
    }
  };

  const handleChangeNewPassWord = (event) => {
    setPassword({ ...password, newPassword: event.target.value });
    console.log(password.newPassword, 'new password');
  };

  const handleChangeConfirmPassWord = (event) => {
    setPassword({ ...password, confirmPassword: event.target.value });
    console.log(password.confirmPassword, 'confirm password');
  };

  const validatePassword = () => {
    if (
      !password.newPassword ||
      !password.confirmPassword ||
      password.newPassword != password.confirmPassword
    ) {
      setPassword({
        ...password,
        error: '(*) Password or confirmPassword is invalid',
      });
      console.log(password.error, 'error');
    } else {
      setPassword({
        ...password,
        error: null,
        success: '(*) Change password success',
      });
      setTimeout(() => {
        props.editPassword(password.newPassword, password.confirmPassword);
      }, 1000);
    }
  };
  const noChangePassword = () => {
    setPassword({
      ...password,
      newPassword: '',
      confirmPassword: '',
      error: null,
    });
  };

  const arrMainAccount = [];
  arrMainAccount.push(mainAccount);

  const classes = styles();
  return (
    <Box p={5} width="100%">
      <Accordion
        className={classes.container__setting}
        style={{ borderTopWidth: 4, borderRadius: 10 }}
        expanded={state.panel1}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.title__setting}>
            Profile User
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.accordion__details1}>
          <Box
            width={1000}
            display="flex"
            justifyContent="space-between"
            flexWrap="wrap"
          >
            <Box
              width={400}
              pt={3}
              display="flex"
              justifyContent="space-between"
            >
              <Typography className={classes.text__info}>FirstName</Typography>
              <TextField
                className={classes.input__password}
                disabled
                defaultValue={arrMainAccount[0].firstname}
                variant="outlined"
                size="small"
              />
            </Box>
            <Box
              width={400}
              pt={3}
              display="flex"
              justifyContent="space-between"
            >
              <Typography className={classes.text__info}>LastName</Typography>
              <TextField
                className={classes.input__password}
                disabled
                defaultValue={arrMainAccount[0].lastname}
                variant="outlined"
                size="small"
              />
            </Box>
            <Box
              width={400}
              pt={3}
              display="flex"
              justifyContent="space-between"
            >
              <Typography className={classes.text__info}>Phone</Typography>
              <TextField
                className={classes.input__password}
                disabled
                defaultValue={arrMainAccount[0].phone}
                variant="outlined"
                size="small"
              />
            </Box>
            <Box
              width={400}
              pt={3}
              display="flex"
              justifyContent="space-between"
            >
              <Typography className={classes.text__info}>Email</Typography>
              <TextField
                className={classes.input__password}
                disabled
                defaultValue={arrMainAccount[0].email}
                variant="outlined"
                size="small"
              />
            </Box>
            <Box
              width={400}
              pt={3}
              display="flex"
              justifyContent="space-between"
            >
              <Typography className={classes.text__info}>Address</Typography>
              <TextField
                className={classes.input__password}
                disabled
                defaultValue={arrMainAccount[0].address}
                variant="outlined"
                size="small"
              />
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion
        className={classes.container__setting}
        style={{ borderTopWidth: 4, marginTop: 40, borderRadius: 10 }}
        expanded={state.panel2}
        onChange={handleChange('panel2')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.title__setting}>
            Change Password
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.accordion__details2}>
          <Box pt={3} display="flex" justifyContent="space-between">
            <Typography className={classes.text__info}>
              New Password <span style={{ color: 'red' }}>*</span>
            </Typography>
            <TextField
              type="password"
              className={classes.input__password}
              placeholder="Enter new password"
              variant="outlined"
              size="small"
              value={password.newPassword}
              onChange={handleChangeNewPassWord}
            />
          </Box>
          <Box pt={3} display="flex" justifyContent="space-between">
            <Typography className={classes.text__info}>
              Confirm password <span style={{ color: 'red' }}>*</span>
            </Typography>
            <TextField
              type="password"
              className={classes.input__password}
              placeholder="Enter confirm password"
              variant="outlined"
              size="small"
              value={password.confirmPassword}
              onChange={handleChangeConfirmPassWord}
            />
          </Box>

          {password.error ? (
            <Typography
              variant="caption"
              color="secondary"
              className={classes.text__error}
            >
              {password.error}
            </Typography>
          ) : (
            <Typography variant="caption" className={classes.text__success}>
              {password.success}
            </Typography>
          )}

          <Box pt={3} display="flex" justifyContent="space-between">
            <Button
              variant="contained"
              size="medium"
              color="primary"
              className={classes.btn__change}
              loading={loading}
              onClick={() => validatePassword()}
            >
              Change
            </Button>
            <Button
              variant="contained"
              size="medium"
              color="secondary"
              className={classes.btn__exit}
              onClick={() => noChangePassword()}
            >
              Exit
            </Button>
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
export default SettingPage;
