import React from 'react';
import accountActions from '../../actions/accountActions';
import { connect } from 'react-redux';
import OrderPage from './OrderPage';
import Layout from '../../components/Layout';

class Order extends React.Component {
  render() {
    return (
      <Layout>
        <OrderPage />
      </Layout>
    );
  }
}

export default connect(null, accountActions)(Order);
