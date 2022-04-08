import React,{useEffect,useState} from 'react';
import Axios from 'axios';
import { Row, Col } from "react-bootstrap";
import {Pie,PieChart,Tooltip} from "recharts";
import { FiMenu } from "react-icons/fi";

function ChartPopular(){

    const [songList, setSongList] = useState([]);

    useEffect(() => {
        Axios.post("http://localhost:8080/selectAllMusic").then((res) => {
            setSongList(res.data);
        });
    }, []); 

    return(
        <div id="charts">

            <Row>
                <Col xs={11} md={11}><h4>New Releases</h4></Col>
                <Col xs={1} md={1}><FiMenu/></Col>
            </Row>
            <Row className="justify-content-md-center">
                <PieChart width={300} height={300}>
                    <Pie data={songList} dataKey="year" outerRadius={80} fill="#FF69B4" />
                    <Pie data={songList} dataKey="popularity" innerRadius={90} outerRadius={120} fill="#AA80B4" />
                    <Tooltip/>
                </PieChart>
            </Row>
            <Row className="justify-content-md-center">
                <button id="btnStyle">View All Songs</button>
            </Row>
        </div>
    );

}


export default ChartPopular;

