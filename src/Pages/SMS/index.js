import React from 'react';
import SMSPage from './SMSPage';
import Layout from '../../components/Layout';
import { smsActions } from '../../actions/smsActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class SMS extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      sms: [],
      errors: [],
      isEdited: false,
      userInfo: JSON.parse(localStorage.getItem('userInfo')) || {},
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let state = {
      errors: prevState.errors,
    };
    if (nextProps.sms.loading !== prevState.loading) {
      state.loading = nextProps.sms.loading;
    }
    if (nextProps.sms.sms !== prevState.sms) {
      state.sms = nextProps.sms.sms;
    }
    if (nextProps.sms.isEdited !== prevState.isEdited) {
      state.isEdited = nextProps.sms.isEdited;
    }
    if (!state.errors.includes(nextProps.sms.getAllSMSError)) {
      state.errors.push(nextProps.sms.getAllSMSError);
    }
    if (!state.errors.includes(nextProps.sms.editSMSError)) {
      state.errors.push(nextProps.sms.editSMSError);
    }
    return Object.keys(state).length ? state : null;
  }

  componentDidMount() {
    const { token } = this.state.userInfo;
    this.props.smsActions.getAllSMS(token);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.sms.isEdited) {
      const { token } = this.state.userInfo;
      this.props.smsActions.getAllSMS(token);
    }
  }

  onEditSMS = (params) => {
    const { token } = this.state.userInfo;
    this.props.smsActions.editSMS(token, params);
  };

  render() {
    const { sms, loading, errors, isEdited } = this.state;
    if (loading) {
      return <Layout>loading</Layout>;
    }
    return (
      <Layout>
        <SMSPage
          data={sms}
          onEditSMS={this.onEditSMS}
          errors={errors.filter((error) => error !== '').join('\n')}
        />
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  return {
    sms: state.sms,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    smsActions: bindActionCreators(Object.assign({}, smsActions), dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SMS);
