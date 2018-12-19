import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Themes from '../../../Assets/Styles/Themes';


/** components **/
import BigTitle from '../../Common/Title/BigTitle.js';

/** Images **/
import HomeSection02BgSm from '../../../Assets/Images/HomeSection02BgSm.svg';
import Section01Bg from '../../../Assets/Images/AboutSectionBgMd.png';



export const Br = styled.br`
  ${breakpoint('md')`
      display:none;
  `}
  ${breakpoint('lg')`
      display:none;
  `}
`
export const Support = styled.div`
    margin:0;
    background: url('${HomeSection02BgSm}');
    background-position:center top;
    background-repeat:no-repeat;
    background-size: 100% auto;
    ${breakpoint('md')`
    background: url('${Section01Bg}');
    background-position:left top;
    background-repeat:no-repeat;
    background-size:100% 79%;  
    // padding:10% 10%;   
    `}
    ${breakpoint('lg')`
        background-position:center top;
        background-repeat:no-repeat;
        // background-size:100% 50%;
        background-size:100% 80%;
    `}
`
export const Container = styled.div`
      padding: ${Themes.paddings.mobileTop};
    ${breakpoint('md')`
      padding: ${Themes.paddings.tabletTop};
      max-width:1024px;
      // display:grid;
      // grid-template-columns:40% 60%;
      // margin:0 auto;
      disply:flex;
      flex-direction: column;
    `}
    ${breakpoint('lg')`
        padding: 5% 10% 0 10%;
        flex-direction: row;
        max-width:1366px;
      `}
`
export const Section01 = styled.div`
      ${breakpoint('md')`
        display: flex;
        flex-direction: column;
      `}
      // ${breakpoint('lg')`
      //   display: flex;
      //   flex-direction: row;
       `}
`
export const Section01__Div = styled.div`
    ${breakpoint('md')`
    max-width:1024px;
    `}
      ${breakpoint('lg')`
      display: flex;
      flex-direction: row-reverse;
      max-width:1366px;
      `}
`
export const Section02 = styled.div`
`
export const ImageDiv = styled.div`
    margin-bottom:40px;
    ${breakpoint('md')`
    margin-bottom:0;
    `}
    ${breakpoint('lg')`
    grid-row: 1 / 3;
    justify-content:flex-start; 
    `}
`
export const TopBgImg = styled.img`
  height:auto;
  width:93%;
  margin-left:22px;
    ${breakpoint('md')`
    display: none;
  `}
    ${breakpoint('lg')`
    display: none;
    // margin-top: 157px;
    // margin-left: 120px;
    margin-top: 100px;
    margin-left: 90px;
    text-align: center;
    -webkit-transform: scale(3.5);
    -ms-transform: scale(3.5);
    transform: scale(3.6);
    `}
`
export const TopBgImg2 = styled.img`
    ${breakpoint('md')`
    display: block;
    width: 100%;
    margin:0 auto;
    margin-top: -5%;
    transform: scale(1.5);
    margin-left: 45px;
    text-align:center;
    // transform: scale(0.9);
    transform: scale(0.7);
  `}
    ${breakpoint('lg')`
    display: block;
    // margin-top: 157px;
    // margin-left: 120px;
    margin-top: 100px;
    margin-left: 90px;
    text-align: center;
    -webkit-transform: scale(3.5);
    -ms-transform: scale(3.5);
    transform: scale(3.6);
    `}
`
export const TitleDiv = styled.div`
  ${breakpoint('md')`
    order:2;  
    display:flex;
    flex-direction:column;
    // margin-bottom: 10%;
  `}
  ${breakpoint('lg')`
 margin-bottom: 10%;
    // margin:0 auto;
    // margin-left: 200px;
    margin-left: 300px;
    width: 65%;
  `}
`
export const TitleDiv__Title = styled.div`
  ${BigTitle};
  font-size:29px;
  margin-bottom:10%;
  ${breakpoint('md')`
    text-align:center;
    margin-bottom: 0 px;
  `}
  ${breakpoint('lg')`
  text-align:left;
  padding:0 3%;
`}
`
export const TitleDiv__Text = styled.div`
  display:none;
  text-align:left;
  ${breakpoint('md')`
    display:flex;
    color:${Themes.colors.grey};
    font-size:${Themes.fontsize.h4};
    line-height:25px;
    font-weight:${Themes.fontWeight.regular};
    text-align:justify;
    // padding: 0 24px;
  `}
  ${breakpoint('lg')`
    font-size:${Themes.fontsize.p1} !important;
    text-align:left;
    line-height:26px;  
    padding:0 3%;
  `}
`
export const TitleDiv__Textsm = styled.div`
    color:${Themes.colors.grey};
    text-align: left;
    font-size:${Themes.fontsize.h4};
    // padding: 4%;
    line-height: 25px;
    ${breakpoint('md')`
    display:none;
    color:white;
    font-size:${Themes.fontsize.p3};
    line-height:18px;
    font-weight:${Themes.fontWeight.light};
    text-align:left;
    `}
    ${breakpoint('lg')`
    font-size:${Themes.fontsize.p2} !important;
    line-height:25px;  
    padding:0 3%;
    `}
`

export const FormDiv = styled.div` 
    box-sizing:border-box;
    display:flex;
    flex-direction:column;
    margin:0 -5%;
    ${breakpoint('md')`
    // order:3;  
    // grid-column:1/2;
    margin:0;
    `}
      ${breakpoint('lg')`
        margin: 0;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        max-width: 1000px;
    `}
`
export const Form = styled.form`
  height:auto;
  padding:10% 8% 30px 8%;
  border-radius:25px;
    ${breakpoint('md')`
      padding-top: 0;
      `}
    ${breakpoint('lg')`
    // margin-top:30px;
    // padding: 30px 20% 30px 20%;
    width: 60%
    background-color:white;
    box-shadow:0 0 10px rgba(0,0,0,0.2);
    // margin-top: -4%;
    margin-bottom: 5%;
  `}
`
export const InputDiv = styled.div`
  // margin-bottom:50px;
  display:flex;
  flex-direction:column;
  ${breakpoint('lg')`
        margin-bottom:0;
 `}
`
export const InputDiv__Left = styled.div`
   ${breakpoint('lg')`
        // margin-bottom:50px;
        margin-top: 10%;
 `}
`
export const InputDiv__Right = styled.div``

export const ButtonDiv = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  margin-bottom: 10%;
  ${breakpoint('lg')`
    width:60%;  
    margin:0 auto;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
  `}
`
export const Form__Text = styled.div`
  margin:25px auto 10px auto;
  color:${Themes.colors.blueLight};
  font-size:${Themes.fontsize.p2};
  font-weight:${Themes.fontWeight.black};
`
export const Section01__Image = styled.div`
    width:100%;
//         ${breakpoint('md')`
//             transform: scale(0.8);
//         `}
//         ${breakpoint('lg')`
//             // transform: scale(1);
//         `}
`