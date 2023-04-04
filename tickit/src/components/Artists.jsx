import {useEffect, useState} from 'react'
import axios from 'axios'
import Nav from './Nav'
import {useNavigate} from 'react-router-dom'




export default function Artists(){
    let navigate = useNavigate();
    const [artists, setArtists] = useState([])
    useEffect(()=>{
        const getAllArtists = async () => {
            const res = await axios.get('http://localhost:8000/artists/?format=json');
            setArtists(res.data)
        };
        getAllArtists();
    },[]);
    
    const showDetail = (index)=>{
        navigate(`${index}`)
      }


    return(
        <div>
            <Nav/>
            <div className= 'card-container'>
                {artists.map((artist)=>(
                    <div onClick={() => showDetail(artist.id)} key={artist.id}className="mapped-card-display">
                        <h3 id="artist-name">{artist.name}</h3>
                        <div className="img-wrapper">
                            <img src = {artist.image_url}/>
                        </div>
                        <button>Genre: {artist.genre}</button>
                    </div>
                ))}
            </div>

        </div>
    
    )
}