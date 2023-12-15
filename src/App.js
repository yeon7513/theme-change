import React from 'react';
import './scss/main.scss';
import Content from './Components/Content';
import Themes from './Components/Themes';
import ThemeButtons from './Components/ThemeButton';

function App() {
  return (
    <div className="App">
      <Themes>
        <Content />
        <ThemeButtons />
      </Themes>
    </div>
  );
}

export default App;
