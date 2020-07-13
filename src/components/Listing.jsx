import React from "react";
import * as db from "../config/fbConfig";

export default function Listing() {
    db.getDesignerList();
    return (
        <div>
            Listing
        </div>
    );
}
