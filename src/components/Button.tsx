import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {Button as PaperButton} from 'react-native-paper';
import {ThemeContext} from '../contexts/ThemeContext';

interface Props extends React.ComponentProps<typeof PaperButton> {
  mode: 'text' | 'outlined' | 'contained';
  style?: object;
  children: React.ReactNode;
  isLoading?: boolean;
}

export default function Button({
  mode,
  style,
  children,
  isLoading,
  ...props
}: Props) {
  const {theme} = useContext(ThemeContext);

  return (
    <PaperButton
      style={[
        styles.button,
        mode === 'outlined' && {backgroundColor: theme.colors.surface},
        style,
      ]}
      labelStyle={styles.text}
      mode={mode}
      {...props}
      loading={isLoading ? isLoading : false}>
      {children}
    </PaperButton>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    marginVertical: 6,
    paddingVertical: 2,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 26,
  },
});
