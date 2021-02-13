import React from "react";
import { Image } from "antd";
import jayce from "../../assets/images/aboutUs/jayce.jpeg";
import heeja from "../../assets/images/aboutUs/heeja.jpeg";
import bookito from "../../assets/images/aboutUs/bookito.jpeg";
import Josh from "../../assets/images/aboutUs/josh.jpg";
import BookitoFooter from "./BookitoFooter";

const ourTeam = [
  {
    img: jayce,
    name: "Jayce Lee",
    email: "lkm4351@gmail.com",
    description: "Project manager",
  },
  {
    img: Josh,
    name: "Joshua",
    email: "joshua_shin@hotmail.com",
    description: "Lead developer",
  },
  {
    img: heeja,
    name: "Heeja(Erica) Jeong",
    email: "heejaerica@gmail.com",
    description: "Developer",
  },
  {
    img: bookito,
    name: "Gina Kim",
    email: "ginakim.jh@gmail.com",
    description: "Developer",
  },
  {
    img: bookito,
    name: "Yongju Kwon",
    email: "michaelkyj@gmail.com",
    description: "Developer",
  },
  {
    img: bookito,
    name: "Jaewhee Seo",
    email: "jstylesss2@gmail.com",
    description: "Developer",
  },
];

export default function AboutUs() {
  return (
    <>
      <div className="aboutUsPage">
        <h3 className="aboutUsTitle">ABOUT US</h3>
        <p className="subTitle">
          {" "}
          Our mission is to help you find a <strong>beautician </strong>and book an{" "}
          <strong>appointment</strong> without the need to call or visit, anytime, anywhere and
          beauticians to connect to a <strong>wider audience</strong>. We love helping people find
          each other and have a great experience.
        </p>
        <div className="aboutUsCard">
          {ourTeam.map((member, index) => {
            return (
              <div className="aboutUsMemberInfo" key={index}>
                <section className="img">
                  <Image className="memberImg" src={member.img} />
                </section>
                <section className="memberIntro">
                  <h4 id="memberName">{member.name}</h4>
                  <p>{member.description}</p>
                  <p>{member.email}</p>
                </section>
              </div>
            );
          })}
        </div>
      </div>
      <BookitoFooter />
    </>
  );
}
