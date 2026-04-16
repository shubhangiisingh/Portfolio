import React, { createContext, useMemo, useState, useContext } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const ColorModeContext = createContext({ toggleColorMode: () => {} });

export const useColorMode = () => useContext(ColorModeContext);

export const CustomThemeProvider = ({ children }) => {
  const [mode, setMode] = useState('dark');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: mode === 'dark' ? '#64ffda' : '#0070f3',
          },
          secondary: {
            main: mode === 'dark' ? '#ccd6f6' : '#2d3748',
          },
          background: {
            default: mode === 'dark' ? '#0a192f' : '#f9fafb',
            paper: mode === 'dark' ? '#112240' : '#ffffff',
          },
          text: {
            primary: mode === 'dark' ? '#ccd6f6' : '#1a202c',
            secondary: mode === 'dark' ? '#8892b0' : '#4a5568',
          },
        },
        typography: {
          fontFamily: 'Inter, sans-serif',
          h1: { fontWeight: 700 },
          h2: { fontWeight: 600 },
          h3: { fontWeight: 600 },
          button: { textTransform: 'none' },
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
