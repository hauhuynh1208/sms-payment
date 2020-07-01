import React from 'react'
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
import { withStyles, makeStyles } from '@material-ui/core/styles';

import styles from './style'
import colors from '../../styles/colors'

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

// const StyledTableCell = withStyles((theme) => ({
//     head: {
//       backgroundColor: colors.gray,
//       color: theme.palette.common.white,
//     },
//     body: {
//       fontSize: 14,
//     },
//   }))(TableCell);

//   const StyledTableRow = withStyles((theme) => ({
//     root: {
//       '&:nth-of-type(odd)': {
//         backgroundColor: theme.palette.action.hover,
//       },
//     },
//   }))(TableRow);
  
  
// function createData(name, calories, fat, carbs, protein) {
//     return { name, calories, fat, carbs, protein };
//   }
  
//   const rows = [
//     createData('Vietcombank-Bank1', 10000000, 5000000, 20000000, 30000000),
//     createData('Vietcombank-Bank2', 12000000, 5300000, 23500000, 31000000),
//     createData('Techcombank-Bank1', 10000000, 5000000, 20040000, 30000000),
//     createData('Tiền mặt - kết toán', 20000000, 4100000, 20000000, 30000000),
//     createData('Tiền mặt Kế toán', 30000000, 5220000, 20000000, 30000000),
//   ];
  
var val = 10

const dataNo = {x: "", y: 8475436} 
const DashboardPage = props => {
    
       const {dataCircle, dataLine} = props
        
        const [age, setAge] = React.useState(10); 
        var line = []
       
        const handleChange = (event) => {
          setAge(event.target.value);
           val = event.target.value
          formatData(event.target.value)
         
          
        };
       
        const formatData = (val) => {
            var d = new Date();
            var currentDate = d.getDate(); //lấy ngày hiện tại
            var currentMonth = d.getMonth(); // lấy tháng hiện tại
            var currentYear = d.getYear(); //lấy năm hiện tại
            if(val == 10){
                if(currentDate >= 1 && currentDate <= 6 ){
                    {dataLine.map((item, idx) => {    
                        const date = new Date(item.x); //này là covert lại ban đầu để lấy ra ngày tháng hoặc năm CỦA TỪNG DỮ LIỆU để đi so sánh
                        const dateData = date.getDate(); // Này là lấy ra ngày  
                        const montData = date.getMonth() // Này là lấy ra tháng 
                        const yearData = date.getYear()  // // Này là lấy ra năm
                        if((dateData >= 1 && dateData <= 6 ) && (currentMonth == montData)){ // so sánh xem nếu có dữ liệu nào nằm trong khoảng này thì lấy ra
                            line.push(item)
                        }
                    
                    })}
                    
                    return line
                }
                else if(d >= 7 && d <= 14 ){
                    {dataLine.map((item, idx) => {    
                        const date = new Date(item.x);
                        const dateData = date.getDate();
                        const montData = date.getMonth()
                        const yearData = date.getYear()
                        if((dateData >= 7 && dateData <= 14) && (currentMonth == montData)){ 
                            line.push(item)
                        }
                    
                    })}
                    
                    return line
                    
                }
                else if(d >= 15 && d <= 22 ){
                    {dataLine.map((item, idx) => {    
                        const date = new Date(item.x);
                        const dateData = date.getDate();
                        const montData = date.getMonth()
                        const yearData = date.getYear()
                        if(dateData >= 15 && dateData <= 22){
                            line.push(item)
                        }
                    
                    })}
            
                    return line
                }
                else{
                {dataLine.map((item, idx) => {    
                        const date = new Date(item.x);
                        const dateData = date.getDate();
                        const montData = date.getMonth()
                        const yearData = date.getYear()   
                        if((dateData >= 23 && dateData <= 31) && (currentMonth == montData)){
                            line.push(item)
                        }
                    })}      
                    return line
                }
          }
          if(val == 20){
            {dataLine.map((item, idx) => {    
                const date = new Date(item.x);
                const monthData = date.getMonth();
                const yearData = date.getYear()
                if((monthData == currentMonth)){
                    line.push(item)
                }         
            })}
            return line
          }
          if(val == 30){
            {dataLine.map((item, idx) => {    
                const date = new Date(item.x);
                const monthData = date.getMonth();
                const yearData = date.getYear()
                if((monthData == (currentMonth - 1))){
                    line.push(item)   
                }
            })}
            if(line.length == 0){
                line.push(dataNo)
            }
            return line
           }
        }
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
				showInLegend: true,
				indexLabel: "{name}: {y}",
				yValueFormatString: "#,###'%'",
                dataPoints: dataCircle
			}]
        }

        const options2 = {
			animationEnabled: true,
			title:{
				// text: "Monthly Sales - 2017"
			},
			axisX: {
				valueFormatString: "DD/MM"
			},
			axisY: {
				title: "Revenue (USD)",
				prefix: "$",
				includeZero: false
			},
			data: [{
				yValueFormatString: "$#,###",
                xValueFormatString: "MMMM",
                type: "spline",
                showInLegend: true,
                dataPoints: formatData(val),            
			}],
        }
    
        const classes  = styles()
        return(
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
                         
                                <MenuItem value={10} >Hiển thị theo tuần này</MenuItem>
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
                                className={classes.chart__point}
                            />
                            <Box className={classes.mask__trialVersion}></Box>
                        </Box>
                        <Box width="60%" > 
                            <CanvasJSChart options = {options2} 
                                /* onRef={ref => this.chart = ref} */
                            />
                            <Box className={classes.mask__trialVersion}></Box>
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
                </Box>
  
        )
    
}
export default DashboardPage


