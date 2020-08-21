import React from 'react';
import { List, Button, Typography, Divider } from 'antd';
import '../../../assets/scss/view/designerScheduleView/DesignerScheduleView.scss';

export default function StepThree(props) {
  const { Text } = Typography;
  const { current, setCurrent, displayedDay, bookingTime } = props;
  const titles = [
    {
      id: 1,
      title: 'Date',
      contents: displayedDay.toLocaleDateString(),
    },
    {
      id: 2,
      title: 'Time',
      contents: bookingTime,
    },
    { id: 3, title: 'Service', contents: 'service contents' },
  ];

  const stepChoice = (item) => {
    if (item.id === 1 || item.id === 2) {
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
