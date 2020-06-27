import React from 'react'
import Layout from '../../components/Layout'
import DashboardPage from './DashboardPage'
import { reportActions } from '../../actions/reportActions'
import { connect } from 'react-redux'
import { helpers } from 'chart.js'
import { bindActionCreators } from 'redux';


const circle = [
    {
        "name": "Vietcombank",
        "code": "VCB",
        "percent": 70
    },
    {
        "name": "Acb",
        "code": "ACB",
        "percent": 20
    },
    {
        "name": "Other",
        "code": "OTHER",
        "percent": 10
    }
]

const line = {
    "07/04": 6805841,
    "08/05": 202641,
    "09/01": 1872944,
    "11/05": 6037832
}



function getObj(obj,keys){
    for(var key in obj){
        keys.push(key);
        if(typeof(obj[key]) === 'object'){
            getObj(obj[key], keys)
        }
    } 
}


class Dashboard extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            dataCircle: [],
            keysObj: [],
            dataLine: {},
            report: [],
        }
        
     
    } 

    static getDerivedStateFromProps(nextProps, prevState) {
        if(nextProps.report.data){
            if(nextProps.report.data){
                console.log(nextProps.report.data.line, 'data')
                 return{
                    report: nextProps.report.data,  
                    dataCircle: nextProps.report.data.circle,    
                    dataLine: nextProps.report.data.line,
                }
            }
            
        }   
    }

    componentDidMount(){
        this.props.reportActions.getReportAction();
       
    }





    // convertChart = () => {
    //     const {dataCircle, dataLine} = this.state


    //     console.log(dataCircle, "data circle")
    //     console.log(dataLine, "data line")
    //     const arrCircle = []
    //     var keys = []
    //     var arrLine = []


    //     //convert circle
    //     {dataCircle.map((item, idx) => {    
    //         arrCircle.push({name: item.name, y : item.percent})
    //     })}
    //     this.setState({
    //         circle: arrCircle
    //     })


    //     //convert line
    //     getObj(dataLine,keys)  
    //     {keys.map((itemKey,idx) => {
    //         for( idx; idx < keys.length; ){
    //             arrLine.push({x : new Date(itemKey), y : dataLine[itemKey]});
    //             break;
    //         }
    //     })}
    //     this.setState({
    //         line: arrLine
    //     })
    

    // }
    render(){
        const {dataCircle, dataLine} = this.state

        var arrCircle = []
        var keys = []
        var arrLine = []


        //convert circle
        {dataCircle.map((item, idx) => {    
            arrCircle.push({name: item.name, y : item.percent})
        })}
        var stringDate = ""
        var stringMonth = ""
        var stringAll = ""
         //convert line
        getObj(dataLine,keys)  
            {keys.map((itemKey,idx) => {
                stringDate = itemKey.slice(0,2);
                stringMonth = itemKey.slice(3,5);
                stringAll = stringMonth + '/' + stringDate
                for( idx; idx < keys.length; ){
                    arrLine.push({x : new Date(stringAll), y : dataLine[itemKey]});
                    break;
            }
        })}    
         return(
            <Layout>
                <DashboardPage 
                dataCircle ={arrCircle} dataLine={arrLine} 
                />
            </Layout>
        )
    }
   
}

function mapStateToProps(state) {
    return {
        report: state.report
    };
  }
  
function mapDispatchToProps(dispatch){
return{
    reportActions: bindActionCreators(
        Object.assign({},reportActions),
        dispatch
    ),
}
}


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)


