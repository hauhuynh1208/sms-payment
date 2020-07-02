import React from 'react';
import { Box, FormControl, Select, MenuItem } from '@material-ui/core';
import MaterialTable from 'material-table';

const headerStyle = {
  borderWidth: 1,
  borderRightWidth: 1,
  borderLeftWidth: 1,
  borderBottomWidth: 1,
  borderTopWidth: 1,
  borderColor: '#f2f2f2',
  borderStyle: 'solid',
  backgroundColor: '#00a3a3',
  color: 'white',
};

const cellStyle = {
  borderWidth: 0,
  borderLeftWidth: 1,
  borderRightWidth: 1,
  borderBottomWidth: 1,
  borderColor: '#f2f2f2',
  borderStyle: 'solid',
};
const SMSPage = (props) => {
  const { data } = props;

  const renderDropdown = (props) => {
    return (
      <FormControl variant="outlined">
        <Select
          labelId="select-status-label"
          id="select-status"
          //   defaultValue={props.rowData.status}
          value={props.rowData.status}
          onChange={(e) => props.onChange(e.target.value)}
        >
          <MenuItem value="paid">paid</MenuItem>
          <MenuItem value="new">new</MenuItem>
        </Select>
      </FormControl>
    );
  };

  const columns = [
    { title: 'Amount', field: 'amount', editable: 'never' },
    { title: 'Bank', field: 'address', editable: 'never' },
    { title: 'Body', field: 'body', editable: 'never' },
    { title: 'Phone', field: 'phone', editable: 'never' },
    { title: 'Status', field: 'status', editComponent: renderDropdown },
    { title: 'Note', field: 'note' },
  ];

  const [status, setStatus] = React.useState({
    columns: [
      { title: 'Id', field: '_id' },
      { title: 'Amount', field: 'amount' },
      { title: 'Bank', field: 'address' },
      { title: 'Body', field: 'body' },
      { title: 'Phone', field: 'phone' },
      { title: 'Status', field: 'status' },
      { title: 'Note', field: 'note' },
    ],
  });

  return (
    <Box p={5} width="100%">
      <MaterialTable
        title="SMS Management"
        columns={columns}
        data={data}
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
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                const { _id, status, note } = newData;
                props.onEditSMS({ _id, status, note });
                resolve();
              }, 600);
            }),
          //   onRowDelete: (oldData) =>
          //     new Promise((resolve) => {
          //       // console.log(oldData, 'del data')
          //       // setTimeout(() => {
          //       // resolve();
          //       // setState((prevState) => {
          //       //     const data = [...prevState.data];
          //       //     data.splice(data.indexOf(oldData), 1);
          //       //     return { ...prevState, data };
          //       // });
          //       // }, 600);
          //     }),
        }}
      />
    </Box>
  );
};

export default SMSPage;
