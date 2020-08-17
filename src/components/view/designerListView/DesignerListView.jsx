import React, { useEffect } from "react";
import queryString from "query-string";
import { load_database } from "../../../actions/firebaseAction";
import { firebaseDB } from "../../../config/fbConfig";
import { useDispatch, useSelector } from "react-redux";
import DesignerCardComponent from "./designerCardComponent/DesignerCardComponent";
import DesignerListFilter from "./DesignerListFilter";

export default function DesignerListView(props) {
  const designers = useSelector((state) => state.firestore.designers);
  const dispatch = useDispatch();

  useEffect(() => {
    const params = queryString.parse(props.location.search);
    const newDesigners = [];
    console.log("params:", params);
    firebaseDB
      .firestore()
      .collection("designers")
      .where("Location", "==", params["location"])
      .get()
      .then((querySnapshot) => {
        querySnapshot.docs.forEach((doc) => {
          newDesigners.push(doc.data());
        });
        dispatch(load_database(newDesigners));
      });
  }, [dispatch]);

  return (
    <>
      <div className="listingContainer">
        <div className="designerContainer">
          <div className="listNavBar">
            listNavBar
            <div className="filter">
              <DesignerListFilter
                numberOfDesigners="400"
                location="Vancouver"
              />
            </div>
          </div>
          {designers.map((designer, index) => (
            <div key={index} className="designerList">
              <DesignerCardComponent designer={designer} />
            </div>
          ))}
        </div>
        <div className="mapContainer">Map container</div>
      </div>
    </>
  );
}
