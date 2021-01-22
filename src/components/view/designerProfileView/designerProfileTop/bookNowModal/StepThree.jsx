import React from "react";
import {List, Button, Typography} from "antd";

export default function StepThree(props) {
  const {Text} = Typography;
  const {
    displayedDay,
    bookingTime,
    getServiceContent,
    stepChoice,
    setBackToTimePosition,
  } = props;

  const titles = [
    {
      id: 1,
      title: "Date",
      contents: displayedDay.toLocaleDateString(),
    },
    {
      id: 2,
      title: "Time",
      contents: bookingTime,
    },
    {id: 3, title: "Service", contents: getServiceContent()},
  ];

  const moveToSelectTimePosition = (item) => {
    if (item.title === "Time") {
      setBackToTimePosition(true);
    }
    stepChoice(item);
  };

  return (
    <div className="stepThree" id="stepThreeTopId">
      {/* <p id="title3">Final Check</p> */}
      <div className="confirmation">
        <List
          itemLayout="horizontal"
          dataSource={titles}
          renderItem={(item) => {
            return (
              <List.Item>
                <Text strong>{item.title}</Text>
                <div className="bookingContents">
                  <span className="content">{item.contents}</span>
                </div>
                <Button
                  type="link"
                  value={item.id}
                  id={item.id}
                  onClick={() => moveToSelectTimePosition(item)}
                  style={{color:"#ff7373"}}
                >
                  Edit
                </Button>
              </List.Item>
            );
          }}
        />
      </div>
    </div>
  );
}
