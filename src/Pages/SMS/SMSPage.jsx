import React from 'react';
import {
  Box,
  FormControl,
  Select,
  MenuItem,
  TextField,
} from '@material-ui/core';
import Table from '../../components/Table';

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
    {
      title: 'Note',
      field: 'note',
      editComponent: (props) => (
        <TextField
          multiline
          value={props.value}
          onChange={(e) => props.onChange(e.target.value)}
        />
      ),
    },
  ];

  return (
    <Box width="100%" height="100%">
      <Table
        title="SMS Management"
        columns={columns}
        data={data}
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
