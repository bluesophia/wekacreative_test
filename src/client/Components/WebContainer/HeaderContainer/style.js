import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Themes from '../../../Assets/Styles/Themes';
import { Link } from 'react-router-dom';
import LogoColor from '../../../Assets/Images/logo_color.png';

export const Nav = styled.div`
	height:auto;
	background-color: ${Themes.colors.w_mint};
	overflow: hidden;
	padding: 1.25em 10% 0.625em;
	position: sticky;
	a {
		color: #707070;
	};
	a:hover {
		color: #FF9800;
	}
		${breakpoint('md')`
			// padding: 3.25em 10% 0.625em;
			padding: 3%;
		`}
	`
export const Container = styled.div`
	margin:0 auto;
	display:flex;
	justify-content:space-between;
	${breakpoint('md')`	
		display:flex;
		justify-content:space-between;
		align-items:center;
		flex-direction:row;
	`}
    ${breakpoint('lg')`
		max-width: 1366px;
    `}
`
export const NavNarrow = styled.div`
		display: block;
		width:100%;
		@media (min-width: 768px) {
  		display: none;
		}
`;

export const NavWide = styled.div`
	display: none;
		@media (min-width: 768px) {
			display:none;
			display: flex;
			justify-content:flex-end;
		}
 `;

 export const WideDiv = styled.div`
display:flex;
align-items: flex-end;

`;
export const Box = styled.div`
    display: flex;
	justify-content:center;
	border-bottom: 0.1px solid ${Themes.colors.veryLightGrey};
	${breakpoint('md')`
	align-items: baseline;
	padding:0;
	border-bottom: 0;
		`}
		${breakpoint('lg')`
		align-items: flex-end;
		padding: 1em 0 1em 1em;
	`}
`
export const Sns = styled.a`
	color: ${Themes.colors.white};
	font-size: 1em;
	padding: 1em;
	${breakpoint('md')`
		padding: 1em 1em;
		// &:last-child {
		// 	padding: 1em 0 1em 0.5em;
		// }
		`}
	${breakpoint('lg')`
	padding: 0 1em;
	// &:last-child {
	// 	padding: 1em 0 0 1em;
	//   }
	`}
`
export const Login = styled.a`
	color: ${Themes.colors.white};
	padding: 0 0.5em 0 0;
	//color
	position:relative;
	display: inline-block;
	${breakpoint('md')`
			padding: 0 0.2em 0 0;
		`}
	${breakpoint('lg')`
		padding: 1em 0.5em 0 1em;
	`}
`
export const LoginIcon = styled.img`
	width:21px;
	height:21px;
	vertical-align:middle;
`
export const LoginIcon2 = styled.img`
	display: none;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 99;
`
export const LogoImg = styled.img`
	width:81px;
	float:left;
	position:absolute;
	margin-top: -3%;
	${breakpoint('md')`
		content: url(${LogoColor});
		width:100px;
		margin-top: 0;
	`}
	${breakpoint('lg')`
		content: url(${LogoColor});
		// width:100px;
		width: 140px;
		// margin-top: 1.6%;
	`}
`
export const LinkedLogo = styled(Link)`
	height:32px;
	${breakpoint('md')`
		margin-top: -20px;
		height:50px;
	`}
	${breakpoint('lg')`
		margin-top: -40px;
	`}
`
//burger menu
export const icon = {
	float:'right',
	clear: 'right',
	cursor: 'pointer',
	color: '#707070',
	height: 'auto',
	marginTop: '-1%'
};
export const StyledLink = styled(Link)`
text-decoration: none;
color: ${Themes.colors.lightGrey};
font-size: 1em;
padding: 1em;
font-weight: ${Themes.fontWeight.light};
cursor:'pointer';
	${breakpoint('md')`
		padding: 1em 0.5em;
		&:last-child {
			padding: 1em 0.5em 0.9em 0.5em;
			}
	`}
`
export const NarrowLinks = styled.div`
		position: static;
		display: none;
		margin: 3.5em 0 0;
		${breakpoint('md')`
		display: none;
	`}
		
`
export const NarrowStyledLink = styled(Link)`
text-decoration: none;
color: ${Themes.colors.lightGrey};
font-size: 1em;
font-weight: ${Themes.fontWeight.regular};
padding: 1em;
display:block;
text-align: center;
border-bottom: 0.1px solid ${Themes.colors.verylightGrey};
	&:last-child {
	border-bottom: 0px;
		}
`;
