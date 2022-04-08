import React,{useEffect,useState} from 'react';
import Axios from 'axios';
import '../App.css';
import '../charts/charts.css';
import { Row, Col } from "react-bootstrap";
import { FiMenu } from "react-icons/fi";

function LatestSongs(){

    const [songList, setSongList] = useState([]);

    useEffect(() => {
        Axios.post("http://localhost:8080/selectAllMusic").then((res) => {
            setSongList(res.data);
        });
    }, []);

    return(
        <div id='charts'>
            <Row>
                <Col xs={11} md={11}><h4>New Releases</h4></Col>
                <Col xs={1} md={1}><FiMenu/></Col>
            </Row><br/> 
            <table>
                {songList.slice(0,5).map(data => (
                    <tr>
                        <td><div>{data.year}</div></td>
                        <td><div>{data.name}</div></td>
                        <td><div>{data.artists}</div></td>
                    </tr>
                ))}
            </table><br/>
            <Row className="justify-content-md-center">
                <button id="btnStyle">View All Songs</button>
            </Row>
            
        </div>
    )
}


export default LatestSongs;