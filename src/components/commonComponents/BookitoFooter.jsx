import React, {useState} from "react";
import {Link, useHistory} from "react-router-dom"
import {Divider, Button, Modal, Carousel} from "antd";
import {CreateMessengerRoom} from "../view/messengerView/CreateMessengerRoom"
import {useSelector} from "react-redux";
import image1 from "../../assets/images/instructions/image1.png"
import image2 from "../../assets/images/instructions/image2.png"
import image3 from "../../assets/images/instructions/image3.png"
import image4 from "../../assets/images/instructions/image4.png"
import image5 from "../../assets/images/instructions/image5.png"
import image6 from "../../assets/images/instructions/image6.png"
import image7 from "../../assets/images/instructions/image7.png"
import image8 from "../../assets/images/instructions/image8.png"

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
  const contentStyle = {
    color: 'black',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#ff7373',
  };
  Modal.info({
    className: "howBktWorksModal",
    title: "How Bookito works?",
    okText: "Exit",
    content:
      <Carousel autoplay>
        <div style={contentStyle}>
          <img src={image1} width={320} height={600}/>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    ,
  });
};

const latestNews = () => {
  Modal.info({
    className: "latestNewsModal",
    title: "Latest News",
    style: {top: "20%"},
    okText: "Exit",
    content: <div className="latestNewsText">No updated news yet.</div>,
  });
};

export default function BookitoFooter() {
  const [dividerType, setDividerType] = useState(getMenuDividerType());
  const currentUser = useSelector((state) => state.currentUser.currentUser);

  const menuDivider = () => {
    if (window.innerWidth > 426) {
      setDividerType("vertical");
    } else {
      setDividerType("none");
    }
  };

  window.addEventListener("resize", menuDivider);

  const helpCentre = (currentUser) => {
    Modal.info({
      className: "helpCentreModal",
      title: "Help Centre",
      style: {top: "25%"},
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
            <Button type="link" style={{margin: 5, fontSize: 13}} onClick={() => {
              sendMessageToAdmin(currentUser);
              Modal.destroyAll();
            }}>
              Send message
            </Button>
          </section>
        </>
      ),
    });
  };

  const history = useHistory();

  const enterChatRoom = (roomID) => {
    history.push(`/chatroom?roomID=${roomID}`);
  };

  const sendMessageToAdmin = (currentUser) => {
    enterChatRoom(CreateMessengerRoom(currentUser.uid, "80mjmoLYXUf3fC9BZZOOYjqWh8j2"));
  }

  return (
    <div className="bookitoFooter">
      <div className="footerContents">
        <div className="supportAndMenu">
          <section className="footerMenu">
            <Button className="footerPtag" type="link" onClick={howBktWorks}>
              How Bookito works
            </Button>
            <Divider className="menuDivider" type={dividerType} style={{visibility: "hidden"}}/>
            <Button className="footerPtag" type="link" onClick={latestNews}>
              Latest News
            </Button>
            <Divider className="menuDivider" type={dividerType} style={{visibility: "hidden"}}/>
            {currentUser === null ? (<Link to={"/sign_in"}> <Button className="footerPtag" type="link">
              Help Centre
            </Button></Link>) : (<Button className="footerPtag" type="link" onClick={() => {
              helpCentre(currentUser)
            }}>
              Help Centre
            </Button>)}
            <Divider className="menuDivider" type={dividerType} style={{visibility: "hidden"}}/>
            <Link to="/aboutUs">
              <Button className="footerPtag" type="link">
                About Us
              </Button>
            </Link>
          </section>
        </div>
        <Divider className="footerDivider"/>
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
