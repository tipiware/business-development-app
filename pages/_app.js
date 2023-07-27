/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import { ThemeProvider } from 'theme-ui';
import React, { useState, useEffect } from "react";
import theme from '../src/utils/theme';
import 'fontsource-poppins';
import '../node_modules/normalize.css/normalize.css';


export default function App({ Component, pageProps }) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === 'undefined') {
    return <></>;
  } else {
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}



