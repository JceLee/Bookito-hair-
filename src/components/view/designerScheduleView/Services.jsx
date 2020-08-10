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
      { service: 'Men Cut', price: '$35', description: 'The price may differ' },
      {
        service: 'Women Cut',
        price: '$40',
        description: 'The price may differ',
      },
      {
        service: 'Kids Cut',
        price: '$15',
        description: 'The price may differ',
      },
    ],
    Style: [
      {
        service: 'Men Style',
        price: '$35',
        description: 'The price may differ',
      },
      {
        service: 'Women Style',
        price: '$40',
        description: 'The price may differ',
      },
      {
        service: 'Kids Style',
        price: '$15',
        description: 'The price may differ',
      },
    ],
    Perms: [
      {
        service: 'Men Perms',
        price: '$35',
        description: 'The price may differ',
      },
      {
        service: 'Women Perms',
        price: '$40',
        description: 'The price may differ',
      },
      {
        service: 'Kids Perms',
        price: '$15',
        description: 'The price may differ',
      },
    ],
    Colors: [
      {
        service: 'Men Colors',
        price: '$35',
        description: 'The price may differ',
      },
      {
        service: 'Women Colors',
        price: '$40',
        description: 'The price may differ',
      },
      {
        service: 'Kids Colors',
        price: '$15',
        description: 'The price may differ',
      },
    ],
  };

  const [key, setKey] = useState('Cuts');

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
          <div key={index}>
            <Row>
              <Checkbox>
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
