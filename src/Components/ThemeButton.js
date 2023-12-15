import React from 'react';
import { BtnBGTop, BtnBGRight, BtnBG, BtnBGInner, BtnText, Btn } from './styledComponent';
import { ThemeContext, themeColors } from './Themes';


function ThemeButtons() {
  return (
    <ThemeContext.Consumer>
      {({theme, toggleColor}) => (
        <div className='btns'>
          <Btn type='button' className='btn cube cube-hover' onClick={() => toggleColor(theme === themeColors.light ? 'dark' : 'default')}>
            <BtnBGTop className="bg-top">
              <BtnBGInner className="bg-inner"></BtnBGInner>
            </BtnBGTop>
            <BtnBGRight className="bg-right">
              <BtnBGInner className="bg-inner"></BtnBGInner>
            </BtnBGRight>
            <BtnBG className="bg">
              <BtnBGInner className="bg-inner"></BtnBGInner>
            </BtnBG>
            <BtnText className="text">
              {theme === themeColors.light ? 'Change Dark' : 'Change Light'}
            </BtnText>
          </Btn>
          <Btn type='button' className='btn cube cube-hover' onClick={() => toggleColor(theme === themeColors.spring ? 'default' : 'spring')}>
            <BtnBGTop className="bg-top">
              <BtnBGInner className="bg-inner"></BtnBGInner>
            </BtnBGTop>
            <BtnBGRight className="bg-right">
              <BtnBGInner className="bg-inner"></BtnBGInner>
            </BtnBGRight>
            <BtnBG className="bg">
              <BtnBGInner className="bg-inner"></BtnBGInner>
            </BtnBG>
            <BtnText className="text">Spring</BtnText>
          </Btn>
          <Btn type='button' className='btn cube cube-hover' onClick={() => toggleColor(theme === themeColors.summer ? 'default' : 'summer')}>
            <BtnBGTop className="bg-top">
              <BtnBGInner className="bg-inner"></BtnBGInner>
            </BtnBGTop>
            <BtnBGRight className="bg-right">
              <BtnBGInner className="bg-inner"></BtnBGInner>
            </BtnBGRight>
            <BtnBG className="bg">
              <BtnBGInner className="bg-inner"></BtnBGInner>
            </BtnBG>
            <BtnText className="text">Summer</BtnText>
          </Btn>
          <Btn type='button' className='btn cube cube-hover' onClick={() => toggleColor(theme === themeColors.fall ? 'default' : 'fall')}>
            <BtnBGTop className="bg-top">
              <BtnBGInner className="bg-inner"></BtnBGInner>
            </BtnBGTop>
            <BtnBGRight className="bg-right">
              <BtnBGInner className="bg-inner"></BtnBGInner>
            </BtnBGRight>
            <BtnBG className="bg">
              <BtnBGInner className="bg-inner"></BtnBGInner>
            </BtnBG>
            <BtnText className="text">Fall</BtnText>
          </Btn>
          <Btn type='button' className='btn cube cube-hover' onClick={() => toggleColor(theme === themeColors.winter ? 'default' : 'winter')}>
            <BtnBGTop className="bg-top">
              <BtnBGInner className="bg-inner"></BtnBGInner>
            </BtnBGTop>
            <BtnBGRight className="bg-right">
              <BtnBGInner className="bg-inner"></BtnBGInner>
            </BtnBGRight>
            <BtnBG className="bg">
              <BtnBGInner className="bg-inner"></BtnBGInner>
            </BtnBG>
            <BtnText className="text">Winter</BtnText>
          </Btn>
        </div>
      )}
    </ThemeContext.Consumer>
  );
}

export default ThemeButtons;