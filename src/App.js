import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { FaStoreAlt, FaRegPaperPlane, FaInfo } from "react-icons/fa";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

function App() {
  return (
      <div>
        <Router>
        <SideNav>
          <SideNav.Toggle />
          <SideNav.Nav defaultSelected="home">
            <NavItem eventKey="home">
              <NavIcon>
                <FaStoreAlt/>
              </NavIcon>
              <NavText>
                <Link to="/">Inicio</Link>
              </NavText>
            </NavItem>
            <NavItem eventKey="service">
              <NavIcon>
                <FaInfo/>
              </NavIcon>
              <NavText>
                <Link to="/services">Servicios</Link>
              </NavText>
              <NavItem eventKey="charts/linechart">
                <NavText>
                  Line Chart
                </NavText>
              </NavItem>
              <NavItem eventKey="charts/barchart">
                <NavText>
                  Bar Chart
                </NavText>
              </NavItem>
            </NavItem>
            <NavItem eventKey="contact">
              <NavIcon>
                <FaRegPaperPlane/>
              </NavIcon>
              <NavText>
                <Link to="/contact">Contacto</Link>
              </NavText>
            </NavItem>
          </SideNav.Nav>
        </SideNav>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/servicios">
              <Services />
            </Route>
            <Route path="/contacto">
              <Contact />
            </Route>
          </Switch>
      </Router>
      </div>
  );
}

function Home() {
  return (
      <div>
        <h2>Home</h2>
      </div>
  );
}


function Services() {
  return (
      <div>
        <h2>WQHFENX4D</h2>
      </div>
  );
}


function Contact() {
  return (
      <div>
        <h2>Hqo2ajeo23c5of5j5op34t</h2>
      </div>
  );
}

export default App;
