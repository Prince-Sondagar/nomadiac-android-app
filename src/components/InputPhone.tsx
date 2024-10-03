import React, { useState } from 'react';
import PhoneInput from 'react-native-phone-input';

const PhoneInputComponent: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleOnChangePhoneNumber = (number: string) => {
    setPhoneNumber(number);
  };

  return (
    <PhoneInput
      ref={(ref) => {
        if (ref) {
          // You can use 'ref' to access methods of PhoneInput if needed
          // ref.isValidNumber() or ref.getCountryCode() and more
        }
      }}
      initialCountry="us"
      value={phoneNumber}
      onChangePhoneNumber={handleOnChangePhoneNumber}
    />
  );
};

export default PhoneInputComponent;
