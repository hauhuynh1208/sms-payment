import React from 'react';
import { Box } from '@material-ui/core';
import MaterialTable from 'material-table';

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
  const { mainAccount, accounts } = props;
  const columns = [
    { title: 'FirstName', field: 'firstname' },
    { title: 'LastName', field: 'lastname' },
    { title: 'Email', field: 'email' },
    { title: 'Phone', field: 'phone' },
    { title: 'Address', field: 'address' },
  ];
  const arrMainAccount = [];
  arrMainAccount.push(mainAccount);

  return (
    <Box p={5} width="100%">
      <MaterialTable
        title="Main Account"
        columns={columns}
        data={arrMainAccount}
        options={{
          search: false,
          paging: false,
          headerStyle: headerStyle,
          cellStyle: cellStyle,
        }}
      />
      <Box pt={5} />
      <MaterialTable
        title="Manager Account"
        columns={columns}
        data={accounts}
        options={{
          headerStyle: headerStyle,
          cellStyle: cellStyle,
          pageSize: 10,
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
              };
              setTimeout(() => {
                props.createAccount(newDatas);
                resolve();
              }, 600);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                const id = newData._id;
                props.editAccount(id, newData);
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
