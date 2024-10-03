import {ViewProps} from 'react-native';
import Button from '../components/Button';
import {RootParamList} from '../App';
import {NavigationProp, RouteProp, useRoute} from '@react-navigation/native';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Paragraph from '../components/Paragraph';
import {RootScreenEnum} from '../constants';

interface Props extends ViewProps {
  navigation: NavigationProp<RootParamList>;
}
function SurveyResponseScreen({navigation}: Props) {
  const route =
    useRoute<RouteProp<RootParamList, RootScreenEnum.SURVEY_RESPONSE_SCREEN>>();
  const {params} = route || {};
  const {status = ''} = params || {};
  return (
    <Background>
      <Logo />
      {status === 'security-terminate' && (
        <>
          <Paragraph>We are Sorry!</Paragraph>
          <Paragraph>
            Thank you for your interest in thanking this survey. Unfortunately
            we can't accept any more responses.
          </Paragraph>
        </>
      )}
      {status === 'terminate' && (
        <>
          <Paragraph>
            Thank you for participating in our latest survey, but unfortunately
            we have sufficient responses in your category. To ensure we only
            invite you to take part in relevant studies please ensure your panel
            information is up to date by logging into your panel dashboard and
            checking your information.
          </Paragraph>
        </>
      )}
      {status === 'quota' && (
        <>
          <Paragraph>We are Sorry!</Paragraph>
          <Paragraph>
            Thank you for participating in our latest survey, but unfortunately
            we have sufficient responses in your category. To ensure we only
            invite you to take part in relevant studies please ensure your panel
            information is up to date by logging into your panel dashboard and
            checking your information.
          </Paragraph>
        </>
      )}
      {status === 'completed' && (
        <>
          <Paragraph>
            Thank you very much! You successfully completed the survey!
          </Paragraph>
        </>
      )}
      <Button
        mode="contained"
        onPress={() => navigation.navigate(RootScreenEnum.DASHBOARD_SCREEN)}>
        CLICK HERE TO PROCEED
      </Button>
    </Background>
  );
}

export default SurveyResponseScreen;
