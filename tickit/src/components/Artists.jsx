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
            {artists.map((artist)=>(
                <div>
                    <h5>{artist.name}</h5>
                </div>
            ))}
        </div>
    )
}