import {useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import { AppContext } from '../Context/AppContext';
import {CgSearch} from 'react-icons/cg'
export default function Search (){
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

    return(
        <div className = 'search-bar'>
            <CgSearch/>
            <form className="form" onSubmit={handleSubmit}>
                <label htmlFor = "SearchField"></label>
                <input type="text" placeholder="🔍" id= "query" value = {search.formContent} onChange={handleChange}></input>
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