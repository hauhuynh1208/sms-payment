import React from 'react';
import {
  Box,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from '@material-ui/core';
import MaterialTable from 'material-table';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  table_borderRight: {
    borderWidth: 0,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#f2f2f2',
    borderStyle: 'solid',
  },
  table_borderBottom: {
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor: '#f2f2f2',
    borderStyle: 'solid',
  },
  style_header: {
    backgroundColor: '#00a3a3',
  },
  text__header: {
    color: 'white',
  },
  table_rowHeader: {
    // backgroundColor: '#00a3a3',
  },
}));

const headerStyle = {
  borderWidth: 1,
  borderColor: '#f2f2f2',
  borderStyle: 'solid',
  backgroundColor: '#00a3a3',
  color: 'white',
};

const cellStyle = {
  borderWidth: 1,
  borderColor: '#f2f2f2',
  borderStyle: 'solid',
};

const AccountPage = (props) => {
  const { dataAccount, dataAccountMain } = props;

  const columns = [
    { title: 'FirstName', field: 'firstname' },
    { title: 'LastName', field: 'lastname' },
    { title: 'Email', field: 'email' },
    { title: 'Phone', field: 'phone' },
    { title: 'Address', field: 'address' },
    {
      title: 'Mật Khẩu',
      field: 'password',
      editable: 'onAdd',
    },
  ];

  const classes = useStyles();

  return (
    <Box p={5} width="100%">
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow className={classes.table_rowHeader}>
              <TableCell align="left" style={{ fontSize: 20 }}>
                Main Account
              </TableCell>
              <TableCell />
              <TableCell />
              <TableCell />
              <TableCell />
            </TableRow>
            <TableRow className={classes.style_header}>
              <TableCell
                align="left"
                className={[classes.table_borderRight, classes.text__header]}
              >
                FirstName
              </TableCell>
              <TableCell
                align="left"
                className={[classes.table_borderRight, classes.text__header]}
              >
                LastName
              </TableCell>
              <TableCell
                align="left"
                className={[classes.table_borderRight, classes.text__header]}
              >
                Email
              </TableCell>
              <TableCell
                align="left"
                className={[classes.table_borderRight, classes.text__header]}
              >
                Phone
              </TableCell>
              <TableCell
                align="left"
                className={[classes.table_borderBottom, classes.text__header]}
              >
                Address
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataAccountMain.map((row) => (
              <TableRow>
                <TableCell
                  component="th"
                  scope="row"
                  className={classes.table_borderRight}
                >
                  {row.firstname}
                </TableCell>
                <TableCell align="left" className={classes.table_borderRight}>
                  {row.lastname}
                </TableCell>
                <TableCell align="left" className={classes.table_borderRight}>
                  {row.email}
                </TableCell>
                <TableCell align="left" className={classes.table_borderRight}>
                  {row.phone}
                </TableCell>
                <TableCell align="left" className={classes.table_borderBottom}>
                  {row.address}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box pt={5} />
      <MaterialTable
        title="Manager Account"
        columns={columns}
        data={dataAccount}
        options={{
          headerStyle,
          cellStyle,
        }}
        localization={{
          toolbar: {
            nRowsSelected: 10,
          },
        }}
        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve) => {
              const newDatas = {
                firstname: newData.firstname,
                lastname: newData.lastname,
                email: newData.email,
                phone: newData.phone,
                address: newData.address,
                password: newData.password,
              };
              setTimeout(() => {
                props.postAccount(newDatas);
                resolve();
              }, 600);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                const id = newData._id;
                props.putAccount(id, newData);
                resolve();
              }, 600);
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                props.delAccount(oldData._id);
                resolve();
              }, 600);
            }),
        }}
      />
    </Box>
  );
};
export default AccountPage;
