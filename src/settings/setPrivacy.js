import React, {useState, useEffect} from "react";
import Axios from 'axios';
import '../App.css';

function Privacy(){

    const [userName, setUserName] = useState(1);
    const [password, setPassword] = useState("");

    const updatePrivacy = () => {
        const str = {
            userName:userName,
            password:password
        }
        Axios.post("http://localhost:8080/updatePrivacy",str).then((res) => {
            alert("Settings are updated");
        });
    };

    const labelStyle = {
        width: "40%"
    };
    const buttonStyle = {
        width: "60%"
    };

    return(
        <div className="modal">
            <h3>Privacy Settings</h3>
            <label>Username</label><br/>
            <input type="text" onChange={(e)=>{setUserName(e.target.value)}}
                style={{borderRadius:"20px"}}/><br/>
                <label>Password</label><br/>
            <input type="text" onChange={(e)=>{setPassword(e.target.value)}}
                style={{borderRadius:"20px"}}/><br/><br/>
            <div>
                <button style={buttonStyle} className="btn btn-primary" type="submit" onClick={updatePrivacy}>Update</button>
            </div> 
        </div>
    );
}

export default Privacy;