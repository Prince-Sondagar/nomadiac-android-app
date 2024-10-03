import {useContext} from 'react';
import {TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {AuthContext} from '../contexts/AuthContext';

function Logout() {
  const {onHandleLogout} = useContext(AuthContext);

  return (
    <TouchableOpacity onPress={onHandleLogout}>
      <MaterialCommunityIcons name="logout" color="black" size={26} />
    </TouchableOpacity>
  );
}

export default Logout;
