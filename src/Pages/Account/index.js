import React from 'react'
import Layout from '../../components/Layout'
import AccountComponent from './AccountComponent'
import { actions } from '../../actions/actions'
import { connect } from 'react-redux'

class Account extends React.Component {
    constructor(props){
        super(props)
        this.state={
            account: []
        }

    }


    static getDerivedStateFromProps(nextProps, prevState) {
        if(nextProps.account.data){
            var arr = []
            arr.push(nextProps.account.data)
           return{
             account: arr
           }
        }  
    }
    componentDidMount(){
        this.props.getAccountAction();
     
        
    }



     render(){
        const { account } = this.state
        return(
           <Layout>
               <AccountComponent dataAccount={account}/>
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