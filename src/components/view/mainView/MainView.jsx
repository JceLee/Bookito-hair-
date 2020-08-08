import React from "react";
import SearchBar from "../../commonComponents/searchBar/SearchBar";
import "../../../assets/scss/view/mainView/MainView.scss";

export default function MainView() {
    return (
        <>
            <div className="searchBarSpace">
                <SearchBar />
            </div>
            <div className="annoucementSpace">
                annoucement space here
            </div>
        </>
    );
}
