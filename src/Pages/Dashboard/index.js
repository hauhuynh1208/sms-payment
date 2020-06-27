import React from 'react'
import Layout from '../../components/Layout'
import DashboardComponent from './DashboardComponent'
import axios from 'axios'
import {actions} from '../../actions/actions'
import { connect } from 'react-redux'
import { helpers } from 'chart.js'

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
            dataLine: [],
        }
        
     
    } 

    componentDidMount(){
        this.props.getReportAction();
        this.convertChart(); 
    }
    // static getDerivedStateFromProps(nextProps, prevState) {
    //     console.log(nextProps, 'console nextProps')
       
    // }


    convertChart= () => {
        const arrCircle = []
        var keys = []
        var arrLine = []


        //convert circle
        {circle.map((item, idx) => {    
            arrCircle.push({name: item.name, y : item.percent})
        })}
        this.setState({
            dataCircle: arrCircle
        })


        //convert line
        getObj(line,keys)  
        {keys.map((itemKey,idx) => {
            for( idx; idx < keys.length; ){
                arrLine.push({x : new Date(itemKey), y : line[itemKey]});
                break;
            }
        })}
        this.setState({
            dataLine: arrLine
        })

    }
    render(){
        // const {report} = this.props
        // console.log(report.data.circle, 'report')
        
        return(
            <Layout>
                <DashboardComponent dataCircle ={this.state.dataCircle} dataLine={this.state.dataLine} />
            </Layout>
        )
    }
   
}

function mapStateToProps(state) {
    return {
        report: state.report
    };
  }
  

export default connect(mapStateToProps, actions)(Dashboard)


