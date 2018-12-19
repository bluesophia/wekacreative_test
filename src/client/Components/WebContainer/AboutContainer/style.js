import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Themes from '../../../Assets/Styles/Themes';
import Text from '../../Common/Text';

/** Images **/
import AboutSectionBgMd from '../../../Assets/Images/AboutSectionBgMd.png';
import HomeSection01BgSm from '../../../Assets/Images/HomeSection01BgSm.png';
import AboutSectionBglg from '../../../Assets/Images/AboutSectionBglg.svg';
import mainImage3 from '../../../Assets/Images/AboutSection01Image3.svg';
import AboutSectionBgxlg from '../../../Assets/Images/AboutSectionBgxlg.png';

/** components **/

import BigTitle from '../../Common/Title/BigTitle';

export const Section01 = styled.div`
  margin:0;
  background: url('${HomeSection01BgSm}');
  background-position:center top;
  background-repeat:no-repeat;
  background-size:100% 100%;
  ${breakpoint('md')`
      background: url('${AboutSectionBgMd}');
      background-position:left top;
      background-repeat:no-repeat;
      background-size:100% 168%;     
  `}
  ${breakpoint('lg')`
      background: url('${AboutSectionBglg}');
      background-repeat:no-repeat;
      background-size: cover;
      // background-size:107% 109%; 
  `}
  ${breakpoint('xl')`
      background: url('${AboutSectionBgxlg}');
      background-repeat:no-repeat;
      background-size: cover;
  `}
`
export const MainImageBackground = styled.img`
`
export const Section01__Container = styled.div`
  // padding:18% 8% 10% 8%;
  padding: ${Themes.paddings.mobileTop};
  display:flex;
  flex-direction:column;
  align-items:center;
      ${breakpoint('md')`
          padding:10% 17%;
      `}
      ${breakpoint('lg')`
          max-width: 1400px;
          margin:0 auto;
          padding:5% 10% 10%;
          align-items:flex-start; 
          flex-direction:row;

      `}
`
export const Section01__ImageTop = styled.div`
  display: none;
    ${breakpoint('md')`
    display: none;
  `}
    ${breakpoint('lg')`
    display: block;
    z-index: -10;
`}
`
export const Section01__Image = styled.div`
    width:100%;
        ${breakpoint('md')`
            display: none;
        `}
        ${breakpoint('lg')`
            display: none;
        `}
`
export const MainImage = styled.img`
    width:inherit;
    height:auto;
    ${breakpoint('md')`
            display: none;
        `}
        ${breakpoint('lg')`
            display: none;
        `}
    
`
export const Section01__Image2 = styled.div`
    display: none;
        ${breakpoint('md')`
          display: flex;
          margin-left:0;
          margin-top: 130px;
        `}
        ${breakpoint('lg')`
          content: url(${mainImage3});
          // transform: scale(2.1);
          // max-width: 500px;
          // margin-right: 27%;
          // margin-top: 100px;
          // transform: scale(2.3);
          // max-width: 500px;
          // margin-right: 36%;
          // padding-left: 8%;
          // margin-top: 120px;
          transform: scale(2.3);
          max-width: 500px;
          margin-right: 22%;
          padding-left: 8%;
          margin-top: 120px;
        `}
        ${breakpoint('xl')`
          max-width: 1000px;
          transform: scale(2.7);
          // margin-right: 45%;
          margin-top: 100px;

          
        `}
`
export const Section01__Image3 = styled.img`
display: none;
 ${breakpoint('md')`
 display: block;
 padding: 5% 10% 0 10%;
 width: 80%;
        `}
${breakpoint('lg')`
 display: block;
 padding: 5% 10% 0 10%;
 width: 70%;
        `}
`

