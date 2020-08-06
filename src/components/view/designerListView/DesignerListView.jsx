import React, { useState, useEffect } from "react";
import queryString from "query-string"
import { Row, Col } from "antd";
import * as db from "../../../config/fbConfig";

export default function DesignerListView(props) {
  // db.getDesignerList();

  useEffect(() => {
    const params = queryString.parse(props.location.search);
    console.log("params:", params);
  });

  return (
    <>
      <div className="listingContainer">
        <div className="designerContainer">
          <div className="listNavBar">
            listNavBar
            <div className="filter">filter</div>
          </div>
          <div className="designerList">designerList</div>
        </div>
        <div className="mapContainer">
          Map container
        </div>
      </div>
    </>
  );
}
