import React, { useState } from "react";
import '../App.css';
import Axios from 'axios';
import Modal from 'react-modal';
import { Row, Col } from "react-bootstrap";
import PChartPeople from "../charts/pchartPeople";
import AddPerson from "../modals/addPerson";

function People(){

    const [search,setSearch] = useState("");
    const [people, setPeople] = useState([]);
    const [addPeopleIsOpen, setAddPeopleIsOpen] = useState(false);

    const submitCategory = () => {
        const str = {
            ctg: search
        }
        Axios.post("http://localhost:8080/searchCategory",str).then((res) => {
            setPeople(res.data[0]);
        });
    };

	const setAddPeopleTrue = ()=> {
		setAddPeopleIsOpen(true);
	}
	const setAddPeopleFalse = ()=> {
		setAddPeopleIsOpen(false);
	}
    
    return(
        <div className="Content">
            <h3>People</h3>
            <Row>
                <Col><PChartPeople /></Col>
                <Col><Row>
                    <Col>
                        <div>
                            Category<br/><br/>
                            <select name="category" id="searchbox" onChange={(e)=>{setSearch(e.target.value)}}>
                                <option></option>
                                <option value="Actors">Actors</option>
                                <option value="Actresses">Actresses</option>
                                <option value="Athletes">Athletes</option>
                                <option value="Authors">Authors</option>
                                <option value="Comedians">Comedians</option>
                                <option value="Musicians">Musicians</option>
                                {/* <option value="Personalities">Personalities</option> */}
                            </select><br/><br/>
                            <button type="submit" value="submit" className="btn btn-primary" 
                            onClick={submitCategory}>Search</button><br/><br/>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <button class="btn btn-link" onClick={setAddPeopleTrue}>
                            <span id="space"></span>Add New Person</button>
                            <div className="Modal">
                                <Modal isOpen={addPeopleIsOpen} id="popmodal">
                                    <button id='closeBtn' onClick={setAddPeopleFalse}>X</button>
                                    <AddPerson />
                                </Modal>
                            </div>
                        </div>
                    </Col>
                </Row></Col>
            </Row>
            <br/><br/><br/>
            <table id="tableStyle">
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Worth (USD)</th>
                    <th>Birth Year</th>
                    <th></th><th></th><th></th>
                </tr>
                <tbody>
                    {people.map(data => (
                    <tr key={data.PeopleId} >
                        <td>{data.PeopleId}</td>
                        <td>{data.Name}</td>
                        <td>{data.Worth_USD}</td>
                        <td>{data.BYear}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default People;