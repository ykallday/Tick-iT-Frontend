import {useEffect, useState} from 'react'
import axios from 'axios'
import Nav from './Nav'
import { useNavigate } from 'react-router-dom'


export default function Venues(){
    let navigate = useNavigate();
    const [venues, setVenues] = useState([])
    useEffect(()=>{
        const getAllVenues = async () => {
            const res = await axios.get('http://localhost:8000/venues/?format=json');
            setVenues(res.data)
        };
        getAllVenues();
    },[]);
    
    const showDetail = (index)=>{
        navigate(`${index}`)
      }

    return(
        <div>
            <Nav/>
            <div className= 'card-container'>
                {venues.map((venue)=>(
                    <div onClick={() => showDetail(venue.id)} key={venue.id}className="mapped-card-display">
                        <h3 id="artist-name">{venue.name}</h3>
                        <div className="img-wrapper">
                            <img src = {venue.image_url}/>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    
    )
}