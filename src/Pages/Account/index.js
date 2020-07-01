import React from 'react'
import Layout from '../../components/Layout'
import AccountPage from './AccountPage'
import { accountUserActions } from '../../actions/accountUserActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { put, post, _delete } from '../../actions/RequestAdapter';

class Account extends React.Component {
    constructor(props){
        super(props)
        this.state={
            account: [],
            accountMain : [],
            userInfo : JSON.parse(sessionStorage.getItem('userInfo')) || {}

        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if(nextProps.accountUser.data){
            var arr = []
            arr.push(nextProps.accountUser.data)
           return{
             accountMain: arr,
             account: nextProps.accountUser.data.children
           }
        }  
        return 0 
    }
    componentDidMount(){
        this.props.accountUserActions.getAccountAction();
    }

    componentDidUpdate(previousProps, previousState, snapshot) {
        if(this.state.account != previousState.accountUser){
            return{
                 account :  previousState.accountUser,
            }
        }
    }

    postAccount = (newData) => {
        const {userInfo} = this.state
        var code = { 
            email: newData.email,
            password: '123456',
            firstname: newData.firstname,
            lastname: newData.lastname,
            phone: newData.phone,
            address: newData.address       
        }
       const token = userInfo.token
       var id = newData._id
       const params = {
           token,
           body: code
       }
       post(`account`, params)
        .then(resp=> (
             this.setState({
                account: resp.data
            })
          )
        ).catch(err=>console.log(err))
    }

    putAccount = (newData) => {
        const {userInfo} = this.state
        var code = { 
            email: newData.email,
            password: newData.password,
            firstname: newData.firstname,
            lastname: newData.lastname,
            phone: newData.phone,
            address: newData.address       
        }
       const token = userInfo.token
       var id = newData._id
       const params = {
           token,
           body: code
       }
       put(`account/${id}`, params)
        .then(resp=> (
             this.setState({
                account: resp.data
            })
          )
        ).catch(err=>console.log(err))
    }

    delAccount = (oldData) => {
       const {userInfo} = this.state
       const token = userInfo.token
       var id = oldData._id
       const params = {
           token,
       }
       _delete(`account/${id}`, params)
        .then(resp=> (
             this.setState({
                account: resp.data
            })
          )
        ).catch(err=>console.log(err))

    }

    reloadPage = () =>{
        window.location.reload();
    }

    render(){
        const { account, accountMain } = this.state
        return(
           <Layout>
               <AccountPage 
                    dataAccountMain={accountMain}
                    dataAccount={account} 
                    postAccount={this.postAccount} 
                    putAccount={this.putAccount} 
                    delAccount={this.delAccount} 
                    reloadPage={this.reloadPage}
                />
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