import React from 'react';
import {
  Box,
  FormControl,
  Select,
  MenuItem,
  TextField,
  Typography,
} from '@material-ui/core';
import MaterialTable from 'material-table';
import colors from '../../styles/colors';

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
      editComponent: (props) => {
        return (
          <TextField
            multiline
            value={props.value}
            onChange={(e) => props.onChange(e.target.value)}
          />
        );
      },
      render: (rowData) => {
        let note = rowData.note;
        if (note) {
          if (
            note.length > 20 &&
            (note.indexOf(' ') > 20 || note.indexOf(' ') < 2)
          ) {
            note = rowData.note.slice(0, 20) + '...';
          }
        }
        return <Typography style={{ fontSize: 14 }}>{note}</Typography>;
      },
    },
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
