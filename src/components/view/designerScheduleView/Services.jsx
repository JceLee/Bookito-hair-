import React, { useState } from 'react';
import { Divider, Card, Typography, Row, Checkbox } from 'antd';
import '../../../assets/scss/view/designerScheduleView/Slick.scss';

export default function Services() {
  const { Text } = Typography;
  const services = [
    { key: 'Cuts', tab: 'Cuts' },
    { key: 'Style', tab: 'Style' },
    { key: 'Perms', tab: 'Perms' },
    { key: 'Colors', tab: 'Colors' },
  ];

  const servicesContent = {
    Cuts: [
      {
        id: 1,
        service: 'Men Cut',
        price: '$35',
        description: 'The price may differ',
      },
      {
        id: 2,
        service: 'Women Cut',
        price: '$40',
        description: 'The price may differ',
      },
      {
        id: 3,
        service: 'Kids Cut',
        price: '$15',
        description: 'The price may differ',
      },
    ],
    Style: [
      {
        id: 4,
        service: 'Men Style',
        price: '$35',
        description: 'The price may differ',
      },
      {
        id: 5,
        service: 'Women Style',
        price: '$40',
        description: 'The price may differ',
      },
      {
        id: 6,
        service: 'Kids Style',
        price: '$15',
        description: 'The price may differ',
      },
    ],
    Perms: [
      {
        id: 7,
        service: 'Men Perms',
        price: '$35',
        description: 'The price may differ',
      },
      {
        id: 8,
        service: 'Women Perms',
        price: '$40',
        description: 'The price may differ',
      },
      {
        id: 9,
        service: 'Kids Perms',
        price: '$15',
        description: 'The price may differ',
      },
    ],
    Colors: [
      {
        id: 10,
        service: 'Men Colors',
        price: '$35',
        description: 'The price may differ',
      },
      {
        id: 11,
        service: 'Women Colors',
        price: '$40',
        description: 'The price may differ',
      },
      {
        id: 12,
        service: 'Kids Colors',
        price: '$15',
        description: 'The price may differ',
      },
    ],
  };

  const [key, setKey] = useState('Cuts');
  const [isChecked, setIsChecked] = useState({});

  const onTabChange = (key) => {
    setKey(key);
  };

  return (
    <div className='checkboxOption'>
      <Card
        style={{ width: '70%' }}
        tabList={services}
        activeTabKey={key}
        onTabChange={(key) => {
          onTabChange(key);
        }}
      >
        {servicesContent[key].map((menu, index) => (
          <div className='servicesContent' key={index}>
            <Row>
              <Checkbox
                key={menu.id}
                id={menu.id}
                checked={isChecked[key] === menu.id}
                onChange={() => {
                  let newIsChecked = { ...isChecked };

                  // newIsChecked.key = menu.id;
                  if (key == 'Cuts') {
                    newIsChecked['Cuts'] = menu.id;
                  } else if (key == 'Style') {
                    newIsChecked['Style'] = menu.id;
                  } else if (key == 'Perms') {
                    newIsChecked['Perms'] = menu.id;
                  } else {
                    newIsChecked['Colors'] = menu.id;
                  }
                  // switch statement

                  console.log(newIsChecked);
                  setIsChecked(newIsChecked);
                }}
              >
                <Text strong>{menu.service}</Text>
              </Checkbox>
            </Row>
            <p id='serviceMenu'>
              {menu.price} <br />
              {menu.description}
            </p>
            <Divider />
          </div>
        ))}
        {/* {servicesContent[key]} */}
        {/* {[key]} */}
      </Card>
    </div>
  );
}
