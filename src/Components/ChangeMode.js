import React from 'react';
import Content from './Content';
import {ColorProvider} from './Themes';
import ThemeButtons from './ThemeButton';



function ChangeMode() {
  return (
    <ColorProvider>
      <Content />
      <ThemeButtons />
    </ColorProvider>
  )
}

export default ChangeMode;