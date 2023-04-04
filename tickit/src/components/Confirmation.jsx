import Nav from "./Nav"
import {Link} from 'react-router-dom'
export default function Confirmation(){
    return(
        <div>
            <Nav/>
            <h4>Congrats! Your purchase is confirmed. Enjoy the show! </h4>
            <Link to="/events"><button>Browse More Events</button></Link>
        </div>
    )
}