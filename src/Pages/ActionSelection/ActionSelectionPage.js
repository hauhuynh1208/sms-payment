import React from 'react';
import { Box, Typography, Button } from '@material-ui/core';
import Input from '../../components/Input';
import ItemSelection from '../../components/ItemSelection';
import { history } from '../../utils/history';

import styles from './style';

const ActionSelectionPage = (props) => {
  const { dataRow } = props;
  console.log(dataRow);
  const data = dataRow.data;
  const [valPayment, setPaymentMethod] = React.useState(
    data == null ? 'Cash' : data[0].paymentMethod,
  );
  const [valBank, setBank] = React.useState(
    data == null ? 'Vietcombank' : data[0].bank,
  );
  const [valStatus, setStatus] = React.useState(
    data == null ? 'Pending' : data[0].status,
  );

  const handleChangePayment = (event) => {
    setPaymentMethod(event.target.value);
  };
  const handleChangeBank = (event) => {
    setBank(event.target.value);
  };
  const handleChangeStatus = (event) => {
    setStatus(event.target.value);
  };

  const classes = styles();
  return (
    <Box className={classes.container__setting}>
      <Typography style={{ fontSize: 24, fontWeight: 'bold' }}>
        {data == null ? 'Create Row Data' : 'Edit Row Data'}
      </Typography>
      <Box display="flex" justifyContent="space-between" flexWrap="wrap">
        <Input
          titleLabel="Id"
          placeholder="Enter id"
          value={data == null ? '' : data[0].id}
          input__style={classes.input__style}
        />
        <Input
          titleLabel="OrderReference"
          placeholder="Enter OrderReference"
          value={data == null ? '' : data[0].orderReference}
          input__style={classes.input__style}
        />
        <Input
          titleLabel="OrderContent"
          placeholder="Enter OrderContent"
          value={data == null ? '' : data[0].orderContent}
          input__style={classes.input__style}
        />
        <Input
          titleLabel="Amount"
          placeholder="Enter Amount"
          value={data == null ? '' : data[0].amount}
          input__style={classes.input__style}
        />
        <ItemSelection
          titleLabel="PaymentMethod"
          onChange={handleChangePayment}
          value={valPayment}
          menuItem1="Cash"
          menuItem2="Bank"
          menuItem3="Momo"
          menuItem4="Zalo"
        />
        <ItemSelection
          titleLabel="Bank"
          onChange={handleChangeBank}
          value={valBank}
          menuItem1="Vietcombank"
          menuItem2="ACB"
          menuItem3="Techcombank"
        />
        <ItemSelection
          titleLabel="Status"
          onChange={handleChangeStatus}
          value={valStatus}
          menuItem1="Pending"
          menuItem2="Paid"
          menuItem3="Canceled"
          menuItem4="Refunded"
        />
        <Input
          titleLabel="SalesResponsible"
          placeholder="Enter SalesResponsible"
          value={data == null ? '' : data[0].salesResponsible}
          input__style={classes.input__style}
        />
        <Input
          titleLabel="ProcessedBy"
          placeholder="Enter ProcessedBy"
          value={data == null ? '' : data[0].processedBy}
          input__style={classes.input__style}
        />
        <Input
          titleLabel="Title"
          placeholder="Enter Title"
          value={data == null ? '' : data[0].title}
          input__style={classes.input__style}
        />
        <Input
          titleLabel="Customer Name"
          placeholder="Enter Customer Name"
          value={data == null ? '' : data[0].customerName}
          input__style={classes.input__style}
        />
        <Input
          titleLabel="Email"
          placeholder="Enter Email"
          value={data == null ? '' : data[0].email}
          input__style={classes.input__style}
        />
        <Input
          titleLabel="Phone"
          placeholder="Enter Phone"
          value={data == null ? '' : data[0].phone}
          input__style={classes.input__style}
        />
        <Input
          titleLabel="CheckFormat"
          placeholder="Enter CheckFormat"
          value={data == null ? '' : data[0].checkFormat}
          input__style={classes.input__style}
        />
      </Box>
      <Box pt={3} display="flex">
        {data == null ? (
          <Button
            variant="contained"
            color="primary"
            className={classes.btn__agree}
          >
            Create
          </Button>
        ) : (
          <Button
            variant="contained"
            color="primary"
            className={classes.btn__agree}
          >
            Change
          </Button>
        )}
        <Button
          variant="contained"
          color="secondary"
          className={classes.btn__exit}
          onClick={() => history.push('/order')}
        >
          Exit
        </Button>
      </Box>
    </Box>
  );
};
export default ActionSelectionPage;
