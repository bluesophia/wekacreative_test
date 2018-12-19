import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Themes from '../../../Assets/Styles/Themes';

/** Components **/
import BigTitle from '../../../Components/Common/Title/BigTitle';
import Bg from '../../../Assets/Images/ContactSection01Bg.png';

export const Container = styled.div`
`
export const Header = styled.div`
    padding: ${Themes.paddings.mobileTop};
    background:url(${Bg});
    background-size:100% 100%;
    box-shadow: 0 5px 8px -4px rgba(0,0,0,0.2);
    ${breakpoint('md')`
      padding: ${Themes.paddings.tabletTop};
    `}
    ${breakpoint('lg')`
      padding: ${Themes.paddings.desktopTopNone};
      background:none;
      justify-content:center;
      align-items:center;
      max-width:1366px;
      margin:0 auto;
      box-shadow: 0 0 0 0;
    `}
`
export const Header__ImageDiv = styled.div`
    z-index:1;
    transform: scale(0.9);
    ${breakpoint('md')`
      display: flex;
      flex-direction: column-reverse;
    `}
    ${breakpoint('lg')`
    `}
`

export const Header__Image = styled.img`
    ${breakpoint('md')`
      display: block;
      margin-bottom: 10%;
      transform: scale(0.9);
    `}
    ${breakpoint('lg')`
      transform: scale(0.6);
      width: 100%;
      margin-top: -39%;
      margin-left: -24%;

    `}
`
export const Header__Content = styled.div`
    display:flex;
    align-items:center;
    flex-direction:column;
`

export const TopBgImg = styled.img`
  display:none;
    ${breakpoint('lg')`
      display:block;
      width:100vw;
      // height: 40%;
      position:absolute;
      top:120;
    `}
`
export const TitleDiv = styled.div`
  display:flex;
  flex-direction:column;
  z-index:1;
`
export const TitleDiv__Title = styled.div`
  ${BigTitle};
  margin-bottom:10%;
  ${breakpoint('lg')`
    display: block;
    // margin-top: 15%;
    margin-top: 10%;
    margin-left: 62%;
    margin-bottom: 5%;
    display:flex;
  `}
`
export const TitleDiv__Sm = styled.div`
  ${breakpoint('md')`
    display: flex;
    flex-direction: column-reverse;
  `}
`
export const TitleDiv__Text = styled.div`
  ${breakpoint('lg')`
    display:block;
    color:white;
    font-size:${Themes.fontsize.p2};
    line-height:25px;
    font-weight:${Themes.fontWeight.light};
    width:470px;
  `}
`
export const TitleDiv__Textsm = styled.div`
  color:${Themes.colors.grey};
  text-align: left;
  font-size:${Themes.fontsize.h4};
  padding: 4%;
  margin-top:10%;
  margin-bottom: 10%;
  line-height:26px;
    ${breakpoint('md')`
    display:block;
    font-size:${Themes.fontsize.h4};
    line-height:25px;
    font-weight:${Themes.fontWeight.regular};
    text-align:left;
    margin:0;
    padding: 0 0 10% 0%;
    `}
    ${breakpoint('lg')`
    font-size:${Themes.fontsize.p1};
    font-weight:${Themes.fontWeight.regular};
    display: block;
    line-height: 26px;
    padding: 0 3%;
    text-align: left;
    margin-left: 59%;
    width: 43%;
    `}
 `   
 export const CallUsDiv = styled.div`
  display:flex;
  align-items:center;
  flex-direction:row;
  z-index:1;
`
export const Icon = styled.img`
  margin-right:2px;
`
export const CallUs = styled.span`
  font-size:${Themes.fontsize.h4};
  color:white;
  margin-right:10px;
`
export const PhoneNo = styled.span`
  font-size:${Themes.fontsize.h4};
  color:${Themes.colors.yellow};
`
export const Contents = styled.div`
  padding:${Themes.paddings.mobile};
  margin:0 auto;
  display:flex;
  flex-direction:column;
    ${breakpoint('lg')`
      flex-direction:column-reverse;
      padding:0;
    `}
`
export const FormDiv = styled.div`
  ${breakpoint('lg')`
    z-index:1;
    width:787px;
    // margin: -142px auto 100px auto;
    margin: -166px auto 100px auto;
  `}
`
export const Form = styled.form`
  height:auto;
  background-color:white;
    ${breakpoint('lg')`
      padding:60px 8%;
      border-radius:50px;
      background-color:white;
      box-shadow:0 0 10px rgba(0,0,0,0.2);
    `}
`
export const InputDiv = styled.div`
  display:flex;
  flex-direction:column;
  ${breakpoint('lg')`
  `}
`
export const InputDiv__Left = styled.div`
  display:flex;
  flex-direction:column;
  ${breakpoint('lg')`
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
  margin:20px auto 20px auto;
  color:${Themes.colors.black};
  font-size:${Themes.fontsize.p2};
  font-weight:${Themes.fontWeight.black};
`