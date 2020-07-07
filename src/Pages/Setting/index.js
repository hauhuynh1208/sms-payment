import React from 'react';
import SettingPage from './SettingPage';
import Layout from '../../components/Layout';
import Loading from '../../components/loading';

class Setting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }
  render() {
    const { loading } = this.state;
    if (loading) {
      return (
        <Layout>
          <Loading />
        </Layout>
      );
    }
    return (
      <Layout>
        <SettingPage />
      </Layout>
    );
  }
}
export default Setting;
