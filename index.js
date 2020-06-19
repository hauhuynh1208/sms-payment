import React, { Component } from 'react';
import Backend from '../../Layouts/Backend';
import Loading from '../../Helpers/Loading';
import DashboardPage from './DashboardPage';
import Moment from 'moment';
import { connect } from 'react-redux';
import { dashboardActions } from '../../../actions/dashboard.action';

export class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alarmList: [],
      availableGroups: [],
      userInfo: JSON.parse(sessionStorage.getItem('userInfo')) || false,
      loading: false,
      errors: [],
    };
    this.alarmListColumns = [
      {
        dataField: 'timeDetected',
        text: 'Time Detected',
        sort: true,
        formatter: this.dateFormatter,
        headerClasses: 'fix-column-overflow fix-column-sort',
      },
      {
        dataField: 'department',
        text: 'Department',
        sort: true,
        headerClasses: 'fix-column-overflow fix-column-sort',
      },
      {
        dataField: 'group',
        text: 'Group',
        sort: true,
        headerClasses: 'fix-column-overflow fix-column-sort',
      },
      {
        dataField: 'location',
        text: 'Location',
        sort: true,
        headerClasses: 'fix-column-overflow fix-column-sort',
      },
      {
        dataField: 'name',
        text: 'Name',
        sort: true,
        headerClasses: 'fix-column-overflow fix-column-sort',
      },
      {
        dataField: 'parameter',
        text: 'Parameter',
        sort: true,
        headerClasses: 'fix-column-overflow fix-column-sort',
      },
      {
        dataField: 'acknowledged',
        text: 'Acknowledged',
        sort: true,
        headerClasses: 'fix-column-overflow fix-column-sort',
      },
      {
        dataField: 'alarmStatus',
        text: 'AlarmStatus',
        sort: true,
        headerClasses: 'fix-column-overflow fix-column-sort',
      },
    ];
    this.alarmListDefaultSorted = [
      {
        dataField: 'name',
        order: 'asc',
      },
    ];
    this.alarmListRowStyle = (row, rowIndex) => {
      const style = {};
      switch (row.color.toLowerCase()) {
        case 'red':
          style.backgroundColor = '#ef5350';
          break;
        case 'blue':
          style.backgroundColor = '#2196f3';
          break;
        case 'yellow':
          style.backgroundColor = '#ffee58';
          break;
        default:
          break;
      }
      // style.backgroundColor = row.color.toLowerCase();
      return style;
    };

    this.availableGroupsColumns = [
      {
        dataField: 'groupName',
        text: 'Group',
        sort: true,
        headerClasses: 'fix-column-overflow fix-column-sort',
      },
      {
        dataField: 'numWarnings',
        text: 'Warnings',
        sort: true,
        headerClasses: 'fix-column-overflow fix-column-sort',
      },
      {
        dataField: 'numAlarms',
        text: 'Alarms',
        sort: true,
        headerClasses: 'fix-column-overflow fix-column-sort',
      },
      {
        dataField: 'numErrors',
        text: 'Errors',
        sort: true,
        headerClasses: 'fix-column-overflow fix-column-sort',
      },
      {
        dataField: 'numSensors',
        text: 'Sensors',
        sort: true,
        headerClasses: 'fix-column-overflow fix-column-sort',
      },
      {
        dataField: 'numOverriden',
        text: 'Overriden',
        sort: true,
        headerClasses: 'fix-column-overflow fix-column-sort',
      },
      {
        dataField: 'state',
        text: 'State',
        sort: true,
        headerClasses: 'fix-column-overflow fix-column-sort',
      },
      {
        dataField: 'maps',
        text: 'Maps',
        sort: true,
        headerClasses: 'fix-column-overflow fix-column-sort',
      },
    ];
    this.availableGroupsDefaultSorted = [
      {
        dataField: 'groupName',
        order: 'asc',
      },
    ];
    this.availableGroupsRowStyle = (row, rowIndex) => {
      const style = {};
      style.backgroundColor = row.color && row.color.toLowerCase();
      return style;
    };
  }

  dateFormatter = (cell, row, rowIndex) => {
    return Moment(cell, 'YYYY-MM-DDTHH:mm:ss').format('MM/DD/YYYY HH:mm:ss');
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    let state = {
      errors: prevState.errors,
    };
    if (nextProps.dashboard.alarmList !== prevState.alarmList) {
      state.alarmList = nextProps.dashboard.alarmList;
    }
    if (nextProps.dashboard.availableGroups !== prevState.availableGroups) {
      state.availableGroups = nextProps.dashboard.availableGroups;
    }
    if (nextProps.dashboard.loading !== prevState.loading) {
      state.loading = nextProps.dashboard.loading;
    }
    if (!prevState.errors.includes(nextProps.dashboard.getAlarmListError)) {
      state.errors.push(nextProps.dashboard.getAlarmListError);
    }
    if (
      !prevState.errors.includes(nextProps.dashboard.getAvailableGroupsError)
    ) {
      state.errors.push(nextProps.dashboard.getAvailableGroupsError);
    }
    return Object.keys(state).length ? state : null;
  }

  componentDidMount() {
    const { jwt } = this.state.userInfo;
    Promise.all([
      this.props.getAlarmList(jwt),
      this.props.getAvailableGroups(jwt),
    ]);
    setInterval(() => {
      Promise.all([
        this.props.getAlarmList(jwt),
        this.props.getAvailableGroups(jwt),
      ]);
    }, 10000);
  }

  render() {
    const { loading, errors, alarmList, availableGroups } = this.state;
    if (loading) {
      return (
        <Backend>
          <Loading />
        </Backend>
      );
    }
    return (
      <DashboardPage
        alarmList={alarmList}
        alarmListColumns={this.alarmListColumns}
        alarmListDefaultSorted={this.alarmListDefaultSorted}
        alarmListRowStyle={this.alarmListRowStyle}
        availableGroups={availableGroups}
        availableGroupsColumns={this.availableGroupsColumns}
        availableGroupsDefaultSorted={this.availableGroupsDefaultSorted}
        availableGroupsRowStyle={this.availableGroupsRowStyle}
        errors={errors.filter((error) => error !== '').join('\n')}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    dashboard: state.dashboard,
  };
}

export default connect(mapStateToProps, dashboardActions)(Dashboard);
