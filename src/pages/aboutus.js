import React, { useState,useEffect } from "react";
import Axios from 'axios';
import Modal from 'react-modal';
import AddUser from "../modals/addUser";
import { Row, Col, Image } from "react-bootstrap";
import '../App.css';

function AboutUs(){

    const [usersList, setUsersList] = useState([]);
    const [moreIsOpen, setMoreIsOpen] = useState(false);

    const setMoreTrue = ()=> {
		setMoreIsOpen(true);
	}
	const setMoreFalse = ()=> {
		setMoreIsOpen(false);
	}

    useEffect(() => {
        Axios.get("http://localhost:8080/selectAll").then((res) => {
            setUsersList(res.data);
        });
    }, []);

    return(
        <div className="Content">
            <h3>AboutUs</h3>
            <div>
                <h4>History</h4>
            </div>
            <div>
                <h4>Vision and Mission</h4>
            </div><br/><br/>
            <div>
                <h4>Members</h4>
                <table>
                    {usersList.map(data => (
                    <tr key={data.user_id} >
                        <td><Image src={data.image} alt={data.image} fluid/></td>
                        <td>{data.user_name}<br/>{data.occupation}<br/>
                        <button className="btn btn-primary" onClick={setMoreTrue}>More</button></td>
                        <div className="Modal">
                            <Modal isOpen={moreIsOpen} id="popmodal">
                                <button id='closeBtn' onClick={setMoreFalse}>X</button>
                                <Row>
                                    <Col></Col>
                                    <Col>
                                        {data.user_name}<br/>{data.occupation}<br/>{data.address}
                                    </Col>
                                </Row>
                            </Modal>
                        </div>
                    </tr>
                    ))}
                </table>
            </div><br/><br/>
            <div>
                <h4>Achievements</h4>
                <AddUser/>
            </div><br/><br/> 
        </div>
    );
}

export default AboutUs;