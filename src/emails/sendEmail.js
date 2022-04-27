import React, {useState} from "react";
import Axios from 'axios';
import '../App.css';

function SendEmail(){

    const [receiver,setReceiver] = useState("");
    const [subject,setSubject] = useState("");
    const [message,setMessage] = useState("");

    const send = () => {
        const str = {
            receiver:receiver,
            subject:subject,
            message:message
        };
        Axios.post("http://localhost:8080/sendEmail", str).then((res) => {
            alert("Successfully Sent");
        });
    }
    const labelStyle = {
        width: "40%"
    };
    const buttonStyle = {
        width: "60%"
    };

    return(
        <div className="Content">
            <form id="form4">
                <label style={labelStyle}>To</label>
                <input id="addInput" type="text" name="receiver" onChange={(e)=>{setReceiver(e.target.value)}}/><br/><br/>
                <label style={labelStyle}>Subject</label>
                <input id="addInput" type="text" name="subject" onChange={(e)=>{setSubject(e.target.value)}}/><br/><br/>
                <label style={labelStyle}>Message</label>
                <input id="addInput" type="text" name="message" onChange={(e)=>{setMessage(e.target.value)}}/><br/><br/>
                <div>
                    <button style={buttonStyle} className="btn btn-primary" type="submit" value="submit" onClick={send}>Send</button>
                    <br/><br/>
                    <button style={buttonStyle} className="btn btn-danger">Clear</button>
                </div> 
            </form>
        </div>
    )
}

export default SendEmail;