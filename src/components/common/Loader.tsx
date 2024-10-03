import {useContext} from 'react';
import {ActivityIndicator} from 'react-native-paper';
import {ThemeContext} from '../../contexts/ThemeContext';

type LoaderPropsType = {
  size?: number;
};

const Loader = ({size}: LoaderPropsType) => {
  const {theme} = useContext(ThemeContext);
  return (
    <ActivityIndicator
      animating={true}
      color={theme.colors.primary}
      size={size ? size : 30}
    />
  );
};

export default Loader;
