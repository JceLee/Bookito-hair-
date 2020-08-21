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
    calculationBox,
    setCalculationBox,
    page,
    navigateTo,
    onTabChange,
    removeFromBox,
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
                checked={
                  calculationBox[serviceKey] &&
                  calculationBox[serviceKey].id === menu.id
                }
                // disabled={calculationBox[serviceKey].gender !== menu.gender}
                onChange={() => {
                  navigateTo('Estimated Price');

                  let newCalculationBox = { ...calculationBox };
                  console.log(newCalculationBox);

                  switch (serviceKey) {
                    case 'Cuts':
                      newCalculationBox['Cuts'] =
                        newCalculationBox['Cuts'] === menu ? null : menu;
                      break;
                    case 'Style':
                      newCalculationBox['Style'] =
                        newCalculationBox['Style'] === menu ? null : menu;
                      break;
                    case 'Perms':
                      newCalculationBox['Perms'] =
                        newCalculationBox['Perms'] === menu ? null : menu;
                      break;
                    case 'Colors':
                      newCalculationBox['Colors'] =
                        newCalculationBox['Colors'] === menu ? null : menu;
                      break;
                  }

                  console.log(newCalculationBox);
                  setCalculationBox(newCalculationBox);
                  // setIsChecked(isChecked);
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
                {calculationBox &&
                  Object.values(calculationBox).map((menu, index) => {
                    return (
                      menu && (
                        <div className='priceTag' key={index}>
                          <p>
                            {menu.service} : ${menu.price}{' '}
                            <Button
                              type='link'
                              onClick={() => {
                                removeFromBox(menu);
                              }}
                            >
                              Remove
                            </Button>
                          </p>
                        </div>
                      )
                    );
                  })}
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
