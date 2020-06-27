import React from 'react'
import { Box } from '@material-ui/core'
import MaterialTable from 'material-table';

const AccountComponent = props => {
    const { dataAccount } = props
    const [state, setState] = React.useState({
        columns: [
          { title: 'FirstName', field: 'firstname' },
          { title: 'LastName', field: 'lastname' }, 
          { title: 'Email', field: 'email'},      
          { title: 'Phone', field: 'phone' },
          { title: 'Address', field: 'address' },
            
        ],
        data: dataAccount
      });
    
        return(
               <Box p={5} width="100%">
                    <MaterialTable
                            title="Manager Account"
                            columns={state.columns}
                            data={state.data}
                            editable={{
                                onRowAdd: (newData) =>
                                new Promise((resolve) => {
                                    setTimeout(() => {
                                    resolve();
                                    setState((prevState) => {
                                        const data = [...prevState.data];
                                        data.push(newData);
                                        return { ...prevState, data };
                                    });
                                    }, 600);
                                }),
                                onRowUpdate: (newData, oldData) =>
                                new Promise((resolve) => {
                                    setTimeout(() => {
                                    resolve();
                                    if (oldData) {
                                        setState((prevState) => {
                                        const data = [...prevState.data];
                                        data[data.indexOf(oldData)] = newData;
                                        return { ...prevState, data };
                                        });
                                    }
                                    }, 600);
                                }),
                                onRowDelete: (oldData) =>
                                new Promise((resolve) => {
                                    setTimeout(() => {
                                    resolve();
                                    setState((prevState) => {
                                        const data = [...prevState.data];
                                        data.splice(data.indexOf(oldData), 1);
                                        return { ...prevState, data };
                                    });
                                    }, 600);
                                }),
                            }}
                        />  
                    </Box>

        )
    
}
export default AccountComponent