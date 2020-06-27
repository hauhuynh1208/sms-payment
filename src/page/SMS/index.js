import React from 'react'
import {
    Box,
  } from '@material-ui/core'
import Layout from '../../components/Layout'
import MaterialTable from 'material-table';
import {connect } from 'react-redux'
// import {actions} from '../../actions'
import { bindActionCreators } from 'redux';
import axios from 'axios'

import SMSComponent from './SMSComponent' 




const data =  [
    {
        "_id": "5ef3409dee91fb79034fc960",
        "orderIds": [
            "43266"
        ],
        "edits": [],
        "amount": 385000,
        "address": "Vietcombank",
        "body": "SD TK 0371003698721 +385,000VND luc 30-05-2018 04:42:31. SD 261,881,551VND. Ref IBVCB.3005180284464001. 43266 Ha thuy linh",
        "smsId": "7",
        "phone": "0969009009",
        "status": "paid",
        "createdAt": 1593000093,
        "updatedAt": 1593099910,
        "__v": 0,
        "note": "tin nhắn này được mark với order 52324 update"
    },
    {
        "_id": "5ef34036ee91fb79034fc95e",
        "orderIds": [
            "43242"
        ],
        "edits": [],
        "amount": 968000,
        "address": "ACB",
        "body": "ACB: TK 190160369(VND) + 968,000 luc 16:25 29/05/2018. So du 20,380,085.GD: 43242 TRAN HUY PHUONG",
        "smsId": "6",
        "phone": "0969009009",
        "status": "new",
        "createdAt": 1592999990,
        "updatedAt": 1592999990,
        "__v": 0
    },
    {
        "_id": "5ef33fefee91fb79034fc95c",
        "orderIds": [
            "43237"
        ],
        "edits": [],
        "amount": 2694000,
        "address": "Vietcombank",
        "body": "SD TK 0371003698721 +2,694,000VND luc 29-05-2018 15:38:08. SD 329,180,751VND. Ref MBVCB54025337. 43237 TRAN HUU PHAT.CT tu 0071001002769 TRAN HUU PHAT toi 0...",
        "smsId": "5",
        "phone": "0969009009",
        "status": "new",
        "createdAt": 1592999919,
        "updatedAt": 1592999919,
        "__v": 0
    }
]

class SMS extends React.Component {
   constructor(props){
       super(props)
       this.state = {
           dataSMS : []
       }
   }

   componentDidMount(){
  
    axios .get('http://150.95.108.49/api/sms?_sort=-createdAt,-amount&_limit=3&_skip=0')
    .then(res => {
        console.log(res.data, 'data')
    })
   }
   render(){
       const {sms} = this.props;
        return(
            <Layout>
               <SMSComponent smsData={data}/>
            </Layout> 
            
        )
    }   
}

function mapStateToProps(state) {
    return {
      sms: state.sms
    };
  }
  

export default connect(mapStateToProps, null)(SMS)