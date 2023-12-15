import React, { createContext, useEffect, useState } from 'react';
import { Main } from './styledComponent';
import { ThemeProvider } from 'styled-components';

const ThemeContext = createContext();

const light = {
  common : '#c2b8a3',
  accent : '#a19882',
  sub : '#e6ddc6',
  bg : '#fef7dc'
}

const dark = {
  common : '#4f4557',
  accent : '#d5cea3',
  sub : '#e5e5cb',
  bg : '#1a120b'
}

const spring = {
  common : '#aacb73',
  accent : '#ffd4d4',
  sub : '#cde990',
  bg : '#ffffe8'
}

const summer = {
  common : '#31326f',
  accent : '#ffc93c',
  sub : '#9ddfd3',
  bg : '#dbf6e9'
}

const fall = {
  common : '#809a6f',
  accent : '#a25b5b',
  sub : '#cc9c75',
  bg : '#d5d8b5'
}

const winter = {
  common : '#445d48',
  accent : '#001524',
  sub : '#d6cc99',
  bg : '#fde5d4'
}

export let themeColors = {
  light,
  dark,
  spring,
  summer,
  fall,
  winter
}

function Themes({children}){

  const [currTheme, setCurrTheme] = useState(themeColors.light);

  const toggleColor = (color) => {
    const newTheme = color === 'default' ? themeColors.light : themeColors[color];
    if(newTheme !== currTheme) {
      setCurrTheme(newTheme);
      // console.log('color : ', color);
    }
  };

  useEffect(() => {
    // console.log('After toggle - currTheme : ', currTheme);
  }, [currTheme]);

  return (
    <ThemeProvider theme={currTheme}>
      <Main className='main'>
        <ThemeContext.Provider value={{theme: currTheme, themeColors, toggleColor}}>
          {children}
        </ThemeContext.Provider>
      </Main>
    </ThemeProvider>
  )
}

export {ThemeContext}; 

export default Themes;
