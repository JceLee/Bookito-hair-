import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {firebaseDate} from "../../../config/fbConfig";
import {Divider} from "antd";
import MessengerListCard from "./MessengerListCard";
import {resolve} from "@reach/router/lib/utils";

export default function MessengerListView() {
  const [currentUser, setCurrentUser] = useState(
    useSelector((state) => state.currentUser.currentUser)
  );

  const [rooms, setRooms] = useState([]);
  const [nickname, setNickname] = useState("");
  const history = useHistory();

  const lastMsgs = {};

  useEffect(() => {
    const fetchData = async () => {
      setNickname(currentUser.fname);
      firebaseDate.ref("rooms/").on("value", (resp) => {
        setRooms([]);
        const rooms = snapshotToArray(resp);
        setRooms(
          rooms.filter(
            (room) =>
              room.customerID === currentUser.uid ||
              room.designerID === currentUser.uid
          )
        );
      });
    };
    loadLastMsg();
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

  const loadLastMsg = () => {
    rooms.map((room) => {
      const resp = firebaseDate.ref("chats/")
        .orderByChild("roomID")
        .equalTo(room.id).limitToLast(1)
        .once("value");
      if (snapshotToArray(resp)[0] !== undefined) {
        lastMsgs[room.id] = snapshotToArray(resp)[0].message;
        return snapshotToArray(resp)[0].message;
      }
    })
  };

  console.log(loadLastMsg());

  const enterChatRoom = (roomID) => {
    history.push(`/chatroom?roomID=${roomID}`);
  };

  return (
    <div>
      <Divider/>
      {rooms.map((room) => {
        return (<MessengerListCard
          key={room.roomID}
          fname={
            room.designerID === currentUser.uid
              ? room.customerID
              : room.designerID
          }
          photoURL={currentUser.photoURL}
          enterChatRoom={enterChatRoom}
          roomID={room.roomID}
          msgDate={"2020.12.17"}
          lastMsg={lastMsgs[room.id]}
        />)
      })}
    </div>
  );
};
