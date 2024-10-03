import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from '../../../contexts/AuthContext';

import {
  RootScreenEnum,
  UNITED_KINGDOM,
  UNITED_STATES,
} from '../../../constants';
import ValidLucidSurveyTable from './ValidLucidSurveyTable';
import FusionSurveys from './FusionSurveys';
import {ViewProps} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import {RootParamList} from '../../../App';

interface Props extends ViewProps {
  navigation: NavigationProp<RootParamList>;
}

const SurveyScreen = ({navigation}: Props) => {
  const {currentPanelist} = useContext(AuthContext);
  const {country, blockFromLucid, lucidProfileCompleted} =
    currentPanelist || {};
  const [isLucidSurveyAvailable, setIsLucidSurveyAvailable] = useState(true);

  useEffect(() => {
    if (
      (country === UNITED_STATES || country === UNITED_KINGDOM) &&
      !blockFromLucid &&
      !lucidProfileCompleted
    ) {
      setTimeout(() => {
        navigation.navigate(RootScreenEnum.ADDITIONAL_INFORMATION_SCREEN);
      });
    }
    // eslint-disable-next-line
  }, [country, blockFromLucid, lucidProfileCompleted]);

  return (
    <>
      {/* For now we are commenting Lucid Surveys */}
      {(country === UNITED_STATES || country === UNITED_KINGDOM) &&
      isLucidSurveyAvailable &&
      !blockFromLucid ? (
        <ValidLucidSurveyTable
          setIsLucidSurveyAvailable={setIsLucidSurveyAvailable}
        />
      ) : (
        <FusionSurveys />
      )}
    </>
  );
};

export default SurveyScreen;
