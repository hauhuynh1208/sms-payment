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
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { Publish, GetApp, AddBox } from '@material-ui/icons';
import { Link } from 'react-router-dom';
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
  const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const [dataRow, setDataRow] = React.useState({
    oldDataSelected: [],
    status: '',
  });

  const deleteDataRow = () => {
    if (dataRow.oldDataSelected.length > 0) {
      setOpen(true);
    } else {
      setDataRow({ ...dataRow, status: 'Please select a data row !' });
    }
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
  const createDataRow = () => {
    history.push('/edit-order', {
      data: null,
      isCreate: true,
    });
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Box width="100%" height="100%" display="flex" flexDirection="column">
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <Box pb={1} display="flex" flexDirection="row">
          <Button
            variant="contained"
            size="large"
            className={classes.button__action}
            startIcon={<AddBox />}
            onClick={createDataRow}
          >
            <Typography className={classes.text__link}>Create</Typography>
          </Button>

          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel
              id="demo-simple-select-outlined-label"
              style={{ lineHeight: '4px' }}
            >
              Action
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={age}
              onChange={handleChange}
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
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel
              id="demo-simple-select-outlined-label"
              style={{ lineHeight: '4px' }}
            >
              Action
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={age}
              onChange={handleChange}
              label="Action"
              style={{ height: 40 }}
            >
              <MenuItem value={10}>Hiển thị theo ngày</MenuItem>
              <MenuItem value={20}>Hiển thị theo tuần</MenuItem>
              <MenuItem value={20}>Hiển thị theo thang</MenuItem>
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
      <Table
        title="Manager Order"
        columns={columns}
        data={data}
        options={{
          selection: true,
          actionsColumnIndex: -1,
          showTextRowsSelected: false,
          rowStyle: (rowData) => ({
            backgroundColor: rowData.tableData.checked ? '#ebebeb' : '',
          }),
        }}
        onSelectionChange={(event) => {
          setDataRow({ ...dataRow, oldDataSelected: event, status: '' });
        }}
      />

      <Modal
        open={open}
        onClose={handleClose}
        className={classes.modal__container}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Box
          style={{
            position: 'absolute',
            width: 300,
            height: 150,
            backgroundColor: 'white',
            borderWidth: 0,
            borderRadius: 20,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <Typography className={classes.text_modalDelete}>
            Are you sure delete ?
          </Typography>
          <Box pt={2} display="flex">
            <Button
              variant="contained"
              //   size="medium"
              color="primary"
              onClick={handleClose}
              className={classes.btn__change}
            >
              Delete
            </Button>

            <Button
              variant="contained"
              //   size="medium"
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
