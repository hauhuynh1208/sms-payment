import React from 'react';
import { Box } from '@material-ui/core';
import Table from '../../components/Table';

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
    <>
      <Table
        title="Main Account"
        columns={columns}
        data={arrMainAccount}
        options={{
          search: false,
          paging: false,
        }}
      />
      <Box pt={5} />
      <Table
        title="Manager Account"
        columns={columns}
        data={accounts}
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
    </>
  );
};
export default AccountPage;
