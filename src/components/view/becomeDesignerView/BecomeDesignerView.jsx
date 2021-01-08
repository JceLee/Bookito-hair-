import React, { useState } from "react";
import { Button, Radio, Spin } from "antd";
import { designerTypes } from "../../../constants/designerTypes";
import InfoCard from "../mainView/InfoCard";
import DesignerProfileCreateEdit from "../designerProfileView/designerProfileTop/DesignerProfileCreateEdit";

export default function BecomeDesignerView() {
  const [createProfileStage, setCreateProfileStage] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [designerType, setDesignerType] = useState("");

  const onSelected = (e) => {
    setDesignerType(e.target.value);
  };

  const startProfileCreation = async () => {
    if (createProfileStage === 0) {
      await playLoadingSpinner();
      setCreateProfileStage(1);
    }
  };

  const completeProfileCreation = () => {};

  const playLoadingSpinner = () => {
    const loadTimeMin = 350;
    const loadTimeMax = 450;
    return new Promise((resolve) => {
      setSpinning(true);
      setTimeout(() => {
        setSpinning(false);
        resolve();
      }, Math.random() * (loadTimeMax - loadTimeMin) + loadTimeMin);
    });
  };

  return (
    <div className="becomeDesignerView">
      <div className="mainHeading">
        An online booking system tailored for beauticians.
      </div>

      {createProfileStage === 0 && (
        <Spin spinning={spinning} size="large">
          <div className="subHeading">
            Manage your schedule and let your clients book appointments online.
          </div>
          <div className="infoCardsSection">
            <InfoCard
              header="Manage your schedule"
              src="https://www.flaticon.com/svg/static/icons/svg/2693/2693507.svg"
            />
            <InfoCard
              header="Let clients book online"
              src="https://www.flaticon.com/svg/static/icons/svg/3062/3062987.svg"
            />
            <InfoCard
              header="Chat with your clients"
              src="https://www.flaticon.com/svg/static/icons/svg/1078/1078011.svg"
            />
          </div>
          <Button
            className="getStartedBtn"
            onClick={() => {
              startProfileCreation();
            }}
          >
            Get Started
          </Button>
        </Spin>
      )}

      {(createProfileStage === 1 || createProfileStage === 2) && (
        <div className="createProfileStage1">
          <div className="subHeading">What is your profession?</div>
          <Radio.Group
            size="large"
            buttonStyle="outlined"
            options={Object.values(designerTypes).filter(
              (type) => type !== "client"
            )}
            onChange={onSelected}
            optionType="button"
          ></Radio.Group>

          {createProfileStage === 1 && (
            <Button
              className="getStartedBtn becomeDesignerBtn"
              onClick={() => {
                setCreateProfileStage(2);
              }}
              disabled={!designerType}
            >
              Next
            </Button>
          )}
        </div>
      )}

      {createProfileStage === 2 && (
        <>
          <div className="subHeading">Tell us about your business!</div>
          <div className="editProfileModal">
            <DesignerProfileCreateEdit />
          </div>

          <Button
            className="getStartedBtn becomeDesignerBtn"
            onClick={() => {
              completeProfileCreation();
            }}
          >
            Complete
          </Button>
        </>
      )}
    </div>
  );
}
