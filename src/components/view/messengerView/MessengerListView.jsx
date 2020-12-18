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
  const [exampleText, setExampleText] = useState("Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words");

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

  const oneLineTextMsg = (text) => {
    // let firstLine = text.substr(0, text.indexOf("\n"));
    // return firstLine;
    // if (text.length > 60) {
    //   const exceededCharacters = text.length - 60;
    //   // let oneLineText = text.substring(0, text.length - exceededCharacters);
    //   oneLineText += '...';
    //   return oneLineText;
    // } else {
      return text;
    // }
  }

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
          msgDate={"2020.12.17"}
          lastMsg={oneLineTextMsg(exampleText)}
        />
      ))}
    </div>
  );
}
