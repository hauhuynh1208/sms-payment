import React from 'react';
import { Box, FormControl, Select, MenuItem } from '@material-ui/core';
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
        editable={{
          onRowAddCancelled: (rowData) => console.log('Row adding cancelled'),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                const { _id, status, note } = newData;
                props.onEditSMS({ _id, status, note });
                resolve();
              }, 600);
            }),
        }}
      />
    </Box>
  );
};

export default SMSPage;
