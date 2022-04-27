import React, { useEffect } from "react";
import {useNavigate} from 'react-router-dom';
import '../dashboard/dashboard.css';
import CountMusic from "../dashboard/countmusic";
import { getToken} from '../utils/common';
import { Row, Col } from "react-bootstrap";
import ChartSongs from "../charts/chartsongs";
import ChartPopular from "../charts/chartpopular";

function DashPage(props){

    const navigate = useNavigate();

    useEffect(() => {
        // const token = getToken();
        // if (!token) {
        //     navigate('/');
        // }
     
    }, []);

    return(
        <div className="Content">
            <CountMusic/><br/><br/><br/>
            <Row className="justify-content-md-center" id="container">
                <Col><ChartSongs/></Col>
                <Col><ChartPopular/></Col>
            </Row>
        </div>
    );
}

export default DashPage;