import {useParams, Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import Nav from './Nav';

export default function EventDetail(){
    let { id } = useParams();
    const [event, setEvent] = useState('')
    const [venue, setVenue] = useState([])
    
    let navigate = useNavigate()
    
    const buyTix  = (index)=>{
        navigate(`/tickets/${index}`)
      }

    useEffect(()=>{
        const getEvent = async () => {
            const res = await axios.get(`http://localhost:8000/events/${id}?format=json`);
            setEvent(res.data)
        }
        getEvent()
     
    },[]);

    console.log(event)
    useEffect(() => {
        if(event !== ''){
        const getVenue = async () => {
                const res = await axios.get(`${event.venue}`)
                setVenue(res.data)
         }
         getVenue()
        }
    },[event])

    
    return(
        <div>
            <Nav/>
            <div id = "event-detail">
                <h1>{event.name}</h1>
                <h2>{venue.name}</h2>
                <h3>Performing:</h3>
                {event.performing_at && event.performing_at.map(performers => (
                    <Link to={`/artists/${performers.id}`}>
                <h4>{performers.name}</h4>
                    </Link>))}
                <h4>Show date: {event.date}</h4>
                <h4>Time: {event.start_time} - {event.end_time}</h4>
                <img className='img-details' src={event.image_url}/>
                <h4>Ticket price: ${event.ticket_price}</h4>
                <button onClick={() => buyTix(event.id)}>Buy tickets</button>




            </div>
        </div>
    )
}