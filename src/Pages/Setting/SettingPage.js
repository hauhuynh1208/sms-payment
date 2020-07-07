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

const SettingPage = (props) => {
  const [state, setExpanded] = React.useState({
    panel1: true,
    panel2: false,
  });

  const handleChange = (panel) => (event, newExpanded) => {
    if (panel == 'panel1') {
      setExpanded({ ...state, panel1: !state.panel1 });
    }
    if (panel == 'panel2') {
      setExpanded({ ...state, panel2: !state.panel2 });
    }
  };

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
          <Box width="30%" pr={30}>
            <Box pt={3} display="flex" justifyContent="space-between">
              <Typography className={classes.text__info}>FirstName</Typography>
              <TextField
                className={classes.input__password}
                disabled
                defaultValue="Truong Ngoc"
                variant="outlined"
                size="small"
              />
            </Box>
            <Box pt={3} display="flex" justifyContent="space-between">
              <Typography className={classes.text__info}>LastName</Typography>
              <TextField
                className={classes.input__password}
                disabled
                defaultValue="Vinh Tu"
                variant="outlined"
                size="small"
              />
            </Box>
            <Box pt={3} display="flex" justifyContent="space-between">
              <Typography className={classes.text__info}>Phone</Typography>
              <TextField
                className={classes.input__password}
                disabled
                defaultValue="0357133415"
                variant="outlined"
                size="small"
              />
            </Box>
          </Box>
          <Box width="30%">
            <Box pt={3} display="flex" justifyContent="space-between">
              <Typography className={classes.text__info}>Email</Typography>
              <TextField
                className={classes.input__password}
                disabled
                defaultValue="Vinhtu125@gmail.com"
                variant="outlined"
                size="small"
              />
            </Box>
            <Box pt={3} display="flex" justifyContent="space-between">
              <Typography className={classes.text__info}>Address</Typography>
              <TextField
                className={classes.input__password}
                disabled
                defaultValue="180 đường số 4, phường Trường Thọ , quận Thủ Đức"
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
              className={classes.input__password}
              placeholder="Enter new password"
              variant="outlined"
              size="small"
            />
          </Box>
          <Box pt={3} display="flex" justifyContent="space-between">
            <Typography className={classes.text__info}>
              Confirm password <span style={{ color: 'red' }}>*</span>
            </Typography>
            <TextField
              className={classes.input__password}
              placeholder="Enter confirm password"
              variant="outlined"
              size="small"
            />
          </Box>
          <Box pt={3} display="flex" justifyContent="space-between">
            <Button
              variant="contained"
              size="medium"
              color="primary"
              className={classes.btn__change}
            >
              Change
            </Button>
            <Button
              variant="contained"
              size="medium"
              color="secondary"
              className={classes.btn__exit}
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
