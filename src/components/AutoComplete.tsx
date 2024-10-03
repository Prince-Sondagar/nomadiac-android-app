import React, {useState, FC, useContext} from 'react';
import {
  Controller,
  ControllerRenderProps,
  FieldValues,
  useFormContext,
} from 'react-hook-form';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {HelperText, MD3Theme, TextInput} from 'react-native-paper';
import Modal from 'react-native-modal';
import {OptionType} from '../interfaceTypes';
import {ThemeContext} from '../contexts/ThemeContext';

interface AutocompletePropsType {
  options: OptionType[];
  controllerName: string;
  controllerLabel?: string;
  onValueChange?: (value: string[], name?: string | undefined) => void;
  value?: string[];
}
const Autocomplete: FC<AutocompletePropsType> = ({
  options,
  controllerName,
  onValueChange,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [searchText, setSearchText] = useState('');
  const {setValue, watch, control} = useFormContext();
  const selectedOptions: string[] = watch(controllerName) || [];
  const {theme} = useContext(ThemeContext);
  const styles = useStyles(theme);

  const toggleModal = () => {
    setIsVisible(!isVisible);
  };

  const checkOptionExist = (option: OptionType) =>
    !!selectedOptions.includes(option.label);

  const toggleOption = (
    option: OptionType,
    field: ControllerRenderProps<FieldValues, string>,
  ) => {
    if (onValueChange) {
      if (checkOptionExist(option)) {
        const updatedValue = field.value.filter(
          (selectedValue: string) => option.label !== selectedValue,
        );
        onValueChange(updatedValue);
        field.onChange(updatedValue);
      } else {
        field.onChange([...field.value, option.label]);
        onValueChange([...field.value, option.label]);
      }
    } else {
      if (checkOptionExist(option)) {
        setValue(
          controllerName,
          selectedOptions.filter(item => item !== option.label),
          {
            shouldDirty: true,
            shouldValidate: true,
            shouldTouch: true,
          },
        );
      } else {
        setValue(controllerName, [...selectedOptions, option.label], {
          shouldDirty: true,
          shouldValidate: true,
          shouldTouch: true,
        });
      }
    }
  };

  const filteredOptions = options.filter(({label}) =>
    label.toLowerCase().includes(searchText.toLowerCase()),
  );

  return (
    <View style={styles.inputContainer}>
      <Controller
        control={control}
        rules={{
          required: 'This Field is required',
        }}
        name={controllerName}
        render={({field, fieldState: {error: {message} = {}} = {}}) => {
          const values = field.value || [];
          return (
            <>
              <TouchableOpacity onPress={toggleModal}>
                <TextInput
                  mode="outlined"
                  placeholder="Select an option."
                  value={values.map((item: string) => item).join(', ')}
                  editable={false}
                  right={<TextInput.Icon icon={'chevron-down'} size={20} />}
                />
              </TouchableOpacity>
              {message && <HelperText type="error">{message}</HelperText>}

              <Modal isVisible={isVisible} onBackdropPress={toggleModal}>
                <ScrollView style={styles.modalContainer}>
                  <TextInput
                    style={styles.searchInput}
                    placeholder="Search here..."
                    value={searchText}
                    onChangeText={text => setSearchText(text)}
                    mode="outlined"
                  />

                  {filteredOptions.map((option, index) => (
                    <TouchableOpacity
                      key={option.label}
                      onPress={() => toggleOption(option, field)}
                      style={{
                        ...styles.optionItem,
                        ...(index === filteredOptions.length - 1
                          ? {paddingBottom: 15}
                          : {}),
                      }}>
                      <Text
                        style={{
                          ...styles.optionText,
                          fontWeight: checkOptionExist(option)
                            ? 'bold'
                            : 'normal',
                        }}>
                        {option.label}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </Modal>
            </>
          );
        }}
      />
    </View>
  );
};

const useStyles = (theme: MD3Theme) =>
  StyleSheet.create({
    inputContainer: {
      padding: 10,
      width: '100%',
      flex: 1,
    },
    modalContainer: {
      backgroundColor: theme.colors.background,
      borderStartColor: theme.colors.background,
      padding: 10,
      borderRadius: 5,
      maxHeight: 200,
      overflow: 'scroll',
    },
    searchInput: {
      marginBottom: 10,
    },
    optionItem: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 5,
      padding: 8,
      borderBottomWidth: 1,
      borderBottomColor: '#C5C5C5',
    },
    optionIcon: {
      marginRight: 10,
    },
    optionText: {
      fontSize: 16,
      color: theme.colors.onSurface,
    },
  });

export default Autocomplete;
