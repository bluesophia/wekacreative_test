import React, { Component } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Themes from '../../../Assets/Styles/Themes';
import LogoColor from '../../../Assets/Images/logo_color.png';
import loginIcon from '../../../Assets/Images/login.svg';
import loginIcon2 from '../../../Assets/Images/login2.svg';

import { Nav,
	Container,
	LinkedLogo,
	LogoImg,
	NavWide,
	WideDiv,
	StyledLink,
	Box,
	Sns,	
	Login,
	LoginIcon,
	LoginIcon2,
	NavNarrow,
	icon,
	NarrowLinks,
	NarrowStyledLink
} from './style'

class HeaderContainer extends Component {
	render(){
		return (
			<ThemeProvider theme={Themes}>
				<Nav id="navbar">
				<Container>
				<LinkedLogo to='/'><LogoImg src={LogoColor} id="logoColorImg"/></LinkedLogo>
				<NavWide>
					<WideDiv>
						<StyledLink to='/'  className="navHome">Home</StyledLink>
						<StyledLink to='/about'>About</StyledLink>
						<StyledLink to='/support'>Support</StyledLink>
						{/* <StyledLink to='/casestudy'>Casestudy</StyledLink> */}
						<StyledLink to='/contact'>Contact Us</StyledLink>
						<Box>
                           <Sns href="#">
                               <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                           </Sns>
                           <Sns href="#">
                               <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
                           </Sns>
                           <Sns href="#">
                               <FontAwesomeIcon icon={['fab', 'instagram']} size="lg" />
                           </Sns>
                       </Box>
					</WideDiv>
				</NavWide>
				<NavNarrow>
				<FontAwesomeIcon style={icon} icon='bars' onClick={this.burgerToggle} size="2x"/>
					<NarrowLinks className="narrowLinks">
						{/* <NarrowStyledLink onClick={function(event){ this.burgerToggle; this.navColorChange}} to='/' className="navHome">Home</NarrowStyledLink> */}
						<NarrowStyledLink onClick={this.burgerToggle} to='/'>Home</NarrowStyledLink>
						<NarrowStyledLink onClick={this.burgerToggle} to='/about'>About</NarrowStyledLink>
						<NarrowStyledLink onClick={this.burgerToggle} to='/support' >Support</NarrowStyledLink>
						{/* <NarrowStyledLink onClick={this.burgerToggle} to='/casestudy'>Casestudy</NarrowStyledLink> */}
						<NarrowStyledLink onClick={this.burgerToggle} to='/contact'>Contact Us</NarrowStyledLink>
						{/* <Box>
                           <Sns href="https://www.facebook.com/EasyFormsNZ/?ref=aymt_homepage_panel">
                               <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                           </Sns>
                           <Sns href="https://twitter.com/EasyFormsNZ">
                               <FontAwesomeIcon icon={['fab', 'twitter']} />
                           </Sns>
                           <Sns href="https://www.linkedin.com/company/easy-forms/">
                               <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
                           </Sns>
                       </Box> */}
					   {/* <NarrowStyledLink onClick={this.burgerToggle} to='/login'>
						   <Login>
						   		<LoginIcon src={loginIcon} /> 
							</Login>
							Login
						</NarrowStyledLink> */}
					</NarrowLinks>
				</NavNarrow>
				</Container>
				</Nav>
			</ThemeProvider>
            );
	}
	burgerToggle = () => {
		let linksEl = document.querySelector('.narrowLinks');
		if (linksEl.style.display === 'flex') {
			linksEl.style.display = 'none';
		} else {
			linksEl.style.display = 'flex';
			linksEl.style.justifyContent = 'center';
			linksEl.style.flexDirection = 'column';
		}
	}
	navColorChange = () => {
		let navHome = document.querySelector('.navHome');
		if(navHome) {
			document.querySelector('.navbar').style.backgroundColor="red";
		}
	}
}

  export default HeaderContainer;