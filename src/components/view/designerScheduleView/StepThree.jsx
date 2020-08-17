import React from 'react';
import { List, Button } from 'antd';
import '../../../assets/scss/view/designerScheduleView/DesignerScheduleView.scss';
import StepOne from './StepOne';
import StepTwo from './StepTwo';

export default function StepThree(props) {
  const { timeSelection, displayedDay } = props;

  const titles = [
    { id: 1, title: 'Date', step: <StepOne />, content: displayedDay },
    {
      id: 2,
      title: 'Time',
      step: <StepOne />,
      content: null,
    },
    { id: 3, title: 'Service', step: <StepTwo />, content: null },
  ];

  return (
    <div className='confirmation'>
      <List
        itemLayout='horizontal'
        dataSource={titles}
        renderItem={(item) => {
          console.log(item);
          return (
            <List.Item>
              <List.Item.Meta title={item.title} content={item.content} />
              {/* {item.content} */}
              <Button
                type='link'
                value={item.id}
                id={item.id}
                onClick={() => console.log(item.step)}
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
