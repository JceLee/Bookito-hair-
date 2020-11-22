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
    useSelector((state) => state.signIn.currentUser)
  );
  console.log(currentUser);
  // CreateMessengerRoom(currentUser, currentUser);

  const [room, setRoom] = useState([]);
  const [nickname, setNickname] = useState("");
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      setNickname(currentUser.fname);
      firebaseDate.ref("rooms/").on("value", (resp) => {
        setRoom([]);
        const rooms = snapshotToArray(resp);
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
          photoURL={null}
          enterChatRoom={enterChatRoom}
          roomID={item.roomID}
        />
      ))}
    </div>
  );
}
