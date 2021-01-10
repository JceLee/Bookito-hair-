import React, { useState } from "react";
import { Button, Radio, Spin, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { refresh } from "../../../actions/currentUser";
import { firebaseStore } from "../../../config/fbConfig";
import { designerTypes } from "../../../constants/designerTypes";
import InfoCard from "../mainView/InfoCard";
import ClientProfileView from "../../view/clientProfileView/ClientProfileView";
import ServiceNPriceForm from "../designerProfileView/designerProfileTop/designerEditProfile/ServiceNPriceForm";
import HoursForm from "../designerProfileView/designerProfileTop/designerEditProfile/HoursForm";
import WorksForm from "../designerProfileView/designerProfileTop/designerEditProfile/WorksForm";
import SelfIntroForm from "../designerProfileView/designerProfileTop/designerEditProfile/SelfIntroForm";

export default function BecomeDesignerView() {
  const designer = useSelector((state) => state.currentUser.currentUser);
  const dispatch = useDispatch();
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

  const completeProfileCreation = async () => {
    designer.accountType = designerType;
    // Update redux client
    dispatch(refresh(designer));
    // Update firebase
    await firebaseStore
      .collection("users")
      .doc(designer.uid)
      .update(designer)
      .then(function () {
        return message.success({
          content: "Saved",
          duration: "2",
          className: "onFinishMessage",
        });
      });
    goToMyProfile();
  };

  const goToMyProfile = () => {
    const route = `/designer_profile?uid=${designer.uid}`;
    history.push(route);
  };

  const saveClientProfileView = () => {
    setCreateProfileStage(3);
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
          {designer.accountType !== "client" ? (
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

      {createProfileStage >= 2 && (
        <>
          <div className="subHeading">How can your customers contact you?</div>
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
            Tell us about your business!
          </div>
          <div className="editProfileModal">
            <div className="description">Service and Price</div>
            <ServiceNPriceForm designer={designer} createMode={true} />

            <div className="description">Hours</div>
            <HoursForm designer={designer} createMode={true} />

            <div className="description">Works</div>
            <WorksForm designer={designer} createMode={true} />

            <div className="description">Self-introduction</div>
            <SelfIntroForm designer={designer} createMode={true} />
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
