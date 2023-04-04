import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import Nav from './Nav';
import {MdLocationOn, MdPhone} from 'react-icons/md'
import {AiFillInstagram} from 'react-icons/ai'
import {BsGlobe} from 'react-icons/bs'


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
          const res = await axios.get(`http://localhost:8000/events/`);
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
    const goBack = () => navigate(-1);
    
      return(
        <div>
            <Nav/>
            <div id='artist-detail'>
                <div id="venue-info">
                <div className = "nav-btn-pages"><button className="nav-btn-pages" onClick={goBack}>Back</button></div>
                  <h1>{venue.name}</h1>
                  <h4><MdPhone/> {venue.phone}</h4>
                  <h4><MdLocationOn/> {venue.address}</h4>
                  <h4><AiFillInstagram/> <a href = {venue.social_url} target="_blank">{venue.social_url}</a></h4>
                  <h4><BsGlobe/> <a href={venue.website_url} target="_blank">{venue.website_url}</a></h4>
                  <img className = "main-image"  src={venue.image_url} />
                  <h2>Upcoming Shows: </h2>
                    <div className='upcoming-shows-card'>
                      {events.map((event) => (
                     <div key={event.id} onClick={() => handleEventClick(event.id)}>
                        <div className='card-wrap'>
                          <h5>{event.name}</h5>
                          <p>{event.date}</p>
                          <img src={event.image_url}/>
                        </div>
                    </div>
                    
                ))}
                      </div>
            </div>
          </div>
        </div>
    )
}
