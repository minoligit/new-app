import React, { useState,useEffect } from "react";
import Axios from 'axios';
import '../App.css';
import { Row, Col } from "react-bootstrap";
import EventLine from "../charts/eventline";
import SearchEvent from "../components/searchEvent";

function OverView(){

    const [title,setTitle] = useState("");
    const [content,setContent] = useState("");
    const [eventOn,setEventOn] = useState(new Date());
    const [published,setPublished] = useState(new Date());

    const submitEvent = () => {
        const str = {
            title:title,
            content:content,
            eventOn:eventOn,
            published:published
        }
        Axios.post("http://localhost:8080/addEvent", str).then((res) => {
        });
    };
    useEffect(() => {
        document.getElementById("addEvent").style.display="block";
        document.getElementById("searchEvent").style.display="none";    
    }, []);
    function setAddEvent(){
        document.getElementById("addEvent").style.display="block";
        document.getElementById("searchEvent").style.display="none"; 
    };
    function setSearchEvent(){
        document.getElementById("searchEvent").style.display="block";
        document.getElementById("addEvent").style.display="none"; 
    }

    const labelStyle = {
        width: "40%"
    };
    const buttonStyle = {
        width: "60%"
    };
    
    return(
        <div className="Content">
            <h3>Overview of Events</h3>
            <br/><br/>
            <Row>
                <Col><EventLine/></Col>
                <Col>
                    <button id="selectButton" onClick={setAddEvent}>Add New Event</button>
                    <button id="selectButton" onClick={setSearchEvent}>Search Event</button>
                    <div id="addEvent" style={{padding:"50px"}}>
                    <form>
                        <label style={labelStyle}>Title</label>
                        <input id="addInput" type="text" name="title" onChange={(e)=>{setTitle(e.target.value)}}/><br/><br/>
                        <label style={labelStyle}>content</label>
                        <textarea id="addInput" type="text" name="content" onChange={(e)=>{setContent(e.target.value)}}/><br/><br/>
                        <label style={labelStyle}>Date and Time</label>
                        <input id="addInput" type="datetime-local" name="eventOn" onChange={(e)=>{setEventOn(e.target.value)}}/><br/><br/>
                        <label style={labelStyle}>Published on</label>
                        <input id="addInput" type="datetime-local" name="published" onChange={(e)=>{setPublished(e.target.value)}}/><br/><br/>
                        <div>
                            <button style={buttonStyle} className="btn btn-primary" type="submit" value="submit" onClick={submitEvent}>Publish</button>
                            <br/><br/>
                            <button style={buttonStyle} className="btn btn-danger">Clear</button>
                        </div>        
                    </form>
                    </div>
                    <div id="searchEvent" style={{padding:"50px"}}>
                        <SearchEvent/>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default OverView;