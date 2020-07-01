import React from 'react'
import {
    Box,
  } from '@material-ui/core'
import MaterialTable from 'material-table';

const SMSPage = props => {
    const { smsData } = props

    const [state, setState] = React.useState({
        columns: [
        { title: 'Id', field: '_id' },
        { title: 'Amount', field: 'amount' },
        { title: 'Bank', field: 'address'},
        { title: 'Body', field: 'body'},
        { title: 'Phone', field: 'phone'},
        { title: 'Status', field: 'status' },
        { title: 'Note', field: 'note' },
        ],
    })
    
    return(
    <Box p={5} width="100%">
        <MaterialTable
                title="Manager SMS"
                columns={state.columns}
                data={smsData}
                options={{
                    headerStyle: {
                        borderWidth: 1,
                        borderRightWidth: 1,
                        borderLeftWidth: 1,
                        borderBottomWidth: 1,
                        borderTopWidth: 1,
                        borderColor: '#f2f2f2',
                        borderStyle: 'solid',
                        backgroundColor: '#00a3a3',
                        color: 'white'
                    },
                    cellStyle: {
                        borderWidth: 0,
                        borderLeftWidth: 1,
                        borderRightWidth: 1,
                        borderBottomWidth: 1,
                        borderColor: '#f2f2f2',
                        borderStyle: 'solid',
                      },
                  }}
                  localization={{
                  
                    toolbar: {
                        nRowsSelected: 10
                    },
                
                }}
                editable={{
                    // onRowAdd: (newData) =>
                    //     new Promise((resolve) => {
                    //         setTimeout(() => {
                    //         resolve();
                    //         setState((prevState) => {
                    //             const data = [...prevState.data];
                    //             data.push(newData);
                    //             return { ...prevState, data };
                    //         });
                    //         }, 600);
                    // }),

                    onRowUpdate: (newData, oldData) =>
                    new Promise((resolve) => {
                        props.putSMSAction(newData); 
                        setTimeout(() => {
                        props.reloadPage();
                        resolve();
                        
                        if (oldData) {
                            return  smsData ;   
                        }
                        }, 600);
                    }),
                    // onRowDelete: (oldData) =>
                    // new Promise((resolve) => {
                    //     // console.log(oldData, 'del data')
                    //     // setTimeout(() => {
                    //     // resolve();
                    //     // setState((prevState) => {
                    //     //     const data = [...prevState.data];
                    //     //     data.splice(data.indexOf(oldData), 1);
                    //     //     return { ...prevState, data };
                    //     // });
                    //     // }, 600);
                    // }),
                }}
            />  
        </Box>
        )
    
}

export default SMSPage
