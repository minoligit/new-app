import React, { useState } from "react";
import '../App.css';
import Draggable from 'react-draggable';
import NewWindow from 'react-new-window';
import Modal from 'react-modal';
import AddPlaces from "../modals/addPlaces";

function Places(){

    const [addPlacesIsOpen, setAddPlacesIsOpen] = useState(false);

    const setAddPlacesTrue = ()=> {
		setAddPlacesIsOpen(true);
	}
	const setAddPlacesFalse = ()=> {
		setAddPlacesIsOpen(false);        
	}
    
    return(
        <div className="Content">
            <h3>Places</h3>
            <div>
                <button class="btn btn-link" onClick={setAddPlacesTrue}>
                <span id="space"></span>Add New Place</button>
                <div className="Modal">
                    <Modal isOpen={addPlacesIsOpen} id="popmodal">
                        <button id='closeBtn' onClick={setAddPlacesFalse}>X</button>
                        <AddPlaces />
                    </Modal>
                </div>
                <div style={{ display: 'block', width: 700, padding: 30 }}>
                <Draggable>
                    <div>This line can be moved now!</div>
                </Draggable>
      </div>
            </div>
        </div>
        
    // );
    );
}

export default Places;