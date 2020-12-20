import React from "react";
import { BrowserRouter } from "react-router-dom";
import { BackTop } from "antd";
import DesignerProfileTop from "./designerProfileTop/DesignerProfileTop";
import DesignerProfileBottom from "./designerProfileBottom/DesignerProfileBottom.jsx";
import { useDispatch, useSelector } from "react-redux";
import { CreateMessengerRoom } from "../messengerView/CreateMessengerRoom";
import { select_designer } from "../../../actions/selectedDesignerAction";

export default function DesignerProfileView() {
  const designer = useSelector((state) => state.selectedDesigner.selectedDesigner);
  const designers = useSelector((state) => state.firestore.designers);
  const urlParams = new URLSearchParams(window.location.search);
  const selected = designers.find((element) => element.uid === urlParams.get("uid"));
  const currentUser = useSelector((state) => state.currentUser.currentUser);
  const dispatch = useDispatch();
  console.log(selected);
  dispatch(select_designer(selected !== undefined ? selected : currentUser));
  const authentication = currentUser.uid === designer.uid;

  return (
    <BrowserRouter>
      <div className="designerProfileView">
        <DesignerProfileTop authentication={authentication} />

        <DesignerProfileBottom />

        <BackTop visibilityHeight={0}>
          <div className="backTopButton">Top</div>
        </BackTop>
      </div>
    </BrowserRouter>
  );
}
