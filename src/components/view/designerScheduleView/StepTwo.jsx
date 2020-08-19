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

  const paraseChecked = () => {};

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
                checked={
                  isChecked[serviceKey] && isChecked[serviceKey].id === menu.id
                }
                // disabled={isChecked[serviceKey].gender !== menu.gender}
                onChange={() => {
                  navigateTo('Estimated Price');

                  let newIsChecked = { ...isChecked };

                  switch (serviceKey) {
                    case 'Cuts':
                      newIsChecked['Cuts'] =
                        newIsChecked['Cuts'] === menu ? null : menu;
                      break;
                    case 'Style':
                      newIsChecked['Style'] =
                        newIsChecked['Style'] === menu ? null : menu;
                      break;
                    case 'Perms':
                      newIsChecked['Perms'] =
                        newIsChecked['Perms'] === menu ? null : menu;
                      break;
                    case 'Colors':
                      newIsChecked['Colors'] =
                        newIsChecked['Colors'] === menu ? null : menu;
                      break;
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
                {isChecked &&
                  Object.values(isChecked).map(
                    (menu, index) =>
                      menu && (
                        <div className='priceTag' key={index}>
                          <p>
                            {menu.service} : ${menu.price}{' '}
                            <Button
                              type='link'
                              onClick={() => removeFromCart(menu)}
                            >
                              Remove
                            </Button>
                          </p>
                        </div>
                      )
                  )}
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
