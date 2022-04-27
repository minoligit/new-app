import React, {useState} from "react";
import '../App.css';
import Modal from 'react-modal';
import * as FiIcons from "react-icons/fi";
import General from "../settings/setGeneral";
import Profile from "../settings/setProfile";
import Appearance from "../settings/setAppearance";
import Privacy from "../settings/setPrivacy";

function AllSettings(){

    const [generalIsOpen, setGeneralIsOpen] = useState(false);
    const [profileIsOpen, setProfileIsOpen] = useState(false);
    const [appearanceIsOpen, setAppearanceIsOpen] = useState(false);
    const [privacyIsOpen, setPrivacyIsOpen] = useState(false);

	const setGeneralTrue = ()=> { setGeneralIsOpen(true); }
	const setGeneralFalse = ()=> { setGeneralIsOpen(false); }
    const setProfileTrue = ()=> { setProfileIsOpen(true); }
	const setProfileFalse = ()=> { setProfileIsOpen(false); }
    const setAppearanceTrue = ()=> { setAppearanceIsOpen(true); }
	const setAppearanceFalse = ()=> { setAppearanceIsOpen(false); }
    const setPrivacyTrue = ()=> { setPrivacyIsOpen(true); }
	const setPrivacyFalse = ()=> { setPrivacyIsOpen(false); }

    const dropDown = {
        backgroundColor: "#7e7ea1",
        fontSize: "80%",
        fontStyle: "bold",
        padding: "5%"
    };

    return(
        <div>
            <button type="button" class="dropdown-toggle" data-bs-toggle="dropdown" id="headerbutton">
                <FiIcons.FiSettings id="headericon"/>
            </button>
            <div className="dropdown-menu" style={dropDown}>
                <button class="dropdown-item" style={{color:"#ffffff"}} id="headerDropDown" onClick={setGeneralTrue}>General</button>
                <div className="Modal">
                    <Modal isOpen={generalIsOpen} id="popmodal">
                        <button id='closeBtn' onClick={setGeneralFalse}>X</button>
                        <General />
                    </Modal>
                </div>
                <button class="dropdown-item" style={{color:"#ffffff"}} id="headerDropDown" onClick={setProfileTrue}>Profile</button>
                <div className="modal fade" role="dialog">
                    <Modal isOpen={profileIsOpen} id="popmodal">
                        <button id='closeBtn' onClick={setProfileFalse}>X</button>
                        <Profile />
                    </Modal>
                </div>
                <button class="dropdown-item" style={{color:"#ffffff"}} id="headerDropDown" onClick={setAppearanceTrue}>Appearance</button>
                <div className="Modal">
                    <Modal isOpen={appearanceIsOpen} id="popmodal">
                        <button id='closeBtn' onClick={setAppearanceFalse}>X</button>
                        <Appearance />
                    </Modal>
                </div>
                <button class="dropdown-item" style={{color:"#ffffff"}} id="headerDropDown" onClick={setPrivacyTrue}>Privacy</button>
                <div className="Modal">
                    <Modal isOpen={privacyIsOpen} id="popmodal">
                        <button id='closeBtn' onClick={setPrivacyFalse}>X</button>
                        <Privacy />
                    </Modal>
                </div>
            </div>
        </div>
    );
}

export default AllSettings;