export const Section01__Image4 = styled.img`
padding: 5% 10% 10% 15%;
width: 70%;
 ${breakpoint('md')`
 display: none;
        `}
`
export const MainImage2 = styled.img`
    display: none;
    ${breakpoint('md')`
      display: flex;
      transform: scale(2.3);
      width: 100%;
        `}
    // width:inherit;
    // height:auto;
`
export const Section01__TitleDiv = styled.div`
  display:flex;
  align-items:center;
  flex-direction:column;
  justify-content:center;
  margin:0 auto;
    ${breakpoint('md')`
      width:100%;
    `}
    ${breakpoint('lg')`
      // margin-top:50px;
      align-items:flex-start;
      justify-content:flex-start;
    `}
`
export const Section01__Title = styled.div`
  ${BigTitle};
  color:${Themes.colors.black};
  text-align:center;
  margin-bottom: 40px;
    ${breakpoint('md')`
        text-align:center; 
        font-size: 40px;
        margin:0 0 4    0px 0;  
    `}
    ${breakpoint('lg')`
    `}
`
export const Section01__Text = styled.div`
  display:none;
    ${breakpoint('md')`
      display:flex;
      ${Text};
      font-size:${Themes.fontsize.h4} !important;
      line-height:27px !important;
      color:${Themes.colors.grey};
      font-weight:${Themes.fontWeight.regular};
      text-align: justify;
    `}
    ${breakpoint('lg')`
      max-width: 400px;
      font-size:${Themes.fontsize.p2} !important;
      line-height:28px !important; 
      text-align: left; 
    `}
    ${breakpoint('xl')`
      max-width: 460px;
      font-size:${Themes.fontsize.p1} !important;
      line-height:28px !important; 
      text-align: left; 
    `}
`
export const Section02 = styled.div`
${breakpoint('md')`
      padding: 5% 0 10% 0;
    `}
`
export const Section03 = styled.div`
  background-color:${Themes.colors.w_lightOrange};
`
export const Container = styled.div`
  max-width:1366px;
  margin:0 auto;
  // padding:70px 14%;
  padding: ${Themes.paddings.mobileBottomMargin}
  ${breakpoint('lg')`
    padding:70px 15%;
    display:grid;
    grid-template-columns:25% 75%;
  `}
`
export const Section__Title = styled.div`
  ${BigTitle};
  margin-bottom:10%;
  ${breakpoint('lg')`
    text-align:left;
  `}
`
export const Section__Text = styled.div`
  ${Text};
  font-size:${Themes.fontsize.p3};
  line-height:23px;
  text-align: center;
  ${breakpoint('lg')`
    // text-align:left;
    text-align: justify;
  `}
`

export const Br = styled.br`
    display:none;
    ${breakpoint('md')`
    display:none;
    `}
    ${breakpoint('lg')`
    display:block;
    `}
`
export const Br2 = styled.br`
    ${breakpoint('md')`
    display:none;
    `}
    ${breakpoint('lg')`
    display:none;
    `}
`
export const Section02__Container = styled.div`
    margin:0 auto;
    margin-top: 10%;
    // padding-bottom: 10%;
    ${breakpoint('sm')`
    `}
    ${breakpoint('md')`
    padding-bottom: 0%;
    `}
    ${breakpoint('lg')`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 0;
    `}
`
export const Section02__Title = styled.div`
    ${BigTitle};
    color:${Themes.colors.black};
    font-weight:${Themes.fontWeight.black};
    ${breakpoint('lg')`
    `}
`

export const Section02__Text = styled.div`
    // margin-top:9px;
    // margin-bottom: 10%;
    padding: 5% 10% 0 10%;
    ${Text};
    font-size: 20px;
    color:${Themes.colors.grey};
    // text-align:left;
    text-align: center;
        ${breakpoint('md')`
            padding: 5% 10% 0 10%;
            font-size: 28px;
            line-height:50px;
            margin-bottom: 4%;  
            text-align:center; 
        `}
        ${breakpoint('lg')`
            font-size: 28px;
            line-height:40px !important;
            padding: 5% 10% 0 10%;
            font-size: 24px;
            margin-bottom: 5%;
        `}
`