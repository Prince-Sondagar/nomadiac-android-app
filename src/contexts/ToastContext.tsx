import React, {createContext} from 'react';
import {ViewProps, Alert} from 'react-native';

interface Props extends ViewProps {}
type ToastStyle = {
  backgroundColor?: string;
};

type ToastContextTypes = {
  toast: (
    msg: string,
    options: {
      style: ToastStyle;
    },
  ) => void;
};

export const ToastContext = createContext<ToastContextTypes>({
  toast: msg => {},
});

export const Toast = {
  success(msg: string) {
    this.toast(msg, {style: {backgroundColor: 'green'}});
  },
  warning(msg: string) {
    this.toast(msg, {style: {backgroundColor: 'yellow'}});
  },
  info(msg: string) {
    this.toast(msg, {style: {backgroundColor: 'blue'}});
  },
  error(msg: string) {
    this.toast(msg, {style: {backgroundColor: 'red'}});
  },
  toast(msg: string, options = {style: {}}) {
    Alert.alert(msg, undefined, undefined, options.style);
  },
};

function ToastProvider({children}: Props) {
  function onToast(msg: string) {
    (Toast as any)(msg);
  }

  return (
    <ToastContext.Provider value={{toast: onToast}}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
