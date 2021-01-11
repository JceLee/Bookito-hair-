import React, { useState } from "react";
import joinUs from "../../../assets/images/backgrounds/signUp.jpg";
import hair from "../../../assets/images/backgrounds/joinUsHair.jpg";
import lash from "../../../assets/images/backgrounds/joinUsLash.jpg";
import nail from "../../../assets/images/backgrounds/joinUsNail.jpg";
import { Link } from "react-router-dom";

export default function JoinUsMobile() {
  const mobileLWidth = 480;
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const reportWindowSize = () => {
    setScreenWidth(window.innerWidth);
  };

  window.addEventListener("resize", reportWindowSize);

  return (
    <div className="joinUs">
      <div className="joinUsTopLine">Become a designer</div>
      <div className="joinUsBottomLine">
        Join us with your talent. Let people all over the world see your brilliant works!
      </div>
      {screenWidth < mobileLWidth ? (
        <img className="joinUsImg" src={joinUs} />
      ) : (
        <div className="joinUsImgGroup">
          <div className="imgWrapper">
            <img className="joinUsImgS" src={hair} />
            <div className="imgDescription">hair dresser</div>
          </div>
          <div className="imgWrapper">
            <img className="joinUsImgS" src={nail} />
            <div className="imgDescription">Nail Artist</div>
          </div>
          <div className="imgWrapper">
            <img className="joinUsImgS" src={lash} />
            <div className="imgDescription">Lash designer</div>
          </div>
        </div>
      )}

      <div className="joinUsBottom">
        <Link className="joinUsBtn" to={"/becomeDesigner"}>
          Join Us
        </Link>
        {/*<button className="joinUsBtn"> Join  Us </button>*/}
      </div>
    </div>
  );
}
