
import { useNavigate } from "react-router-dom"

export default function SearchResult2({result}){


  let nav = useNavigate()

  const go = (index)=>{
    nav(`events/${index}`)
  }    




  return(
    <div className="search-res-list" onClick={() => go(result.id)}>{result.name}</div>
  )
}