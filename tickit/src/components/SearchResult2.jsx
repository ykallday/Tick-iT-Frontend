
import {Routes, Route } from "react-router-dom"
import ArtistDetail from './ArtistDetail'
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

export default function SearchResult2({result}){


  let nav = useNavigate()

  const go = (index)=>{
    nav(`http://localhost:3000/events/${index}`, { replace: true })

  }    




  return(
    <div className="search-res-list" onClick={() => go(result.id)}>
    {result.name}

</div>
  )
}