import React, {Dispatch, SetStateAction, useContext} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {PaginationInput, PaginationPayload} from '../../generated';
import {MD3Theme} from 'react-native-paper';
import {ThemeContext} from '../../contexts/ThemeContext';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type IPagination = {
  pagination: PaginationPayload | undefined;
  paginationState: PaginationInput;
  setPaginationState: Dispatch<SetStateAction<PaginationInput>>;
};
const Pagination = ({
  pagination,
  paginationState,
  setPaginationState,
}: IPagination) => {
  const {theme} = useContext(ThemeContext);
  const styles = useStyles(theme);
  const handlePageClick = (pageInput: number) => {
    setPaginationState({...paginationState, page: pageInput});
  };
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.button,
          pagination?.page && paginationState?.page === 1
            ? {borderColor: theme.colors.surfaceDisabled}
            : {borderColor: theme.colors.primary},
        ]}>
        <TouchableOpacity
          disabled={!pagination?.page || paginationState?.page === 1}
          onPress={() => handlePageClick(pagination?.page! - 1)}>
          <MaterialCommunityIcons
            name="chevron-left"
            size={35}
            style={[
              styles.BackButtonText,
              pagination?.page && paginationState?.page === 1
                ? {color: theme.colors.surfaceDisabled}
                : {color: theme.colors.primary},
            ]}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.mainPageTextContainer}>
        <View style={styles.pageTextContainer}>
          <Text style={styles.pageText}>{pagination?.page}</Text>
        </View>
      </View>

      <View
        style={[
          styles.button,
          pagination?.page! >= pagination?.totalPages!
            ? {borderColor: theme.colors.surfaceDisabled}
            : {borderColor: theme.colors.primary},
        ]}>
        <TouchableOpacity
          disabled={pagination?.page! >= pagination?.totalPages!}
          onPress={() => handlePageClick(pagination?.page! + 1)}>
          <MaterialCommunityIcons
            name="chevron-right"
            size={35}
            style={[
              styles.BackButtonText,
              pagination?.page! === pagination?.totalPages!
                ? {color: theme.colors.surfaceDisabled}
                : {color: theme.colors.primary},
            ]}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const useStyles = (theme: MD3Theme) =>
  StyleSheet.create({
    container: {
      margin: 5,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    button: {
      backgroundColor: theme.colors.background,
      borderRadius: 10,
      borderStyle: 'solid',
      borderWidth: 1,
      width: 55,
      height: 40,
      marginHorizontal: 10,
      justifyContent: 'center',
      alignContent: 'center',
      margin: 2,
    },
    BackButtonText: {
      padding: 0,
      textAlign: 'center',
      paddingVertical: 2,
      fontWeight: 'bold',
    },
    mainPageTextContainer: {
      borderRadius: 50,
      borderWidth: 2,
      borderColor: theme.colors.primary,
    },
    pageTextContainer: {
      width: 30,
      height: 30,
      backgroundColor: theme.colors.primary,
      borderRadius: 50,
      margin: 5,
      flex: 1,
      justifyContent: 'center',
    },
    pageText: {
      fontSize: 17,
      padding: 1,
      fontWeight: 'bold',
      textAlign: 'center',
      color: theme.colors.surface,
    },
    disabledTextStyle: {
      color: theme.colors.surfaceDisabled,
    },
  });

export default Pagination;
