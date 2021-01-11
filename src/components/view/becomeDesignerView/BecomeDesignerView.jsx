import React, { useState } from "react";
import { Button, Radio, Spin } from "antd";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { designerTypes } from "../../../constants/designerTypes";
import InfoCard from "../mainView/InfoCard";
import ClientProfileView from "../../view/clientProfileView/ClientProfileView";
import DesignerProfileCreateEdit from "../designerProfileView/designerProfileTop/DesignerProfileCreateEdit";

export default function BecomeDesignerView() {
  const designer = useSelector((state) => state.currentUser.currentUser);
  const history = useHistory();

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

  const saveClientProfileView = () => {
    setCreateProfileStage(3);
  };

  const goToMyProfile = () => {
    const route = `/designer_profile?uid=${designer.uid}`;
    history.push(route);
  };

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
          {designer?.accountType !== "client" ? (
            <Button
              className="getStartedBtn"
              onClick={() => {
                goToMyProfile();
              }}
            >
              Go to my Profile
            </Button>
          ) : (
            <Button
              className="getStartedBtn"
              onClick={() => {
                startProfileCreation();
              }}
            >
              Get Started
            </Button>
          )}
        </Spin>
      )}

      {createProfileStage >= 1 && (
        <div className="createProfileStage1">
          <div className="subHeading">What is your profession? (1/3)</div>
          <Radio.Group
            size="large"
            buttonStyle="outlined"
            options={Object.values(designerTypes).filter(
              (type) => type !== "client" && type !== "newClient"
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

      {createProfileStage >= 2 && (
        <>
          <div className="subHeading">How can your customers contact you? (2/3)</div>
          <div className="editProfileModal">
            <ClientProfileView
              client={designer}
              editMode={true}
              extraLogicOnSave={saveClientProfileView}
            />
          </div>
        </>
      )}

      {createProfileStage === 3 && (
        <>
          <div className="subHeadingWideMargin">
            Tell your customers about your business! (3/3)
          </div>
          <DesignerProfileCreateEdit designer={designer} createMode={true} selectedDesignerType={designerType} />
        </>
      )}
    </div>
  );
}
