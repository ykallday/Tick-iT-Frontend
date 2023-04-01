import Nav from './Nav'
import Search from './Search'
export default function Header (){
    return(
        <div>
            <Nav/>
            <h1 className = "site-title">Tick-iT</h1>
            <Search/>
        </div>
    )
}