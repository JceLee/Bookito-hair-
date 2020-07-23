import React from "react";
import * as db from "../../../config/fbConfig";

export default function DesignerListView() {
  db.getDesignerList();
  return <div>Designer List Page</div>;
}
