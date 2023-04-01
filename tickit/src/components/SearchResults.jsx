import {useState, useEffect, useContext} from 'react'
import { AppContext } from '../Context/AppContext'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'

export default function SearchResults(){
    const { search, setSearch } = useContext(AppContext)
    const navigate = useNavigate()

    const [list, setList] = useState([])
    // const [filtered, setFiltered] = useState([])
    let input = search.query;
    let category = search.category;

    const showDetail = (index) =>(
        navigate(`${category}Detail/${index}`)
    )

    useEffect(()=>{
        const getResults = async() => {
            const response = await axios.get(`http://localhost:8000/${category}/`)
            setList(response.data); 
            // list.map((item=>{
            //     if (item.name.includes(input)){
            //         console.log(item.name)
            //         setFiltered(...filtered)
            //     }
            //     console.log(item.name)
            //     console.log(input)
            // }))
                
            
        }
        getResults();
    }, [input])

    return(
        
        <div className= 'card-container'>
            
        {list.map((item)=>(
            
            <div key={item.id} className="mapped-card-display">
                <h3>{item.name}</h3>
                <div className="img-wrapper">
                    <img src = {item.image_url}/>
                </div>
            </div>
        ))}
    </div>
    )
}