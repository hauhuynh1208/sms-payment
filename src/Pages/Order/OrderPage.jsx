import React from 'react';
import {
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Button,
  Modal,
  Typography,
  Backdrop,
  Menu,
} from '@material-ui/core';
import {
  Publish,
  GetApp,
  AddBox,
  Create,
  KeyboardArrowDown,
  AccessTime,
} from '@material-ui/icons';
import colors from '../../styles/colors';
import { history } from '../../utils/history';
import Table from '../../components/Table';
import useStyles from './styles';
import data from './example';

const columns = [
  { title: 'Id', field: 'id' },
  { title: 'OrderReference', field: 'orderReference' },
  { title: 'OrderContent', field: 'orderContent' },
  { title: 'Amount', field: 'amount' },
  { title: 'PaymentMethod', field: 'paymentMethod' },
  { title: 'Bank', field: 'bank' },
  { title: 'Status', field: 'status' },
  { title: 'SalesResponsible', field: 'salesResponsible' },
  { title: 'ProcessedBy', field: 'processedBy' },
  { title: 'Title', field: 'title' },
  { title: 'Customer Name', field: 'customerName' },
  { title: 'Email', field: 'email' },
  { title: 'Phone', field: 'phone' },
  { title: 'CheckFormat', field: 'checkFormat' },
];

export default (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState({
    actions: null,
    time: null,
  });
  const [time, setTime] = React.useState('Show by date');
  const [openModal, setOpen] = React.useState(false);
  const [dataRow, setDataRow] = React.useState({
    oldDataSelected: [],
    status: '',
  });

  const handleClose = () => {
    setOpen(false);
  };

  const createDataRow = () => {
    history.push('/edit-order', {
      data: null,
      isCreate: true,
    });
  };

  const handleActionsClick = (event) => {
    setAnchorEl({ ...anchorEl, actions: event.currentTarget });
  };

  const editDataRow = () => {
    if (dataRow.oldDataSelected.length == 1) {
      history.push('/edit-order', {
        data: dataRow.oldDataSelected,
        isEdit: true,
      });
    } else if (dataRow.oldDataSelected.length > 1) {
      setDataRow({ ...dataRow, status: 'Please select only one row !' });
      setAnchorEl({ ...anchorEl, actions: null });
    } else {
      setDataRow({ ...dataRow, status: 'Please select data row !' });
      setAnchorEl({ ...anchorEl, actions: null });
    }
  };

  const deleteDataRow = () => {
    if (dataRow.oldDataSelected.length > 0) {
      setOpen(true);
    } else {
      setDataRow({ ...dataRow, status: 'Please select a data row !' });
      setAnchorEl({ ...anchorEl, actions: null });
    }
  };

  const handleTimeClick = (event) => {
    setAnchorEl({ ...anchorEl, time: event.currentTarget });
  };

  const clickTimeMenu = (event) => {
    setTime(event.currentTarget.innerText);
    setAnchorEl({ ...anchorEl, time: null });
  };

  return (
    <Box width="100%" height="100%" display="flex" flexDirection="column">
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <Box mb={1} display="flex" flex={1}>
          <Button
            variant="contained"
            size="large"
            className={classes.button__action}
            startIcon={<Create />}
            onClick={createDataRow}
          >
            <Typography>Create</Typography>
          </Button>
          <Button
            variant="contained"
            size="large"
            className={classes.button__action}
            startIcon={<AddBox />}
            endIcon={<KeyboardArrowDown />}
            aria-controls="actions-menu"
            aria-haspopup="true"
            onClick={handleActionsClick}
          >
            <Typography>Actions</Typography>
          </Button>
          <Menu
            id="actions-menu"
            anchorEl={anchorEl.actions}
            keepMounted
            open={Boolean(anchorEl.actions)}
            onClose={() => setAnchorEl({ ...anchorEl, actions: null })}
          >
            <MenuItem value={1} onClick={editDataRow}>
              Edit order
            </MenuItem>
            <MenuItem value={2} onClick={deleteDataRow}>
              Delete order
            </MenuItem>
            <MenuItem value={3}>Send payment request</MenuItem>
            <MenuItem value={4}>Send payment confirmation</MenuItem>
          </Menu>
        </Box>
        <Box mb={1} display="flex" flex={1} justifyContent="flex-end">
          <Button
            variant="contained"
            size="large"
            className={classes.button__action}
            startIcon={<GetApp />}
          >
            Import
          </Button>
          <Button
            variant="contained"
            size="large"
            className={classes.button__action}
            startIcon={<Publish />}
          >
            Export
          </Button>
          <Button
            variant="contained"
            size="large"
            className={classes.button__action}
            style={{ marginRight: 0 }}
            startIcon={<AccessTime />}
            endIcon={<KeyboardArrowDown />}
            aria-controls="time-menu"
            aria-haspopup="true"
            onClick={handleTimeClick}
          >
            <Typography>{time}</Typography>
          </Button>
          <Menu
            id="time-menu"
            anchorEl={anchorEl.time}
            keepMounted
            open={Boolean(anchorEl.time)}
            onClose={() => setAnchorEl({ ...anchorEl, time: null })}
          >
            <MenuItem value="Date" onClick={clickTimeMenu}>
              Show by date
            </MenuItem>
            <MenuItem value="Week" onClick={clickTimeMenu}>
              Show by week
            </MenuItem>
            <MenuItem value="Month" onClick={clickTimeMenu}>
              Show by month
            </MenuItem>
          </Menu>
        </Box>
      </Box>
      {dataRow.status && (
        <Box py={2}>
          <Typography variant="body1" color="secondary">
            {dataRow.status}
          </Typography>
        </Box>
      )}
      <Table
        title="Manager Order"
        columns={columns}
        data={data}
        options={{
          selection: true,
          actionsColumnIndex: -1,
          showTextRowsSelected: false,
          rowStyle: (rowData) => ({
            backgroundColor: rowData.tableData.checked ? colors.light1 : '',
          }),
        }}
        onSelectionChange={(event) => {
          setDataRow({ ...dataRow, oldDataSelected: event, status: '' });
        }}
      />
      <Modal
        open={openModal}
        onClose={handleClose}
        className={classes.modal__container}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Box className={classes.box__deleteRow}>
          <Typography className={classes.text__modalDelete}>
            Are you sure delete ?
          </Typography>
          <Box pt={2} display="flex">
            <Button
              variant="contained"
              color="primary"
              onClick={handleClose}
              className={classes.btn__delete}
            >
              Delete
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleClose}
              className={classes.btn__exit}
            >
              Exit
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};
