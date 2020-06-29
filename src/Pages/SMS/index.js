import React from 'react'
import Layout from '../../components/Layout'
import MaterialTable from 'material-table';
import { connect } from 'react-redux'
import {smsActions} from '../../actions/smsActions'
import { bindActionCreators } from 'redux';
import axios from 'axios'

import SMSComponent from './SMSPage' 


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
       this.props.smsActions.getSMSActionAll();

    //call api put
       var code = { 
        "status": "status",
        "note": "paid"
        
      }

       const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWYzMzg2YjUwM2FmNjc4NzJlNDcwY2EiLCJpYXQiOjE1OTI5OTk0NzAsImV4cCI6MTU5MzYwNDI3MH0.mxA0MeTvAl1OgTQzL0J6iObC7J-s4wVq-hFDJgPdIrE"

       var id = '5ef34036ee91fb79034fc95e'

       const headers = { headers :{
            'Authorization': token,
          }
       }
       axios.put(`http://150.95.108.49/api/sms/:${id}`,headers, {data: code} )
        .then(res => console.log(res, "res"))
        .catch(error => {
            console.log(error.message, "error");
       })

    }





       
    
   putSMS = (newData) => {
    //   var id = newData._id
      
    //   console.log(id, 'id')
    //   console.log(code, 'code')
    //   // this.props.smsActions.putSMSAction(id,code)
    //   const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWYzMzg2YjUwM2FmNjc4NzJlNDcwY2EiLCJpYXQiOjE1OTI5OTk0NzAsImV4cCI6MTU5MzYwNDI3MH0.mxA0MeTvAl1OgTQzL0J6iObC7J-s4wVq-hFDJgPdIrE"

    //   const headers = { headers: {
    //       'Authorization': token,
    //      },
    //   }
    //   Promise.all([
      
    //   ])
    //   axios.get(`http://150.95.108.49/api/sms?_sort=-createdAt,-amount&_limit=3&_skip=0`,headers )
    //   .then(res => console.log(res, 'res'))


   }


   render(){
        const { sms } = this.state
        console.log(sms, 'sms')
        return(
            <Layout>
               <SMSComponent smsData={sms} putSMSAction={this.putSMS}/>
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