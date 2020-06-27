import React from 'react'
import Layout from '../../components/Layout'
import MaterialTable from 'material-table';
import { connect } from 'react-redux'
import {smsActions} from '../../actions/smsActions'
import { bindActionCreators } from 'redux';

import SMSComponent from './SMSComponent' 


class SMS extends React.Component {
   constructor(props){
       super(props)
       this.state = {
           sms : []
       }
       
   }
  
//    static getDerivedStateFromProps(nextProps, prevState) {
//         if(nextProps.sms.data){  
//             return{
//                 sms: nextProps.sms.data
//             }
//         }  
//     }

   componentDidMount(){
       this.props.smsActions.getSMSActionAll();
   }


   render(){
        const { sms } = this.props
        console.log(sms)
        return(
            <Layout>
               <SMSComponent smsData={sms}/>
            </Layout>     
        )
    }   
}

function mapStateToProps(state) {
    return {
      sms: state.sms
    };
  }


function mapDispatchToProps(dispatch){
    return{
        smsActions: bindActionCreators(
            Object.assign({},smsActions),
            dispatch
        ),
    }
}

  

export default connect(mapStateToProps, mapDispatchToProps)(SMS)