import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiceD6, faFaceSmile, faHandshake, faMusic, faPen, faUser } from "@fortawesome/free-solid-svg-icons";
import { Card, Border, LogoMain, LogoText, BottomText, CubeTop, CubeFront } from './styledComponent';
import { ThemeContext } from './Themes';

function Content() {
  return (
    <ThemeContext.Consumer>
      { ({theme}) => (
        <div className='wrap'>
          <div className='title'>
            <div className="scene">
              <div className="cube">
                <CubeTop className="side top">CHANGE!</CubeTop>
                <CubeFront className="side front">themes</CubeFront>
              </div>
            </div>
          </div>
          <section className='card-wrapper'>
            <Card className='card'>
              <Border className='border'></Border>
              <div className="content">
                <div className="logo">
                  <LogoMain>
                    <FontAwesomeIcon icon={faDiceD6} id='logo-main' />
                  </LogoMain>
                  <LogoText className="logo-text">테마마다 바뀌는 컬러</LogoText>
                </div>
              </div>
              <BottomText className="bottom-text">Theme&nbsp;Change&nbsp;Project</BottomText>
            </Card>
            <Card className='card'>
              <Border className="border"></Border>
              <div className="content">
                <div className="logo">
                  <LogoMain id='logo-main'>
                    <FontAwesomeIcon icon={faFaceSmile} />
                  </LogoMain>
                  <LogoText className="logo-text">
                    오늘 가장 좋게 웃는 자는<br />
                    역시 최후에도 웃을 것이다.
                    <span>니체</span>
                  </LogoText>
                </div>
              </div>
              <BottomText className="bottom-text">Theme&nbsp;Change&nbsp;Project</BottomText>
            </Card>
            <Card className='card'>
              <Border className="border"></Border>
              <div className="content">
                <div className="logo">
                  <LogoMain>
                    <FontAwesomeIcon icon={faMusic} id='logo-main' />
                  </LogoMain>
                  <LogoText className="logo-text">
                    음악은 꿈과 같다.<br />내가 절대 들을 수 없는<br />
                    <span>베토벤</span>
                  </LogoText>
                </div>
              </div>
              <BottomText className="bottom-text">Theme&nbsp;Change&nbsp;Project</BottomText>
            </Card>
            <Card className='card'>
              <Border className="border"></Border>
              <div className="content">
                <div className="logo">
                  <LogoMain>
                    <FontAwesomeIcon icon={faPen} id='logo-main' />
                  </LogoMain>
                  <LogoText className="logo-text">
                    위대한 사람의 지배 하에서는, <br />
                    펜이 칼보다 강하다.
                    <span>에드워드 불워-리튼</span>
                  </LogoText>
                </div>
              </div>
              <BottomText className="bottom-text">Theme&nbsp;Change&nbsp;Project</BottomText>
            </Card>
            <Card className='card'>
              <Border className="border"></Border>
              <div className="content">
                <div className="logo">
                  <LogoMain>
                    <FontAwesomeIcon icon={faHandshake} id='logo-main' />
                  </LogoMain>
                  <LogoText className="logo-text">
                    관리자는 통제에 의하지만<br />
                    리더는 신뢰를 쌓는다.
                    <span>워렌 베니스</span>
                  </LogoText>
                </div>
              </div>
              <BottomText className="bottom-text">Theme&nbsp;Change&nbsp;Project</BottomText>
            </Card>
            <Card className='card'>
              <Border className="border"></Border>
              <div className="content">
                <div className="logo">
                  <LogoMain>
                    <FontAwesomeIcon icon={faUser} id='logo-main' />
                  </LogoMain>
                  <LogoText className="logo-text">yeon7513@nate.com</LogoText>
                </div>
              </div>
              <BottomText className="bottom-text">Theme&nbsp;Change&nbsp;Project</BottomText>
            </Card>
          </section>
        </div>
      )}
    </ThemeContext.Consumer>
  )
}

export default Content;