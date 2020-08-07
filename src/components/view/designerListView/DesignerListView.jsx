import React, { useState, useEffect } from "react";
import queryString from "query-string"
import * as db from "../../../config/fbConfig";
import DesignerCardComponent from "./designerCardComponent/DesignerCardComponent";
import DesignerListFilter from "./DesignerListFilter";


export default function DesignerListView(props) {
    // db.getDesignerList();

    useEffect(() => {
        const params = queryString.parse(props.location.search);
        console.log("params:", params);
    });

    // for testing
    const designer = {
        id: 1,
        fname: 'John',
        lname: 'Doe',
        location: '111 W Georgia St, Vancouver',
        rating: 3.7,
        img:
            'https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg',
        types: ["Men's Hair", "Women's Hair", "Colour", "Perm"],
        walk: "10",
        drive: "5",
        workImgs: ["1", "2", "3", "4", "5", "6", "7", "8"]
    };

    return (
        <>
            <div className="listingContainer">
                <div className="designerContainer">
                    <div className="listNavBar">
                        listNavBar
                        <div className="filter">
                            <DesignerListFilter numberOfDesigners='400' location='Vancouver' />
                        </div>
                    </div>
                    <div className="designerList">
                        <DesignerCardComponent designer={designer} />
                    </div>
                </div>
                <div className="mapContainer">
                    Map container
                </div>
            </div>
        </>
    );
}