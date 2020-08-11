import React, { useState } from "react";
import { Layout } from "antd";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/commonComponents/NavBar";
import MainView from "./components/view/mainView/MainView";
import DesignerListView from "./components/view/designerListView/DesignerListView";
import DesignerScheduleView from "./components/view/designerScheduleView/DesignerScheduleView";
import DesignerProfileView from "./components/view/designerProfileView/DesignerProfileView";
import ClientScheduleView from "./components/view/clientScheduleView/ClientScheduleView";
import ClientProfileView from "./components/view/clientProfileView/ClientProfileView";
import "antd/dist/antd.css";
import "./assets/scss/App.scss";

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
            <Route exact path="/" component={MainView} />
            <Route path="/designer_list" component={DesignerListView} />
            <Route path="/designer_schedule" component={DesignerScheduleView} />
            <Route path="/designer_profile" component={DesignerProfileView} />
            <Route path="/client_schedule" component={ClientScheduleView} />
            <Route path="/client_profile" component={ClientProfileView} />
          </div>
        </Content>
        <Footer className="footer">LookUp WIP July 2020</Footer>
      </Layout>
    </Router>
  );
}
