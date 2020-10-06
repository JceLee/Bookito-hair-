import React, { useState } from 'react';
import { Button, Popover, Tag, Modal} from 'antd';
import { Link } from "react-router-dom";
import { StarRead } from "../StarRate";
import { HomeTwoTone, ScissorOutlined } from '@ant-design/icons';
import Slider from "react-slick";
import { getDistanceFromLatLonInKm } from "../../../helpers/geocode";

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

    const tagColors = ["#332C1E"];
    const carouselSettings = {
        // arrows: false, // Can hide arrows on image carousel.
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1
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
        <div key={key} className="marker">

            {/* Desktop version of marker using Popover */}
            {isDesktop ? <Popover 
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
            </Popover>

            // Mobile version of marker using Modal
            : <div>
                <Button className="markerButton" type="primary" shape="circle" onClick={display} icon={<ScissorOutlined />}/>
                <Modal
                    className="designerPopover"
                    visible={visible}
                    footer={null}
                    onCancel={hide}
                    mask={false}
                    // maskClosable={false}     // Determines whether clicking outside the modal closes the modal
                >
                        <div className="popoverContent">
                            <Link to={`/designer_profile?uid=${designer.uid}`}>
                                <Slider {...carouselSettings} className="markerCarousel">
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
    : <HomeTwoTone key={key} style={{fontSize: 20, transform: "translate(-50%, -50%)"}} />
};
