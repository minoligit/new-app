import React, {useState, useEffect} from "react";
import Axios from 'axios';
import '../App.css';

function Appearance(){

    const [userId, setUserId] = useState(1);
    const [mode, setMode] = useState("");
    const [modeList, setModeList] = useState([]);

    useEffect( () =>{
        const str = {
            userId:userId
        };
        fetchModes();
        Axios.post("http://localhost:8080/getTheme",str).then((res) => {
            setMode(res.data);
        });
    }, []);

    const fetchModes = async() => {
        try{
            const modesdata = await fetch('/selectAllModes');
            setModeList(await modesdata.json());
        } catch (error) {
            console.log("error", error);
        }
    }

    const updateAppearance = () => {
        const str = {
            userId:userId,
            mode:mode,
        }
        Axios.post("http://localhost:8080/updateAppearance",str).then((res) => {
            alert("Theme is updated");
        });
    };

    const labelStyle = {
        width: "40%"
    };
    const buttonStyle = {
        width: "60%"
    };

    return(
        <div className="Content">
            <h3>Appearance</h3><br/>
            <form id="form9">
                <h4>Update Appearance</h4>
                <label style={labelStyle}>Mode</label>
                <select onChange={(e)=>{setMode(e.target.value)}}>
                    <option disabled="disabled" selected="selected">Select Mode</option>
                    {modeList.map(data=>(
                        <option value={data.mode}>{data.mode}</option>
                    ))}
                </select><br/><br/>               
                <div>
                    <button style={buttonStyle} className="btn btn-primary" type="submit" 
                    onClick={updateAppearance}>Update</button>
                </div> 
            </form>
        </div>
    );
}

export default Appearance;