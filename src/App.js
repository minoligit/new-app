import React, { useState, useEffect } from 'react';
import './App.css';
// import Axios from 'axios';
// import { getToken, removeUserSession, setUserSession } from './utils/common';
import PrivateRoute from './utils/privateRoute';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
// import Footer from './components/footer';
import SideBar from './sidebar/sidebar';
import DashPage from './pages/dashpage';
import Overview from './pages/overview';
import AboutUs from './pages/aboutus';
import People from './pages/people';
import Music from './pages/music';
import Places from './pages/places';
import Login from './pages/login';
import Notifications from './pages/notifications';

function App() {

  // const [authLoading, setAuthLoading] = useState(true);
 
  // useEffect(() => {
  //   const token = getToken();
  //   if (!token) {
  //     return;
  //   }
 
  //   Axios.post("http://localhost:8080/verifyLogin?token=${user_id},user=${username").then(res => {
  //     console.log(res.data[0].token);
  //     setUserSession(res.data.token, res.data.user);
  //     setAuthLoading(false);
  //   }).catch(error => {
  //     removeUserSession();
  //     setAuthLoading(false);
  //   });
  // }, []);
 
  // if (authLoading && getToken()) {
  //   console.log("Checking");
  //   return <div className="content">Checking Authentication...</div>
  // }

  return (
    <div className="App">
      {/* <Container id='container'> */}
        {/* <Row> */}
          <header>
            <div>
              <Router>
                <Header />
                  <Routes>
                    <Route path="/pages/notifications" element={<Notifications/>} />
                  </Routes>
              </Router>  
            </div>
          </header>
        {/* </Row>
        <Row> */}
          {/* <Col> */}
            <div className='Body'>
              <Router>
                <SideBar/>
                  <Routes>
                    <Route exact path="/" element={<Login/>} />
                    <Route path="/pages/overview" element={<PrivateRoute component={Overview}/>} />
                    <Route path="/pages/aboutus" element={<PrivateRoute component={AboutUs}/>} />
                    <Route path="/pages/dashpage" element={<PrivateRoute component={DashPage}/>} />
                    <Route path="/pages/notifications" element={<PrivateRoute component={Notifications}/>} />
                    <Route path="/pages/people" element={<PrivateRoute component={People}/>} />
                    <Route path="/pages/music" element={<PrivateRoute component={Music}/>} />
                    <Route path="/pages/places" element={<PrivateRoute component={Places}/>} />
                    <Route path="*" element={<Login/>} />
                  </Routes>
              </Router>
              <br/><br/>
            </div><br/>
          {/* </Col> */}
        {/* </Row> */}
        {/* <Row> */}
          {/* <div className='Footer'>
              <Footer/>
          </div> */}
        {/* </Row> */}
      {/* </Container>         */}
    </div>
  );
}


export default App;
