import React, { useState } from "react";
import '../App.css';

function AddPlaces(){

    const [place,setPlace] = useState("");
    const [address,setAddress] = useState("");

    const labelStyle = {
        width: "40%"
    };
    const buttonStyle = {
        width: "60%"
    };

    return(
        <div>
            <form id="form2" action="http://localhost:8080/addPlace" method="POST" >
                <h4>Add New Place</h4>
                <label style={labelStyle}>Name of Place</label>
                <input id="addInput" type="text" name="place" required onChange={(e)=>{setPlace(e.target.value)}}/><br/><br/>
                <label style={labelStyle}>Name of Place</label>
                <input id="addInput" type="text" name="address" required onChange={(e)=>{setAddress(e.target.value)}}/><br/><br/>
                <label style={labelStyle}>Images</label>
                {/* <input id="addInput" type="file" name="image"/><br/><br/><br/> */}
                <div>
                    <button style={buttonStyle} className="btn btn-primary" type="submit" value="submit" >Add Place</button>
                    <br/><br/>
                    <button style={buttonStyle} className="btn btn-danger">Clear</button>
                </div> 
            </form>
        </div>
    );
}

export default AddPlaces;