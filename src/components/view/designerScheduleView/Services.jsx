import React, { useState } from 'react';
import { Divider, Card, Typography, Row, Checkbox } from 'antd';
import '../../../assets/scss/view/designerScheduleView/Slick.scss';

export default function Services() {
  const { Text } = Typography;

  // const [key, setKey] = useState('Cuts');
  // const [isChecked, setIsChecked] = useState({});
  // const [cart, setCart] = useState([]);
  // const [page, setPage] = useState('Estimated Price');

  // const onTabChange = (key) => {
  //   setKey(key);
  // };

  // const addToCart = (product) => {
  //   setCart([...cart, product]);
  //   console.log('we are in addTocart');
  // };

  return (
    <div className='checkboxOption'>
      {/* <Card
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
                    addToCart(menu.price);
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
      </Card> */}
    </div>
  );
}
