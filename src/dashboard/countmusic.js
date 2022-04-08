import React, {useState, useEffect} from "react";
import Axios from 'axios';
import Modal from 'react-modal';
import '../App.css';
import "./dashboard.css";
import { Col, Row } from "react-bootstrap";
import { Grid, Select } from "@mui/material";
import * as FaIcons from "react-icons/fa";
import * as GiIcons from "react-icons/gi";
import AllPopularList from "../modals/allPopularList";

function CountMusic(){

    const [popularSongs, setPopularSongs] = useState([]);
    const [allPopularListIsOpen, setAllPopularListIsOpen] = useState(false);
	const setAllPopularListTrue = ()=> {
		setAllPopularListIsOpen(true);
	}
	const setAllPopularListFalse = ()=> {
		setAllPopularListIsOpen(false);
	}

    useEffect(() => {
        Axios.post("http://localhost:8080/popularSongs").then((res) => {
            setPopularSongs(res.data);
        });
        
    }, []);

    return(
        <div id="countStyle">
            <Grid>
                <Row id="container">
                    <Col xs={6} md={8}>
                        <h4>Popularity of Songs</h4>
                    </Col>
                    <Col xs={4} md={4}>
                        <Select id="searchbox">
                            <option></option>
                        </Select>
                    </Col>
                </Row><hr id="hrStyle"/>
                <Row id="container">
                    <Col><Row>                    
                            <Col><GiIcons.GiAchievement id="icon1"/>
                            </Col>
                            <Col id="columnStyle">
                                Level 1
                                {popularSongs.slice(1,2).map(data=> (
                                    <div id="getCount">{data.count}</div>
                                ))}
                            </Col>
                        </Row>                        
                    </Col>
                    <Col></Col>
                    <Col><Row>               
                            <Col><GiIcons.GiAchievement id="icon2"/>
                            </Col>
                            <Col id="columnStyle">
                                Level 2
                                {popularSongs.slice(2,3).map(data=> (
                                    <div id="getCount">{data.count}</div>
                                ))}
                            </Col>
                        </Row>                        
                    </Col>
                    <Col></Col>
                    <Col><Row>                
                            <Col><GiIcons.GiAchievement id="icon3"/>
                            </Col>
                            <Col id="columnStyle">
                                Level 3
                                {popularSongs.slice(3,4).map(data=> (
                                    <div id="getCount">{data.count}</div>
                                ))}
                            </Col>
                        </Row>                    
                    </Col>
                </Row><br/><hr id="hrStyle"/>
                <Row className="justify-content-md-center" id="container">
                    <button id="btnStyle" onClick={setAllPopularListTrue}>
                        <FaIcons.FaChevronDown/>
                        <span id="space"></span>View Complete Report</button>
                    <div className="Modal">
                        <Modal isOpen={allPopularListIsOpen} id="popmodal">
                            <button id='closeBtn' onClick={setAllPopularListFalse}>X</button>
                            <AllPopularList />
                        </Modal>
                    </div>		
                </Row>
            </Grid>           
        </div>
    );
}

export default CountMusic;