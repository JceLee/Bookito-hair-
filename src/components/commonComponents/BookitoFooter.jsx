import React, {useState} from "react";
import {Link, useHistory} from "react-router-dom"
import {Divider, Button, Modal, Carousel} from "antd";
import {CreateMessengerRoom} from "../view/messengerView/CreateMessengerRoom"
import {useSelector} from "react-redux";
import image1 from "../../assets/images/instructions/image01.jpeg"
import image2 from "../../assets/images/instructions/image02.jpeg"
import image3 from "../../assets/images/instructions/image03.jpeg"
import image4 from "../../assets/images/instructions/image04.jpeg"
import image5 from "../../assets/images/instructions/image05.jpeg"
import image6 from "../../assets/images/instructions/image06.jpeg"
import image7 from "../../assets/images/instructions/image07.jpeg"

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
    margin: "0 auto",
  };

  const description = [
    {
      src: image1,
      title: `Welcome to Bookito.io!
Find a hairdresser, nail artist or lash technician near by your location. Browse their works and reviews and book an appointment without the need to call or visit, anytime, anywhere!
`,
    }, {
      src: image2,
      title: "Choose a service and the area you wish to search."
    }, {
      src: image3,
      title: "Explore the beauticians available nearby. Customize your search to fine tune your results."
    }, {
      src: image4,
      title: "Check out the detailed profile and browse their works and reviews! If it’s just right, click Book Now!"
    }, {
      src: image5,
      title: "Pick a time and the service you want to receive and confirm your appointment."
    }, {
      src: image6,
      title: "We will estimate the price of your appointment. You don’t pay until you receive the service on the day of your appointment!"
    }, {
      src: image7,
      title: `From your Profile, go to “Your Appointments” to check your upcoming, pending, and past appointments.
Pending means the appointment has yet been accepted by the beautician. Upcoming means your appointment has been confirmed. Hooray!
`
    },
  ]

  Modal.info({
    className: "howBktWorksModal",
    title: "How Bookito works?",
    okText: "Exit",
    width: 425,
    centered: true,
    content:
      <Carousel autoplay>
        {description.map((description, index) => (<div style={contentStyle} key={index}>
          <img src={description.src}/>
          <h4 style={{margin: "10px"}}> {description.title}</h4>
        </div>))}
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
