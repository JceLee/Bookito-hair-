import React from "react";
import { firebaseDate } from "../../../config/fbConfig";

const ref = firebaseDate.ref("rooms/");

export function CreateMessengerRoom(customer, designer) {
  // const history = useHistory();
  //
  // const enterChatRoom = (roomID) => {
  //   history.push(`/chatroom?roomID=${roomID}`);
  // };

  const roomID = customer > designer ? customer + designer : designer + customer;
  const room = {
    roomID: roomID,
    customerID: customer,
    designerID: designer,
  };

  ref
    .orderByChild("roomID")
    .equalTo(roomID)
    .once("value", (snapshot) => {
      console.log(snapshot.val());
      console.log(roomID)
      if (snapshot.val() === null) {
        const newRoom = firebaseDate.ref("rooms/").push();
        newRoom.set(room);
      };
      // enterChatRoom(room.roomID);
    });
}
