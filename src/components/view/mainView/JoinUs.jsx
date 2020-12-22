import React from "react";
import SignUP from "../../../assets/images/signUp.jpg"

export default function JoinUs() {

  return (
    <div className="joinUs">
      <div className="joinUsTopLine">Become a designer</div>
      <div className="joinUsBottomLine">It's easy to find your best designer, you can book now. It's free to cancel with most designers.</div>
      <img
        className="joinUsImg"
        src={SignUP}
      />
      <div className="joinUsBottom">
        <button className="joinUsBtn"> Join  Us </button>
      </div>
    </div>
  );
}
