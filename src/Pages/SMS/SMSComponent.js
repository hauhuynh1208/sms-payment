import React from 'react'
import {
    Box,
  } from '@material-ui/core'
import Layout from '../../components/Layout'
import MaterialTable from 'material-table';
import {connect } from 'react-redux'

const SMSComponent = props => {
    const { smsData } = props

    const [state, setState] = React.useState({
        columns: [
        { title: 'Id', field: 'id' },
        { title: 'Amount', field: 'amount' },
        { title: 'Bank', field: 'address'},
        { title: 'Body', field: 'body'},
        { title: 'Phone', field: 'phone'},
        { title: 'Status', field: 'status' },
        { title: 'Note', field: 'note' },
        ],

    });
        
    return(
    <Box p={5} width="100%">
        <MaterialTable
                title="Manager SMS"
                columns={state.columns}
                data={smsData}
                editable={{
                    // onRowAdd: (newData) =>
                    // new Promise((resolve) => {
                    //     setTimeout(() => {
                    //     resolve();
                    //     setState((prevState) => {
                    //         const data = [...prevState.data];
                    //         data.push(newData);
                    //         return { ...prevState, data };
                    //     });
                    //     }, 600);
                    // }),

                    onRowUpdate: (newData, oldData) =>
                    new Promise((resolve) => {
                        console.log(newData, 'newdata');
                        setTimeout(() => {
                        resolve();
                        if (oldData) {
                            setState((prevState) => {
                            const data = [...prevState.data];
                            data[data.indexOf(oldData)] = newData;
                            console.log( data, 'data updatte')
                            return { ...prevState, data };
                            });
                        }
                        }, 600);
                    }),
                    onRowDelete: (oldData) =>
                    new Promise((resolve) => {
                        console.log(oldData, 'del data')
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

export default SMSComponent
