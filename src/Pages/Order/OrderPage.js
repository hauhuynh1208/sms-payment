import React from 'react';
import MaterialTable from 'material-table';
import {
  Box,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  Select,
  Button,
  Input,
  Icon,
  Typography,
  Modal,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { Publish, ControlPoint, AddCommentTwoTone } from '@material-ui/icons';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },

  ///

  formControl: {
    minWidth: 250,
  },
  formControl_show: {
    minWidth: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  button__action: {
    marginRight: 8,
    height: 56,
    backgroundColor: '#00a3a3',
    color: 'white',
  },
  button__create: {
    position: 'absolute',
    left: 0,
    top: -100,
  },
}));

const headerStyle = {
  borderWidth: 1,
  borderColor: '#f2f2f2',
  borderStyle: 'solid',
};

const cellStyle = {
  borderWidth: 1,
  borderColor: '#f2f2f2',
  borderStyle: 'solid',
};

const App = () => {
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const paymentMethodComponent = () => {
    return (
      <FormControl variant="outlined">
        <InputLabel id="demo-simple-select-outlined-label">
          Select from below list
        </InputLabel>
        <Select
          labelId="select-status-label"
          id="select-status"
          label="Select from below list"
          //   defaultValue={props.rowData.status}
          value={age}
          // onChange={(e) => props.onChange(e.target.value)}
          onChange={handleChange}
        >
          <MenuItem value="Cash">Cash</MenuItem>
          <MenuItem value="Bank">Bank</MenuItem>
          <MenuItem value="MoMo">MoMo</MenuItem>
          <MenuItem value="Zalo">Zalo</MenuItem>
        </Select>
      </FormControl>
    );
  };

  const BankComponent = () => {
    return (
      <FormControl variant="outlined">
        <InputLabel id="demo-simple-select-outlined-label">
          Select from below list
        </InputLabel>
        <Select
          labelId="select-status-label"
          id="select-status"
          //   defaultValue={props.rowData.status}
          value={age}
          label="Select from below list"
          // onChange={(e) => props.onChange(e.target.value)}
          onChange={handleChange}
        >
          <MenuItem value="Vietcombank">Vietcombank</MenuItem>
          <MenuItem value="ACB">ACB</MenuItem>
          <MenuItem value="Techcombank">Techcombank</MenuItem>
        </Select>
      </FormControl>
    );
  };
  const statusComponent = () => {
    return (
      <FormControl variant="outlined">
        <InputLabel id="demo-simple-select-outlined-label">
          Select from below list
        </InputLabel>
        <Select
          labelId="select-status-label"
          id="select-status"
          label="Select from below list"
          //   defaultValue={props.rowData.status}
          value={age}
          // onChange={(e) => props.onChange(e.target.value)}
          onChange={handleChange}
        >
          <MenuItem value="Pending">Pending</MenuItem>
          <MenuItem value="Paid">Paid</MenuItem>
          <MenuItem value="Canceled">Canceled</MenuItem>
          <MenuItem value="Refunded">Refunded</MenuItem>
        </Select>
      </FormControl>
    );
  };

  const columns = [
    { title: 'Id', field: 'id' },
    { title: 'OrderReference', field: 'orderReference' },
    { title: 'OrderContent', field: 'orderContent' },
    { title: 'Amount', field: 'amount' },
    {
      title: 'PaymentMethod',
      field: 'paymentMethod',
      render: paymentMethodComponent,
    },
    { title: 'Bank', field: 'bank', render: BankComponent },
    { title: 'Status', field: 'status', render: statusComponent },
    { title: 'SalesResponsible', field: 'salesResponsible' },
    { title: 'ProcessedBy', field: 'processedBy' },
    { title: 'Title', field: 'title' },
    { title: 'Customer Name', field: 'customerName' },
    { title: 'Email', field: 'email' },
    { title: 'Phone', field: 'phone' },
    { title: 'CheckFormat', field: 'checkFormat' },
  ];

  const addNewData = (newData) => {
    console.log(newData, 'data');
  };

  const [gridData, setGridData] = React.useState({
    data: [
      {
        id: '123456789',
        orderReference: 'none',
        orderContent: 'none',
        amount: '1234567890',
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
        salesResponsible: 'none',
        processedBy: 'none',
        title: 'none',
        customerName: 'none',
        email: 'none',
        phone: '0123456789 ',
        checkFormat: 'none',
      },
    ],
    resolve: () => {},
  });

  const editRowTable = () => {};
  //   const components = {
  //     Action: props =>{
  //       if(typeof props.action.icon === 'edit') (
  //           <Button variant="contained" size="large" className={classes.button__action}  startIcon={<ControlPoint />}  onClick={(event) => props.action.onClick(event, props.data)}>
  //           Create
  //       </Button>
  //       )
  //   }

  // };
  const actions = [
    {
      icon: 'edit',
      tooltip: 'Edit Index',
      onClick: (event, rowData) => {
        this.onEditClick(null, rowData._id);
      },
    },
    {
      icon: 'delete',
      tooltip: 'Delete Index',
      onClick: (event, rowData) => {
        this.onDeleteClick(null, rowData._id);
      },
    },
  ];

  // handleAdd=(newData, resolve, add)=> {
  //   return(
  //     <Button variant="contained" size="large" className={classes.button__action}  startIcon={<ControlPoint />}   >
  //        Create
  //     </Button>
  //   )
  // }

  const [editable, setEditable] = React.useState();
  const [data, setData] = React.useState(gridData.data);
  const tableRef = React.useRef();

  const handleAddRow = () => {
    tableRef.current.state.showAddRow = true;
    console.log(tableRef, 'table ref');
    setEditable({
      onRowAdd: (newData) =>
        new Promise((resolve, reject) => {
          console.log(newData, 'newData');
          resolve();
        }),
    });
  };

  // const handleDeleteRow = () => {
  //   tableRef.current.state.showDeleteRow = true;
  //   setEditable({
  //     onRowDelete: (oldData) =>
  //       new Promise((resolve, reject) => {
  //         // setData([...data, newData]);
  //         // setEditable();
  //         console.log(oldData, 'oldData');
  //         resolve();
  //       }),
  //   });
  // };

  // const handleUpdateRow = () => {
  //   tableRef.current.state.grouped = true;
  //   // tableRef.current.state.editing = true;
  //   console.log(tableRef, 'current');

  //   setEditable({
  //     onRowUpdate: (newData, oldData) =>
  //       new Promise((resolve, reject) => {
  //         // setData([...data, newData]);
  //         // setEditable();
  //         // console.log(x, 'oldData')
  //         resolve();
  //       }),
  //   });
  // };

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

  return (
    <Box p={5}>
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <Box pb={1} display="flex" flexDirection="row">
          <Button
            variant="contained"
            size="large"
            className={classes.button__action}
            startIcon={<Publish />}
          >
            Import
          </Button>
          <Button
            variant="contained"
            size="large"
            className={classes.button__action}
            startIcon={<ControlPoint />}
            onClick={handleAddRow}
          >
            Create
          </Button>
          {/* <Button
            variant="contained"
            size="large"
            className={classes.button__action}
            startIcon={<ControlPoint />}
            onClick={handleDeleteRow}
          >
            Delete
          </Button>
          <Button
            variant="contained"
            size="large"
            className={classes.button__action}
            startIcon={<ControlPoint />}
            onClick={handleUpdateRow}
          >
            Update
          </Button> */}
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">
              Selected
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={age}
              onChange={handleChange}
              label="selected"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={1}>Edit order</MenuItem>
              <MenuItem value={2}>Delete order</MenuItem>
              <MenuItem value={2} onClick={handleOpen}>
                Reset Password
              </MenuItem>
              <MenuItem value={3}>Send payment request</MenuItem>
              <MenuItem value={4}>Send payment confirmation</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <FormControl variant="outlined" className={classes.formControl_show}>
          <InputLabel id="demo-simple-select-outlined-label">
            Selected
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={age}
            onChange={handleChange}
            label="selected"
          >
            <MenuItem value={10}>Hiển thị theo ngày</MenuItem>
            <MenuItem value={20}>Hiển thị theo tuần</MenuItem>
            <MenuItem value={20}>Hiển thị theo thang</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <MaterialTable
        title="Basic Selection Preview"
        columns={columns}
        data={gridData.data}
        editable={
          {
            // onRowAdd: (newData) =>
            //   new Promise((resolve, reject) => {
            //     setTimeout(() => {
            //       /* setData([...data, newData]); */
            //       resolve();
            //     }, 1000);
            //   }),
            // onRowUpdate: (newData, oldData) =>
            //   new Promise((resolve, reject) => {
            //     setTimeout(() => {
            //       const dataUpdate = [...data];
            //       const index = oldData.tableData.id;
            //       dataUpdate[index] = newData;
            //       setData([...dataUpdate]);
            //       resolve();
            //     }, 1000);
            //   }),
            // onRowDelete: (oldData) =>
            //   new Promise((resolve, reject) => {
            //     setTimeout(() => {
            //       const dataDelete = [...data];
            //       const index = oldData.tableData.id;
            //       dataDelete.splice(index, 1);
            //       setData([...dataDelete]);
            //       resolve();
            //     }, 1000);
            //   }),
          }
        }
        options={{
          selection: true,
          actionsColumnIndex: -1,
          // selectionProps: rowData => (
          //  console.log(rowData, 'rowdata')
          // )
        }}
        tableRef={tableRef}
        // editable={editable}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Box
          style={{
            position: 'absolute',
            width: 1000,
            height: 500,
            justifyContent: 'center',
            alignSelf: 'center',
            top: 200,
            left: 450,
            backgroundColor: 'white',
          }}
        >
          <Typography>Bạn muốn reset password các đối tượng này</Typography>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Dessert (100g serving)</TableCell>
                  <TableCell align="right">Calories</TableCell>
                  <TableCell align="right">Fat&nbsp;(g)</TableCell>
                  <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                  <TableCell align="right">Protein&nbsp;(g)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Button onClick={handleClose} variant="contained" color="primary">
            Reset
          </Button>
          <Button onClick={handleClose} variant="contained" color="secondary">
            Cancle
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};
export default App;
