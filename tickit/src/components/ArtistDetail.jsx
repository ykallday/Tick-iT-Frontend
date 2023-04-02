import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios'
export default function ArtistDetail(){
    let { id } = useParams();
    const [artist, setArtist] = useState([])
    useEffect(()=>{
        const getArtist = async () => {
            const res = await axios.get(`http://localhost:8000/artists/${id}/?format=json`);
            setArtist(res.data)
        };
        getArtist();
    },[]);
    return(
        <div>
            <div>

            
            <h2>{artist.name}</h2>
            </div>
        </div>
    )
}