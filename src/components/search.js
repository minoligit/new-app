import React, { useState,useEffect } from "react";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
import operations from '../data/operations.json';

function SearchBar({search,sendToEmployees}){

    const [columnsList, setColumnsList] = useState([]);
    const [operationsList, setOperationsList] = useState([]);
    const [selectedColumn, setSelectedColumn] = useState("");
    const [selectedHeader, setSelectedHeader] = useState("");
    const [selectedOperation, setSelectedOperation] = useState("");
    const [input, setInput] = useState(null);
    const [suggestions, setSuggestions] = useState([]);
    var Min,Max;

    useEffect(() => {
        Axios.get("http://localhost:8080/sendEmpDescription").then((res) => {
            setColumnsList(res.data[0]);
        });
    }, []);
    function setHead(e) {
        setSelectedHeader(e.target[e.target.selectedIndex].id);
        setSelectedColumn(e.target.value);
        setSelectedOperation(null);
        for (var i=0; i<operations.length; i++) {
            if (operations[i].name === e.target.value) {
                setOperationsList(operations[i].operations);
            }
        }   
    }
    function setInputVal(e) {
        setInput(e.target.value);       
        if(selectedColumn==="char"||selectedColumn==="varchar"||selectedColumn==="text"){ 
            const str = {
                header:selectedHeader,
                operation:selectedOperation,
                input:e.target.value                
            }          
            Axios.post("http://localhost:8080/getSuggestions",str).then((res) => {
                setSuggestions(res.data);
            });
        }
        else if(selectedColumn==="int(2)"||selectedColumn==="int(3)"){  
            const str = {
                header:selectedHeader               
            }         
            Axios.post("http://localhost:8080/getMinMax",str).then((res) => {
                console.log(Min);
            });
        }
    }
    function displaySug(){
        if(selectedColumn==="char"||selectedColumn==="varchar"||selectedColumn==="text"){
            return(
                <div>
                    <datalist id="sug" value={input} onChange={(e)=>{setInput(e.target.value)}}>
                        {suggestions.map(data=>(
                            <option value={data.header}/>
                        ))}
                    </datalist>
                </div>
            )
        }
    }
    function getType(val){
        let str = "";
        if(val.startsWith("int")||val.startsWith("double")){str = "number";}
        else if(val.startsWith("char")||val.startsWith("varchar")||val.startsWith("text")){str = "text";}
        else{str = "text";}
        return str;
    }

    return (
        <div>
            <form>
                <div id="form8">
                    {selectedHeader}
                    <select onChange={(e)=>{setHead(e)}} id="searchElement">
                        <option>Select Column</option>
                        {columnsList.map(data=>(
                            <option value={data.Type} id={data.Field}>{data.Field}</option>
                        ))}
                    </select><br/>
                    <select value={selectedOperation} onChange={(e)=>{setSelectedOperation(e.target.value)}} 
                    id="searchElement">
                        <option>Select Operation</option>
                        {operationsList.map(data=>(
                            <option value={data}>{data}</option>
                        ))}
                    </select><br/>
                    <input list="sug" type={getType(selectedColumn)} value={input} placeholder="Enter Value" 
                    onChange={(e)=>{setInputVal(e)}} id="searchElement" min={Min} max={Max}/>
                        {displaySug()}
                    {sendToEmployees(search,selectedHeader,selectedOperation,input)}
                </div>
            </form>
        </div>
    );
}

export default SearchBar;