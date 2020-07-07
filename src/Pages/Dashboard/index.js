import React from 'react';
import Layout from '../../components/Layout';
import DashboardPage from './DashboardPage';
import { reportActions } from '../../actions/reportActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import dummy from './example';
import Loading from '../../components/loading';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: JSON.parse(localStorage.getItem('userInfo') || {}),
      loading: false,
      reports: [],
      error: '',
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let state = {};
    if (nextProps.report.reports !== prevState.reports) {
      state.reports = nextProps.report.reports;
    }
    if (nextProps.report.loading !== prevState.loading) {
      state.loading = nextProps.report.loading;
    }
    return Object.keys(state).length ? state : null;
  }

  componentDidMount() {
    const { token } = this.state.userInfo;
    this.props.reportActions.getReports(token);
  }

  onChangeTime = (time) => {
    const { token } = this.state.userInfo;
    this.props.reportActions.getReports(token, time);
  };

  render() {
    const { reports, loading, error } = this.state;
    if (loading) {
      return (
        <Layout>
          <Loading />
        </Layout>
      );
    }
    return <DashboardPage reports={dummy} onChangeTime={this.onChangeTime} />;
  }
}

function mapStateToProps(state) {
  return {
    report: state.report,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    reportActions: bindActionCreators(
      Object.assign({}, reportActions),
      dispatch,
    ),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
