import React, {useState} from "react";
import '../App.css';
import Modal from 'react-modal';
import * as FaIcons from "react-icons/fa";
import SetPrivacy from "../settings/setPrivacy";
import SendEmail from "./sendEmail";

function Emails(){

    const [sendEmailIsOpen, setSendEmailIsOpen] = useState(false);
    const [privacyIsOpen, setPrivacyIsOpen] = useState(false);

    const setSendEmailTrue = ()=> { setSendEmailIsOpen(true); }
	const setSendEmailFalse = ()=> { setSendEmailIsOpen(false); }
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
                <FaIcons.FaPaperPlane id="headericon"/><span id="dropText"></span>
            </button>
            <div className="dropdown-menu" style={dropDown}>
                <button class="dropdown-item">
                    <a href="https://accounts.google.com/servicelogin/signinchooser?flowName=GlifWebSignIn&flowEntry=ServiceLogin"
                     id="headerDropDown"
                    >Login</a>
                </button>                
                <button class="dropdown-item" onClick={setSendEmailTrue} id="headerDropDown">
                    Send Email</button>
                <div className="Modal">
                    <Modal isOpen={sendEmailIsOpen} id="popmodal">
                        <button id='closeBtn' onClick={setSendEmailFalse}>X</button>
                        <SendEmail />
                    </Modal>
                </div>
                <button class="dropdown-item" onClick={setPrivacyTrue} id="headerDropDown">
                    Account Settings</button>
                <div className="Modal">
                    <Modal isOpen={privacyIsOpen} id="popmodal">
                        <button id='closeBtn' onClick={setPrivacyFalse}>X</button>
                        <SetPrivacy />
                    </Modal>
                </div>
            </div>
        </div>
    );
}

export default Emails;