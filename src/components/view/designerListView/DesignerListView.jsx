import React, { useState, useEffect } from "react";
import { Button, Drawer } from 'antd';
import queryString from "query-string";
import { load_database } from "../../../actions/firebaseAction";
import { firebaseStore } from "../../../config/fbConfig";
import { useDispatch, useSelector } from "react-redux";
import DesignerCardComponent from "./designerCardComponent/DesignerCardComponent";
import DesignerListFilter from "./DesignerListFilter";
import Map from "../../commonComponents/map/Map";
import { CloseOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";

export default function DesignerListView(props) {
  const designers = useSelector((state) => state.firestore.designers);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSearch = (designer) => () => {
    const route = `/designer_profile?uid=${designer.uid}`;
    history.push(route);
  };

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
  }, [dispatch, props.location.search]);

  const [mapVisibleMobile, setMapVisibleMobile] = useState(false);
  const [mapVisibleDesktop, setMapVisibleDesktop] = useState(true);

  // Desktop map controls
  const openMapDesktop = () => {
    setMapVisibleDesktop(true);
  };
  const closeMapDesktop = () => {
    setMapVisibleDesktop(false);
  };

  // Mobile map controls
  const openMapMobile = () => {
    setMapVisibleMobile(true);
  };
  const closeMapMobile = () => {
    setMapVisibleMobile(false);
  };

  return (
    <>
      <div className="listingContainer">
        <div className={mapVisibleDesktop ? "designerContainerMapVisible designerContainer" : "designerContainer"}>



          <div className="listContainer">
            <div className="listNavBar">
              listNavBar
              <div className="filter">
                <DesignerListFilter
                  numberOfDesigners={Object.keys(designers).length}
                  location="Vancouver"
                />
              </div>
              {/* Desktop map toggle button - used to show map if closed by the user */}
              <Button className="desktopOnly" onClick={openMapDesktop} hidden={mapVisibleDesktop}>
                <span role="img" aria-label="map">🗺️ Show map</span>
              </Button>
              {/* Mobile map toggle button - used to open map drawer */}
              <Button className="mobileOnly"onClick={openMapMobile} shape="circle">
                <span role="img" aria-label="map">🗺️</span>
              </Button>
            </div>
            {designers.map((designer, index) => (
              <div key={index} className="designerList">
                {console.log(designer)}
                <DesignerCardComponent designer={designer} handleSearch={handleSearch} />

                <DesignerCardComponent designer={designer} handleSearch={handleSearch} />
              </div>
            ))}
          </div>

          <Drawer
              // title="Basic Drawer"
              className="mobileOnly"
              placement="right"
              closable={false}
              onClose={closeMapMobile}
              visible={mapVisibleMobile}
              getContainer={false}
              // style={{ position: "absolute"}}
            >


            {/* Desktop map toggle button - used to show map if closed by the user */}
            <Button
                className="mobileOnly mapCloseButton"
                type="primary"
                shape="circle"
                onClick={closeMapMobile}
            >
                <CloseOutlined />
            </Button>

            <div className="mapContainer">
              <Map
                isDesktop={false}
                initialLocationString={props.location.search} 
                designers={
                  // Object.values(designers)
                  [{
                    uid: 0,
                    name: "Joshua Shin",
                    rate: 4,
                    services: ["men's cut", "women's cut", "color", "perm", "men's cut", "women's cut", "color", "perm",],
                    latLng: {lat: 49.2505955, lng: -123.1012059}
                  },{
                    uid: 1,
                    name: "Yongju Babo",
                    rate: 1,
                    services: ["cut"],
                    latLng: {lat: 49.2505955, lng: -123.1012059}
                  },{
                    uid: 3,
                    name: "Kangmin",
                    rate: 3,
                    services: ["cut", "color", "perm"],
                    latLng: {lat: 49.2505955, lng: -123.1012059}
                  },{
                    uid: 4,
                    name: "Gina",
                    rate: 5,
                    services: ["cut", "color", "perm"],
                    latLng: {lat: 49.2505955, lng: -123.1012059}
                  },{
                    uid: 5,
                    name: "Something Something Longnameguy",
                    rate: 2,
                    services: ["men's cut", "women's cut", "color", "perm", ],
                    latLng: {lat: 49.2505955, lng: -123.1012059}
                  },{
                    uid: 6,
                    name: "Jaewhee",
                    rate: 3,
                    services: ["cut", "color", "perm"],
                    latLng: {lat: 49.2505955, lng: -123.1012059}
                  }]
              } 
              />
            </div>
          </Drawer>
          

        </div>

        {mapVisibleDesktop && <div className="desktopOnly" style={{ position: "absolute", left: "60vw"}}>
            {/* Desktop map toggle button - used to show map if closed by the user */}
            <Button
                className="desktopOnly mapCloseButton"
                type="primary"
                shape="circle"
                onClick={closeMapDesktop}
            >
                <CloseOutlined />
            </Button>
            <div className="mapContainer">
              <Map
                isDesktop={true}
                initialLocationString={props.location.search} 
                designers={
                  // Object.values(designers)
                  [{
                    uid: 0,
                    name: "Joshua Shin",
                    rate: 4,
                    services: ["men's cut", "women's cut", "color", "perm", "men's cut", "women's cut", "color", "perm",],
                    latLng: {lat: 49.2505955, lng: -123.1012059}
                  },{
                    uid: 1,
                    name: "Yongju Babo",
                    rate: 1,
                    services: ["cut"],
                    latLng: {lat: 49.2505955, lng: -123.1012059}
                  },{
                    uid: 3,
                    name: "Kangmin",
                    rate: 3,
                    services: ["cut", "color", "perm"],
                    latLng: {lat: 49.2505955, lng: -123.1012059}
                  },{
                    uid: 4,
                    name: "Gina",
                    rate: 5,
                    services: ["cut", "color", "perm"],
                    latLng: {lat: 49.2505955, lng: -123.1012059}
                  },{
                    uid: 5,
                    name: "Something Something Longnameguy",
                    rate: 2,
                    services: ["men's cut", "women's cut", "color", "perm", ],
                    latLng: {lat: 49.2505955, lng: -123.1012059}
                  },{
                    uid: 6,
                    name: "Jaewhee",
                    rate: 3,
                    services: ["cut", "color", "perm"],
                    latLng: {lat: 49.2505955, lng: -123.1012059}
                  }]
              } 
              />
            </div>

          </div>}


      </div>
    </>
  );
}
