import {Link} from 'react-router-dom'


export default function Nav(){
    return(
        <div>
            <div className = "nav">
                <Link to = "/"><button>Home</button></Link>
                <Link to = "/venues"><button>Venues</button></Link>
                <Link to = "/events"><button>Events</button></Link>
                <Link to = "/artists"><button>Artists</button></Link>
                <Link to = "/profile"><button>Profile</button></Link>
            </div>
            <div className = 'accounts-nav'>
                <Link to = "/register"><button>Register</button></Link>
                <Link to = "/login"><button>Login</button></Link>
            </div>

        </div>
    )
}