import React from 'react'
import {
    Box
  } from '@material-ui/core'
import Layout from '../../components/Layout'
import MaterialTable from 'material-table';

const Account = props => {
    const [state, setState] = React.useState({
        columns: [
          { title: 'Name', field: 'name' },
          { title: 'Username', field: 'username' },
          { title: 'Password', field: 'password' },
          { title: 'Email', field: 'email'},   
        ],
        data: [
          { name: 'Mehmet', username: 'Mehmet123', password: "123456", email: 'Mehmet123@gmail.com' },
          { name: 'Moles', username: 'Melos123', password: "123456", email: 'Melos123@gmail.com' },
          { name: 'Linhsd', username: 'Linhsd123', password: "123456", email: 'Linhsd123@gmail.com' },
          { name: 'Shetty', username: 'Shetty123', password: "123456", email: 'Shetty123@gmail.com' },
          { name: 'Metagye', username: 'Metagye123', password: "123456", email: 'Metagye123@gmail.com' },
        ],
      });
    
        return(
           <Layout>
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
  

           </Layout>
        )
    
}
export default Account