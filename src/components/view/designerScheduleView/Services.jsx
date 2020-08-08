import React, { useEffect, useState } from 'react';
import { Space, Card, Typography, Row, Col, Select, Checkbox } from 'antd';
import Slider from 'react-slick';
import '../../../assets/scss/view/designerScheduleView/Slick.scss';
// import CheckboxGroup from 'antd/lib/checkbox/Group';

export default function Services(value) {
  const { Text } = Typography;
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className='checkboxOption'>
      <Slider {...settings}>
        <div>
          <h3>Cuts</h3>
          <Card
            style={{ width: 250, height: 120, textAlign: 50, marginLeft: 30 }}
          >
            <Row>
              <Text strong>
                <Checkbox>Men cut</Checkbox>
              </Text>
            </Row>
            <p id='menCut'>
              $35 or up <br />
              The price may differ
            </p>
          </Card>
          <Card style={{ width: 250, height: 120, marginLeft: 30 }}>
            <Row>
              <Text strong>
                <Checkbox>Women cut</Checkbox>
              </Text>
            </Row>
            <p id='menCut'>
              $45 or up <br />
              The price may differ
            </p>
          </Card>
          <Card style={{ width: 250, height: 120, marginLeft: 30 }}>
            <Row>
              <Text strong>
                <Checkbox>Kids cut</Checkbox>
              </Text>
            </Row>
            <p id='menCut'>
              $25 or up <br />
              The price may differ
            </p>
          </Card>
        </div>
        <div>
          <h3>Style</h3>
          <Row>
            <Text strong>
              <Checkbox style={{ marginLeft: 30, marginBottom: 60 }}>
                Men Style
              </Checkbox>
            </Text>
          </Row>
          <Row>
            <Text strong>
              <Checkbox style={{ marginLeft: 30, marginBottom: 60 }}>
                Women Style
              </Checkbox>
            </Text>
          </Row>
          <Row>
            <Text strong>
              <Checkbox style={{ marginLeft: 30 }}>Kids Style</Checkbox>
            </Text>
          </Row>
        </div>
        <div>
          <h3>Perms</h3>
          <Row>
            <Text strong>
              <Checkbox style={{ marginLeft: 30, marginBottom: 60 }}>
                Men Perms
              </Checkbox>
            </Text>
          </Row>
          <Row>
            <Text strong>
              <Checkbox style={{ marginLeft: 30, marginBottom: 60 }}>
                Women Perms
              </Checkbox>
            </Text>
          </Row>
          <Row>
            <Text strong>
              <Checkbox style={{ marginLeft: 30 }}>Kids Perms</Checkbox>
            </Text>
          </Row>
        </div>
        <div>
          <h3>Colors</h3>
          <Row>
            <Text strong>
              <Checkbox style={{ marginLeft: 30, marginBottom: 60 }}>
                Men Colors
              </Checkbox>
            </Text>
          </Row>
          <Row>
            <Text strong>
              <Checkbox style={{ marginLeft: 30, marginBottom: 60 }}>
                Women Colors
              </Checkbox>
            </Text>
          </Row>
          <Row>
            <Text strong>
              <Checkbox style={{ marginLeft: 30 }}>Kids Colors</Checkbox>
            </Text>
          </Row>
        </div>
      </Slider>
    </div>
  );
  // const renderTitle = (title) => <span>{title}</span>;

  // const renderItem = (title, count) => ({
  //   value: title,
  //   label: (
  //     <div style={{ display: 'flex', justifyContent: 'space-between' }}>
  //       {title}
  //       <span>{count}</span>
  //     </div>
  //   ),
  // });

  // const options = [
  //   {
  //     label: renderTitle('Men'),
  //     options: [
  //       renderItem('Cuts', 20),
  //       renderItem('Style', 30),
  //       renderItem('Perms', 40),
  //       renderItem('Colors', 50),
  //     ],
  //   },
  //   {
  //     label: renderTitle('Women'),
  //     options: [
  //       renderItem('Cuts', 60),
  //       renderItem('Style', 70),
  //       renderItem('Perms', 80),
  //       renderItem('Colors', 90),
  //     ],
  //   },
  //   {
  //     label: renderTitle('Kids'),
  //     options: [
  //       renderItem('Cuts', 5),
  //       renderItem('Style', 10),
  //       renderItem('Perms', 15),
  //       renderItem('Colors', 15),
  //     ],
  //   },
  // ];

  // const Complete = () => (
  //   <AutoComplete
  //     dropdownClassName='dropdown'
  //     dropdownMatchSelectWidth={500}
  //     style={{ width: 250 }}
  //     options={options}
  //   >
  //     <Input.Search size='middle' placeholder='Choose services...' />
  //   </AutoComplete>
  // );

  // const { Option, OptGroup } = Select;
  // const gender = ['Men', 'Women', 'Kids'];
  // const genderService = {
  //   Men: ['Cuts', 'Style', 'Perms', 'Colors'],
  //   Women: ['Cuts', 'Style', 'Perms', 'Colors'],
  //   Kids: ['Cuts', 'Style', 'Perms', 'Colors'],
  // };

  // const [genders, setGenders] = useState(genderService[gender[0]]);
  // const [services, setServices] = useState(genderService[gender[0]][0]);

  // const handleGenderChange = (value) => {
  //   setGenders(genderService[value]);
  //   setServices(genderService[value][0]);
  // };

  // const onSetServicesChange = (value) => {
  //   setServices(value);
  // };

  // console.log(`selected ${value}`);

  // return (
  //   <>
  //     <div className='service'>
  //       <Select
  //         defaultValue={gender[0]}
  //         style={{ width: 200 }}
  //         onChange={handleGenderChange}
  //       >
  //         {gender.map((gen) => (
  //           <Option key={gen}>{gen}</Option>
  //         ))}
  //       </Select>
  //       <br />
  //       <Checkbox.Group
  //         mode='multiple'
  //         placeholder='Select the services...'
  //         style={{
  //           width: 200,
  //           marginTop: 10,
  //         }}
  //         // value={services}
  //         onChange={onSetServicesChange}
  //       >
  //         {genders.map((service) => (
  //           <Option key={service}>{service}</Option>
  //         ))}
  //       </Checkbox.Group>
  //     </div>
  //   </>

  // <>
  //   <AutoComplete
  //     dropdownClassName='dropdown'
  //     dropdownMatchSelectWidth={250}
  //     style={{ width: 250 }}
  //     options={options}
  //   >
  //     <Input.Search size='middle' placeholder='Choose services...' />
  //   </AutoComplete>
  // </>
  // );
}
