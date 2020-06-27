import React from 'react'
import Layout from '../../components/Layout'
import MaterialTable from 'material-table';
import { connect } from 'react-redux'
import { actions } from '../../actions/actions'
import axios from 'axios'

import SMSComponent from './SMSComponent' 


class SMS extends React.Component {
   constructor(props){
       super(props)
       this.state = {
           sms : []
       }
       
   }
  
   static getDerivedStateFromProps(nextProps, prevState) {
        if(nextProps.sms.data){  
            return{
                sms: nextProps.sms.data
            }
        }  
    }

   componentDidMount(){
       this.props.getSMSActionAll();
   }


   render(){
        const { sms } = this.state

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
  

export default connect(mapStateToProps, actions)(SMS)