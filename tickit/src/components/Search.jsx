import axios from 'axios'
import {useContext, useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import { AppContext } from '../Context/AppContext';
import {CgSearch} from 'react-icons/cg'
export default function Search ({setResults}){
    const {search, setSearch} = useContext(AppContext);

    const navigate = useNavigate();
     
    const handleChange = (event) =>{
        // event.preventDefault();
        setSearch({...search, [event.target.id]:event.target.value, formContent:search.query.value}) 
        }

    const handleSubmit = (event)=>{
    
        event.preventDefault();
        if (search.category==="artists"){
            navigate(`artists/SearchResults/${search.query}`);
        }else if (search.category === "events"){
            navigate(`events/SearchResults/${search.query}`);
        }else if (search.category === "venues"){
            navigate(`venues/SearchResults/${search.query}`);
        }else{
            console.log('error')
        }
    }

    const[input,setInput] = useState('')



        function din(value){
            const getAllEvents = async () => {
                const res = await axios.get('http://localhost:8000/events/?format=json');
                // data(res.data)
                const filterRes = res.data.filter((artist)=>{
                    return value &&  artist && artist.name && artist.name.toLowerCase().includes(input)
                    
                })
                const r = res.data[0]
                setResults(filterRes)
            };
            getAllEvents()
    
        }
        
    


    function hanChange(value){
        din(value)
        setInput(value)
        console.log(value)

    
    }
    return(

        <div className = 'search-bar'>
            <form className="form" onSubmit={handleSubmit}>
                <label htmlFor = "SearchField"></label>
                <input type="text" placeholder={CgSearch} id= "query" value = {input} onChange={(e)=> hanChange(e.target.value)}></input>
                <label htmlFor="category"></label>
                <select id="category" name="category" onChange={handleChange} required>
                    <option id="category" value="">Search by:</option>
                    <option id="category" value="artists">Artist</option>
                    <option id="category" value="events">Event</option>
                    <option id="category" value="venues">Venue</option>
                </select>
            <input type = "submit" id="submit" value="Search"></input> 
        </form>
        </div>
    )
    }