import React from "react";
import { firebaseDate } from "../../../config/fbConfig";

const ref = firebaseDate.ref("rooms/");

export function CreateMessengerRoom(customer, designer) {
  const room = {
    roomID: customer.uid + designer.uid,
    customerID: customer.uid,
    designerID: designer.uid,
  };
  ref
    .orderByChild("roomID")
    .equalTo(room.roomID)
    .once("value", (snapshot) => {
      const newRoom = firebaseDate.ref("rooms/").push();
      newRoom.set(room);
    });
}
s;
