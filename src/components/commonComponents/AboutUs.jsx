import React from "react";
import {Image} from "antd";
import sampleImg from "../../assets/images/mobile.png";
import sample1 from "../../assets/images/aboutUs/kangmin.jpeg";
import sample2 from "../../assets/images/aboutUs/coder1.jpg";
import sample3 from "../../assets/images/aboutUs/coder2.jpg";
import sample4 from "../../assets/images/aboutUs/coder3.jpg";
import sample5 from "../../assets/images/aboutUs/coder4.jpg";
import sample6 from "../../assets/images/aboutUs/coder5.jpg";

const ourTeam = [
  {
    img: sample1,
    name: "Jayce",
    email: "lkm4351@gmail.com",
    description: "Project manager",
  },
  {
    img: sample2,
    name: "Joshua",
    email: "joshua_shin@hotmail.com",
    description: "Lead developer",
  },
  {
    img: sample3,
    name: "Heeja Jeong",
    email: "Heeja@gmail.com",
    description: "Developer",
  },
  {
    img: sample6,
    name: "Gina",
    email: "ginabinaakimm@gmail.com",
    description: "Developer",
  },
  {
    img: sample5,
    name: "Yongju Kwon",
    email: "michaelkyj@gmail.com",
    description: "Developer",
  },
  {
    img: sample4,
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
              <section className="img">
                <Image className="memberImg" src={member.img}/>
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
  );
}
