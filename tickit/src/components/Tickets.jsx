import {useParams,useNavigate} from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios'

import Nav from './Nav'
export default function Tickets(){

    const [event, setEvent] = useState("")
    let { id } = useParams();
    let navigate = useNavigate()
    const [formValues, setFormValues] = useState({
        name: "",
        quantity:"",
        credit:"",
        zipcode:"",
        exp:"",
        ccv:"",
        address:""
      });
    useEffect(()=>{
        const getEvent = async () => {
            const res = await axios.get(`http://localhost:8000/events/${id}?format=json`);
            setEvent(res.data)
            console.log(res)
        }
        getEvent()
        console.log(event)},[]);


    const handleSubmit = async (e) => {
            e.preventDefault();
            const tick = {
                show: event.name,
                name: formValues.name,
                quantity: formValues.quantity,
                credit:formValues.credit,
                zipcode:formValues.zipcode,
                exp:formValues.exp,
                ccv:formValues.ccv,
                address:formValues.address
                };
                console.log(tick)
            await axios.post('http://localhost:8000/ticket/', tick);
            setFormValues({
                name: "",
                quantity:"",
                credit:"",
                zipcode:"",
                exp:"",
                ccv:"",
                address:""
            })
            navigate("/confirmation")
            
    }
    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
      };
    const goBack = () => navigate(-1);
    return(
        <div id="tickets">
            <Nav/>
            <div className = "nav-btn-pages"><button className="nav-btn-pages" onClick={goBack}>Back</button></div>
            <h1>Buy tickets for {event.name}</h1> 
            <form className = "buyTix" onSubmit = {handleSubmit}>
                <h4>Date: {event.date}</h4>
                <h4>Time: {event.start_time} - {event.end_time}</h4>
                <h4>Ticket price: ${event.ticket_price} each</h4>
                <div className="name">
                <h3><label htmlFor="name">your name:</label></h3>
                <input onChange={handleChange} value={formValues.name} name="name" type="text" placeholder="" required/>
                </div>
                <div className="quantity">
                <h3><label htmlFor="quantity">How Many?</label></h3>
                <select id="quantity" name="quantity" onChange={handleChange} required>
                <option id="quantity" value="0">Select:</option>
                    <option id="quantity" value="1">1</option>
                    <option id="quantity" value="2">2</option>
                    <option id="quantity" value="3">3</option>
                    <option id="quantity" value="4">4</option>
                    <option id="quantity" value="5">5</option>
                    <option id="quantity" value="6">6</option>
                    <option id="quantity" value="7">7</option>
                    <option id="quantity" value="8">8</option>
                </select>
                <div>
                <h3><label htmlFor="credit">credit card:</label></h3>
                <input onChange={handleChange} value={formValues.credit} name="credit" type="text" placeholder="" maxLength="19" required/>
                </div>
                <div>
                <h3><label htmlFor="zipcode">billing zipcode:</label></h3>
                <input onChange={handleChange} value={formValues.zipcode} name="zipcode" type="text" placeholder="" required/>
                </div>
                <div>
                <h3><label htmlFor="exp">expiration date:</label></h3>
                <input onChange={handleChange} value={formValues.exp} name="exp" type="text" placeholder="##/##" maxLength="5" required/>
                </div>
                <div>
                <h3><label htmlFor="exp">CCV</label></h3>
                <input onChange={handleChange} value={formValues.ccv} name="ccv" type="text" placeholder="" maxLength="4"required/>
                </div>
                <div>
                <h3><label htmlFor="address">billing address:</label></h3>
                <input onChange={handleChange} value={formValues.address} name="address" type="text" placeholder="" required/>
                </div>
                <input type="submit" value="Purchase" id="buyticket" disabled={
                    !formValues.name ||
                    !formValues.quantity ||
                    !formValues.credit ||
                    !formValues.zipcode ||
                    !formValues.exp ||
                    !formValues.ccv ||
                    !formValues.address 
                     }></input>
                </div>
            </form>
        </div>
    )
}       
