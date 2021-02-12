import React from "react";
import {firebaseDate, firebaseStore} from "../../../config/fbConfig";

const firebaseRef = firebaseDate.ref("rooms/");
const firestoreRef = firebaseStore.collection("users");

export function CreateMessengerRoom(customer, designer) {

  const roomID = customer > designer ? customer + designer : designer + customer;
  const room = {
    roomID: roomID,
    customerID: customer,
    designerID: designer,
  };

  const getNames = async () => {
    console.log("haha");
    const res = await Promise.all([
      new Promise(resolve => resolve(firestoreRef.doc(customer).get().then((doc) => room["customerName"] = doc.data().displayName))),
      new Promise(resolve => resolve(firestoreRef.doc(designer).get().then((doc) => room["designerName"] = doc.data().displayName)))
    ])
    console.log(res)
  };

  getNames().then(()=> {
    firebaseRef
      .orderByChild("roomID")
      .equalTo(roomID)
      .once("value", (snapshot) => {
        if (snapshot.val() === null) {
          const newRoom = firebaseDate.ref("rooms/").push();
          newRoom.set(room);
        };
        // enterChatRoom(room.roomID);
      });
    console.log(room);
  });



  return roomID;
}
