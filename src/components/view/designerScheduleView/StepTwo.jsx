import React from 'react';
import { Button, Row, Col, Divider, Card, Typography, Checkbox } from 'antd';
// import EstimatedPrice from './EstimatedPrice';
import '../../../assets/scss/view/designerScheduleView/DesignerScheduleView.scss';
import '../../../assets/scss/view/designerScheduleView/Slick.scss';

export default function StepTwo(props) {
  const { Text } = Typography;
  const {
    services,
    servicesContent,
    serviceKey,
    isChecked,
    setIsChecked,
    cart,
    page,
    navigateTo,
    onTabChange,
    addToCart,
    removeFromCart,
    totalSum,
  } = props;

  const renderService = () => (
    <div className='checkboxOption'>
      <Card
        style={{ width: '70%' }}
        tabList={services}
        activeTabKey={serviceKey}
        onTabChange={(serviceKey) => {
          onTabChange(serviceKey);
        }}
      >
        {servicesContent[serviceKey].map((menu, index) => (
          <div className='servicesContent' key={index}>
            <Row>
              <Checkbox
                key={menu.id}
                id={menu.id}
                checked={isChecked[serviceKey] === menu.id}
                onChange={() => {
                  navigateTo('Estimated Price');

                  let newIsChecked = { ...isChecked };

                  if (serviceKey === 'Cuts') {
                    newIsChecked['Cuts'] = menu.id;
                    addToCart(menu);
                  } else if (serviceKey === 'Style') {
                    newIsChecked['Style'] = menu.id;
                    addToCart(menu);
                  } else if (serviceKey === 'Perms') {
                    newIsChecked['Perms'] = menu.id;
                    addToCart(menu);
                  } else {
                    newIsChecked['Colors'] = menu.id;
                    addToCart(menu);
                  }

                  console.log(newIsChecked);
                  setIsChecked(newIsChecked);
                }}
              >
                <Text strong>{menu.service}</Text>
              </Checkbox>
            </Row>
            <p id='serviceMenu'>
              ${menu.price} <br />
              {menu.description}
            </p>
            <Divider />
          </div>
        ))}
      </Card>
    </div>
  );

  return (
    <>
      <Row>
        <Col span={13}>
          <div className='genderService'>
            <p id='title1'>Please select Service</p>
            {renderService()}
          </div>
        </Col>
        <Col span={11}>
          <p id='title2'>Estimated Price</p>
          {page === 'Estimated Price' && (
            <>
              <div className='estimatedPrice'>
                {cart.map((menu, index) => (
                  <div className='priceTag' key={index}>
                    <p>
                      {menu.service} : ${menu.price}{' '}
                      <Button type='link' onClick={() => removeFromCart(menu)}>
                        Remove
                      </Button>
                    </p>
                  </div>
                ))}
              </div>
              <Divider />
              <div className='totalCost'>Estimated total: ${totalSum()}</div>
            </>
          )}
        </Col>
      </Row>
    </>
  );
}
