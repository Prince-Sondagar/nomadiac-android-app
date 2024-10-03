import React from 'react';
import {DatePickerInput} from 'react-native-paper-dates';
import {StyleSheet, View} from 'react-native';
import {Controller, useFormContext} from 'react-hook-form';
import {HelperText} from 'react-native-paper';

interface Props {
  name:
    | 'address'
    | 'dob'
    | 'email'
    | 'firstName'
    | 'fraudScore'
    | 'lastName'
    | 'maxMindScore'
    | 'password'
    | 'privacyPolicy'
    | 'roleType'
    | 'scamalyticsScore'
    | 'termsAndConditions';
  label: string;
  mode?: 'outlined' | 'flat' | undefined;
  value?: string | null;
  locale: string;
}

function DateTimePicker({label, mode = 'outlined', locale, name}: Props) {
  const styles = useStyles();
  const {control} = useFormContext();

  return (
    <View style={styles.container}>
      <Controller
        name={name}
        control={control}
        shouldUnregister={true}
        render={({field, fieldState: {error: {message} = {}}}) => {
          const marginBottom = message ? 0 : 26;
          return (
            <>
              <View style={{marginBottom}}>
                <DatePickerInput
                  mode={mode}
                  locale={locale}
                  label={label}
                  value={field.value}
                  onChange={field.onChange}
                  onChangeText={value => {
                    if (!value) field.onChange(null);
                  }}
                  inputMode="start"
                  hasError={!!message}
                />
              </View>
              <View>
                {message && <HelperText type="error">{message}</HelperText>}
              </View>
            </>
          );
        }}
      />
    </View>
  );
}

export default DateTimePicker;

const useStyles = () =>
  StyleSheet.create({
    container: {
      width: '100%',
    },
  });
