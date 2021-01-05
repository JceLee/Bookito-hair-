import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  Form,
  Input,
  Container,
  Button,
  InputGroupAddon,
  InputGroup,
} from "reactstrap";
import Moment from "moment";
import { firebaseDate } from "../../../config/fbConfig";
import queryString from "query-string";
import ScrollToBottom from "react-scroll-to-bottom";
import { useSelector } from "react-redux";

function ChatRoom(props) {
  const currentUser = useSelector((state) => state.currentUser.currentUser);
  const parsed = queryString.parse(props.location.search);
  const [chats, setChats] = useState([]);
  const [nickname, setNickname] = useState("");
  const [roomID, setRoomID] = useState(parsed.roomID);
  const [newChat, setNewChat] = useState({
    roomID: "",
    nickname: "",
    message: "",
    date: "",
    type: "",
  });
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      setNickname(currentUser.uid);
      firebaseDate
        .ref("chats/")
        .orderByChild("roomID") //sorting
        .equalTo(roomID)
        .on("value", (resp) => {
          setChats([]);
          const chats = snapshotToArray(resp);
          setChats(chats.filter((chat) => chat.roomID === roomID));
        });
    };
    fetchData();
  }, [roomID]);

  const snapshotToArray = (snapshot) => {
    const returnArr = [];

    snapshot.forEach((childSnapshot) => {
      const item = childSnapshot.val();
      item.key = childSnapshot.key;
      returnArr.push(item);
    });

    return returnArr;
  };

  const submitMessage = (e) => {
    e.preventDefault();
    const chat = newChat;
    chat.roomID = roomID;
    chat.nickname = nickname;
    chat.date = Moment(new Date()).format("DD/MM/YYYY HH:mm:ss");
    chat.type = "message";
    const newMessage = firebaseDate.ref("chats/").push();
    console.log(chat);
    newMessage.set(chat);
    console.log(chat);
    setNewChat({ roomID: "", nickname: "", message: "", date: "", type: "" });
  };

  const onChange = (e) => {
    e.persist();
    setNewChat({ ...newChat, [e.target.name]: e.target.value });
  };

  return (
    <Container className="chatRoom">
      <ScrollToBottom className="chatContent">
        {chats.map((item, idx) => (
          <div className="chatMessage">
            <div
              className={`${
                item.nickname === currentUser.fname
                  ? "rightBubble"
                  : "leftBubble"
              }`}
            >
              {item.nickname === currentUser.fname ? (
                <span className="msgName">Me</span>
              ) : (
                <span className="msgName">{item.nickname}</span>
              )}
              <span className="msgDate"> at {item.date}</span>
              <p>{item.message}</p>
            </div>
          </div>
        ))}
      </ScrollToBottom>
      <footer className="stickyFooter">
        <Form className="messageForm" onSubmit={submitMessage}>
          <InputGroup className="inputWrapper">
            <Input
              className="messageInput"
              type="text"
              name="message"
              id="message"
              placeholder="Enter message here"
              value={newChat.message}
              onChange={onChange}
            />
            <InputGroupAddon className="submitWrapper" addonType="append">
              <Button className="sendMessage" variant="primary" type="submit">
                Send
              </Button>
            </InputGroupAddon>
          </InputGroup>
        </Form>
      </footer>
    </Container>
  );
}

export default ChatRoom;
