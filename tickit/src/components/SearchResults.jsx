import {useState, useEffect, useContext} from 'react'
import { AppContext } from '../Context/AppContext'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'

import Nav from './Nav'

export default function SearchResults(){
    const { search, setSearch } = useContext(AppContext)
    const navigate = useNavigate()

    const [list, setList] = useState([])
    let filtered = []
    let input = search.query;
    console.log(input)
    let category = search.category;
    const goBack = () => navigate(-1);
    const showDetail = (index) =>(
        navigate(`${category}Detail/${index}`)
    )

    useEffect(()=>{
        const getResults = async() => {
            const response = await axios.get(`http://localhost:8000/${category}/`)
            setList(response.data); 
        }
        getResults();
    }, [input, category])

    if (list){
        list.map((item=>{
        if (item.name.toLowerCase().includes(input)){
           filtered.push(item)
        }}))}
    
    return(
        <div>
        <Nav/>
        <div className = "nav-btn-pages"><button className="nav-btn-pages" onClick={goBack}>Back</button></div>
        <div className= 'card-container'>
        {filtered.map((item)=>(
            
            <div key={item.id} className="mapped-card-display" onClick={() => showDetail(item.id)} >
                <h3>{item.name}</h3>
                <div className="img-wrapper">
                    <img src = {item.image_url}/>
                </div>
            </div>
        ))}
    </div>
    </div>
    )
}