import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {HelperText, Text, TextInput} from 'react-native-paper';
import {MD3Theme} from 'react-native-paper';
import {ThemeContext} from '../contexts/ThemeContext';
import {BasicInformationType, OptionType} from '../interfaceTypes';
import SelectDropdown from 'react-native-select-dropdown';
import {sortOptionLabel} from '../utils';
import {
  Controller,
  ControllerRenderProps,
  FieldValues,
  useFormContext,
} from 'react-hook-form';

interface Props {
  label?: string;
  value?: string;
  error?: boolean;
  options: OptionType[];
  formData?: BasicInformationType;
  errorText?: string;
  description?: string;
  getValue: () => string;
  name?: string | undefined;
  isDisabled?: boolean;
  onValueChange?: (value: string, name?: string | undefined) => void;
  hasSearch?: boolean;
}

export default function Select({
  errorText,
  description,
  options,
  getValue,
  isDisabled,
  label,
  name,
  onValueChange,
  hasSearch,
}: Props) {
  const {theme} = useContext(ThemeContext);
  const styles = useStyles(theme);
  const {setValue, control} = useFormContext();

  const handleSelect = (
    value: string,
    field: ControllerRenderProps<FieldValues, string>,
  ) => {
    if (onValueChange) {
      onValueChange(value, name);
      field.onChange(value);
    } else {
      setValue(name || '', value, {
        shouldDirty: true,
        shouldValidate: true,
        shouldTouch: true,
      });
    }
  };

  return (
    <Controller
      control={control}
      rules={{
        required: 'This Field is required',
      }}
      name={name || ''}
      render={({field, fieldState: {error: {message} = {}} = {}}) => (
        <View style={styles.container}>
          <SelectDropdown
            key={`${label}_key`}
            search={!!hasSearch}
            disabled={isDisabled}
            data={sortOptionLabel(options)?.map(item => item.label)}
            onSelect={selectedItem => {
              handleSelect(selectedItem, field);
            }}
            defaultButtonText={
              getValue() || field.value
                ? getValue() || field.value
                : label || ''
            }
            buttonTextAfterSelection={selectedItem => {
              return selectedItem;
            }}
            rowTextForSelection={item => {
              return item;
            }}
            renderDropdownIcon={isOpened => {
              return (
                <TextInput.Icon
                  icon={isOpened ? 'chevron-up' : 'chevron-down'}
                  color={theme.colors.onSurface}
                  size={20}
                  style={styles.dropdownIcon}
                />
              );
            }}
            dropdownIconPosition={'right'}
            buttonStyle={styles.dropdown1BtnStyle}
            buttonTextStyle={styles.dropdown1BtnTxtStyle}
            dropdownStyle={styles.dropdown1DropdownStyle}
            rowStyle={styles.dropdown1RowStyle}
            rowTextStyle={styles.dropdown1RowTxtStyle}
            searchPlaceHolder="Search here..."
            searchInputStyle={styles.SearchInput1Style}
            selectedRowTextStyle={styles.selectedDataStyle}
            searchInputTxtColor={theme.colors.onSurface}
          />

          {description && !errorText && (
            <Text style={styles.description}>{description}</Text>
          )}

          {errorText && <Text style={styles.error}>{errorText}</Text>}

          {message && <HelperText type="error">{message}</HelperText>}
        </View>
      )}
    />
  );
}

const useStyles = (theme: MD3Theme) =>
  StyleSheet.create({
    container: {
      width: '100%',
      marginVertical: 12,
    },
    description: {
      fontSize: 20,
      color: theme.colors.secondary,
      paddingTop: 8,
    },
    error: {
      fontSize: 13,
      color: theme.colors.error,
      paddingTop: 8,
    },
    dropdown1BtnStyle: {
      width: '100%',
      height: 50,
      backgroundColor: theme.colors.surface,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: theme.colors.outline,
    },
    dropdown1BtnTxtStyle: {
      color: theme.colors.onSurface,
      textAlign: 'left',
      fontSize: 16,
    },
    dropdown1DropdownStyle: {
      backgroundColor: theme.colors.background,
      paddingVertical: 10,
      paddingLeft: 10,
    },
    dropdown1RowStyle: {
      backgroundColor: theme.colors.background,
      borderBottomColor: '#C5C5C5',
      marginRight: 10,
      fontWeight: 'normal',
    },
    dropdown1RowTxtStyle: {
      color: theme.colors.onSurface,
      textAlign: 'left',
      fontSize: 16,
    },
    dropdownIcon: {
      position: 'absolute',
      right: 3,
      paddingLeft: 1,
    },
    SearchInput1Style: {
      backgroundColor: theme.colors.background,
      borderWidth: 1,
      borderRadius: 5,
      borderColor: theme.colors.outline,
      width: '94%',
    },
    selectedDataStyle: {
      fontWeight: 'bold',
    },
  });
