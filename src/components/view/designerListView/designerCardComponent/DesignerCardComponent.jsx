import React from "react";
import DesignerCardBottom from "./DesignerCardBottom";
import DesignerCardTop from "./designerCardTop/DesignerCardTop";
import { useHistory } from "react-router-dom";


export default function DesignerCardComponent(props) {
    const { designer } = props;

    const history = useHistory();
    const handleSearch = location => {
        const route = `/designer_profile?id=${designer.id}`;
        history.push(route);
    };

    return (
        <div className="designerCardComponent" onClick={handleSearch}>
            <DesignerCardTop fname={designer.fname} rating={designer.rating} types={designer.types} walk={designer.walk} drive={designer.drive} />
            <DesignerCardBottom workImgs={designer.workImgs} />
        </div>
    );
}