import React from 'react';
import MaterialTable from 'material-table';
import { Box } from '@material-ui/core';

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

export default ({ options, ...props }) => {
  return (
    <Box display="flex" flex={1}>
      <MaterialTable
        title={props.title}
        columns={props.columns}
        data={props.data}
        options={{
          headerStyle,
          cellStyle,
          pageSize: 5,
          pageSizeOptions: [5, 10, 25, 50, 100],
          emptyRowsWhenPaging: false,
          //   tableLayout: 'fixed',
          ...options,
        }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          height: '100%',
          width: '100%',
        }}
        {...props}
      />
    </Box>
  );
};
