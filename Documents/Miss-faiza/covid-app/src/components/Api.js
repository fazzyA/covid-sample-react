import React,{useState, useEffect} from 'react'
import Axios from 'axios'
import MediaCard from './MediaCard'
function Api() {
    const [confirmed, setConfirmed] = useState(0)
    const [recovered, setRecovered] = useState(0)
    const [deaths, setDeath] = useState(0)
    useEffect(()=>{
        Axios.get('https://covid19.mathdro.id/api')
        .then((res)=> {
            console.log(res.data)
            setConfirmed(res.data.confirmed.value);
            setRecovered(res.data.recovered.value);
            setDeath(res.data.deaths.value);
        })

    },[])
    return (
        <div>
            <MediaCard text='Confirmed Cases' value={confirmed}/>
            <MediaCard text='Recoverd Cases' value={recovered} />
            <MediaCard text='Death Cases' value={deaths} />
        </div>
    )
}

export default Api
