import React, { useState } from "react";
import Axios from 'axios';
import '../App.css';

function SearchEvent(){

    const [title,setTitle] = useState("");
    const [eventOn,setEventOn] = useState(new Date());
    const [event,setEvent] = useState([]);

    const searchEvent = () => {
        const str = {
            title:title,
            eventOn:eventOn
        }
        Axios.post("http://localhost:8080/searchEvent", str).then((res) => {
            setEvent(res.data);
        });
    };
    const labelStyle = {
        width: "40%"
    };

    return(
        <div>
            <form id="form2">
                <label style={labelStyle}>Title</label><br/>
                <input id="addInput" type="text" name="title" onChange={(e)=>{setTitle(e.target.value)}}/><br/>
                <label style={labelStyle}>Date and Time</label><br/>
                <input id="addInput" type="datetime-local" name="eventOn" onChange={(e)=>{setEventOn(e.target.value)}}/>
                <br/><br/>
                <div>
                    <button className="btn btn-primary" type="submit" value="submit" onClick={searchEvent}>Search</button>
                </div>     
            </form><br/><br/>
            {event.map(data => {
                return(
                    <div>{data.title}{data.eventOn}{data.content}{data.published}</div>
                )         
            })}   
        </div>
    )
}

export default SearchEvent;