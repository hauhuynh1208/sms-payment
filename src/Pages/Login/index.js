import React from 'react'
import LoginPage from './LoginPage'
import accountActions from '../../actions/accountActions'
import {connect} from 'react-redux'

class Login extends React.Component {
    onLogin = (cre) => {
        this.props.login(cre)
    }
    render() {
        return (
            <LoginPage onLogin={this.onLogin}/>
        )
    }
}

export default connect(null, accountActions)(Login)