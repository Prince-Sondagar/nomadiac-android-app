import {NavigationProp} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  ViewProps,
} from 'react-native';
import {RootParamList} from '../App';
import {RootScreenEnum} from '../constants';

interface Props extends ViewProps {
  navigation: NavigationProp<RootParamList>;
}
const Header = ({navigation}: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <View style={styles.container}>
        <Image source={require('./../assets/logo.png')} style={styles.logo} />
        <TouchableOpacity onPress={handleMenuToggle}>
          <Image
            source={require('./../assets/logo.png')}
            style={styles.userImage}
          />
        </TouchableOpacity>
        {isMenuOpen && (
          <View style={styles.menu}>
            <Text>Profile</Text>
            <Text
              onPress={() =>
                navigation.reset({
                  index: 0,
                  routes: [{name: RootScreenEnum.START_SCREEN}],
                })
              }>
              Logout
            </Text>
          </View>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgb(255, 217, 90)',
  },
  tab: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  logo: {
    width: 120,
    height: 40,
    marginRight: 200,
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  menu: {
    position: 'absolute',
    top: 60,
    right: 20,
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default Header;
