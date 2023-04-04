import Nav from "./Nav"
import {Link} from 'react-router-dom'
export default function Confirmation(){
    return(
        <div>
            <Nav/>
            <h2 id = "confirm">Congrats! Your purchase is confirmed. Enjoy the show! </h2>
            <div className="nav-btn-pages">
            <Link to="/events"><button>Browse More Events</button></Link>
            </div>
        </div>
    )
}