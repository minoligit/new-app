import React, {useState, useEffect} from "react";
import Axios from 'axios';
import '../App.css';

function General(){
    const [userId, setUserId] = useState(1);
    const [navBarLocation, setNavBarLocation] = useState("");
    const [fontSize, setFontSize] = useState("");
    const [navBarLocationList, setNavBarLocationList] = useState([]);
    const [fontSizeList, setFontSizeList] = useState([]);

    useEffect( () =>{
        const str = {
            userId:userId
        };
        fetchGSettings();
        Axios.post("http://localhost:8080/getAppearnace",str).then((res) => {
            setNavBarLocation(res.data.navBarLocation);
            setFontSize(res.data.fontSize);
        });
    }, []);

    const fetchGSettings = async() => {
        try{
            const navbarlocdata = await fetch('/selectAllNavBarLoc');
            setNavBarLocationList(await navbarlocdata.json());
            const fontsizedata = await fetch('/selectAllFontSizes');
            setFontSizeList(await fontsizedata.json());
        } catch (error) {
            console.log("error", error);
        }
    }

    const updateGSettiings = () => {
        const str = {
            userId:userId,
            navBarLocation:navBarLocation,
            fontSize:fontSize
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
            <h3>Settings</h3><br/>
            <form id="form9">
                <h4>Update General Settings</h4>
                <label style={labelStyle}>Navigation Bar</label>
                <select onChange={(e)=>{setNavBarLocation(e.target.value)}}>
                    <option disabled="disabled" selected="selected">Select Location</option>
                    {navBarLocationList.map(data=>(
                        <option value={data.location}>{data.location}</option>
                    ))}
                </select><br/>                
                <label style={labelStyle}>Font Size</label>
                <select onChange={(e)=>{setFontSize(e.target.value)}}>
                    <option disabled="disabled" selected="selected">Select fontSize</option>
                    {fontSizeList.map(data=>(
                        <option value={data.size}>{data.size}</option>
                    ))}
                </select><br/><br/>               
                <div>
                    <button style={buttonStyle} className="btn btn-primary" type="submit" 
                    onClick={updateGSettiings}>Update</button>
                </div> 
            </form>
        </div>
    );
}

export default General;