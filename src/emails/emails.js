import React, {useState} from "react";
import '../App.css';
import Modal from 'react-modal';
import * as FaIcons from "react-icons/fa";
import SetPassword from "../settings/setPassword";
import SendEmail from "./sendEmail";

function Emails(){

    const [sendEmailIsOpen, setSendEmailIsOpen] = useState(false);
    const [pswdResetIsOpen, setPswdIsOpen] = useState(false);

    const setSendEmailTrue = ()=> { setSendEmailIsOpen(true); }
	const setSendEmailFalse = ()=> { setSendEmailIsOpen(false); }
    const setPswdTrue = ()=> { setPswdIsOpen(true); }
	const setPswdFalse = ()=> { setPswdIsOpen(false); }

    return(
        <div>
            <button type="button" class="dropdown-toggle" data-bs-toggle="dropdown" id="headerbutton">
                <FaIcons.FaPaperPlane/><span id="dropText"></span>
            </button>
            <div className="dropdown-menu">
                <button class="dropdown-item">
                    <a href="https://accounts.google.com/servicelogin/signinchooser?flowName=GlifWebSignIn&flowEntry=ServiceLogin"
                    >Login</a>
                </button>                
                <button class="dropdown-item" onClick={setSendEmailTrue}>Send Email</button>
                <div className="Modal">
                    <Modal isOpen={sendEmailIsOpen} id="popmodal">
                        <button id='closeBtn' onClick={setSendEmailFalse}>X</button>
                        <SendEmail />
                    </Modal>
                </div>
                <button class="dropdown-item" onClick={setPswdTrue}>Account Settings</button>
                <div className="Modal">
                    <Modal isOpen={pswdResetIsOpen} id="popmodal">
                        <button id='closeBtn' onClick={setPswdFalse}>X</button>
                        <SetPassword />
                    </Modal>
                </div>
            </div>
        </div>
    );
}

export default Emails;