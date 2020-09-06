import React, { useState, useEffect } from 'react';
import { Button, Popover, Tag, Divider} from 'antd';
import ReadOnlyStar from "../ReadOnlyStar";
import Slider from "react-slick";
import { HomeTwoTone, ScissorOutlined } from '@ant-design/icons';
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

    const tagColors = ["#332C1E"];

    const hide = () => {
        setVisible(false);
    };

    const handleVisibleChange = visible => {
        setVisible(visible);
    };

    return designer ? (
        <Popover
            overlayClassName="designerPopover"
            content={
                <div className={"popoverContent"}>
                    <Slider {...carouselSettings} style={{width: "170px", height: "170px"}}>
                        <div><img src="https://www.cuded.com/wp-content/uploads/2017/08/hair-styles-for-men-31.jpg" alt="" width="170px" height="170px"/></div>
                        <div><img src="https://www.menshairstyletrends.com/wp-content/uploads/2017/03/mokumbarbers-messy-styles-for-men-2017-trends-texture.jpg" alt="" width="170px" height="170px"/></div>
                    </Slider>
                    <div style = {{margin: 10}}>
                        <h4 style={{color: "#332C1E", marginBottom: 0}}>{designer.name}</h4>
                        <ReadOnlyStar rate={designer.rate}/>
                        <p style={{color: "#332C1E", marginTop: 2}}>15 minutes away</p>
                        <div style={{width: 170}}>
                            {designer.services && designer.services.map((service, index) => (
                                <Tag shape="rounded" style={{marginBottom: 5, borderRadius: 20}} color={tagColors[index%tagColors.length]}>{service}</Tag>
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
    ) : (
        <HomeTwoTone style={{fontSize: 20, transform: "translate(-50%, -50%)"}} />
    );
};
