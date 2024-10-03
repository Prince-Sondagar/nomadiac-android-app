import {ReactElement} from 'react';
import {View} from 'react-native';

type ISignupTabPanel = {
  value: Number;
  index: Number;
  children: ReactElement | ReactElement[];
};

function SignupTabPanel({value, index, children}: ISignupTabPanel) {
  return <View>{index === value ? children : ''}</View>;
}

export default SignupTabPanel;
