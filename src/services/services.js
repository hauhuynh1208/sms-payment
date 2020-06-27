import axios from 'axios'

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

async function getSMS(){
    try{
        let queryUrl = "http://150.95.108.49/api/sms?_sort=-createdAt,-amount&_limit=3&_skip=0 "     
        let data = await axios.get(queryUrl);
        console.log(data)
        return data
    }
    catch(error){
        throw error;
    }
}
async function getSMSDetail(id){
    try{
        let queryUrl = `http://150.95.108.49/api/sms/:${id}`  
        let data = await axios.get(queryUrl);
        console.log(data)
        return data
    }
    catch(error){
        throw error;
    }
}

async function putSMSDetail(id){
    try{
        let queryUrl = `http://150.95.108.49/api/sms/:${id}`  
        let data = await axios.get(queryUrl);
        console.log(data)
        return data
    }
    catch(error){
        throw error;
    }
}

//account
async function getAccount(){
    try{
        let queryUrl = "http://150.95.108.49/api/account/info"     
        let data = await axios.get(queryUrl);
        console.log(data)
        return data
    }
    catch(error){
        throw error;
    }
}
async function postAccountDetail(){
    try{
        let queryUrl = `http://150.95.108.49/api/account`  
        let data = await axios.get(queryUrl);
        console.log(data)
        return data
    }
    catch(error){
        throw error;
    }
}
async function putAccountDetail(id){
    try{
        let queryUrl = `http://150.95.108.49/api/account/:${id}`  
        let data = await axios.get(queryUrl);
        console.log(data)
        return data
    }
    catch(error){
        throw error;
    }
}
async function delAccountDetail(id){
    try{
        let queryUrl = `http://150.95.108.49/api/account/:${id}`  
        let data = await axios.get(queryUrl);
        console.log(data)
        return data
    }
    catch(error){
        throw error;
    }
}

//report

async function getReport(){
    try{
        let queryUrl = "http://150.95.108.49/api/report?_t=w"     
        let data = await axios.get(queryUrl);
        console.log(data)
        return data
    }
    catch(error){
        throw error;
    }
}


