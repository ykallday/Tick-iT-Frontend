import {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Nav from './Nav'
import {MdDateRange} from 'react-icons/md'
import {BiTimeFive} from 'react-icons/bi'




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

    const goBack = () => navigate(-1);
    
    return(
        <div>
            <Nav/>
            <div className = "nav-btn-pages"><button className="nav-btn-pages" onClick={goBack}>Back</button></div>
            <h1 className="pagetitle">Events</h1>
            <div className= 'card-container'>
                {events.map((event)=>(
                    <div onClick={() => showDetail(event.id)} key={event.id}className="mapped-card-display">
                        <h3>{event.name}</h3>
                        <div className="img-wrapper">
                            <img src = {event.image_url}/>
                        </div>
                        <div className="info-bottom">
                        <h5><MdDateRange/> Date: {event.date}</h5>
                        <h5><BiTimeFive/> Time: {event.start_time}</h5>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    
    )
}