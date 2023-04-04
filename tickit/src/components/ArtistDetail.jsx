import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import Nav from './Nav';
import {AiFillInstagram} from 'react-icons/ai'
import {BsGlobe} from 'react-icons/bs'

export default function ArtistDetail(){

 

        let navigate = useNavigate()
        let { id } = useParams();
        const [artist, setArtist] = useState('')
        const [events, setEvents] = useState([])
    

        const goBack = () => navigate(-1);

        useEffect(()=>{
            const getArtist = async () => {
                const res = await axios.get(`http://localhost:8000/artists/${id}?format=json`);
                setArtist(res.data)
                console.log(res.data)
            };
            getArtist();
        },[id])
    
        useEffect(()=>{
            const getEvents = async () => {
                const res = await axios.get(`http://localhost:8000/events/`);
                const filteredEvents = res.data.filter(event => {
                    return event.performing_at.some(performer => performer.id === parseInt(id))
                })
                setEvents(filteredEvents)
                console.log(filteredEvents)
            }
            getEvents()
        },[id]);
    
        const handleEventClick = eventId => {
            navigate(`/events/${eventId}`);
          };
    
        return(
            <div>
                <Nav/>
                <div id='artist-detail'>
                    <div className = "nav-btn-pages"><button className="nav-btn-pages" onClick={goBack}>Back</button></div>
                    <h1>{artist.name}</h1>
                    <br></br>
                    <h4><AiFillInstagram/> <a href ={artist.social_url} target="_blank">{artist.social_url}</a></h4>
                    <h4><BsGlobe/> {artist.website_url}</h4>
                    <h4>{artist.bio}</h4>
                    <img className = "main-image" src={artist.image_url} />
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
                    {/* <h2>Upcoming Shows: </h2>
                    {events.map((event) => (
                         <div key={event.id} onClick={() => handleEventClick(event.id)}>
                            <h5>{event.name}</h5>
                            <p>{event.date}</p>
                            <img src={event.image_url}/>
                        </div>
                    ))} */}
                </div>
           
        )
    }
    
    