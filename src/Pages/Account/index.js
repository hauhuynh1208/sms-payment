import React from 'react'
import Layout from '../../components/Layout'
import AccountComponent from './AccountComponent'
import { actions } from '../../actions/actions'
import { connect } from 'react-redux'

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

    componentDidMount(){
        this.props.getAccountAction();
    }



     render(){
        return(
           <Layout>
               <AccountComponent dataAccount={dataAccount}/>
           </Layout>
        )
    
    }
}

function mapStateToProps(state){
    return{
        account : state.account,
    }
}

export default connect(mapStateToProps, actions)(Account)