import React, { useState,useEffect } from "react";
import { getToken, removeUserSession, setUserSession } from '../utils/common';
import {useNavigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import "@popperjs/core";
import '../App.css';
import Axios from 'axios';
import { Link } from "react-router-dom";
import Modal from 'react-modal';
import { Col, Row } from "react-bootstrap";
import * as FaIcons from "react-icons/fa";
import * as FiIcons from "react-icons/fi";
import AllSettings from "../settings/allSettings";
import Emails from "../emails/emails";
import Employees from "../pages/employees";

function Header(){

    const [loggedUser, setLoggedUser] = useState([]);
    const [searchIsOpen, setSearchIsOpen] = useState(false);
    const [outFormIsOpen, setOutFormIsOpen] = useState(false);
    const navigate = useNavigate();

    const setSearchTrue = ()=> { setSearchIsOpen(true); }
	const setSearchFalse = ()=> { setSearchIsOpen(false); }
    const setOutFormTrue = ()=> { setOutFormIsOpen(true); }
	const setOutFormFalse = ()=> { setOutFormIsOpen(false); }

    function logOut(){
        removeUserSession();
        setOutFormFalse();
        window.location.reload(false);
        navigate('/');
    }
    useEffect(() => {
        const str = {
            userId:getToken()
        };
        Axios.post("http://localhost:8080/getLoggedUser",str).then((res) => {
            setLoggedUser(res.data);
        });
    }, []);


    return(
        <div>
            <Col className="Header">
                <Row id="container">               
                    <Col xs={4} md={4}>
                        <div> 
                            <button type="button" id="headerbutton">
                                <FaIcons.FaSearch id="headericon"/>
                            </button>
                            <input type="text" id="searchbox"/>
                            <button onClick={setSearchTrue} 
                                style={{backgroundColor:"#7575c7",borderRadius:"10px",color:"#ffffff",fontSize:"70%",width:"100px"}}>
                                Advanced Search</button>
                        </div>
                        <div>
                            <Modal isOpen={searchIsOpen} id="popmodal-large">
                                <button id='closeBtn' onClick={setSearchFalse}>X</button>
                                <Employees />
                            </Modal>
                        </div>
                    </Col>
                    <Col xs={2} md={2}>
                    </Col>
                    <Col xs={1} md={1}>
                        <div className="dropdown"> 
                            <Emails/>
                        </div>
                    </Col>
                    <Col xs={1} md={1}>
                        <div> 
                            <button type="button" id="headerbutton"><Link to="../pages/notifications">
                                <FaIcons.FaRegBell id="headericon"/></Link>
                            </button>
                        </div>
                    </Col>
                    <Col xs={1} md={1}>
                        <div className="dropdown"> 
                            <AllSettings/>
                        </div>
                    </Col>
                    <Col xs={2} md={2}>
                        <div style={{fontSize:"80%"}} id="headerbutton">
                            {loggedUser.map(data =>(
                                <div>{data.user_name}<br/>{data.address}</div>
                            ))} 
                        </div>
                    </Col>
                    <Col xs={1} md={1}>
                        <div> 
                            <button type="button" id="headerbutton" onClick={setOutFormTrue}>
                                <FiIcons.FiLogOut id="headericon"/>
                            </button>
                        </div>
                        <div>
                            <Modal isOpen={outFormIsOpen} id="popmodal-small">
                                <button id='closeBtn' onClick={setOutFormFalse}>X</button>
                                <div style={{padding:"8%"}}>
                                    Do you want to log-out ?<br/><br/>
                                    <div>
                                        <button onClick={logOut}>Yes</button>
                                    </div>
                                </div>
                            </Modal>
                        </div>
                    </Col>
                </Row>
            </Col>
        </div>
    )
}


export default Header;