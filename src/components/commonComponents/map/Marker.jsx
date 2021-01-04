import React, { useState } from 'react';
import { Button, Popover, Tag, Modal} from 'antd';
import { Link } from "react-router-dom";
import { StarRead } from "../StarRate";
import { HomeTwoTone, ScissorOutlined } from '@ant-design/icons';
import Slider from "react-slick";
import { getDistanceFromLatLonInKm } from "../../../helpers/geocode";
import placeholder from "../../../assets/images/placeholder.png";

// Marker can be initialized without "designer" prop to create a Home location marker.
// Prop "isDesktop" is used to indicate whether a desktop marker or mobile marker should be created.
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
        // arrows: false, // Can hide arrows on image carousel.
        dots: false,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
    };

    const hide = () => {
        setVisible(false);
    };

    const display = () => {
        setVisible(true);
    };

    const handleVisibleChange = (visible) => {
        setVisible(visible);
    };

    return designer ?
        <div key={key} className="markerOuter">

            {/* Desktop version of marker using Popover */}
            {isDesktop ? <Popover 
                overlayClassName="markerInner"
                content={
                    <div className="markerContent">
                        <Link to={`/designer_profile?uid=${designer.uid}`}>
                            <Slider {...carouselSettings} className="markerCarousel">
                                {designer.works && designer.works.length ? designer.works.map((work, index) => (
                                    <div key={`galleryImg${index}`}><img src={work.url} alt={`Gallery img${index}`} /></div>
                                ))
                                : <div><img src={placeholder} alt={`Gallery placeholder`} /></div>}
                            </Slider>
                        </Link>
                        <div className="markerDescription">
                            <div className="markerDescriptionUpper">
                                <Link to={`/designer_profile?uid=${designer.uid}`}>
                                    <h4 className="markerDescriptionName">{designer.displayName}</h4>
                                </Link>
                                <StarRead rateScore={designer.rateScore || 0} rateCount={designer.rateCount || 0}/>
                                <p className="markerDescriptionDistance">{`${getDistanceFromLatLonInKm(lat, lng, userLocation && userLocation.lat, userLocation && userLocation.lng)}km from you`}</p>
                            </div>

                            <div className="markerDescriptionLower">
                                {designer.services && Object.keys(designer.services).map((serviceKey, index) => (
                                    designer.services[serviceKey] !== [] && 
                                    <Tag key={`serviceTag${index}`} className="serviceTag">{serviceKey}</Tag>
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
            </Popover>

            // Mobile version of marker using Modal
            : <div>
                <Button className="markerButton" type="primary" shape="circle" onClick={display} icon={<ScissorOutlined />}/>
                <Modal
                    className="markerInner"
                    visible={visible}
                    footer={null}
                    onCancel={hide}
                    mask={false}
                    style={{top: "69.5vh"}} // Determines the location of the modal in mobile // TODO: THIS SHOULD BE FROM BOTTOM, BUT BOTTOM DOESNT WORK!!!
                    // maskClosable={false} // Determines whether clicking outside the modal closes the modal
                >
                        <div className="markerContent">
                            <Link to={`/designer_profile?uid=${designer.uid}`}>
                                <Slider {...carouselSettings} className="markerCarousel">
                                    {designer.works && designer.works.length ? designer.works.map((imgSrc, index) => (
                                        <div key={`galleryImg${index}`}><img src={imgSrc} alt={`Gallery img${index}`} /></div>
                                    ))
                                    : <div><img src={placeholder} alt={`Gallery placeholder`} /></div>}
                                </Slider>
                            </Link>
                            <div className="markerDescription">
                                <div className="markerDescriptionUpper">
                                    <Link to={`/designer_profile?uid=${designer.uid}`}><h4 className="markerDescriptionName">{designer.displayName}</h4></Link>
                                    <StarRead rateScore={designer.rateScore || 0} rateCount={designer.rateCount || 0}/>
                                    <p className="markerDescriptionDistance">{`${getDistanceFromLatLonInKm(lat, lng, userLocation && userLocation.lat, userLocation && userLocation.lng)}km from you`}</p>
                                </div>

                                <div className="markerDescriptionLower">
                                    {designer.services && Object.keys(designer.services).map((serviceKey, index) => (
                                        designer.services[serviceKey] !== [] && 
                                        <Tag key={`serviceTag${index}`} className="serviceTag" color="#332C1E">{serviceKey}</Tag>
                                    ))}
                                </div>
                            </div>
                        </div>
                </Modal>
            </div>}
        </div>
    : <HomeTwoTone key={key} style={{fontSize: 20, transform: "translate(-50%, -50%)"}} />
};
