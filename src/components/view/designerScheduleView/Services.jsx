import React, { useState } from 'react';
import { Divider, Card, Typography, Row, Checkbox } from 'antd';
import '../../../assets/scss/view/designerScheduleView/Slick.scss';

export default function Services(value) {
  const { Text } = Typography;
  const services = [
    { key: 'Cuts', tab: 'Cuts' },
    { key: 'Style', tab: 'Style' },
    { key: 'Perms', tab: 'Perms' },
    { key: 'Colors', tab: 'Colors' },
  ];

  const servicesContent = {
    Cuts: (
      <div>
        <Row>
          <Checkbox>
            <Text strong>Men cut</Text>
          </Checkbox>
        </Row>
        <p id='menCut'>
          $35 or up <br />
          The price may differ
        </p>
        <Divider />
        <Row>
          <Checkbox>
            <Text strong>Women cut</Text>
          </Checkbox>
        </Row>
        <p id='menCut'>
          $45 or up <br />
          The price may differ
        </p>
        <Divider />
        <Row>
          <Checkbox>
            <Text strong>Kids cut</Text>
          </Checkbox>
        </Row>
        <p id='menCut'>
          $25 or up <br />
          The price may differ
        </p>
      </div>
    ),
    Style: <p>style</p>,
    Perms: <p>Perms</p>,
    Colors: <p>Colors</p>,
  };

  const [key, setKey] = useState('Cuts');

  const onTabChange = (key) => {
    console.log(key);
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
        {servicesContent[key]}
      </Card>
    </div>
  );
}
