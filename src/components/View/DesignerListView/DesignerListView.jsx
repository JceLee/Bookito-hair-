import React from "react";
import { useSelector } from 'react-redux'

export default function DesignerListView() {
  const {
    database
  } = useSelector((state) => ({
    database: state.firebase.database
  }));
  console.log(database);
  return <div>Designer List Page</div>;
}
