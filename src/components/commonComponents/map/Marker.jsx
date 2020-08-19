import React, { useState, useEffect } from 'react';
import { Button, Popover, Rate } from 'antd';
import { HomeTwoTone, ScissorOutlined } from '@ant-design/icons';
import Slider from "react-slick";
import "../../../assets/scss/commonComponents/map/Map.scss";

export default function Marker(props) {
    const { 
        designer,
        id // TODO move id declartion in here?
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

    const hide = () => {
        setVisible(false);
    };

    const handleVisibleChange = visible => {
        setVisible(visible);
    };

    return designer ? (
        <Popover
            className={"designerPopover"}
            content={
                <div className={"popoverContent"}>
                    <Slider {...carouselSettings} style={{width: 200, height: 210}}>
                        <div><img src="https://www.cuded.com/wp-content/uploads/2017/08/hair-styles-for-men-31.jpg" alt="" width="200px" height="210px"/></div>
                        <div><img src="https://www.menshairstyletrends.com/wp-content/uploads/2017/03/mokumbarbers-messy-styles-for-men-2017-trends-texture.jpg" alt="" width="200px" height="210px"/></div>
                    </Slider>
                    <div style={{display: "flex", flexDirection: "row", paddingTop: 10}}>
                        <h4>{designer.name}</h4>
                        {/* <Rate disabled defaultValue={2} style={{justifyContent: "center"}} /> */}
                    </div>

                    <p>15 minutes away</p>
                    <div style={{display: "flex", flexDirection: "row", paddingRight: "10px"}}>
                        {designer.services && designer.services.map(service => 
                            <div style={{marginRight: "5px"}}>
                                <p>{service}</p>
                            </div>
                        )}
                    </div>

                </div>
                /* <a onClick={hide}>Close</a> */
            }
            // title={designer?.name}
            trigger="click"
            visible={visible}
            onVisibleChange={handleVisibleChange}
            // getPopupContainer={trigger => trigger.parentElement} // Ensures popup position is relative to marker position
        >
            <Button className="marker" type="primary" shape="circle" icon={<ScissorOutlined />} />
        </Popover> 
    ) : (
        <HomeTwoTone style={{fontSize: 20, transform: "translate(-50%, -50%)"}} />
    );
};
