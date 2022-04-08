import React, { useState } from "react";
import Axios from 'axios';
import '../App.css';

function AddPerson() {

    const [name,setName] = useState("");
    const [worth,setWorth] = useState("");
    const [bYear,setBYear] = useState("");
    const [category,setCategory] = useState("");

    const submitUser = () => {
        Axios.post("http://localhost:8080/addPeople", 
        {name:name,worth:worth,bYear:bYear,category:category}).then((res) => {
            alert("User added Successfully");
        });
    };

    const labelStyle = {
        width: "40%"
    };

    const buttonStyle = {
        width: "60%"
    };

    return(
        <div>
            <form id="form1">
                <h3>Add New Person</h3><br/>
                <label style={labelStyle}>Name</label>
                <input id="addInput" type="text" name="name" required onChange={(e)=>{setName(e.target.value)}}/><br/><br/>
                <label style={labelStyle}>Worth(USD)</label>
                <input id="addInput" type="number" name="worth" onChange={(e)=>{setWorth(e.target.value)}}/><br/><br/>
                <label style={labelStyle}>Birth Year</label>
                <input id="addInput" type="number" name="bYear" onChange={(e)=>{setBYear(e.target.value)}}/><br/><br/>
                <label style={labelStyle}>Category</label>
                <select name="category" id="addInput" onChange={(e)=>{setCategory(e.target.value)}}>
                    <option></option>
                    <option value="Actors">Actors</option>
                    <option value="Actresses">Actresses</option>
                    <option value="Athletes">Athletes</option>
                    <option value="Authors">Authors</option>
                    <option value="Comedians">Comedians</option>
                    <option value="Musicians">Musicians</option>
                    {/* <option value="Personalities">Personalities</option> */}
                </select><br/><br/>
                <div>
                    <button style={buttonStyle} className="btn btn-primary" type="submit" value="submit" onClick={submitUser}>Add Person</button>
                    <br/><br/>
                    <button style={buttonStyle} className="btn btn-danger">Clear</button>
                </div>        
            </form>
        </div>
    );

}

export default AddPerson;