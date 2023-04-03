import {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Nav from './Nav'



export default function Events(){
    let navigate = useNavigate();
    const [events, setEvents] = useState([])
    useEffect(()=>{
        const getAllEvents = async () => {
            const res = await axios.get('http://localhost:8000/events/?format=json');
            setEvents(res.data)
        };
        getAllEvents();
    },[]);
    
    const showDetail = (index)=>{
        navigate(`${index}`)
      }

    return(
        <div>
            <Nav/>
            <div className= 'card-container'>
                {events.map((event)=>(
                    <div onClick={() => showDetail(event.id)} key={event.id}className="mapped-card-display">
                        <h3>{event.name}</h3>
                        <div className="img-wrapper">
                            <img src = {event.image_url}/>
                        </div>
                        <h5>Date: {event.date}</h5>
                        <h5>Time: {event.start_time}</h5>
                    </div>
                ))}
            </div>

        </div>
    
    )
}