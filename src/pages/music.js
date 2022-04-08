import React,{useState} from 'react';
import Axios from 'axios';
import '../App.css';

function Music (){

    const [year, setYear] = useState();
    const [songList, setSongList] = useState([]);

    const submitYear = () => {
        const str = {
            year:year
        };
        Axios.post("http://localhost:8080/selectedMusic", str).then((res) => {
            console.log("sdas");
            setSongList(res.data);
        });
    }
    // useEffect(() => {
    //     const str = {
    //         year:year
    //     };
    //     Axios.post("http://localhost:8080/selectedMusic", str).then((res) => {
    //         setSongList(res.data);
    //     });
    // }, []);
    const labelStyle = {
        width: "20%"
    };
    const buttonStyle = {
        width: "10%"
    };

    return(
        <div className="Content">
            <br/><br/>
            <form id='form3'>
                <label style={{labelStyle}}>Enter Year</label>
                <input id="addInput" type="text" name="year" onChange={(e)=>{setYear(e.target.value)}}/><br/><br/>
                <div>
                    <button style={{buttonStyle}} className="btn btn-primary" type="submit" value="submit" 
                    onClick={submitYear}>Search</button>
                </div>
            </form><br/><br/>
            <table id="tableStyle">
                <tr>
                    <th>Name</th><th>Artists</th><th>Duration(ms)</th><th>Popularity</th><th>Tempo</th>
                </tr>
                {songList.map(data => (
                    <tr key={data.songId}>
                        <td>{data.name}</td>
                        <td>{data.artists}</td>
                        <td>{data.duration_ms}</td>
                        <td>{data.popularity}</td>
                        <td>{data.tempo}</td>
                    </tr>
                ))}
                <tr>
                    <td></td>
                </tr>
            </table>
        </div>
    );
}


export default Music;