import React,{useState, useEffect} from 'react'
import Axios from 'axios'
import MediaCard from './MediaCard'
import { Doughnut,Bar,Line } from 'react-chartjs-2';
function Api() {
    const [confirmed, setConfirmed] = useState(0)
    const [recovered, setRecovered] = useState(0)
    const [deaths, setDeath] = useState(0)
    const [data, setData] = useState({})
    useEffect(()=>{
        Axios.get('https://covid19.mathdro.id/api')
        .then((res)=> {
            console.log(res.data)
            setConfirmed(res.data.confirmed.value);
            setRecovered(res.data.recovered.value);
            setDeath(res.data.deaths.value);
            setData({
                confirmed,
                recovered,
                deaths
            })
        })

    },[])
    return (
        <>
        <div>
            <MediaCard text='Confirmed Cases' value={confirmed} color='green'/>
            <MediaCard text='Recoverd Cases' value={recovered} color='blue' />
            <MediaCard text='Death Cases' value={deaths} color='red'/>
        </div>
        <div>
        <Bar data={{
          labels: ['confirmed', 'Recovered', 'Deaths'],
          datasets: [
            {
              label: 'People',
              backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
              data: [confirmed, recovered, deaths],
            },
          ],
        }}/>

        </div>
        </>
    )
}

export default Api
