import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from 'react';
import {MD3LightTheme, MD3DarkTheme, PaperProvider} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {ColorSchemeName, useColorScheme} from 'react-native';

MaterialCommunityIcons.loadFont();

type ThemeContextType = {
  theme: typeof MD3LightTheme | typeof MD3DarkTheme;
  setTheme: Dispatch<
    SetStateAction<typeof MD3LightTheme | typeof MD3DarkTheme>
  >;
  mode: ColorSchemeName;
};

export const ThemeContext = createContext<ThemeContextType>(
  {} as ThemeContextType,
);

const defLightTheme: typeof MD3LightTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: 'rgb(255, 217, 90)',
    secondary: '#414757',
    error: '#f13a59',
  },
};

const defDarkTheme: typeof MD3DarkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: 'rgb(255, 217, 90)',
    secondary: '#414757',
    error: '#f13a59',
  },
};

type Props = {
  children: JSX.Element[] | JSX.Element | string;
};

function ThemeProvider({children}: Props): JSX.Element {
  const mode = useColorScheme();
  const [theme, setTheme] = useState<typeof MD3LightTheme>(defLightTheme);

  useEffect(() => {
    if (mode === 'light') {
      setTheme(defLightTheme);
    } else {
      setTheme(defDarkTheme);
    }
  }, [mode]);

  return (
    <ThemeContext.Provider value={{theme, mode, setTheme}}>
      <PaperProvider
        theme={theme}
        settings={{
          icon: props => <MaterialCommunityIcons {...props} />,
        }}>
        {children}
      </PaperProvider>
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
