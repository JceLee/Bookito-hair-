import { useDispatch } from "react-redux";
import queryString from "query-string";
import { getUserDocument } from "../../../helpers/getUserDocument";
import { sign_in_with_facebook } from "../../../actions/currentUser";
import React from "react";
import { useHistory } from "react-router-dom";

export default function EmailNotificationFromDesigner(props) {
  const dispatch = useDispatch();
  const parsed = queryString.parse(props.location.search);
  getUserDocument(parsed.uid).then(function (result) {
    dispatch(sign_in_with_facebook(result));
    directProfile();
  });

  const history = useHistory();

  const directProfile = () => {
    history.push("/designer_schedule");
  };

  return <div>Please wait...</div>;
}
