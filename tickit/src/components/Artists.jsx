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
            <h2 className='page-title'>Artists:</h2>
            <div className= 'card-container'>
                {artists.map((artist)=>(
                    <div className="mapped-card-display">
                        <h5>{artist.name}</h5>
                    </div>
                ))}
            </div>

        </div>
    )
}