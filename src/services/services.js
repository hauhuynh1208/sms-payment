import axios from 'axios'

const API_URL = "http://150.95.108.49/api"

export const services = {
    getSMS,
    getSMSDetail,
    putSMSDetail,

    getAccount,
    postAccountDetail,
    putAccountDetail,
    delAccountDetail,
    

    getReport

    
}

//sms
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWYzMzg2YjUwM2FmNjc4NzJlNDcwY2EiLCJpYXQiOjE1OTI5OTk0NzAsImV4cCI6MTU5MzYwNDI3MH0.mxA0MeTvAl1OgTQzL0J6iObC7J-s4wVq-hFDJgPdIrE"

const headers = { headers: {
    'Authorization': token
   }
}

async function getSMS(){
    try{
        let queryUrl = `${API_URL}/sms?_sort=-createdAt,-amount&_limit=3&_skip=0`     
        let data = await axios.get(queryUrl,headers);
        return data
    }
    catch(error){
        throw error;
    }
}
async function getSMSDetail(id){
    try{
        let queryUrl = `${API_URL}/sms/:${id}`  
        let data = await axios.get(queryUrl, headers);    
        return data
    }
    catch(error){
        throw error;
    }
}

async function putSMSDetail(id){
    try{
        let queryUrl = `${API_URL}/sms/:${id}`  
        let data = await axios.get(queryUrl, headers);     
        return data
    }
    catch(error){
        throw error;
    }
}

//account
async function getAccount(){
    try{
        let queryUrl = `${API_URL}/account/info`     
        let data = await axios.get(queryUrl, headers);  
       return data
    }
    catch(error){
        throw error;
    }
}
async function postAccountDetail(){
    try{
        let queryUrl = `${API_URL}/account`  
        let data = await axios.get(queryUrl);  
        return data
    }
    catch(error){
        throw error;
    }
}
async function putAccountDetail(id){
    try{
        let queryUrl = `${API_URL}/account/:${id}`  
        let data = await axios.get(queryUrl, headers);   
        return data
    }
    catch(error){
        throw error;
    }
}
async function delAccountDetail(id){
    try{
        let queryUrl = `${API_URL}/account/:${id}`  
        let data = await axios.get(queryUrl, headers);     
        return data
    }
    catch(error){
        throw error;
    }
}

//report

async function getReport(){
    try{
        let queryUrl = `${API_URL}/report?_t=w`     
        let data = await axios.get(queryUrl,headers);
        return data
    }
    catch(error){
        throw error;
    }
}


