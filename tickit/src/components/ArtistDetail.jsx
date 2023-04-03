import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import Nav from './Nav';
export default function ArtistDetail(){

 
    
        // let navigate = useNavigate()
    
        let { id } = useParams();
        const [artist, setArtist] = useState('')
        const [events, setEvents] = useState([])
    
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
    
    
        return(
            <div>
                <Nav/>
                <div id='artist-detail'>
                    <h1>{artist.name}</h1>
                    <h4>{artist.social_url}</h4>
                    <h4>{artist.website_url}</h4>
                    <h4>{artist.bio}</h4>
                    <img src={artist.image_url} />
                    <h2>Upcoming Shows: </h2>
                    {events.map((event) => (
                        <div key={event.id}>
                            <h5>{event.name}</h5>
                            <p>{event.date}</p>
                            <img src={event.image_url}/>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
    
    