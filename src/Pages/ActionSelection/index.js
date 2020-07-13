import React from 'react';
import Layout from '../../components/Layout';
import ActionSelectionPage from './ActionSelectionPage';
import { history } from '../../utils/history';

class ActionSelection extends React.Component {
  componentDidMount() {
    if (this.props.location.state == null) {
      history.push('/order');
    }
  }
  render() {
    const data = this.props.location.state;
    return (
      <Layout>
        <ActionSelectionPage dataRow={data} />
      </Layout>
    );
  }
}
export default ActionSelection;
