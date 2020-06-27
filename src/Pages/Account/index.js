import React from 'react'
import Layout from '../../components/Layout'
import AccountPage from './AccountPage'
import { accountUserActions } from '../../actions/accountUserActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

class Account extends React.Component {
    constructor(props){
        super(props)
        this.state={
            account: []
        }

    }


    static getDerivedStateFromProps(nextProps, prevState) {
        if(nextProps.accountUser.data){
            console.log(nextProps.accountUser.data, 'data')
            var arr = []
            arr.push(nextProps.accountUser.data)
            console.log(arr, 'arr')
           return{
             account: arr
           }
        }  
    }
    componentDidMount(){
        this.props.accountUserActions.getAccountAction();
     
        
    }
     render(){
        const { account } = this.state
        return(
           <Layout>
               <AccountPage dataAccount={account}/>
           </Layout>
        )
    
    }
}

function mapStateToProps(state){
    return{
        accountUser : state.accountUser,
    }
}

function mapDispatchToProps(dispatch){
    return{
        accountUserActions: bindActionCreators(
            Object.assign({},accountUserActions),
            dispatch
        ),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Account)