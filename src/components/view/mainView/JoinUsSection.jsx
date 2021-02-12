import React, {useState} from "react";
import joinUs from "../../../assets/images/backgrounds/signUp.jpg";
import hair from "../../../assets/images/backgrounds/joinUsHair.jpg";
import lash from "../../../assets/images/backgrounds/joinUsLash.jpg";
import nail from "../../../assets/images/backgrounds/joinUsNail.jpg";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

export default function JoinUsSection() {
  const currentUser = useSelector((state) => state.currentUser.currentUser);
  const tabletPWidth = 768;
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const reportWindowSize = () => {
    setScreenWidth(window.innerWidth);
  };

  window.addEventListener("resize", reportWindowSize);

  return (
    <section className="joinUsBlocker">
      <div className="joinUsBackground">
        <div className="joinUs">
          <div className="joinUsTopLine">Become a Bookito Beautician</div>
          <div className="joinUsBottomLine">
            Join us - Reach out to new clients in your city.
          </div>
          {screenWidth < tabletPWidth ? (
            <img className="joinUsImg" src={joinUs}/>
          ) : (
            <ul className="joinUsImgGroup">
              <li className="imgWrapper">
                <img className="joinUsImgS" src={nail}/>
                <div className="imgDescription">Nail Artist</div>
              </li>
              <li className="imgWrapper">
                <img className="joinUsImgS" src={hair}/>
                <div className="imgDescription">hair dresser</div>
              </li>
              <li className="imgWrapper">
                <img className="joinUsImgS" src={lash}/>
                <div className="imgDescription">Lash designer</div>
              </li>
            </ul>
          )}

          <div className="joinUsBottom">
            {currentUser === null ? (<Link className="joinUsBtn" to={"/sign_in"}>
              JOIN US !
            </Link>) : (<Link className="joinUsBtn" to={"/becomeDesigner"}>
              JOIN US !
            </Link>)}

          </div>
        </div>
      </div>
    </section>
  );
}
