import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import Nav from './Nav';

export default function ArtistDetail(){

    let navigate = useNavigate()

    let { id } = useParams();
    const [venue, setVenue] = useState('')
    const [events, setEvents] = useState([])

    useEffect(()=>{
        const getArtist = async () => {
            const res = await axios.get(`http://localhost:8000/venues/${id}?format=json`);
            setVenue(res.data)
            console.log(res.data)
        };
        getArtist();
    },[id])

    useEffect(() => {
        const getEvents = async () => {
          const res = await axios.get(`http://localhost:8000/events`);
          const filteredEvents = res.data.filter(event => {
            return event.venue.includes(`venues/${id}`);
          });
          setEvents(filteredEvents);
        };
        getEvents();
      }, [id]);


    const handleEventClick = eventId => {
        navigate(`/events/${eventId}`);
      };
  
      return(
        <div>
            <Nav/>
            <div id='artist-detail'>
                <div id="venue-info">
                  <h1>{venue.name}</h1>
                  <h4>{venue.phone}</h4>
                  <h4>{venue.address}</h4>
                  <h4>{venue.social_url}</h4>
                  <h4>{venue.website_url}</h4>
                  <img width="75%" src={venue.image_url} />
                  <h2>Upcoming Shows: </h2>
                      {events.map((event) => (
                     <div key={event.id} onClick={() => handleEventClick(event.id)}>
                        <h5>{event.name}</h5>
                        <p>{event.date}</p>
                        <img src={event.image_url}/>
                    </div>
                ))}
            </div>
          </div>
        </div>
    )
}
