import React from "react";

export default function BlackBtn(props) {
  const { btnName, onClick } = props;
  return (
    <button className="blackBtn" onClick={onClick} >
      {btnName}
    </button>
  );
}
