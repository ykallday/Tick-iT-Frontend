import { useState } from 'react'
import {Link} from 'react-router-dom'
import Search from './Search'
import SearchResultsList from './SearchResultsList'


export default function Nav(){


    const[results, setResults] =useState([])

    return(
        <div className="block1">
        <div className="hero-nav">
            <div className = "hero-nav-links">
                <div className="ul">
                    <div>
                        <Link to = "/" className="a"data-text="&nbsp;Home">&nbsp;Home&nbsp;</Link>
                    </div>
                    <div>
                        <Link to = "/venues" className="a"data-text="&nbsp;Venues">&nbsp;Venues&nbsp;</Link>
                    </div>
                    <div>
                        <Link to = "/events" className="a"data-text="&nbsp;Events">&nbsp;Events&nbsp;</Link>
                    </div>
                    <div>
                        <Link to = "/artists" className="a"data-text="&nbsp;Artists">&nbsp;Artists&nbsp;</Link>
                    </div>
                    {/* <div>
                        <Link to = "/profile" className="a"data-text="&nbsp;Profile">&nbsp;Profile&nbsp;</Link>
                    </div> */}
                </div>

                <Search setResults={setResults}/>
                <SearchResultsList results={results}/>
            </div>
        </div>

    </div>
    )
}
