import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {firebaseDate} from "../../../config/fbConfig";
import {Divider} from "antd";
import MessengerListCard from "./MessengerListCard";

export default function MessengerListView() {
  const [currentUser, setCurrentUser] = useState(
    useSelector((state) => state.currentUser.currentUser)
  );

  const [rooms, setRooms] = useState([]);
  const [nickname, setNickname] = useState("");
  const history = useHistory();
  const [exampleText, setExampleText] = useState("Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words");

  console.log("haha");
  console.log(room);
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

  const loadLastMsg = async roomID => {
    return await firebaseDate.ref("chats/")
      .orderByChild("roomID")
      .equalTo(roomID).limitToLast(1)
      .once("value").then((resp) => {
        if (snapshotToArray(resp)[0] !== undefined) {
          lastMsgs[roomID] = snapshotToArray(resp)[0].message;
        }
      });
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
      {rooms.map((room) => {
        loadLastMsg(room.roomID).then(()=> {
            console.log(lastMsgs[room.roomID]);
          }
        );
        return (
          <MessengerListCard
            fname={
              room.designerID === currentUser.uid
                ? room.customerID
                : room.designerID
            }
            photoURL={currentUser.photoURL}
            enterChatRoom={enterChatRoom}
            roomID={item.roomID}
            msgDate={"2020.12.17"}
            lastMsg={oneLineTextMsg(exampleText)}
          />
        )
      })}
    </div>
  );
}
