import React, {useState} from "react";
import '../App.css';
import Modal from 'react-modal';
import * as FiIcons from "react-icons/fi";
import SetTheme from "../settings/setTheme";
import SetAccount from "../settings/setAccount";
import SetPassword from "../settings/setPassword";

function AllSettings(){

    const [themeIsOpen, setThemeIsOpen] = useState(false);
    const [accountIsOpen, setAccountIsOpen] = useState(false);
    const [pswdResetIsOpen, setPswdIsOpen] = useState(false);

	const setThemeTrue = ()=> { setThemeIsOpen(true); }
	const setThemeFalse = ()=> { setThemeIsOpen(false); }
    const setAccountTrue = ()=> { setAccountIsOpen(true); }
	const setAccountFalse = ()=> { setAccountIsOpen(false); }
    const setPswdTrue = ()=> { setPswdIsOpen(true); }
	const setPswdFalse = ()=> { setPswdIsOpen(false); }

    return(
        <div>
            <button type="button" class="dropdown-toggle" data-bs-toggle="dropdown" id="headerbutton">
                <FiIcons.FiSettings/><span id="dropText">Settings</span>
            </button>
            <div className="dropdown-menu">
                <button class="dropdown-item" onClick={setThemeTrue}>Change Theme</button>
                <div className="modal fade" role="dialog">
                    <Modal isOpen={themeIsOpen} id="popmodal">
                        <button id='closeBtn' onClick={setThemeFalse}>X</button>
                        <SetTheme />
                    </Modal>
                </div>
                <button class="dropdown-item" onClick={setAccountTrue}>Change Account</button>
                <div className="Modal">
                    <Modal isOpen={accountIsOpen} id="popmodal">
                        <button id='closeBtn' onClick={setAccountFalse}>X</button>
                        <SetAccount />
                    </Modal>
                </div>
                <button class="dropdown-item" onClick={setPswdTrue}>Reset Password</button>
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

export default AllSettings;