import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import "@popperjs/core";
import '../App.css';
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import * as FaIcons from "react-icons/fa";
import AllSettings from "../settings/allSettings";
import Emails from "../emails/emails";

function Header(){

    return(
        <div>
            <Col className="Header">
                <Row id="container">
                    <Col xs={1} md={1}>
                        <div className="dropdown"> 
                            <button type="button" id="headerbutton">
                            <FaIcons.FaSearch id="headericon"/></button>
                        </div>
                    </Col>
                    <Col xs={1} md={1}>
                        <div className="dropdown"> 
                            <button type="button" data-toggle="dropdown" id="headerbutton">Menu
                            <span className="caret"></span></button>
                        </div>
                    </Col>
                    <Col xs={1} md={1}>
                        <div> 
                            <button type="button" id="headerbutton"><Link to="../pages/notifications">
                                <FaIcons.FaRegBell id="headericon"/></Link>
                            </button>
                        </div>
                    </Col>
                    <Col>
                        <div className="dropdown"> 
                            <AllSettings/>
                        </div>
                    </Col>
                    <Col>
                        <div className="dropdown"> 
                            <Emails/>
                        </div>
                    </Col>
                </Row>
            </Col>
        </div>
    )
}


export default Header;