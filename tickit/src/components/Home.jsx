import Search from "./Search"
import { Link } from "react-router-dom"
import { useState } from "react"

export default function Home(){


const[event, setEvent]= useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16])

const template=(index)=>{

    let eventV = (

        <div className="events-box"> 
            <div className="image">
                <img className="events-img" src="https://media.gettyimages.com/id/978980792/photo/alex-turner-of-arctic-monkeys-performs-at-coca-cola-roxy-on-june-19-2018-in-atlanta-georgia.jpg?s=612x612&w=0&k=20&c=XepG2gHNuLqlzeezkocFiYC7x_DR1TWKoGnpG0dojLw=" />
        
            </div>
            <div className="event-date">
                <div className="img-details">
                <h4>SUN | AUG 11 7:00PM</h4>
                <span className="img-loco">Forest Hills, NY Forest Hills Stadium</span>

                <span className="img-title">Arctic Monkeys</span>
                </div>
            </div>
        </div> 

    )
    return (eventV)
}

    function multi(){
        return(
            event.map((event,index)=>(
             <div key={index}>
                {template(index)}
             </div>
              
            ))
        )
    }
    return(

        <div className="home">
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
                            <div>
                                <Link to = "/profile" className="a"data-text="&nbsp;Profile">&nbsp;Profile&nbsp;</Link>
                            </div>
                        </div>

                        <div className = 'accounts-nav'>
                            <Link to = "/register"><button>Register</button></Link>
                            <Link to = "/login"><button>Login</button></Link>
                        </div>

                    </div>
                </div>

            </div>

            <div className="block2">

                <div className= "hero-container">

                    <h2 className="hero-text">
                        Chicago's Best Concert Ticket website. </h2>
                    <h3>Buy your tickets to local shows FROM locals, and forget those fees.</h3>
                    <btn> 
                        <span>
                            <ul>
                                <li>T</li>
                                <li>i</li>
                                <li>c</li>
                                <li>k</li>
                                <li>e</li>
                                <li>t</li>
                                <li>s</li>
                            </ul>
                        </span>
                    </btn>
                    {/* <img className = "hero-img"src="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?cs=srgb&dl=pexels-sebastian-ervi-1763075.jpg&fm=jpg" width="850px" height="600px" ></img> */}
                </div>
                <div className="upcoming-events-container">
                    <div className="upcoming-event-inner">
                        {/* <h2 className="upcoming-event-text">Checkout Upcoming Events</h2>
                        <btn className="upcoming-events-btn">See All</btn> */}
                    </div>
                    <div className="upcoming-events-list">
                    {multi()}
                    </div>
                
                </div> 
           </div>
        </div>
    )
}