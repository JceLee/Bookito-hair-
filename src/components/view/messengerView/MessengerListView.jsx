import React, { useEffect, useState } from "react";
import { CreateMessengerRoom } from "./CreateMessengerRoom";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { firebaseDate } from "../../../config/fbConfig";
import { Divider } from "antd";
import Moment from "moment";
import MessengerListCard from "./MessengerListCard";

export default function MessengerListView() {
  const [currentUser, setCurrentUser] = useState(
    useSelector((state) => state.currentUser.currentUser)
  );
  console.log(currentUser);

  const [room, setRoom] = useState([]);
  const [nickname, setNickname] = useState("");
  const history = useHistory();

  console.log("haha");
  console.log(room);

  useEffect(() => {
    console.log("babo");
    const fetchData = async () => {
      setNickname(currentUser.fname);
      firebaseDate.ref("rooms/").on("value", (resp) => {
        setRoom([]);
        const rooms = snapshotToArray(resp);
        console.log(rooms);
        setRoom(
          rooms.filter(
            (room) =>
              room.customerID === currentUser.uid ||
              room.designerID === currentUser.uid
          )
        );
      });
    };
    fetchData();
  }, []);

  const snapshotToArray = (snapshot) => {
    const returnArr = [];

    snapshot.forEach((childSnapshot) => {
      const item = childSnapshot.val();
      item.key = childSnapshot.key;
      returnArr.push(item);
    });

    return returnArr;
  };

  const loadLastMsg = async roomID => {
    let lastMsg = await firebaseDate.ref("chats/")
    .orderByChild("roomID")
    .equalTo(roomID).limitToLast(1)
    .once("value").then((resp) => {
      console.log(snapshotToArray(resp)[0].message);
      return snapshotToArray(resp)[0].message;
    })
    return lastMsg;
  }

  console.log(loadLastMsg("1233"));

  const enterChatRoom = (roomID) => {
    // console.log(roomID);
    // const chat = { roomID: '', nickname: '', message: '', date: '', type: '' };
    // chat.roomID = roomID;
    // chat.nickname = nickname;
    // chat.date = Moment(new Date()).format('DD/MM/YYYY HH:mm:ss');
    // chat.message = `${nickname} enter the room`;
    // chat.type = 'join';
    // const newMessage = firebaseDate.ref('chats/').push();
    // newMessage.set(chat);

    history.push(`/chatroom?roomID=${roomID}`);
  };

  return (
    <div>
      <Divider />
      {room.map((item, idx) => (
        <MessengerListCard
          fname={
            item.designerID === currentUser.uid
              ? item.customerID
              : item.designerID
          }
          photoURL={currentUser.photoURL}
          enterChatRoom={enterChatRoom}
          roomID={item.roomID}
          lastMsg={"test message"}
        />
      ))}
    </div>
  );
}
