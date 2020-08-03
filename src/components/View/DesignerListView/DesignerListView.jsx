import React, { useState, useEffect } from "react";
import queryString from "query-string"
import { Row, Col } from "antd";
import {load_database} from "../../../actions/firebaseAction";
import {firebaseDB} from "../../../config/fbConfig";
import {useDispatch, useSelector} from "react-redux";

export default function DesignerListView(props) {

  const designers = useSelector(state => state.firestore.designers);
  const dispatch = useDispatch();
  const newDesigners = [];
  firebaseDB.firestore().collection('designers').get()
      .then(querySnapshot => {
        querySnapshot.docs.forEach(doc => {
          newDesigners.push(doc.data());
        });
      });

  useEffect(() => {
    const params = queryString.parse(props.location.search);
    console.log("params:", params);
    dispatch(load_database(newDesigners))
  }, [dispatch]);
  console.log(designers);


  return (
    <>
      <Row className="listingContainer">
        <Col className="designerContainer" span={12}>
          <div className="listNavBar">
            listNavBar
            <div className="filter">filter</div>
          </div>
          <div className="designerList">designerList</div>
        </Col>
        <Col className="mapContainer" span={12}>
          Map container
        </Col>
      </Row>
    </>
  );
}
