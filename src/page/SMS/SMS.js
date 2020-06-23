import React from 'react'
import {
    Box,
  } from '@material-ui/core'
import Layout from '../../components/Layout'
import MaterialTable from 'material-table';
const SMS = props => {
    const [state, setState] = React.useState({
        columns: [
          { title: 'Id', field: 'id' },
          { title: 'Amount', field: 'amount' },
          { title: 'Bank', field: 'bank'},
          { title: 'Body', field: 'body'},
          { title: 'Booking', field: 'booking' },
          { title: 'Note', field: 'note' },
        ],
        data: [
          { id: 'XXXXKH01',amount: '1.000.000đ' , bank: 'Vietcombank-Bank1', body: 'Vé cáp treo Đà Lạt', booking: true, note: '' },
          { id: 'XXXXKH02',amount: '2.500.000đ' , bank: 'Vietcombank-Bank2', body: 'Du lịch nghĩ dưởng', booking: true, note: '' },
          { id: 'XXXXKH03',amount: '3.000.000đ' , bank: 'Techcombank-Bank1', body: 'Tour nghỉ dưỡng', booking: true, note: '' },
          { id: 'XXXXKH04',amount: '7.250.000đ' , bank: 'Techcombank-Bank1', body: 'Lặn biển nha trang', booking: true, note: '' },
          { id: 'XXXXKH05',amount: '4.300.000đ' , bank: 'Tiền mặt', body: 'Tham quan Chàm Chiên', booking: true, note: '' },
          { id: 'XXXXKH06',amount: '2.800.000đ' , bank: 'ABC-bank1', body: 'Du lịch nghĩ dưỡng Á Châu', booking: true, note: '' },
          { id: 'XXXXKH07',amount: '6.400.000đ' , bank: 'Vietcombank-Bank3', body: 'Thuyền tham quan ', booking: true, note: '' },       
        ],
      });
    

        return(
            <Layout>
                <Box p={5} width="100%">
                    <MaterialTable
                            title="Manager SMS"
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
export default SMS