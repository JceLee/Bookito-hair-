import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { firebaseDate, firebaseStore } from "../../../config/fbConfig";
import { Divider } from "antd";
import MessengerListCard from "./MessengerListCard";

export default function MessengerListView() {
  const [currentUser, setCurrentUser] = useState(
    useSelector((state) => state.currentUser.currentUser)
  );
  const [rooms, setRooms] = useState([]);
  // const [nickname, setNickname] = useState("");
  const history = useHistory();
  const [forceRendering, setForceRendering] = useState(false);
  const lastMsgs = useRef({});
  const profiles = useRef({});

  useEffect(() => {
    const fetchData = async () => {
      // setNickname(currentUser.fname);
      firebaseDate.ref("rooms/").on("value", (resp) => {
        setRooms([]);
        const rooms = snapshotToArray(resp);
        setRooms(
          rooms.filter(
            (room) => room.customerID === currentUser.uid || room.designerID === currentUser.uid
          )
        );
      });
    };
    fetchData();
  }, [currentUser]);

  const snapshotToArray = (snapshot) => {
    const returnArr = [];
    snapshot.forEach((childSnapshot) => {
      const item = childSnapshot.val();
      item.key = childSnapshot.key;
      returnArr.push(item);
    });
    return returnArr;
  };

  const loadLastMsg = async (roomID) => {
    await firebaseDate
      .ref("chats/")
      .orderByChild("roomID")
      .equalTo(roomID)
      .limitToLast(1)
      .once("value")
      .then((resp) => {
        console.log(snapshotToArray(resp));
        console.log(lastMsgs.current);
        lastMsgs.current[roomID] =
          snapshotToArray(resp)[0] !== undefined
            ? snapshotToArray(resp)[0]
            : {
                date: " ",
                message: "No messages yet",
              };
        loadProfileImg(roomID);
        return 1;
      });
  };

  const enterChatRoom = (roomID) => {
    history.push(`/chatroom?roomID=${roomID}`);
  };

  const findID = (roomID) => {
    for (let i = 0; i < rooms.length; i++) {
      if (rooms[i].roomID === roomID) {
        if (rooms[i].designerID === currentUser.uid) {
          return rooms[i].customerID;
        } else {
          return rooms[i].designerID;
        }
      }
    }
  };

  const loadProfileImg = async (roomID) => {
    const designerID = findID(roomID);
    try {
      const userDocument = await firebaseStore.doc(`users/${designerID}/`).get();
      profiles.current[roomID] = userDocument.data().photoURL;
      if (Object.keys(profiles.current).length === rooms.length && !forceRendering) {
        setForceRendering(!forceRendering);
      }
    } catch (error) {
      console.log("Error fetching user", error);
    }
  };

  const emptyMessengerList = () => {
    if (rooms.length === 0) {
      return <p id="emptyMsgListPtag">No chat room yet :(</p>;
    }
  };

  return (
    <div>
      <Divider />
      {emptyMessengerList()}
      {rooms.map((room) => {
        loadLastMsg(room.roomID);
        console.log(lastMsgs.current[room.roomID]?.date);
        return (
          <MessengerListCard
            key={room.roomID}
            fname={room.designerID === currentUser.uid ? room.customerName : room.designerName}
            photoURL={profiles.current[room.roomID]}
            enterChatRoom={enterChatRoom}
            roomID={room.roomID}
            msgDate={lastMsgs.current[room.roomID]?.date}
            lastMsg={lastMsgs.current[room.roomID]?.message}
          />
        );
      })}
    </div>
  );
}
