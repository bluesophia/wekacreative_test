import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Themes from '../../../Assets/Styles/Themes';
import Logo from '../../../Assets/Images/logo_color.png';
import { Footer,
  Container, 
  FooterTop,
  FooterBox1,
  FooterRightContainer,
  LogoImg,
  Box,
  Sns,
  FooterTitle,
  FooterText,
  FooterBottom,
  FooterBottomText,
  StyledLink__Div,
  StyledLink__Div2,
  StyledLink,
  ButtonDiv, 
  ButtonLink,
  FooterBox3,
  FooterBottomContainer,
  StyledLink__Div__Hidden
} from './style';
import LinkButton from '../../../Components/Common/Button/LinkButton';
/**** Animation ****/
import ScrollAnimation from 'react-animate-on-scroll';

class FooterContainer extends Component {
    _ScrollTop = () => {
      window.scrollTo(0, 0  );
    }
    render() {
      return (
        <ThemeProvider theme={Themes}> 
        <Footer>
          <ScrollAnimation animateIn='fadeIn'>
          <Container>
            <FooterTop>
              <ButtonDiv>
                <ButtonLink to='/contact'>
                    <LinkButton value={'Contact us'}/>
                </ButtonLink>
                </ButtonDiv>
                <FooterBox1>
                <FooterRightContainer>
                  {/* Logo & SNS */}
                  <FooterBox3>
                    <LogoImg src={Logo}/>
                    <Box>
                      <Sns href="#">
                          <FontAwesomeIcon icon={['fab', 'facebook-f']} size="2x" />
                      </Sns>
                      <Sns href="#">
                          <FontAwesomeIcon icon={['fab', 'linkedin-in']} size="2x" />
                      </Sns>
                      <Sns href="#">
                          <FontAwesomeIcon icon={['fab', 'instagram']} size="2x" />
                    </Sns>
                    </Box>
                    <StyledLink__Div2>
                      <StyledLink to='/'>Home /</StyledLink>
                      <StyledLink to='/about'> About /</StyledLink>
                      <StyledLink to='/support'> Support /</StyledLink>
                      {/* <StyledLink to='/blog'> Solutions /</StyledLink> */}
                      <StyledLink to='/contact'> Contact Us</StyledLink>
                      <StyledLink to='/privacy' onClick={this._ScrollTop}>Privacy Statement</StyledLink>
                    </StyledLink__Div2>
                </FooterBox3>
                    <FooterBottomContainer>
                    {/* <StyledLink__Div__Hidden> */}
                    <StyledLink__Div>
                    <FooterTitle>CONTACT US</FooterTitle>
                    <FooterText>027 200 2921</FooterText>
                    <FooterText><a href="mailto:hello@wekacreative.co.nz">hello@wekacreative.co.nz</a></FooterText>
                    {/* <FooterText><a href="mailto:support@wekacreative.co.nz">support@wekacreative.co.nz</a></FooterText> */}
                    </StyledLink__Div>
                    {/* </StyledLink__Div__Hidden>
                    <StyledLink__Div__Hidden> */}
                    <StyledLink__Div>
                    <FooterTitle>SITEMAP</FooterTitle>
                      <StyledLink to='/' onClick={this._ScrollTop}>Home</StyledLink>
                      <StyledLink to='/about' onClick={this._ScrollTop}>About</StyledLink>
                      <StyledLink to='/support' onClick={this._ScrollTop}>Support</StyledLink>
                      {/* <StyledLink to='/blog'>Solutions</StyledLink> */}
                      <StyledLink to='/contact' onClick={this._ScrollTop}>Contact Us</StyledLink>
                      <a href="http://wekacreative.co.nz/privacy">Privacy Statement</a>
                    </StyledLink__Div>
                    {/* </StyledLink__Div__Hidden> */}
                    </FooterBottomContainer>
                </FooterRightContainer>
              </FooterBox1>
                
              {/* <FooterBox2>
                <FooterRightContainer>
                    <StyledLink to='/'>Home</StyledLink>
						        <StyledLink to='/about'>/ Our Work</StyledLink>
						        <StyledLink to='/support'>/ Services</StyledLink>
						        <StyledLink to='/blog'>/ Solutions</StyledLink>
						        <StyledLink to='/contact'>/ Contact Us</StyledLink>
                </FooterRightContainer>
              </FooterBox2> */}

            </FooterTop>

            <FooterBottom>
                <FooterBottomText>Scops IT Solution Ltd ⓒ 2018</FooterBottomText>
            </FooterBottom>
          </Container>
          </ScrollAnimation>
        </Footer>
        </ThemeProvider> 
      );
    }
  }
  
  
export default FooterContainer;