import React from "react";
import { WarningFilled } from '@ant-design/icons';
import "../../assets/scss/view/NoMatchView.scss";

export default function NoMatchView() {
  return (
    <div className="noMatchView">
        <WarningFilled style={{fontSize:60, marginBottom:14}} />
        <h1><b>Page not found</b></h1>
        <h3>Oops! Something went wrong!</h3>
    </div>
  );
}
