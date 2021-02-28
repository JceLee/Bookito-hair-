import React, { useState, useEffect } from "react";
import SearchBarSection from "./SearchBarSection";
import NewDesignersSection from "./NewDesignersSection";
import JoinUsSection from "./JoinUsSection";
import BookitoFooter from "../../commonComponents/BookitoFooter";
import { firebaseStore } from "../../../config/fbConfig";
import { designerTypes } from "../../../constants/designerTypes";

export default function MainView() {
  const [advList, setAdvList] = useState([]);

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  useEffect(() => {
    const newList = [];
    firebaseStore
      .collection("users")
      .where("accountType", "==", designerTypes.lash)
      .get()
      .then((querySnapShot) => {
        while (newList.length < 8) {
          let data = querySnapShot.docs[getRandomInt(querySnapShot.docs.length)].data();
          // if (advList.find((e) => e[0] === data.uid)) {
          //   continue;
          // } else {
          //   advList.push([data.uid, data.works[getRandomInt(data.works.length)].url]);
          // }
          newList.push([data.uid, data.works[getRandomInt(data.works.length)].url]);
        }
        setAdvList(newList);
      });
  }, []);

  return (
    <>
      <SearchBarSection />
      <NewDesignersSection advList={advList} />
      <JoinUsSection />
      <BookitoFooter />
    </>
  );
}
