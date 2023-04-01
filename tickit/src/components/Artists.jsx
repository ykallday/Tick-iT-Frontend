import {useEffect, useState} from 'react'
import axios from 'axios'




export default function Artists(){

    const [artists, setArtists] = useState([])
    useEffect(()=>{
        const getAllArtists = async () => {
            const res = await axios.get('http://localhost:8000/artists/?format=json');
            setArtists(res.data)
        };
        getAllArtists();
    },[]);
    


    return(
        <div>
            <h2 className='page-title'>ARTISTS:</h2>
            <div className= 'card-container'>
                {artists.map((artist)=>(
                    <div key={artist.id}className="mapped-card-display">
                        <h3>{artist.name}</h3>
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