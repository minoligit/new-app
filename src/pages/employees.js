import React, { useState,useEffect } from "react";
import ReactPaginate from 'react-paginate';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
import Draggable from 'react-draggable';
import SearchBar from "../components/search";
import * as FaIcons from "react-icons/fa";

function Employees(){

    var [offset, setOffset] = useState(0);
    var [perPage, setPerPage] = useState(100);
    var [count, setCount] = useState(0);
    var [forms, setForms] = useState([]);
    const [headers, setHeaders] = useState([]);
    const [operations, setOperations] = useState([]);
    const [inputs, setInputs] = useState([]);
    const [selectors, setSelectors] = useState([]);
    const [employees, setEmployees] = useState([]);

    const pagesVisited = offset*perPage;
    const pageCount = Math.ceil(employees.length/perPage);

    useEffect(() => {
        document.getElementById("tableStyle").style.display="none";    
    }, []);

    const searchEmployee = (e) => {
        document.getElementById("tableStyle").style.display="block";
        const strg = {
            header:headers,
            operator:operations,
            value:inputs,
            selector:selectors
        }
        Axios.post("http://localhost:8080/searchEmployees",strg).then((res) => {
            setEmployees(res.data[0]);
        });
        e.preventDefault();
    };
    const setPagination = ({selected}) => {
        setOffset(selected);
    };

    function sendToEmployees(index,val1,val2,val3) {
        const newHeaders = headers; 
        const newOperations = operations; 
        const newInputs = inputs;
        newHeaders[index] = val1;
        newOperations[index] = val2;
        newInputs[index] = val3;
        setHeaders(newHeaders);
        setOperations(newOperations);
        setInputs(newInputs);
    }
    function searchAND (){
        setCount(++count);
        forms.push(<SearchBar search={count} sendToEmployees={sendToEmployees}/>);
        const newSelectors = selectors; 
        newSelectors[count] = "&&";
        setSelectors(newSelectors);
    }
    function searchOR (){
        setCount(++count);
        forms.push(<SearchBar search={count} sendToEmployees={sendToEmployees}/>);
        const newSelectors = selectors; 
        newSelectors[count] = "||";
        setSelectors(newSelectors);    
    }
    function dropForm(index){
        console.log(index);
        const newForms = [];
        const newHeaders = [];
        const newOperations = [];
        const newInputs = [];
        const newSelectors = [];
        for(var i=0; i<count; i++){
            if(i<index){
                // newForms[i] = forms[i];
                newHeaders[i] = headers[i];
                newOperations[i] = operations[i];
                newInputs[i] = inputs[i];
                newSelectors[i] = selectors[i];
            }
            else{
                // newForms[i] = forms[i+1];
                newHeaders[i] = headers[i+1];
                newOperations[i] = operations[i+1];
                newInputs[i] = inputs[i+1];
                newSelectors[i] = selectors[i+1];
            }
        }
        setCount(--count);
        // setForms(newForms);
        setHeaders(newHeaders);
        setOperations(newOperations);
        setInputs(newInputs);
        setSelectors(newSelectors);
        setForms(forms.filter((o, i) => index !== i));
    }
    function resetTable(){
        setEmployees([]);setCount(0);setForms([]);
        setHeaders([]);setInputs([]);setOperations([]);setSelectors([]);
    }
    
    return(
        <div style={{padding:"0px"}}>
            <table style={{height:"100%"}}>
                <td style={{width:"20%",padding:"0px"}}>  
                    <Draggable>
                        <div id="searchBar">
                            {/* <button id='closeBtn' style={{textAlign:"left"}} 
                                onClick={document.getElementById("searchBar").display="none"}>X</button> */}
                            {forms.map((search,key) => (
                                <div key={key}>
                                    {search}<br/>
                                    {/* <button id="closeBtn" onClick={()=>dropForm(key+1)}>X</button><br/><br/> */}
                                </div>
                            ))}<br/>
                            <div style={{fontSize:"120%",textAlign:"center"}}>
                                <button type="submit" value="submitAND" onClick={(e)=>{searchAND()}}
                                    style={{width:"30%",backgroundColor:"#9690eb",borderRadius:"15px",margin:"2%"}}>
                                    &&</button>
                                <button type="submit" value="submitOR" onClick={(e)=>{searchOR()}}
                                    style={{width:"30%",backgroundColor:"#9690eb",borderRadius:"15px",margin:"2%"}}>
                                    ||</button>
                            </div>
                            <div style={{fontSize:"120%",textAlign:"center"}}>   
                                <button type="submit" value="submit" onClick={searchEmployee}
                                    style={{width:"40%",color:"white",backgroundColor:"blue",borderRadius:"15px",margin:"2%"}}>
                                    <FaIcons.FaForward /></button><br/>
                                <button type="submit" onClick={resetTable}
                                    style={{width:"40%",color:"white",backgroundColor:"#F08080",borderRadius:"15px",margin:"2%"}}>
                                    <FaIcons.FaBackward /></button>
                            </div>
                        </div> 
                    </Draggable>
                </td>
                <td style={{paddingLeft:"20px"}}> <br/>               
                    <div>
                        Rows per page
                        <select onChange={(e)=>{setPerPage(e.target.value)}}>
                            <option value={100}>100</option>
                            <option value={200}>200</option>
                            <option value={500}>500</option>
                            <option value={1000}>1000</option>
                            <option value={2000}>2000</option>
                            <option value={employees.length}>All</option>
                        </select>
                    </div>
                    <br/><br/>
                    <table id="tableStyle">
                        <tr>
                            <th>Emp Id</th><th>Satisfaction Level</th>
                            <th>last Evaluation</th><th>Proj No</th><th>Avg Hrs</th>
                            <th>Yrs of Service</th><th>Work Acc</th><th>Left</th>
                            <th>Pramotion lst 5</th><th>Department</th><th>Salary</th>
                        </tr>
                        <tbody>
                            {employees.slice(pagesVisited,pagesVisited+perPage).map(data => (
                            <tr key={data.empId} >
                                <td>{data.empId}</td><td>{data.satisfaction_level}</td><td>{data.last_evaluation}</td>
                                <td>{data.projectNo}</td><td>{data.average_montly_hours}</td>
                                <td>{data.time_spend_company}</td><td>{data.Work_accident}</td><td>{data.left}</td>
                                <td>{data.promotion_last_5years}</td><td>{data.deptName}</td><td>{data.salary}</td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                    <br/><br/>
                    <div style={{marginLeft:"20%"}}>
                        <ReactPaginate 
                            previousLabel={"<<Previous"}
                            nextLabel={"Next>>"}
                            pageCount={pageCount}
                            onPageChange={setPagination}
                            containerClassName={"paginationBttns"}
                            previousLinkClassName={"previousBttn"}
                            nextLinkClassName={"nextBttn"}
                            disabledClassName={"paginationDisabled"}
                            activeClassName={"paginationActive"}
                        />
                    </div>
                </td>
            </table>
        </div>
    );
}

export default Employees;