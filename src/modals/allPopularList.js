import React, {useState, useEffect} from "react";
import Axios from 'axios';
import '../App.css';

function AllPopularList(){

    const [popularSongs, setPopularSongs] = useState([]);

    useEffect(() => {
        Axios.post("http://localhost:8080/popularSongs").then((res) => {
            setPopularSongs(res.data);
        });
    }, []);

    return(
        <div>
            <table id="tableStyle">
                <tr>
                    <th>Popularity Level</th>
                    <th>Number of Songs</th>
                    <th>Percentage</th>
                </tr>
                {popularSongs.map(data => (
                    <tr>
                        <td>{data.popularity}</td>
                        <td>{data.count}</td>
                        <td></td>
                    </tr> 
                ))}
            </table>
        </div>
    )
}


export default AllPopularList;