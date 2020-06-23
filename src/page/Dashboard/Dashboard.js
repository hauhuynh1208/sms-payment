import React from 'react'
import Layout from '../../components/Layout'
import CanvasJSReact from '../../assets/canvasjs.react';
import {
    Box,
    Typography,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    TableContainer, 
    Table, 
    TableHead, 
    TableRow, 
    TableCell, 
    TableBody,
    Paper
    
  } from '@material-ui/core'

import { useTheme } from '@material-ui/core/styles'
import styles from './style'
import { withStyles, makeStyles } from '@material-ui/core/styles';

import colors from '../../util/colors'

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: colors.gray,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  
  
function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Vietcombank-Bank1', 10000000, 5000000, 20000000, 30000000),
    createData('Vietcombank-Bank2', 12000000, 5300000, 23500000, 31000000),
    createData('Techcombank-Bank1', 10000000, 5000000, 20040000, 30000000),
    createData('Tiền mặt - kết toán', 20000000, 4100000, 20000000, 30000000),
    createData('Tiền mặt Kế toán', 30000000, 5220000, 20000000, 30000000),
  ];
  

const Dashboard = props => {
    
        const options1 = {
			animationEnabled: true,
			title: {
				// text: "Customer Satisfaction"
			},
			subtitles: [{
				text: "Banking",
				verticalAlign: "center",
				fontSize: 24,
				dockInsidePlotArea: true
            }],
			data: [{
				type: "doughnut",
				//showInLegend: true,
				indexLabel: "{name}: {y}",
				yValueFormatString: "#,###'%'",
				dataPoints: [
					{ name: "ACB", y: 12 },
					{ name: "VIetCombank", y: 31 },
					{ name: "Agribank", y: 40 },
					{ name: "Other", y: 17 },
				]
			}]
        }
        


        const options2 = {
			animationEnabled: true,
			title:{
				//text: "Monthly Sales - 2017"
			},
			axisX: {
				valueFormatString: "MMM"
			},
			axisY: {
				//title: "Sales (in USD)",
				prefix: "$",
				includeZero: false
			},
			data: [{
				yValueFormatString: "$#,###",
				xValueFormatString: "MMMM",
                type: "spline",
                showInLegend: true,
				dataPoints: [
					{ x: new Date(2017, 0), y: 25060 },
					{ x: new Date(2017, 1), y: 27980 },
					{ x: new Date(2017, 2), y: 42800 },
					{ x: new Date(2017, 3), y: 32400 },
					
	
				],
				
			},
			{
				yValueFormatString: "$#,###",
				xValueFormatString: "MMMM",
                type: "spline",
                showInLegend: true,
				dataPoints: [
                    { x: new Date(2017, 0), y: 25060 },
					{ x: new Date(2017, 1), y: 30000 },
					{ x: new Date(2017, 2), y: 34000 },
					{ x: new Date(2017, 3), y: 22800 },
				],	
			},
			{
				yValueFormatString: "$#,###",
				xValueFormatString: "MMMM",
                type: "spline",
                showInLegend: true,
				dataPoints: [
                    { x: new Date(2017, 0), y: 26060 },
					{ x: new Date(2017, 1), y: 28980 },
					{ x: new Date(2017, 2), y: 39800 },
					{ x: new Date(2017, 3), y: 40400 },	
				],		
			}
		]
			
        }
        

        const [age, setAge] = React.useState('');

        const handleChange = (event) => {
          setAge(event.target.value);
        };


       
          
        const classes  = styles()
        return(
            <Layout>
                <Box className={classes.root__dashboard}>
                    <Box pb={5} display="flex" justifyContent="space-between">
                        <Box>
                        </Box>
                        <Box>
                        <FormControl variant="outlined" className={classes.form__chart}>
                            <InputLabel id="demo-simple-select-outlined-label">Hiển thị doanh số theo</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={age}
                                onChange={handleChange}
                                label="Hiển thị doanh số theo"
                            >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Hiển thị theo tuần này</MenuItem>
                            <MenuItem value={20}>Hiển thị theo tháng này</MenuItem>
                            <MenuItem value={30}>Hiển thị theo tháng trước</MenuItem>
                            </Select>
                        </FormControl>
                        </Box>
                    </Box>
                    <Box className={classes.chart__dashboard}>
                        <Box width="35%">
                            <CanvasJSChart options = {options1} 
                                // onRef={ref => this.chart = ref} 
                            />
                        </Box>
                        <Box width="60%" > 
                            <CanvasJSChart options = {options2} 
                                /* onRef={ref => this.chart = ref} */
                            />
                        </Box>
                    </Box>
                   
                    <TableContainer component={Paper}>
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
                    </TableContainer>
                </Box>
            </Layout>
        )
    
}
export default Dashboard


