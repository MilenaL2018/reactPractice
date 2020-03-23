import React, { Component } from 'react';
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

class navBar extends Component {
    render() {
      return (<div>
            <SideNav>
                onSelect={(selected) => {
                // Add your code here
            }}
                >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="home">
                    <NavItem eventKey="home">
                        <NavIcon>
                            <FaStoreAlt/>
                        </NavIcon>
                        <NavText>
                            Inicio
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="service">
                        <NavIcon>
                            <FaInfo/>
                        </NavIcon>
                        <NavText>
                            Servicios
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
                            Contacto
                        </NavText>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>
        </div>
      )
    }
}
export default navBar;

