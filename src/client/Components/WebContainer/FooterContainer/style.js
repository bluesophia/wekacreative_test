import styled from 'styled-components';
import Themes from '../../../Assets/Styles/Themes';
import breakpoint from 'styled-components-breakpoint';
import { Link } from 'react-router-dom';

/**** Footer style ****/
export const Box = styled.div`
      display: flex;
      justify-content: center;
      margin-left: -52px;
      ${breakpoint('md')`
        // float: right;
      `};
      ${breakpoint('lg')`
      // justify-content: flex-end;
      margin-left: 0;
      margin-top: 10%;
      `};
  `  
export const Sns = styled.a`
    color:${Themes.colors.grey};
    // font-size: 1em;
    padding: 1.5em 1.5em;
    font-size: 0.8em;
    // padding: 1.5em 1.9em;
    &:hover {
      color:${Themes.colors.orange};
    }
      ${breakpoint('md')`
      // padding: 0 1.1em;
    //   font-size: 0.8em;
    // padding: 1.5em 1.9em;
      `};
      ${breakpoint('lg')`
      padding: 0 1.5em;
      `};
  `
export const Footer = styled.div`
  // height: 770px;
  // flex-direction: row;
  // align-items: space-between;
  font-family: Lato;
  background: ${Themes.colors.w_mint};
  // padding: 0 10%;
  line-height:1.5em;
  ${breakpoint('md')`
    // max-width: 768px;
    // padding: 0 10%;
  `}
  ${breakpoint('lg')`
  `}
`
export const Container = styled.div`
  margin:0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${breakpoint('lg')`
      max-width: 1366px;
  `}
`
//footer top css
export const FooterTop = styled.div`
// padding-top: 30px;
// padding: 30px;
flex-direction: column;
  
  ${breakpoint('md')`
  // display: flex;
  // justify-content: space-between;
  // padding-top: 0;
  padding: 0;
  padding-top: 30px;
  `};
  ${breakpoint('lg')`
  padding-top:0;
  `};
`
export const FooterBox1 = styled.div`
// display: flex;
// flex-direction: column;

${breakpoint('md')`
// flex-direction: row;
`};
${breakpoint('lg')`
// flex-direction: row;
`};
`
export const FooterBox3 = FooterBox1.extend`
display: flex;
justify-content: space-around;
align-items: center;
// margin-bottom: 10%;
margin-bottom: 3%;
${breakpoint('md')`
order:3;
margin-bottom: 0;
`};
${breakpoint('lg')`
display: flex;
flex-direction: column;
margin-right: 160px;
`}
`
export const FooterRightContainer = styled.div`
// text-align:center;
${breakpoint('md')`
  // text-align:left;
`};
${breakpoint('lg')`
  // float: left;
  // width: 100%;
  display: flex;
  float: left;
  width: 100%;
  flex-direction: row-reverse;
  // justify-content: space-around;
  margin-left: -4%;
  max-width: 1215px;

`};
`
export const FooterBottomContainer = styled.div`
display: flex;
text-align:center;
justify-content: space-around;
flex-direction: row-reverse;
${breakpoint('md')`
  // text-align:left;
`};
${breakpoint('lg')`
  // float: left;
  // width: 100%;
  margin-left: -10px;
`};
`
export const FooterTitle = styled.div`
font-size: ${Themes.fontsize.h4};
font-weight: ${Themes.fontWeight.bold};
text-align:left;
margin: 0.5em 0 0.5em 0;
color: ${Themes.colors.yellow};
  ${breakpoint('md')`
  // display: none;
  font-size: ${Themes.fontsize.h4};
font-weight: ${Themes.fontWeight.bold};
text-align:left;
margin: 0.5em 0 0.5em 0;
color: ${Themes.colors.yellow};
    `};
  ${breakpoint('lg')`
    `};
  `
export const FooterTitleDisplay = FooterTitle.extend`
display:none;
${breakpoint('md')`
// display: block;
`};
`
export const LogoImg = styled.img`
	// width:176px;
	// float:left;
  position:relative;
  // width: 131px;
  width: 109px;
  margin-left: -3%;
  margin-right: 10px;
  ${breakpoint('md')`
    // display: flex;
    // margin-left: -21px;
	`}
	${breakpoint('lg')`
    width:160px;
    margin-left: 0;
	`}
`;
export const FooterText = styled.span`
  font-size: ${Themes.fontsize.p2};
  display:block;
  color: ${Themes.colors.grey};
  font-weight: ${Themes.fontWeight.light};
  line-height: 1.8;
  text-align: left;
  ${breakpoint('md')`
  font-size: 15px;
  font-weight: ${Themes.fontWeight.regular};
  text-align: left;
  `};
`
export const FooterTextAddress = FooterText.extend`
padding-top: 1.25em;
`
export const StyledLink__Div = styled.div`
  display: flex;
  flex-direction: column;
  ${breakpoint('md')`
  // display: none;
  `};
  ${breakpoint('lg')`
  // margin: 0px 53% 0 4%;
  margin-right: 130px;
  `}
`
export const StyledLink__Div2 = styled.div`
  display: none;
  ${breakpoint('md')`
  `};
`
export const  StyledLink = styled(Link)`
  color: ${Themes.colors.grey};
  font-size: ${Themes.fontsize.p2};
  display:block;
  text-decoration: none;
  font-weight: ${Themes.fontWeight.light};
  line-height:1.8;
  text-align: left;
  &:hover {
    color: ${Themes.colors.orange};
  }
  ${breakpoint('md')`
  font-size: 15px;
  font-weight: ${Themes.fontWeight.regular};
  text-align: left;
  `};
`
//footer bottom css
export const FooterBottom = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1.5em;
  padding-bottom: 5%;
  text-align: center;
  ${breakpoint('md')`
  justify-content: space-between;
  text-align: left;
  `};
`
export const FooterBottomText = styled.span`
flex-direction: column;
font-size: ${Themes.fontsize.p4};
font-weight:${Themes.fontWeight.light};
text-align: center;
padding: 0;
color: ${Themes.colors.grey};
  ${breakpoint('md')`
    // text-align: left;
    font-size: 15px;
    // font-weight: ${Themes.fontWeight.regular};
      `}
`
//button
export const ButtonDiv = styled.div`
  transform: scale(0.9);
  padding: 10%;
  padding-bottom: 5%;
  cursor: 'pointer';
    ${breakpoint('md')`
      padding: 5% 10% 5% 10%;
    `}
    ${breakpoint('lg')`
    `}
`
export const ButtonLink = styled(Link)`
        cursor:'pointer';

`

export const StyledLink__Div__Hidden = styled.div`
  display: none;
  ${breakpoint('lg')`
    display:
  `}
`

