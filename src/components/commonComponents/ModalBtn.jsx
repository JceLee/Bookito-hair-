import React from "react";

export default function ModalBtn(props) {
  const { btnName, onClick } = props;
  return (
    <button className="modalBtn" onClick={onClick}>
      {btnName}
    </button>
  );
}
