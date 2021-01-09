import React, { useState } from "react";
import { Divider, Button, Modal } from "antd";
import footerMenuCSS from "../../assets/scss/commonComponents/customCSS/footerMenu.css";

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
    title: "How Bookito works?",
    bodyStyle: footerMenuCSS,
    style: { top: "25%" },
    okText: "Exit",
    content: <div>video</div>,
  });
};

const investors = () => {
  Modal.info({
    title: "Investors",
    bodyStyle: footerMenuCSS,
    style: { top: "25%" },
    okText: "Exit",
    content: <div>Investors</div>,
  });
};

const helpCentre = () => {
  Modal.info({
    title: "Help Centre",
    bodyStyle: footerMenuCSS,
    style: { top: "25%" },
    okText: "Exit",
    content: (
      <div className="helpCenterText">
        <h4>Please contact</h4>
        <h4>
          <b>bookito@gmail.com</b>
        </h4>
        <h4> if there is any issue.</h4>
      </div>
    ),
  });
};

const aboutUs = () => {
  Modal.info({
    title: "ABOUT US",
    bodyStyle: footerMenuCSS,
    style: { top: "2%" },
    okText: "Exit",
    content: (
      <div className="aboutUsPtag">
        <h4 className="aboutUsName">Kangmin Lee</h4>
        <p>kangmin@gmail.com</p>
        <h4 className="aboutUsName">Joshua Shin</h4>
        <p>Joshua@gmail.com</p>
        <h4 className="aboutUsName">Gina Kim</h4>
        <p>Gina@gmail.com</p>
        <h4 className="aboutUsName">Yongju Kwon</h4>
        <p>Yongju@gmail.com</p>
        <h4 className="aboutUsName">Jaewhee Seo</h4>
        <p>Jaewhee@gmail.com</p>
        <h4 className="aboutUsName">Heeja Jeong</h4>
        <p>Heeja@gmail.com</p>
      </div>
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
          {/* <p id="support">Support</p> */}
          <section className="footerMenu">
            {/* <Space split={<Divider type={dividerType} style={{ visibility: "hidden" }} />}> */}
            <Button className="footerPtag" type="link" onClick={howBktWorks}>
              How Bookito works
            </Button>
            <Divider className="menuDivider" type={dividerType} style={{ visibility: "hidden" }} />
            <Button className="footerPtag" type="link" onClick={investors}>
              Investors
            </Button>
            <Divider className="menuDivider" type={dividerType} style={{ visibility: "hidden" }} />
            <Button className="footerPtag" type="link" onClick={helpCentre}>
              Help Centre
            </Button>
            <Divider className="menuDivider" type={dividerType} style={{ visibility: "hidden" }} />
            <Button className="footerPtag" type="link" onClick={aboutUs}>
              About Us
            </Button>
            {/* </Space> */}
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
