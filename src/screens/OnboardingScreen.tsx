import React, {useContext, useEffect, useState} from 'react';
import {BasicDetailsStep, TabPanel} from './OnboardingScreens';
import {getSurveyResponse, getSurveyStep} from '../utils';
import {
  CompleteProfile,
  RegisterPanelistWithLucidJoiner,
} from '../interfaceTypes';
import OtherDetails from './OnboardingScreens/OtherDetails';
import {UNITED_KINGDOM, UNITED_STATES} from '../constants';
import LucidSurveyScreen from './DashboardScreens/Lucid/LucidSurveyScreen';
import {AuthContext} from '../contexts/AuthContext';
import {BackHandler} from 'react-native';

export default function OnboardingScreen() {
  const [step, setStep] = useState<number>(1);
  const [surveyResponse, setSurveyResponse] =
    useState<RegisterPanelistWithLucidJoiner | null>(null);
  const [surveyResponseFusion, setSurveyResponseFusion] =
    useState<CompleteProfile | null>(null);
  // const [mobileNumberVerifyResponse, setNobileNumberVerifyResponse] =
  //   useState<VerifyResponsePayload | null>(null);

  const {currentPanelist} = useContext(AuthContext);
  const {country} = currentPanelist || {};

  useEffect(() => {
    getSurveyResponse().then((data: any) => {
      setSurveyResponse(JSON.parse(data) || null);
    });

    getSurveyStep().then(step => {
      setStep(step || 1);
    });
  }, []);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        return true;
      },
    );
    return () => backHandler.remove();
  });

  return (
    <>
      <TabPanel value={step} index={1}>
        <BasicDetailsStep
          surveyResponse={surveyResponse}
          setSurveyResponse={setSurveyResponse}
          setStep={setStep}
          setSurveyResponseFusion={setSurveyResponseFusion}
          // setMobileNumberVerifyResponse={setNobileNumberVerifyResponse}
        />
      </TabPanel>

      <TabPanel value={step} index={2}>
        {country === UNITED_STATES || country === UNITED_KINGDOM ? (
          <LucidSurveyScreen
            surveyResponse={surveyResponse}
            setSurveyResponse={setSurveyResponse}
            step={step}
            setStep={setStep}
            // mobileNumberVerifyResponse={mobileNumberVerifyResponse}
          />
        ) : (
          <OtherDetails
            surveyResponse={surveyResponseFusion}
            setSurveyResponse={setSurveyResponseFusion}
            setStep={setStep}
            // mobileNumberVerifyResponse={mobileNumberVerifyResponse}
          />
        )}
      </TabPanel>
    </>
  );
}
