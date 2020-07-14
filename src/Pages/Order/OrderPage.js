import React from 'react';
import MaterialTable from 'material-table';
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
} from '@material-ui/core';
import { Publish, GetApp, AddBox } from '@material-ui/icons';
import colors from '../../styles/colors';
import { history } from '../../utils/history';

import styles from './style';
const headerStyle = {
  borderWidth: 1,
  borderColor: colors.light2,
  borderStyle: 'solid',
  backgroundColor: colors.primary,
  color: colors.white,
};

const cellStyle = {
  borderWidth: 1,
  borderColor: colors.light2,
  borderStyle: 'solid',
};

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

const data = [
  {
    id: '123456789',
    orderReference: 'none',
    orderContent: 'none',
    amount: '1234567890',
    paymentMethod: 'Bank',
    bank: 'Vietcombank',
    status: 'Pending',
    salesResponsible: 'none',
    processedBy: 'none',
    title: 'none',
    customerName: 'none',
    email: 'none',
    phone: '0123456789 ',
    checkFormat: 'none',
  },
  {
    id: '123456789',
    orderReference: 'none',
    orderContent: 'none',
    amount: '1234567890',
    paymentMethod: 'Cash',
    bank: 'Vietcombank',
    status: 'Pending',
    salesResponsible: 'none',
    processedBy: 'none',
    title: 'none',
    customerName: 'none',
    email: 'none',
    phone: '0123456789 ',
    checkFormat: 'none',
  },
  {
    id: '123456789',
    orderReference: 'none',
    orderContent: 'none',
    amount: '1234567890',
    paymentMethod: 'Cash',
    bank: 'Vietcombank',
    status: 'Pending',
    salesResponsible: 'none',
    processedBy: 'none',
    title: 'none',
    customerName: 'none',
    email: 'none',
    phone: '0123456789 ',
    checkFormat: 'none',
  },
];

const App = (props) => {
  const [action, setAction] = React.useState('');
  const [time, setTime] = React.useState('');
  const [openModal, setOpen] = React.useState(false);
  const [dataRow, setDataRow] = React.useState({
    oldDataSelected: [],
    status: '',
  });
  const handleChangeAction = (event) => {
    setAction(event.target.value);
  };
  const handleChangeTime = (event) => {
    setTime(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const createDataRow = () => {
    history.push('/edit-order', {
      data: null,
      isCreate: true,
    });
  };

  const editDataRow = () => {
    if (dataRow.oldDataSelected.length == 1) {
      history.push('/edit-order', {
        data: dataRow.oldDataSelected,
        isEdit: true,
      });
    } else if (dataRow.oldDataSelected.length > 1) {
      setDataRow({ ...dataRow, status: 'Please select only one row !' });
    } else {
      setDataRow({ ...dataRow, status: 'Please select data row !' });
    }
  };

  const deleteDataRow = () => {
    if (dataRow.oldDataSelected.length > 0) {
      setOpen(true);
    } else {
      setDataRow({ ...dataRow, status: 'Please select a data row !' });
    }
  };

  const classes = styles();
  return (
    <Box p={5} className={classes.container_order}>
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <Box pb={1} display="flex" flexDirection="row">
          <Button
            variant="contained"
            size="large"
            className={classes.button__action}
            startIcon={<AddBox />}
            onClick={createDataRow}
          >
            <Typography>Create</Typography>
          </Button>
          <FormControl variant="outlined" className={classes.form__control}>
            <InputLabel
              id="demo-simple-select-outlined-label"
              style={{ lineHeight: '4px' }}
            >
              Action
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={action}
              onChange={handleChangeAction}
              label="Action"
              style={{ height: 40 }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={1} onClick={editDataRow}>
                Edit order
              </MenuItem>
              <MenuItem value={2} onClick={deleteDataRow}>
                Delete order
              </MenuItem>
              <MenuItem value={3}>Send payment request</MenuItem>
              <MenuItem value={4}>Send payment confirmation</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box>
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
          <FormControl variant="outlined" className={classes.form__control}>
            <InputLabel
              id="demo-simple-select-outlined-label"
              style={{ lineHeight: '4px' }}
            >
              Time
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={time}
              onChange={handleChangeTime}
              label="Time"
              style={{ height: 40 }}
            >
              <MenuItem value={1}>Show by date</MenuItem>
              <MenuItem value={2}>Show by week</MenuItem>
              <MenuItem value={3}>Show by month</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
      {dataRow.status && (
        <Box py={2}>
          <Typography variant="body1" color="secondary">
            {dataRow.status}
          </Typography>
        </Box>
      )}
      <MaterialTable
        title="Manager Order"
        columns={columns}
        data={data}
        options={{
          selection: true,
          actionsColumnIndex: -1,
          headerStyle,
          cellStyle,
          pageSize: 10,
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
export default App;
