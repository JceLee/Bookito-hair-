import React, { useState, useEffect } from "react";
import { Button, Drawer} from 'antd';
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

  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <div className="listingContainer">
        <div className="designerContainer" >

          <Button type="primary" onClick={showDrawer}>
            Open
          </Button>
          <Drawer
              // title="Basic Drawer"
              placement="right"
              closable={false}
              onClose={onClose}
              visible={visible}
              getContainer={false}
              style={{ position: "absolute"}}
            >
            <div > {/*className="mapContainer">*/}
              <Map initialLocationString={props.location.search} designers={[
                {
                  id: 0,
                  name: "Joshua Shin",
                  rate: 4,
                  services: ["men's cut", "women's cut", "color", "perm", ],
                  location: {lat: 49.232743, lng: -123.024318}
                },{
                  id: 1,
                  name: "Yongju Babo",
                  rate: 1,
                  services: ["cut"],
                  location: {lat: 49.222743, lng: -123.023318}
                },{
                  id: 3,
                  name: "kangmin",
                  rate: 3,
                  services: ["cut", "color", "perm"],
                  location: {lat: 49.21, lng: -123.022}
                },{
                  id: 4,
                  name: "gina",
                  rate: 5,
                  services: ["cut", "color", "perm"],
                  location: {lat: 49.2, lng: -123.021}
                },{
                  id: 5,
                  name: "heeja",
                  rate: 2,
                  services: ["cut", "color", "perm"],
                  location: {lat: 49.19, lng: -123.020}
                },{
                  id: 6,
                  name: "jaewhee",
                  rate: 3,
                  services: ["cut", "color", "perm"],
                  location: {lat: 49.18, lng: -123.019}
                }
              ]}/>
            </div>
          </Drawer>

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
        
      </div>
    </>
  );
}
