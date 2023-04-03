import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios'
import Nav from './Nav'
export default function Tickets(){

    const [event, setEvent] = useState("")
    let { id } = useParams();
   

    useEffect(()=>{
        const getEvent = async () => {
            const res = await axios.get(`http://localhost:8000/events/${id}?format=json`);
            setEvent(res.data)
            console.log(res)
        }
        getEvent()
        console.log(event)},[]);


    return(
        <div id="tickets">
            <Nav/>
            <h1>Buy tickets for {event.name}</h1> 
            <h3>FORM GOES HERE</h3>
        </div>
    )
}