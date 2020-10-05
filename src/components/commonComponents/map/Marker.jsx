import React, { useState, useEffect } from 'react';
import { Button, Popover, Tag, Divider, Modal} from 'antd';
import { Link } from "react-router-dom";
import ReadOnlyStar from "../ReadOnlyStar";
import Slider from "react-slick";
import { HomeTwoTone, ScissorOutlined } from '@ant-design/icons';
import "../../../assets/scss/commonComponents/map/Map.scss";
import { StarRate, StarRead } from "../StarRate";

export default function Marker(props) {
    const { 
        isDesktop,
        lat,
        lng,
        userLocation,
        designer,
        key,
    } = props;

    const [visible, setVisible] = useState(false);

    const carouselSettings = {
        dots: true,
        // arrows: false,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const tagColors = ["#332C1E"];

    const hide = () => {
        setVisible(false);
    };

    const display = () => {
        setVisible(true);
    };

    const handleVisibleChange = (visible) => {
        setVisible(visible);
    };

    const getDistanceFromLatLonInKm = (lat1, lng1, lat2, lng2) => {
        const degToRad = (deg) => {
            return deg * (Math.PI/180)
        }
        let R = 6371; // Radius of the earth in km
        let dLat = degToRad(lat2-lat1); // deg2rad below
        let dLon = degToRad(lng2-lng1);
        let a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(degToRad(lat1)) 
                * Math.cos(degToRad(lat2)) * Math.sin(dLon/2) * Math.sin(dLon/2);
        let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
        let d = R * c; // Distance in km
        let format_distance = d < 1 ? "Less than 1" : Math.round(d)
        return format_distance;
    }

    return designer ?
        <div className="marker">
            {isDesktop ?
            <Popover
                overlayClassName="designerPopover"
                content={
                    <div className="popoverContent">
                        <Link to={`/designer_profile?uid=${designer.uid}`}>
                            <Slider {...carouselSettings} style={{width: "180px", height: "180px"}}>
                                <div><img src="https://www.cuded.com/wp-content/uploads/2017/08/hair-styles-for-men-31.jpg" alt="" width="180px" height="180px"/></div>
                                <div><img src="https://www.menshairstyletrends.com/wp-content/uploads/2017/03/mokumbarbers-messy-styles-for-men-2017-trends-texture.jpg" alt="" width="180px" height="180px"/></div>
                            </Slider>
                        </Link>
                        <div style = {{marginLeft: 10}}>
                            <div style={{height: 100, width: 180, overflow: "auto"}}>
                                <Link to={`/designer_profile?uid=${designer.uid}`}><h4 style={{color: "#332C1E", marginBottom: 3}}>{designer.name}</h4></Link>
                                <StarRead rateScore={4.32} rateCount={32}/>
                                <p style={{color: "#332C1E", marginBottom: 7}}>{`${getDistanceFromLatLonInKm(lat, lng, userLocation && userLocation.lat, userLocation && userLocation.lng)}km from you`}</p>
                            </div>

                            <div style={{height: 81, width: 180, overflow: "auto"}}>
                                {designer.services && designer.services.map((service, index) => (
                                    <Tag shape="rounded" style={{marginBottom: 4, borderRadius: 20}} color={tagColors[index%tagColors.length]}>{service}</Tag>
                                ))}
                            </div>
                        </div>
                    </div>
                }
                trigger="click"
                visible={visible}
                onVisibleChange={handleVisibleChange}
            >
                <Button className="markerButton" type="primary" shape="circle" icon={<ScissorOutlined />} />
            </Popover>:

            <div>
                <Button className="markerButton" type="primary" shape="circle" onClick={display} icon={<ScissorOutlined />}/>
                <Modal
                    className="designerPopover"
                    visible={visible}
                    footer={null}
                    onCancel={hide}
                    // maskClosable={false}
                    mask={false}
                    style={{ top: "69.5vh" }} // This determines the location of the modal in mobile.
                >
                        <div className="popoverContent">
                            <Link to={`/designer_profile?uid=${designer.uid}`}>
                                <Slider {...carouselSettings} className="markerSlider">
                                    <div><img src="https://www.cuded.com/wp-content/uploads/2017/08/hair-styles-for-men-31.jpg" alt=""/></div>
                                    <div><img src="https://www.menshairstyletrends.com/wp-content/uploads/2017/03/mokumbarbers-messy-styles-for-men-2017-trends-texture.jpg" alt=""/></div>
                                </Slider>
                            </Link>
                            <div style = {{ marginLeft: 10 }}>
                                <div style={{height: 80, overflow: "auto"}}>
                                    <Link to={`/designer_profile?uid=${designer.uid}`}><h4 style={{color: "#332C1E", marginBottom: 3}}>{designer.name}</h4></Link>
                                    <StarRead rateScore={4.32} rateCount={32}/>
                                    <p style={{color: "#332C1E", marginBottom: 0}}>{`${getDistanceFromLatLonInKm(lat, lng, userLocation && userLocation.lat, userLocation && userLocation.lng)}km from you`}</p>
                                </div>

                                <div style={{height: 54, overflow: "auto"}}>
                                    {designer.services && designer.services.map((service, index) => (
                                        <Tag shape="rounded" style={{marginBottom: 4, borderRadius: 20}} color={tagColors[index%tagColors.length]}>{service}</Tag>
                                    ))}
                                </div>
                            </div>
                        </div>
                </Modal>
            </div>}
        </div>
    : 
        <HomeTwoTone key={key} style={{fontSize: 20, transform: "translate(-50%, -50%)"}} />
    ;
};
