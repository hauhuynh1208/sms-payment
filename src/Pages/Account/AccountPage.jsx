import React from 'react'
import { Box ,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Paper,
} from '@material-ui/core'
import MaterialTable from 'material-table';

const AccountPage = props => {
    const { dataAccount, dataAccountMain } = props
    const [state, setState] = React.useState({
        columns: [
          { title: 'FirstName', field: 'firstname' },
          { title: 'LastName', field: 'lastname' }, 
          { title: 'Email', field: 'email'},      
          { title: 'Phone', field: 'phone' },
          { title: 'Address', field: 'address' },   
        ],
    });
    
    return(
        <Box p={5} width="100%">
            <TableContainer component={Paper}>
                <Table  aria-label="simple table">
                    <TableHead>
                    <TableRow> 
                        <TableCell align="left" style={{fontSize: 20}}>Main Account</TableCell>
                        <TableCell align="left"></TableCell>
                        <TableCell align="left"></TableCell>
                        <TableCell align="left"></TableCell>
                        <TableCell align="left"></TableCell>
                    </TableRow>
                    <TableRow> 
                        <TableCell align="left">FirstName</TableCell>
                        <TableCell align="left">LastName</TableCell>
                        <TableCell align="left">Email</TableCell>
                        <TableCell align="left">Phone</TableCell>
                        <TableCell align="left">Address</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {dataAccountMain.map((row) => (
                        <TableRow  >
                            <TableCell component="th" scope="row">
                                {row.firstname}
                            </TableCell>
                            <TableCell align="left">{row.lastname}</TableCell>
                            <TableCell align="left">{row.email}</TableCell>
                            <TableCell align="left">{row.phone}</TableCell>
                            <TableCell align="left">{row.address}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Box pt={5}/>
            <MaterialTable
                    title="Manager Account"
                    columns={state.columns}
                    data={dataAccount}
                    editable={{
                        onRowAdd: (newData) =>(  
                        new Promise((resolve) => {
                            props.postAccount(newData)
                            setTimeout(() => {
                                props.reloadPage()
                                resolve();
                                return dataAccount ;
                    
                            }, 600);
                        } )
                        ),
                        onRowUpdate: (newData, oldData) =>
                        new Promise((resolve) => {
                            props.putAccount(newData);
                            setTimeout(() => {
                                props.reloadPage()
                                resolve();                     
                                return dataAccount;
                            
                            }, 600);
                        }),
                        onRowDelete: (oldData) =>
                        new Promise((resolve) => {
                            props.delAccount(oldData);
                            setTimeout(() => {
                                props.reloadPage()
                                resolve();
                                return dataAccount
                            }, 600);
                        }),
                    }}
                />  
            </Box>
        )
    
}
export default AccountPage