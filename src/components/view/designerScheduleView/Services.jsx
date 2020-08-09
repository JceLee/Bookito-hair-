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
        <p id='serviceMenu'>
          $35 or up <br />
          The price may differ
        </p>
        <Divider />
        <Row>
          <Checkbox>
            <Text strong>Women cut</Text>
          </Checkbox>
        </Row>
        <p id='serviceMenu'>
          $45 or up <br />
          The price may differ
        </p>
        <Divider />
        <Row>
          <Checkbox>
            <Text strong>Kids cut</Text>
          </Checkbox>
        </Row>
        <p id='serviceMenu'>
          $25 or up <br />
          The price may differ
        </p>
      </div>
    ),
    Style: (
      <div>
        <Row>
          <Checkbox>
            <Text strong>Men style</Text>
          </Checkbox>
        </Row>
        <p id='serviceMenu'>
          $35 or up <br />
          The price may differ
        </p>
        <Divider />
        <Row>
          <Checkbox>
            <Text strong>Women style</Text>
          </Checkbox>
        </Row>
        <p id='serviceMenu'>
          $45 or up <br />
          The price may differ
        </p>
        <Divider />
        <Row>
          <Checkbox>
            <Text strong>Kids style</Text>
          </Checkbox>
        </Row>
        <p id='serviceMenu'>
          $25 or up <br />
          The price may differ
        </p>
      </div>
    ),
    Perms: (
      <div>
        <Row>
          <Checkbox>
            <Text strong>Men perms</Text>
          </Checkbox>
        </Row>
        <p id='serviceMenu'>
          $35 or up <br />
          The price may differ
        </p>
        <Divider />
        <Row>
          <Checkbox>
            <Text strong>Women perms</Text>
          </Checkbox>
        </Row>
        <p id='serviceMenu'>
          $45 or up <br />
          The price may differ
        </p>
        <Divider />
        <Row>
          <Checkbox>
            <Text strong>Kids perms</Text>
          </Checkbox>
        </Row>
        <p id='serviceMenu'>
          $25 or up <br />
          The price may differ
        </p>
      </div>
    ),
    Colors: (
      <div>
        <Row>
          <Checkbox>
            <Text strong>Men colors</Text>
          </Checkbox>
        </Row>
        <p id='serviceMenu'>
          $35 or up <br />
          The price may differ
        </p>
        <Divider />
        <Row>
          <Checkbox>
            <Text strong>Women colors</Text>
          </Checkbox>
        </Row>
        <p id='serviceMenu'>
          $45 or up <br />
          The price may differ
        </p>
        <Divider />
        <Row>
          <Checkbox>
            <Text strong>Kids colors</Text>
          </Checkbox>
        </Row>
        <p id='serviceMenu'>
          $25 or up <br />
          The price may differ
        </p>
      </div>
    ),
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
