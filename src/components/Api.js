import axios from 'axios'

const url="https://covid19.mathdro.id/api";
export const getData=async(country)=>{
    let changeAbleUrl=url;
    if(country){
        changeAbleUrl=`https://covid19.mathdro.id/api/countries/${country}`;
    } 
    try{
        let {data:{confirmed,recovered,deaths,lastUpdate}}= await axios.get(changeAbleUrl);
        const modifyData={
           confirmed,recovered,deaths,lastUpdate
        }
        return modifyData;
    }
    catch (error){
        console.log("Error")
    }
}

export const fetchDailyData= async()=>{
    try{
        let {data}=await axios.get(`${url}/daily`);
        let modifyData=data.map((dailyData)=>({
            confirmed:dailyData.confirmed.total,
            deaths:dailyData.deaths.total,
            date:dailyData.reportDate
        }))
        return modifyData;
    }
    catch(error){

    }
}

export const countriesData=async()=>{
    try{
        let {data:{countries}}= await axios.get(`${url}/countries`);
       return  countries.map((country)=>(
             country.name
        ))
    }
    catch(error){

    }
}