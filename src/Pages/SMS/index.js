import React from 'react'
import SMSPage from './SMSPage' 
import Layout from '../../components/Layout'
import {smsActions} from '../../actions/smsActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { put } from '../../actions/RequestAdapter';

class SMS extends React.Component {
   constructor(props){
       super(props)
       this.state = {
           sms : [],
       }
   }
  
   static getDerivedStateFromProps(nextProps, prevState) {
        if(nextProps.sms.data){  
            return{
                sms: nextProps.sms.data
            }
        }  
    }

   async componentDidMount(){
       this.props.smsActions.getSMSActionAll();
    }
       
    componentDidUpdate(previousProps, previousState, snapshot) {
        if(this.state.sms != previousState.sms){
            return{
                 sms :  previousState.sms,
            }
        }
      }

    putSMS = (newData) => {
        var code = { 
            "status": newData.status,
            "note": newData.note   
        }
        var id = newData._id

        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWYzMzg2YjUwM2FmNjc4NzJlNDcwY2EiLCJpYXQiOjE1OTI5OTk0NzAsImV4cCI6MTU5MzYwNDI3MH0.mxA0MeTvAl1OgTQzL0J6iObC7J-s4wVq-hFDJgPdIrE"

        const params = {
           token,
           body: code
        }
        put(`sms/${id}`, params)
        .then(resp=> (
             this.setState({
                sms: resp.data
            })
          )
        ).catch(err=>console.log(err))    
   }
    
   reloadPage = () => {
       window.location.reload();
   }

   render(){
        const { sms } = this.state
        return(
            <Layout>
               <SMSPage smsData={sms} putSMSAction={this.putSMS} reloadPage={this.reloadPage}/>
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