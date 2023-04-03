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
        };
        getArtist();
    },[])

    useEffect(()=>{
        const getEvent = async () => {
            const res = await axios.get(`http://localhost:8000/events`);
            setEvents(res.data)
            console.log(res.data)
        }
        getEvent()
    },[]);


    return(
        <div>
            <Nav/>
            <div id='artist-detail'>
                <h1>{artist.name}</h1>
                <h4>{artist.social_url}</h4>
                <h4>{artist.website_url}</h4>
                <h4>{artist.bio}</h4>
                <h2>Upcoming Shows: </h2>


                <img src={artist.image_url} />
               
            
            </div>
        </div>
    )
}

