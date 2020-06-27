import React from 'react'
import {
    Box
  } from '@material-ui/core'
import Layout from '../../components/Layout'
import AccountComponent from './AccountComponent'


const dataAccount = [{
    "_id": "5ef3386b503af67872e470ca",
    "permission": true,
    "children": [],
    "email": "ngoitest@email.com",
    "firstname": "subtest_update_name",
    "lastname": "nguyen",
    "phone": "0909009009",
    "address": "181 cao lo, p4, q8, hcm",
    "createdAt": 1592997995,
    "updatedAt": 1593099308,
    "__v": 0
}]
class Account extends React.Component {
     render(){
        return(
           <Layout>
               <AccountComponent dataAccount={dataAccount}/>
           </Layout>
        )
    
    }
}
export default Account