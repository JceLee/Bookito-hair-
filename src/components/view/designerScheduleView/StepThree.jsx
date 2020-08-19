import React from 'react';
import { List, Button, Steps, Typography } from 'antd';
import '../../../assets/scss/view/designerScheduleView/DesignerScheduleView.scss';

export default function StepThree(props) {
  const { Text } = Typography;
  const { current, setCurrent } = props;

  const titles = [
    { id: 1, title: 'Date & Time', contents: 'content1' },
    { id: 2, title: 'Service', contents: 'content2' },
  ];

  const stepChoice = (item) => {
    if (item.id === 1) {
      setCurrent(current - 2);
    } else {
      setCurrent(current - 1);
    }
  };

  return (
    <div className='confirmation'>
      <List
        itemLayout='horizontal'
        dataSource={titles}
        renderItem={(item) => {
          // console.log(item);
          return (
            <List.Item>
              <Text strong>{item.title}</Text>
              <div className='bookingContents'>{item.contents}</div>
              <Button
                type='link'
                value={item.id}
                id={item.id}
                onClick={() => stepChoice(item)}
              >
                Edit
              </Button>
            </List.Item>
          );
        }}
      ></List>
    </div>
  );
}
