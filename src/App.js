import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
// import Footer from './components/footer';
import DashPage from './pages/dashpage';
import SideBar from './sidebar/sidebar';
import Overview from './pages/overview';
import AboutUs from './pages/aboutus';
import Notifications from './pages/notifications';
import Employees from './pages/employees';
import People from './pages/people';
import Music from './pages/music';
import Places from './pages/places';

function App() {
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
                    <Route exact path="/" element={<DashPage/>} />
                    <Route path="/pages/overview" element={<Overview/>} />
                    <Route path="/pages/aboutus" element={<AboutUs/>} />
                    <Route path="/pages/dashpage" element={<DashPage/>} />
                    <Route path="/pages/notifications" element={<Notifications/>} />
                    <Route path="/pages/employees" element={<Employees/>} />
                    <Route path="/pages/people" element={<People/>} />
                    <Route path="/pages/music" element={<Music/>} />
                    <Route path="/pages/places" element={<Places/>} />
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
