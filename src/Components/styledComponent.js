import styled from 'styled-components';

// Themes.js
export const Main = styled.div`
  background-color: ${props => props.theme.bg};
`

// title
export const CubeTop = styled.span`
  background-color: ${props => props.theme.accent};
  color: ${props => props.theme.common};
  box-shadow: inset 0 0 0 5px ${props => props.theme.sub};
`
export const CubeFront = styled.span`
  background-color: ${props => props.theme.common};
  color: ${props => props.theme.accent};
  box-shadow: inset 0 0 0 5px ${props => props.theme.sub};
`

// content.js
export const Card = styled.div`
  background-color: ${props => props.theme.common};
`

export const Border = styled.div`
  border: 2px solid ${props => props.theme.accent};
`

export const LogoMain = styled.div`
  color: ${props => props.theme.accent};
`

export const LogoText = styled.span`
  color: ${props => props.theme.accent};
`

export const BottomText = styled.span`
  color: ${props => props.theme.accent};
  background-color: ${props => props.theme.common};
`

// ThemeButton.js
export const Btn = styled.button`
  &:hover .bg-right,
  &:hover .bg,
  &:hover .bg-top {
    background-color: ${props => props.theme.common};
  }
  &:hover .text {
    color: ${props => props.theme.bg};
  }
  &:hover .bg-inner {
    background-color: ${props => props.theme.accent};
  }
`

export const BtnBGTop = styled.div`
  background-color: ${props => props.theme.sub};

`

export const BtnBGRight = styled.div`
  background-color: ${props => props.theme.sub};
`

export const BtnBG = styled.div`
  background-color: ${props => props.theme.sub};

`

export const BtnBGInner = styled.div`
  background-color: ${props => props.theme.common};
`

export const BtnText = styled.div`
  color: ${props => props.theme.sub};

`
