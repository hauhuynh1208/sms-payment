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
import Input from '../../components/Input';
import styles from './style';

var openPanel2 = false;
const SettingPage = (props) => {
  const { loading, mainAccount } = props;
  console.log(mainAccount, 'mainAccount');
  const [statePanel, setExpanded] = React.useState({
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
      setExpanded({ ...statePanel, panel1: !statePanel.panel1 });
    }
    if (panel == 'panel2') {
      setExpanded({ ...statePanel, panel2: !statePanel.panel2 });
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
        style={{ borderRadius: 10 }}
        expanded={statePanel.panel1}
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
            <Input
              container__input={classes.container__input}
              titleLabel="FirstName"
              disabled
              value={arrMainAccount[0].firstname}
            />
            <Input
              container__input={classes.container__input}
              titleLabel="LastName"
              disabled
              value={arrMainAccount[0].lastname}
            />

            <Input
              container__input={classes.container__input}
              titleLabel="Phone"
              disabled
              value={arrMainAccount[0].phone}
            />
            <Input
              container__input={classes.container__input}
              titleLabel="Email"
              disabled
              value={arrMainAccount[0].email}
            />
            <Input
              container__input={classes.container__input}
              titleLabel="Address"
              disabled
              value={arrMainAccount[0].address}
            />
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion
        className={classes.container__setting}
        style={{ borderRadius: 10 }}
        expanded={statePanel.panel2}
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
          <Input
            container__input={classes.container__input}
            titleLabel="New Password"
            type="password"
            placeholder="Enter new password"
            value={password.newPassword}
            onChange={handleChangeNewPassWord}
            isObligatory
          />
          <Input
            container__input={classes.container__input}
            titleLabel="Confirm password"
            type="password"
            placeholder="Enter confirm password"
            value={password.confirmPassword}
            onChange={handleChangeConfirmPassWord}
            isObligatory
          />

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
