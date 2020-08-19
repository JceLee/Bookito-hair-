import React, { useEffect } from "react";
import queryString from "query-string";
import { load_database } from "../../../actions/firebaseAction";
import { firebaseStore } from "../../../config/fbConfig";
import { useDispatch, useSelector } from "react-redux";
import DesignerCardComponent from "./designerCardComponent/DesignerCardComponent";
import DesignerListFilter from "./DesignerListFilter";
import Map from "../../commonComponents/map/Map";

export default function DesignerListView(props) {
  const designers = useSelector((state) => state.firestore.designers);
  const dispatch = useDispatch();

  useEffect(() => {
    const params = queryString.parse(props.location.search);
    const newDesigners = [];
    firebaseStore
      .collection("users")
      .where("location", "==", params["location"])
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
        <div className="mapContainer">
          <Map initialLocationString={props.location.search} designers={[
            {
              id: 0,
              name: "josh",
              services: ["cut", "color", "perm"],
              location: {lat: 49.232743, lng: -123.024318}
            },{
              id: 1,
              name: "yongju",
              services: ["cut", "color"],
              location: {lat: 49.222743, lng: -123.023318}
            },{
              id: 3,
              name: "kangmin",
              services: ["cut", "color", "perm"],
              location: {lat: 49.21, lng: -123.022}
            },{
              id: 4,
              name: "gina",
              services: ["cut", "color", "perm"],
              location: {lat: 49.2, lng: -123.021}
            },{
              id: 5,
              name: "heeja",
              services: ["cut", "color", "perm"],
              location: {lat: 49.19, lng: -123.020}
            },{
              id: 6,
              name: "jaewhee",
              services: ["cut", "color", "perm"],
              location: {lat: 49.18, lng: -123.019}
            }
          ]}/>
        </div>
      </div>
    </>
  );
}
