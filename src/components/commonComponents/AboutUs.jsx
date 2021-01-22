import React from "react";
import {Image} from "antd";
import sampleImg from "../../assets/images/mobile.png";
import jayce from "../../assets/images/aboutUs/jayce.jpeg";
import heeja from "../../assets/images/aboutUs/heeja.jpeg";
import bookito from "../../assets/images/aboutUs/bookito.jpeg";


const ourTeam = [
  {
    img: jayce,
    name: "Jayce Lee",
    email: "lkm4351@gmail.com",
    description: "Project manager",
  },
  {
    img: bookito,
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
    name: "Gina",
    email: "ginabinaakimm@gmail.com",
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
    email: "Jaewhee@gmail.com",
    description: "Developer",
  },
];

export default function AboutUs() {
  return (
    <div className="aboutUsPage">
      <h3 className="aboutUsTitle">Bookito Team</h3>
      <div className="aboutUsCard">
        {ourTeam.map((member, index) => {
          return (
            <div className="aboutUsMemberInfo" key={index}>
              {/*<section className="img">*/}
              {/*  <Image className="memberImg" src={member.img}/>*/}
              {/*</section>*/}
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
  );
}
