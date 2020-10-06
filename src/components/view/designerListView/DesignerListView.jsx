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
  const [mapVisibleMobile, setMapVisibleMobile] = useState(false);
  const [mapVisibleDesktop, setMapVisibleDesktop] = useState(true);

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

  const testDesignerList = [{
    uid: 0,
    name: "Joshuaa Shin",
    rate: 4,
    services: ["Clinic", "Color", "Cut", "Perms", "Promo", "Style"],
    latLng: {lat: 49.2505955, lng: -123.1012059}
  },{
    uid: 1,
    name: "Yongju Babo",
    rate: 1,
    services: ["cut"],
    latLng: {lat: 49.2505955, lng: -123.1012059}
  },{
    uid: 3,
    name: "Kangmin Leeeeee",
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
    services: ["Clinic", "Color", "Cut", "Perms", "Promo", "Style"],
    latLng: {lat: 49.2505955, lng: -123.1012059}
  },{
    uid: 6,
    name: "Jaewhee",
    rate: 3,
    services: ["cut", "color", "perm"],
    latLng: {lat: 49.2505955, lng: -123.1012059}
  }];

  return (
    <>
      <div className="listingContainer">
        {/* Designer listing shrinks using the class "designerContainerMapVisible" when map is open on desktop */}
        <div className={mapVisibleDesktop ? "designerContainerMapVisible designerContainer" : "designerContainer"}>

          <div className="listingBase">
            {/* Controls above the designer listing */}
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
            {/* Designer listing */}
            {designers.map((designer, index) => (
              <div key={index} className="designerList">
                {console.log(designer)}
                <DesignerCardComponent designer={designer} handleSearch={handleSearch} />
                <DesignerCardComponent designer={designer} handleSearch={handleSearch} />
              </div>
            ))}
          </div>

          <Drawer
              className="mobileOnly"
              placement="right"
              closable={false}
              onClose={closeMapMobile}
              visible={mapVisibleMobile}
              getContainer={false}
            >
            {/* Map close button (top left of the map) */}
            <Button
                className="mapCloseButton mobileOnly"
                type="primary"
                shape="circle"
                onClick={closeMapMobile}
            >
                <CloseOutlined />
            </Button>
            {/* Map inside drawer */}
            <div className="mapContainer">
              <Map
                isDesktop={false}
                initialLocationString={props.location.search} 
                designers={testDesignerList /*Object.values(designers)*/ } 
              />
            </div>
          </Drawer>
        </div>

        {mapVisibleDesktop && <div className="mapBase desktopOnly">
          {/* Map close button (top left of the map) */}
          <Button
            className="mapCloseButton desktopOnly"
            type="primary"
            shape="circle"
            onClick={closeMapDesktop}
          >
              <CloseOutlined />
          </Button>
          {/* Map on the right of designer list view */}
          <div className="mapContainer">
            <Map
              isDesktop={true}
              initialLocationString={props.location.search}
              designers={testDesignerList /*Object.values(designers)*/ }
            />
          </div>
        </div>}

      </div>
    </>
  );
}
