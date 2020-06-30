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
            accountMain : []
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
        var code = { 
            email: newData.email,
            password: '123456',
            firstname: newData.firstname,
            lastname: newData.lastname,
            phone: newData.phone,
            address: newData.address       
        }
       const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWYzMzg2YjUwM2FmNjc4NzJlNDcwY2EiLCJpYXQiOjE1OTI5OTk0NzAsImV4cCI6MTU5MzYwNDI3MH0.mxA0MeTvAl1OgTQzL0J6iObC7J-s4wVq-hFDJgPdIrE"
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
        var code = { 
            email: newData.email,
            password: newData.password,
            firstname: newData.firstname,
            lastname: newData.lastname,
            phone: newData.phone,
            address: newData.address       
        }
       const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWYzMzg2YjUwM2FmNjc4NzJlNDcwY2EiLCJpYXQiOjE1OTM0MTI0OTgsImV4cCI6MTU5NDAxNzI5OH0.0W-6r_6rcX7w8B43OhWMM-YA_34HhkJwcnHaEE0lzPo"
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
       const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWYzMzg2YjUwM2FmNjc4NzJlNDcwY2EiLCJpYXQiOjE1OTM0MTI0OTgsImV4cCI6MTU5NDAxNzI5OH0.0W-6r_6rcX7w8B43OhWMM-YA_34HhkJwcnHaEE0lzPo"
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