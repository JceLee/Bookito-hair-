import React from "react";
import { Layout } from "antd";
import { BrowserRouter as Router, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import Appointments from "./components/Appointments"
import Account from "./components/Account"
import TestView from "./components/searchBar/TestView"
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
                        <Route path="/appointments" component={Appointments} />
                        <Route path="/account" component={Account} />
                        <Route path="/testView" component={TestView} />
                    </div>
                </Content>
                <Footer className="footer">LookUp WIP July 2020</Footer>
            </Layout>
        </Router>
    );
}
