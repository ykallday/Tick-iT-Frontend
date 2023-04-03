import React from "react"
import SearchResult2 from "./SearchResult2"
export default function SearchResultsList({results}){

  return(
    <div className="results-list">
      {
      results.map((result, index)=>(
        <SearchResult2 result={result} key={index}/>
      ))
      }
    </div>

)}