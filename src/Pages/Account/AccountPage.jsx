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
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    table_borderRight: {
        borderWidth: 0,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#f2f2f2',
        borderStyle: 'solid',
    },
    table_borderBottom: {
        borderWidth: 0,
        borderBottomWidth: 1,
        borderColor: '#f2f2f2',
        borderStyle: 'solid',
    },
    style_header:{
        backgroundColor: '#00a3a3',
    },
    text__header:{
        color: 'white'
    },
    table_rowHeader:{
        // backgroundColor: '#00a3a3',
    }
   
}));

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

    const classes = useStyles();

    
    return(
        <Box p={5} width="100%">
            <TableContainer component={Paper}>
                <Table  aria-label="simple table">
                    <TableHead>
                    <TableRow className={classes.table_rowHeader} > 
                        <TableCell align="left" style={{fontSize: 20}}>Main Account</TableCell>
                        <TableCell/>
                        <TableCell/>
                        <TableCell/>
                        <TableCell/>
                    </TableRow>
                    <TableRow className={classes.style_header}> 
                        <TableCell align="left" className={[classes.table_borderRight,classes.text__header]}>FirstName</TableCell>
                        <TableCell align="left" className={[classes.table_borderRight,classes.text__header]}>LastName</TableCell>
                        <TableCell align="left" className={[classes.table_borderRight,classes.text__header]}>Email</TableCell>
                        <TableCell align="left" className={[classes.table_borderRight, classes.text__header]}>Phone</TableCell>
                        <TableCell align="left" className={[classes.table_borderBottom, classes.text__header]}>Address</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {dataAccountMain.map((row) => (
                        <TableRow  >
                            <TableCell component="th" scope="row" className={classes.table_borderRight}>
                                {row.firstname}
                            </TableCell>
                            <TableCell align="left" className={classes.table_borderRight}>{row.lastname}</TableCell>
                            <TableCell align="left" className={classes.table_borderRight}>{row.email}</TableCell>
                            <TableCell align="left" className={classes.table_borderRight}>{row.phone}</TableCell>
                            <TableCell align="left" className={classes.table_borderBottom}>{row.address}</TableCell>
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
                    options={{
                        headerStyle: {
                            borderWidth: 0,
                            borderLeftWidth: 1,
                            borderRightWidth: 1,
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
                            nRowsSelected: '{10} row(s) selected'
                        },
                
                    }}
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