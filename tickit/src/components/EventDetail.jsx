import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios'
export default function EventDetail(){
    let { id } = useParams();
    const [event, setEvent] = useState([])
    useEffect(()=>{
        const getEvent = async () => {
            const res = await axios.get(`http://localhost:8000/events/${id}/?format=json`);
            setEvent(res.data)
        };
        getEvent();
    },[]);
    return(
        <div>
            <div id = "event-detail">
                <h2>{event.name}</h2>
            </div>
        </div>
    )
}