import React from 'react';
import Layout from '../../components/Layout';
import AccountPage from './AccountPage';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { accountUserActions } from '../../actions/accountUserActions';
import Loading from '../../components/loading';

class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      accounts: {},
      isPosted: false,
      isEdited: false,
      isDeleted: false,
      userInfo: JSON.parse(localStorage.getItem('userInfo')) || {},
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let state = {
      errors: prevState.errors,
    };
    if (nextProps.accountUser.loading !== prevState.loading) {
      state.loading = nextProps.accountUser.loading;
    }
    if (nextProps.accountUser.accountUser !== prevState.accountUser) {
      state.accounts = nextProps.accountUser.accountUser;
    }
    if (nextProps.accountUser.isPosted !== prevState.isPosted) {
      state.isPosted = nextProps.accountUser.isPosted;
    }
    if (nextProps.accountUser.isEdited !== prevState.isEdited) {
      state.isEdited = nextProps.accountUser.isEdited;
    }
    if (nextProps.accountUser.isDeleted !== prevState.isDeleted) {
      state.isDeleted = nextProps.accountUser.isDeleted;
    }
    return Object.keys(state).length ? state : null;
  }
  componentDidMount() {
    const { token } = this.state.userInfo;
    this.props.accountUserActions.getAccount(token);
  }

  componentDidUpdate(previousProps, previousState, snapshot) {
    const { accountUser } = this.props;
    if (accountUser.isEdited || accountUser.isPosted || accountUser.isDeleted) {
      const { token } = this.state.userInfo;
      this.props.accountUserActions.getAccount(token);
    }
  }

  createAccount = (data) => {
    console.log(data, 'new data');
    const { token } = this.state.userInfo;
    this.props.accountUserActions.postAccount(token, data);
  };

  editAccount = (id, newData) => {
    const { token } = this.state.userInfo;
    this.props.accountUserActions.putAccount(token, id, newData);
  };

  delAccount = (id) => {
    const { token } = this.state.userInfo;
    this.props.accountUserActions.delAccount(token, id);
  };

  render() {
    const { loading, accounts } = this.state;
    if (loading) {
      return (
        <Layout>
          <Loading />
        </Layout>
      );
    }
    return (
      <Layout>
        <AccountPage
          mainAccount={accounts}
          accounts={accounts.children}
          createAccount={this.createAccount}
          editAccount={this.editAccount}
          delAccount={this.delAccount}
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

export default connect(mapStateToProps, mapDispatchToProps)(Account);
