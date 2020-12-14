import React,{useState,useEffect} from 'react'
import {fetchDailyData} from './Api'
import {Line,Bar} from 'react-chartjs-2'
import style from './chart.css'

const Chart = ({country,data}) => {
    const [dailyData,setDailyData]=useState([])
    useEffect(()=>{
        const fetchApi= async()=>{
            setDailyData( await fetchDailyData());
        }
        console.log(dailyData);
        fetchApi();
    },[]);
    const BarChart=(
        data.confirmed ?
        (
            <Bar
            data={{labels:["Infected","Recovered","Deaths"],
            datasets:[{
                label:"People",
                backgroundColor:[
                    '#455ede',
                    ' #27f253',
                    '#f23538'
                ],
                data:[data.confirmed.value,data.recovered.value,data.deaths.value]
            }]
        
            }}
            options={{
                legend:{display:false},
                title:{display:true,text:`Current State is ${country}`}
            }}
            />
        ) : null
    );

    const lineCart=(
    dailyData[0] ?(
        <Line
       data={{
           labels:dailyData.map(({date})=>date),
           datasets:[{
               data: dailyData.map(({confirmed})=>confirmed),
               label:" Infected",
               borderColor:"blue",
               fill:true,
           },
           {
            data: dailyData.map(({deaths})=>deaths),
            label:"Deaths",
            borderColor:"red",
            backgroundColor:"#f23538",
            fill:true,
           }],
       }}
        /> ) 
    : null
    );
    


        return (
        <div className="chart-container">
           {country ? BarChart : lineCart }
        </div>
    )
}

export default Chart
