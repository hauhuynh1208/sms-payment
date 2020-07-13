import React from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
} from '@material-ui/core';
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
    data == null ? 'ABC' : data[0].bank,
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
    <Box p={5}>
      <Box
        className={classes.container__setting}
        style={{
          borderTopWidth: 4,
          paddingTop: 40,
          paddingBottom: 40,
          borderRadius: 10,
        }}
      >
        <Box>
          <Typography style={{ fontSize: 24, fontWeight: 'bold' }}>
            {data == null ? 'Create Row Data' : 'Edit Row Data'}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between" flexWrap="wrap">
          <Box width={400} pt={3}>
            <Typography className={classes.text__info}>Id</Typography>
            <TextField
              className={classes.input__password}
              placeholder="Enter id"
              variant="outlined"
              size="small"
              value={data == null ? '' : data[0].id}
            />
          </Box>
          <Box width={400} pt={3}>
            <Typography className={classes.text__info}>
              OrderReference
            </Typography>
            <TextField
              className={classes.input__password}
              placeholder="Enter OrderReference"
              variant="outlined"
              size="small"
              value={data == null ? '' : data[0].orderReference}
            />
          </Box>
          <Box width={400} pt={3}>
            <Typography className={classes.text__info}>OrderContent</Typography>
            <TextField
              className={classes.input__password}
              placeholder="Enter OrderContent"
              variant="outlined"
              size="small"
              value={data == null ? '' : data[0].orderContent}
            />
          </Box>
          <Box width={400} pt={3}>
            <Typography className={classes.text__info}>Amount</Typography>
            <TextField
              className={classes.input__password}
              placeholder="Enter Amount"
              variant="outlined"
              size="small"
              value={data == null ? '' : data[0].amount}
            />
          </Box>
          <Box width={400} pt={3}>
            <Typography className={classes.text__info}>
              PaymentMethod
            </Typography>

            <Select
              labelId="select-status-label"
              id="select-status"
              onChange={handleChangePayment}
              value={data == null ? '' : valPayment}
              label="Select from below list"
              className={classes.select__value}
            >
              <MenuItem value="Cash">Cash</MenuItem>
              <MenuItem value="Bank">Bank</MenuItem>
              <MenuItem value="Momo">Momo</MenuItem>
              <MenuItem value="Zalo">Zalo</MenuItem>
            </Select>
          </Box>
          <Box width={400} pt={3}>
            <Typography className={classes.text__info}>Bank</Typography>
            <Select
              labelId="select-status-label"
              id="select-status"
              onChange={handleChangeBank}
              value={data == null ? '' : valBank}
              label="Select from below list"
              className={classes.select__value}
            >
              <MenuItem value="Vietcombank">Vietcombank</MenuItem>
              <MenuItem value="ACB">ACB</MenuItem>
              <MenuItem value="Techcombank">Techcombank</MenuItem>
            </Select>
          </Box>
          <Box width={400} pt={3}>
            <Typography className={classes.text__info}>Status</Typography>
            <Select
              labelId="select-status-label"
              id="select-status"
              onChange={handleChangeStatus}
              value={data == null ? '' : valStatus}
              label="Select from below list"
              className={classes.select__value}
            >
              <MenuItem value="Pending">Pending</MenuItem>
              <MenuItem value="Paid">Paid</MenuItem>
              <MenuItem value="Canceled">Canceled</MenuItem>
              <MenuItem value="Refunded">Refunded</MenuItem>
            </Select>
          </Box>
          <Box width={400} pt={3}>
            <Typography className={classes.text__info}>
              SalesResponsible
            </Typography>
            <TextField
              className={classes.input__password}
              placeholder="Enter SalesResponsible"
              variant="outlined"
              size="small"
              value={data == null ? '' : data[0].salesResponsible}
            />
          </Box>
          <Box width={400} pt={3}>
            <Typography className={classes.text__info}>ProcessedBy</Typography>
            <TextField
              className={classes.input__password}
              placeholder="Enter ProcessedBy"
              variant="outlined"
              size="small"
              value={data == null ? '' : data[0].processedBy}
            />
          </Box>
          <Box width={400} pt={3}>
            <Typography className={classes.text__info}>Title</Typography>
            <TextField
              className={classes.input__password}
              placeholder="Enter Title"
              variant="outlined"
              size="small"
              value={data == null ? '' : data[0].title}
            />
          </Box>
          <Box width={400} pt={3}>
            <Typography className={classes.text__info}>
              Customer Name
            </Typography>
            <TextField
              className={classes.input__password}
              placeholder="Enter Customer Name"
              variant="outlined"
              size="small"
              value={data == null ? '' : data[0].customerName}
            />
          </Box>
          <Box width={400} pt={3}>
            <Typography className={classes.text__info}>Email</Typography>
            <TextField
              className={classes.input__password}
              placeholder="Enter Email"
              variant="outlined"
              size="small"
              value={data == null ? '' : data[0].email}
            />
          </Box>
          <Box width={400} pt={3}>
            <Typography className={classes.text__info}>Phone</Typography>
            <TextField
              className={classes.input__password}
              placeholder="Enter Email"
              variant="outlined"
              size="small"
              value={data == null ? '' : data[0].phone}
            />
          </Box>
          <Box width={400} pt={3}>
            <Typography className={classes.text__info}>CheckFormat</Typography>
            <TextField
              className={classes.input__password}
              placeholder="Enter CheckFormat"
              variant="outlined"
              size="small"
              value={data == null ? '' : data[0].checkFormat}
            />
          </Box>
        </Box>
        <Box pt={3} display="flex">
          {data == null ? (
            <Button
              variant="contained"
              //   size="medium"
              color="primary"
              className={classes.btn__change}
            >
              Create
            </Button>
          ) : (
            <Button
              variant="contained"
              //   size="medium"
              color="primary"
              className={classes.btn__change}
            >
              Change
            </Button>
          )}
          <Button
            variant="contained"
            //   size="medium"
            color="secondary"
            className={classes.btn__exit}
            onClick={() => history.push('/order')}
          >
            Exit
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
export default ActionSelectionPage;
