import React, { useEffect } from "react";
import { Button, Row, Col, Divider, Card, Typography, Checkbox } from "antd";

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

  useEffect(() => {
    if (services) {
      onTabChange(services[0]?.key);
    }
  }, []);

  const renderService = () => (
    <div className="checkboxOption">
      <Card
        tabList={services}
        activeTabKey={serviceKey}
        onTabChange={(serviceKey) => {
          onTabChange(serviceKey);
        }}
      >
        {servicesContent[serviceKey].map((menu, index) => {
          return (
            <div className="servicesContent" key={index}>
              <Row>
                <Checkbox
                  key={menu.id}
                  id={menu.id}
                  checked={
                    calculationBox[serviceKey] &&
                    calculationBox[serviceKey].id === menu.id
                  }
                  onChange={() => {
                    navigateTo("Estimated Price");

                    let newCalculationBox = { ...calculationBox };

                    switch (serviceKey) {
                      case "Cut":
                        newCalculationBox["Cut"] =
                          newCalculationBox["Cut"] === menu ? null : menu;
                        break;
                      case "Style":
                        newCalculationBox["Style"] =
                          newCalculationBox["Style"] === menu ? null : menu;
                        break;
                      case "Perm":
                        newCalculationBox["Perm"] =
                          newCalculationBox["Perm"] === menu ? null : menu;
                        break;
                      case "Color":
                        newCalculationBox["Color"] =
                          newCalculationBox["Color"] === menu ? null : menu;
                        break;
                      case "Clinic":
                        newCalculationBox["Clinic"] =
                          newCalculationBox["Clinic"] === menu ? null : menu;
                        break;
                      case "Promo":
                        newCalculationBox["Promo"] =
                          newCalculationBox["Promo"] === menu ? null : menu;
                        break;
                    }

                    setCalculationBox(newCalculationBox);
                  }}
                >
                  <Text strong>{menu.service}</Text>
                </Checkbox>
              </Row>
              <p className="serviceMenu">
                ${menu.price} <br />
                {menu.description}
              </p>
              <Divider className="estPriceDivider" />
            </div>
          );
        })}
      </Card>
    </div>
  );

  return (
    <div className="stepTwo" id="stepTwoTopId">
      <div className="genderService">{renderService()}</div>
      {page === "Estimated Price" && (
        <>
          <div className="estimatedPrice">
            <p className="estimatedPricePtag">Estimated price</p>
            {calculationBox &&
              Object.values(calculationBox).map((menu, index) => {
                return (
                  menu && (
                    <div className="servicePriceTag" key={index}>
                      <p>
                        {menu.service} : ${menu.price}{" "}
                        <Button
                          className="removeButton"
                          type="link"
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
          <div className="totalCost">Estimated total: ${totalSum()}</div>
        </>
      )}
    </div>
  );
}
