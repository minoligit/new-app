import React, { useState,useEffect } from "react";
import {useNavigate} from 'react-router-dom';
import Axios from 'axios';
import Background from '../images/userLogin.jpg'
import '../App.css';
import { setUserSession } from '../utils/common';
import AddUser from "../modals/addUser";

function Login(props){

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        document.getElementById("loginForm").style.display="block";
        document.getElementById("registerForm").style.display="none";    
    }, []);

    const handleLogin = () => {
        setError(null);
        setLoading(true);
        const str = {
            userName:userName,
            password:password
        }
        if(userName!=""&&password!=""){
            Axios.post('http://localhost:8080/verifyLogin', str).then(res => {
                setLoading(false);
                setUserSession(res.data[0].user_id, res.data[0].username);
              //   props.history.push('/dashpage');
                navigate('/pages/dashpage');
                window.location.reload(false);
              }).catch(error => {
                setLoading(false);
                // if (error.res.status === 401) setError(error.res.data.message);
                // else setError("Something went wrong. Please try again later.");
                setError("Something went wrong. Please try again later.");
              }); 
        }
        else setError("Please enter correct username and password.");
        setLoading(false);
    }
    function createAccount(){
        document.getElementById("loginForm").style.display="none";
        document.getElementById("registerForm").style.display="block";
    }

    return(
        <div style={{backgroundImage:"url(${../images/userLogin.jpg})",height:"100%",width:"100%",alignContent:"center"}}>
            <style type="text/css">
                {"#SideBar {display: none}"}{".Header {display: none}"}
            </style>
            <div style={{textAlign:"right",padding:"50px"}}>
                <button onClick={createAccount}>Create New Account</button>
            </div>
            <div style={{margin:"auto",width:"30%",textAlign:"center",minWidth:"400px"}}>
                <div id="loginForm">
                    <h3 style={{backgroundImage:"linear-gradient(to bottom right, rgb(102, 116, 153), rgb(64, 51, 110))",
                        width:"100%",padding:"5%",color:"white",margin:"0"}}>User Login</h3><br/>
                    <label>Username</label><br/>
                    <input type="text" placeholder="Enter Username..." required 
                        onChange={(e)=>{setUserName(e.target.value)}}
                        style={{borderRadius:"20px",textAlign:"center",width:"50%"}}/><br/><br/>
                    <label>Password</label><br/>
                    <input type="password" placeholder="Enter Password..." required 
                        onChange={(e)=>{setPassword(e.target.value)}}
                        style={{borderRadius:"20px",textAlign:"center",width:"50%"}}/><br/>
                    {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
                    <input type="button" value={loading ? 'Loading...' : 'Login'} 
                        style={{minWidth:"20%",backgroundColor:"#9690eb",borderRadius:"15px",margin:"2%"}}
                        onClick={handleLogin} disabled={loading} /><br />
                    <button style={{border:"none",textDecoration:"underline",color:"blue",backgroundColor:"transparent"}}>Forgot Password</button><br/><br/>
                </div> 
                <div id="registerForm">
                    <h3 style={{backgroundImage:"linear-gradient(to bottom right, rgb(102, 116, 153), rgb(64, 51, 110))",
                        width:"100%",padding:"5%",color:"white",margin:"0"}}>Create Account</h3><br/>
                    <AddUser />
                </div> 
            </div>            
        </div>
    );
}

export default Login;