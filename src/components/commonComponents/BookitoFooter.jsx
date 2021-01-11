import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Divider, Button, Modal } from "antd";

let menuDividerType;

const getMenuDividerType = () => {
  if (window.innerWidth > 426) {
    menuDividerType = "vertical";
  } else {
    menuDividerType = "none";
  }
  return menuDividerType;
};

const howBktWorks = () => {
  Modal.info({
    className: "howBktWorksModal",
    title: "How Bookito works?",
    style: { top: "25%" },
    okText: "Exit",
    content: <div>video</div>,
  });
};

const latestNews = () => {
  Modal.info({
    className: "latestNewsModal",
    title: "Latest News",
    style: { top: "20%" },
    okText: "Exit",
    content: <div className="latestNewsText">No updated news yet.</div>,
  });
};

const helpCentre = () => {
  Modal.info({
    className: "helpCentreModal",
    title: "Help Centre",
    style: { top: "25%" },
    okText: "Exit",
    content: (
      <>
        <div className="helpCenterText">
          <h4>Please contact</h4>
          <h4>
            <b>bookito@gmail.com</b>
          </h4>
          <h4> if there is any issue.</h4>
        </div>
        <section className="sendMsgBtn">
          <Button type="link" style={{ margin: 5, fontSize: 13 }}>
            Send message
          </Button>
        </section>
      </>
    ),
  });
};

export default function BookitoFooter() {
  const [dividerType, setDividerType] = useState(getMenuDividerType());

  const menuDivider = () => {
    if (window.innerWidth > 426) {
      setDividerType("vertical");
    } else {
      setDividerType("none");
    }
  };

  window.addEventListener("resize", menuDivider);

  return (
    <div className="bookitoFooter">
      <div className="footerContents">
        <div className="supportAndMenu">
          <section className="footerMenu">
            <Button className="footerPtag" type="link" onClick={howBktWorks}>
              How Bookito works
            </Button>
            <Divider className="menuDivider" type={dividerType} style={{ visibility: "hidden" }} />
            <Button className="footerPtag" type="link" onClick={latestNews}>
              Latest News
            </Button>
            <Divider className="menuDivider" type={dividerType} style={{ visibility: "hidden" }} />
            <Button className="footerPtag" type="link" onClick={helpCentre}>
              Help Centre
            </Button>
            <Divider className="menuDivider" type={dividerType} style={{ visibility: "hidden" }} />
            <Link to="/aboutUs">
              <Button className="footerPtag" type="link">
                About Us
              </Button>
            </Link>
          </section>
        </div>
        <Divider className="footerDivider" />
        <section className="copyright">
          <p>
            This site is protected by Bookito and the Google Privacy Policy and Terms of Service
            apply.
          </p>
          <p id="bktCopyright">© 2020 Bookito.</p>
        </section>
      </div>
    </div>
  );
}
