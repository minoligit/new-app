import React from "react";
import '../dashboard/dashboard.css';
import CountMusic from "../dashboard/countmusic";
import { Row, Col } from "react-bootstrap";
import ChartSongs from "../charts/chartsongs";
import LatestSongs from "../dashboard/latestsongs";
import ChartPopular from "../charts/chartpopular";

function DashPage(){
    return(
        <div className="Content">
            <CountMusic/><br/><br/><br/>
            <Row className="justify-content-md-center" id="container">
                <Col><ChartSongs/></Col>
                {/* <Col><LatestSongs/></Col> */}
                <Col><ChartPopular/></Col>
            </Row>
        </div>
    );
}

export default DashPage;