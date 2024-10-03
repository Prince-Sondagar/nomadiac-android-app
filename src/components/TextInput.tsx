import React, {useContext, useState} from 'react';
import {View, StyleSheet, StyleProp, TextStyle} from 'react-native';
import {HelperText, TextInput as Input, MD3Theme} from 'react-native-paper';
import {ThemeContext} from '../contexts/ThemeContext';
import {Controller, useFormContext} from 'react-hook-form';
import {PASSWORD, TEXT} from '../constants';

interface Props extends React.ComponentProps<typeof Input> {
  label?: string;
  name: string;
  isNumeric?: boolean;
  isDisabled?: boolean;
  mode?: 'outlined' | 'flat';
  secureTextEntry?: boolean;
  styles?: StyleProp<TextStyle>;
  onChangeTextFunction?: (text: string) => void;
}

function TextInput({
  name,
  styles: propsStyle = {},
  secureTextEntry,
  isNumeric = false,
  mode = 'outlined',
  onChangeTextFunction,
  ...props
}: Props) {
  const {theme} = useContext(ThemeContext);
  const styles = useStyles(theme);
  const {control} = useFormContext();
  const [passwordType, setPasswordType] = useState<'password' | 'text'>(
    PASSWORD,
  );

  const handleClickShowPassword = () => {
    if (passwordType === PASSWORD) {
      setPasswordType(TEXT);
    } else {
      setPasswordType(PASSWORD);
    }
  };

  return (
    <View style={styles.container}>
      <Controller
        name={name}
        control={control}
        render={({field, fieldState: {error: {message} = {}}}) => (
          <View>
            <Input
              {...{
                ...props,
                ...field,
                ...(isNumeric ? {keyboardType: 'numeric'} : {}),
              }}
              mode={mode}
              secureTextEntry={secureTextEntry && passwordType === PASSWORD}
              error={!!message}
              style={[styles.input, propsStyle]}
              onChangeText={
                onChangeTextFunction ? onChangeTextFunction : field.onChange
              }
              right={
                secureTextEntry && (
                  <Input.Icon
                    icon={passwordType === PASSWORD ? 'eye-off' : 'eye'}
                    size={20}
                    onPress={handleClickShowPassword}
                  />
                )
              }
            />
            <HelperText type="error" visible={!!message}>
              {message}
            </HelperText>
          </View>
        )}
      />
    </View>
  );
}

export default TextInput;

const useStyles = (theme: MD3Theme) =>
  StyleSheet.create({
    container: {
      width: '100%',
      marginVertical: 2,
    },
    input: {
      backgroundColor: theme.colors.surface,
    },
    description: {
      fontSize: 13,
      color: theme.colors.secondary,
      paddingTop: 8,
    },
    error: {
      fontSize: 13,
      color: theme.colors.error,
      paddingTop: 8,
    },
  });
