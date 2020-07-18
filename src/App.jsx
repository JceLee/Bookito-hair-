import React from "react";
import { Layout } from "antd";
import { HashRouter as Router, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import Listing from "./components/Listing"
import Appointments from "./components/Appointments"
import Account from "./components/Account"
import ScheduleCard from "./components/ScheduleCard"; // for testing
import "antd/dist/antd.css";
import "./assets/css/App.css";

const { Header, Content, Footer } = Layout;

export default function App() {
    return (
        <Router>
            <Layout className="layout">
                <Header className="header">
                    <NavBar />
                </Header>
                <Content className="outerContent">
                    <div className="innerContent">
                        <Route exact path="/" component={Home} />
                        <Route path="/listing" component={Listing} />
                        <Route path="/appointments" component={Appointments} />
                        <Route path="/account" component={Account} />
                        {/* for testing purposes */}
                        <Route path="/scheduleCard" component={ScheduleCard} /> 
                    </div>
                </Content>
                <Footer className="footer" >LookUp WIP July 2020</Footer>
            </Layout>
        </Router>
    );
}
