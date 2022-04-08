import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "./sidebar.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import {Navbar,Nav,NavDropdown} from "react-bootstrap";
import * as FaIcons from "react-icons/fa";
import AllSettings from "../settings/allSettings";

function SideBar() {

  // const [sidebar, setSidebar] = useState(false);
  // const showSidebar = () => setSidebar(!sidebar);
  // const [subnav, setSubnav] = useState(false);
  // const showSubnav = () => setSubnav(!subnav);

  return (
    // <div className="SideBar">
    //   {/* <FaIcons.FaBars onClick={showSidebar}/> */}
    //   <ul id="SideBarList">
    //       {BarData.map((item, index) => (
    //         <li key={index}>
    //           <Link to={item.path} id="SideBarElm" onClick={item.sub && showSubnav}>
    //             {item.icon}
    //             <span id="space">{item.title}</span>
    //           {/* <div>
    //             {item.sub && subnav? item.iconOpened:item.sub? item.iconClosed:null}
    //           </div> */}
    //           </Link><br/><br/>
    //         </li>
    //       ))}
    //   </ul>
    // </div>

    <div>
      <Navbar bg="light" expand="lg" id="container">
        <div id="SideBar">
            <div className="ShowMenu">
              <Navbar.Brand href="../pages/overview"><span id="AppName">MY-APP</span></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
            </div>
          <br/>
          <Navbar.Collapse >
            <Nav>
              <ul id="SideBarList">
                <li>
                  <Link to="../pages/overview" id="SideBarElm"><FaIcons.FaCreativeCommonsNd />
                  <span id="dropText">Overview</span></Link><br/><br/>
                </li>
                <li>
                  <NavDropdown title={<span id="SideBarElm"><FaIcons.FaGgCircle/><span id="dropText">About Us</span>
                    </span>} id="basic-nav-dropdown">
                    <div id="dropDownElm">
                      <Link to="../pages/aboutus" id="SideBarElm"><FaIcons.FaHistory/>
                      <span id="dropText">History</span></Link><br/>
                      <Link to="../pages/aboutus" id="SideBarElm"><FaIcons.FaMizuni/>
                      <span id="dropText">Vision & Mission</span></Link><br/>
                      <Link to="../pages/aboutus" id="SideBarElm"><FaIcons.FaTrophy/>
                      <span id="dropText">Achievements</span></Link><br/>
                      <NavDropdown.Divider />
                    </div>
                  </NavDropdown><br/>
                </li>
                <li id="addSideBar">
                    <Link to="../pages/notifications" id="SideBarElm">
                    <FaIcons.FaRegBell/></Link><br/><br/>
                </li>
                <li>
                  <Link to="../pages/dashpage" id="SideBarElm"><FaIcons.FaThList />
                  <span id="dropText">Dashboard</span></Link><br/><br/>
                </li>
                <li>
                  <Link to="../pages/employees" id="SideBarElm"><FaIcons.FaShip />
                  <span id="dropText">Employees</span></Link><br/><br/>
                </li>
                <li>
                  <Link to="../pages/people" id="SideBarElm"><FaIcons.FaUsers />
                  <span id="dropText">People</span></Link><br/><br/>
                </li>
                <li>
                  <Link to="../pages/music" id="SideBarElm"><FaIcons.FaMusic />
                  <span id="dropText">Music</span></Link><br/><br/>
                </li>
                <li>
                  <Link to="../pages/places" id="SideBarElm"><FaIcons.FaMap />
                  <span id="dropText">Places</span></Link><br/><br/>
                </li>
                <li id="addSideBar">
                  <div className="dropdown"> 
                      <AllSettings/>
                  </div>
                </li>
              </ul>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
           
}


export default SideBar;