import React from 'react';
import SettingPage from './SettingPage';
import Layout from '../../components/Layout';
import Loading from '../../components/loading';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { accountUserActions } from '../../actions/accountUserActions';

class Setting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      message: '',
      mainAccount: {},
      userInfo: JSON.parse(localStorage.getItem('userInfo')) || {},
    };
  }

  componentDidMount() {
    const { token } = this.state.userInfo;
    this.props.accountUserActions.getAccount(token);
  }

  editPassword = (newPassword, confirmPassword) => {
    console.log(newPassword, confirmPassword, 'data edit');
    const { token } = this.state.userInfo;
    this.props.accountUserActions.editPassword(
      token,
      newPassword,
      confirmPassword,
    );
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    let state = {
      errors: prevState.errors,
    };
    if (nextProps.accountUser.loading !== prevState.loading) {
      state.loading = nextProps.accountUser.loading;
    }
    if (nextProps.accountUser.accountUser !== prevState.accountUser) {
      state.mainAccount = nextProps.accountUser.accountUser;
    }
    if (nextProps.accountUser.message !== prevState.message) {
      state.message = nextProps.accountUser.message;
    }
    return Object.keys(state).length ? state : null;
  }

  render() {
    const { loading, mainAccount, message } = this.state;
    if (loading) {
      return (
        <Layout>
          <Loading />
        </Layout>
      );
    }
    return (
      <Layout>
        <SettingPage
          loading={loading}
          editPassword={this.editPassword}
          mainAccount={mainAccount}
          // message={message}
        />
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  return {
    accountUser: state.accountUser,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    accountUserActions: bindActionCreators(
      Object.assign({}, accountUserActions),
      dispatch,
    ),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Setting);
