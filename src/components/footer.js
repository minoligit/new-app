import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import '../App.css';
import * as FaIcons from "react-icons/fa";

function Footer(){

    return(
        <div>
            <Container>
                <Row>
                    <Col xs={6} md={6}>
                        <h4>New-App Footer</h4>
                        This is the footer of the app.
                    </Col>
                    <Col xs={4} md={4}>
                        <a href="https://www.facebook.com/login/"><FaIcons.FaFacebook style={{fontSize:"250%"}}/></a>
                        <span id="space"></span>
                        <a href="https://www.instagram.com/accounts/login/"><FaIcons.FaInstagram style={{fontSize:"250%"}}/></a>
                        <span id="space"></span>
                        <a><FaIcons.FaTwitter style={{fontSize:"250%"}}/></a>
                    </Col>
                    <Col xs={2} md={2}>3</Col>
                </Row>
            </Container>
        </div>
    )
}


export default Footer;