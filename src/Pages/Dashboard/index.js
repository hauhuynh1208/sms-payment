import React from 'react'
import Layout from '../../components/Layout'
import DashboardPage from './DashboardPage'
import { reportActions } from '../../actions/reportActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

function getObj(obj,keys){
    for(var key in obj){
        keys.push(key);
        if(typeof(obj[key]) === 'object'){
            getObj(obj[key], keys)
        }
    } 
}
const dataL = {
"07/06/2020": 9869389,
"08/06/2020": 9069389,
"09/06/2020": 6869389,
"10/06/2020": 9869389,
"14/06/2020": 6942388,
"21/06/2020": 3111535,
"25/06/20": 9682301,
"26/06/20": 9682301,
"27/06/20": 9682301,
"28/06/20": 9682301,
"29/06/20": 8682301,
"30/06/20": 6992301,
"05/07/2020": 4914431
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
                 return{
                    report: nextProps.report.data,  
                    dataCircle: nextProps.report.data.circle,    
                    dataLine: nextProps.report.data.line,
                }
            }
            
        }  
        return 0 
    }

    componentDidMount(){
        this.props.reportActions.getReportAction();
    }

    render(){
        const {dataCircle, dataLine} = this.state
        // do dữ liệu api truyền về khác dữ liệu chart nhận để render nên phải convert trước
    
        var arrCircle = []
        var keys = []
        var arrLine = []
        //convert circle
        {dataCircle.map((item, idx) => {    
            arrCircle.push({name: item.name, y : item.percent})     // convert lại dữ liệu theo dạng { name : name , y : percent }
        })}

        //convert line từ {"07/06": 6869248} về dạng {x: Thu Jun 07 2001 00:00:00 GMT+0700 (Indochina Time), y: 6869248}
        var stringDate = ""  // tạo một số string rỗng để chứa dữ liệu
        var stringMonth = ""
        var stringAll = ""    
        
        getObj(dataL,keys)  // ban đầu mình lấy các key của obj ra trước ( gọi hàm ở trên )
            {keys.map((itemKey,idx) => {
                stringDate = itemKey.slice(0,2); //cắt lấy dữ liệu sau đó ghép lại theo cấu trúc tháng ngày (ban đầu là ngày tháng)
                stringMonth = itemKey.slice(3,5);
                stringAll = stringMonth + '/' + stringDate
                for( idx; idx < keys.length; ){
                    arrLine.push({x : new Date(stringAll), y : dataL[itemKey]}); // đưa về dạng date hoàn chỉnh vào add nó vào mảng
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
    console.log(state, 'state')
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


