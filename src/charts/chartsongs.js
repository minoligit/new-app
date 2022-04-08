import React,{useEffect,useState} from 'react';
import Axios from 'axios';
import './charts.css';
import { Row, Col } from "react-bootstrap";
import {Area,AreaChart,YAxis,Legend,Tooltip,CartesianGrid,XAxis, ResponsiveContainer} from "recharts";
import { FiMenu } from "react-icons/fi";

function ChartSongs(){

    const [songList, setSongList] = useState([]);

    useEffect(() => {
        Axios.post("http://localhost:8080/selectAllMusic").then((res) => {
            setSongList(res.data);
        });
    }, []);

    return(
        <div id="charts">
            <Row>
                <Col xs={11} md={11}><h4>Song Attributes</h4></Col>
                <Col xs={1} md={1}><FiMenu/></Col>
            </Row><br/>          
            <ResponsiveContainer width={500} height={300} >
             <AreaChart data={songList}>
               <CartesianGrid strokeDasharray="3 3" stroke='#808080'/>
               <XAxis dataKey={songList.songId} domain={[1,'dataMax+1']} interval={19} stroke='#000000'/>
               <YAxis domain={[0,1]} stroke='#000000'/>
               <Tooltip />
               <Legend />
      
               <Area dataKey="valence" name="Valence" key="valence" dot={false}/>
             </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}


export default ChartSongs;

