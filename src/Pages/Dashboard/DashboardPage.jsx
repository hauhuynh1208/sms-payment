import React from 'react';
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core';

import styles from './style';
import { Doughnut, Line } from 'react-chartjs-2';
import Layout from '../../components/Layout';

const DashboardPage = (props) => {
  const { reports } = props;
  const [time, setTime] = React.useState('d');

  const handleChange = (event) => {
    props.onChangeTime(event.target.value);
    setTime(event.target.value);
  };

  const formatDoughnutData = (data = reports) => {
    const doughnutData = reports.filter((d) => d.type === 'doughnut')[0].data;
    const labels = [];
    doughnutData.forEach((d) => {
      labels.push(d.name);
    });
    const values = [];
    doughnutData.forEach((d) => {
      values.push(d.percent);
    });
    const _data = {
      labels: labels,
      datasets: [
        {
          label: 'Banks',
          data: values,
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        },
      ],
    };
    return _data;
  };

  function format(x) {
    return isNaN(x) ? '' : x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  const formatLineData = (data = reports) => {
    const lineData = reports.filter((d) => d.type === 'line')[0].data;
    const labels = [];
    lineData.forEach((d) => {
      labels.push(d.time);
    });
    const values = [];
    lineData.forEach((d) => {
      values.push(d.value);
    });
    const _data = {
      labels: labels,
      datasets: [
        {
          label: 'Value',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: values,
        },
      ],
    };

    return _data;
  };

  const classes = styles();
  return (
    <Layout>
      <>
        <Box pb={5} display="flex" justifyContent="flex-end">
          <Box>
            <FormControl variant="outlined" className={classes.form__chart}>
              <InputLabel id="select-time-label">
                Hiển thị doanh số theo
              </InputLabel>
              <Select
                labelId="select-time-label"
                id="select-time"
                value={time}
                onChange={handleChange}
                label="Hiển thị doanh số theo"
              >
                <MenuItem value="d">Show by date</MenuItem>
                <MenuItem value="w">Show by week</MenuItem>
                <MenuItem value="m">Show by month</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
        <Box className={classes.chart__dashboard}>
          <Box width="30%">
            <Doughnut
              data={formatDoughnutData(props.reports)}
              height={280}
              // options={

              //     // maintainAspectRatio: false,

              // }
            />
          </Box>
          <Box width="65%">
            <Line
              data={formatLineData(props.reports)}
              options={{
                scales: {
                  yAxes: [
                    {
                      ticks: {
                        callback: function (value, index, values) {
                          var val = format(value);
                          return val;
                        },
                      },
                    },
                  ],
                },
              }}
            />
          </Box>
        </Box>

        {/* <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="customized table">
                            <TableHead>
                            <TableRow>
                                <StyledTableCell>Tài khoản</StyledTableCell>
                                <StyledTableCell align="right">Số dư hiện tại&nbsp;(đ)</StyledTableCell>
                                <StyledTableCell align="right">Tuần này&nbsp;(đ)</StyledTableCell>
                                <StyledTableCell align="right">Tháng này&nbsp;(đ)</StyledTableCell>
                                <StyledTableCell align="right">Tháng trước&nbsp;(đ)</StyledTableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {rows.map((row) => (
                                <StyledTableRow key={row.name}>
                                <StyledTableCell component="th" scope="row">
                                    {row.name}
                                </StyledTableCell>
                                <StyledTableCell align="right">{row.calories}</StyledTableCell>
                                <StyledTableCell align="right">{row.fat}</StyledTableCell>
                                <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                                <StyledTableCell align="right">{row.protein}</StyledTableCell>
                                </StyledTableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer> */}
      </>
    </Layout>
  );
};
export default DashboardPage;
