import React from "react";
import SearchBar from "../../searchBar/SearchBar";
import "../../../assets/scss/View/MainView/MainView.scss";

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
