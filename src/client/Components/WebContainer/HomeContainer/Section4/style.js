import styled, { css } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Themes from '../../../../Assets/Styles/Themes';
import Section04BgSm from '../../../../Assets/Images/Section04BgSm.png';
import HomeSection02BgMd from '../../../../Assets/Images/HomeSection02BgMd.png';
import BigTitle from '../../../Common/Title/BigTitle';
import LeveragetheFuture2 from '../../../../Assets/Images/LeveragetheFuture2.svg';
import Text from '../../../Common/Text';

/**** Section 04 ****/

// const Style = {
    export const Section04 = styled.div`
    background:url(${Section04BgSm}) no-repeat left top;
    background-size: 100%;
    padding: ${Themes.paddings.mobile};
    ${breakpoint('md')`
        background:url(${HomeSection02BgMd}) no-repeat top left;
        padding: ${Themes.paddings.tablet};
    `}
    ${breakpoint('lg')`
        background-size:100%;
        // height:768px;
        padding: ${Themes.paddings.desktop};
    `}
    ${breakpoint('xl')`
        background-size:100%;
        // height:768px;
        padding: 5% 10% 0 10%;
    `}
`
export const Container = styled.div`
    margin:0 auto;
    ${breakpoint('lg')`
        margin:auto 0 auto auto;
    `}
`
export const Section04__LeftDiv = styled.div`
    ${breakpoint('lg')`
        margin-right:0;
    `}
    ${breakpoint('md')`
        display: flex;
        flex-direction: column;
        align-items: center;
    `}
    ${breakpoint('xl')`
        // width:683px;
    `}
`
export const Section04__Wrap = styled.div`
    display: flex;
    flex-direction: column;
`
export const Section04__LeftDivContainer = styled.div`
`
export const Section04__TitleDiv = styled.div`
    margin:0 auto;
    ${breakpoint('lg')`
    `}
`
export const Section04__Title = styled.div`
    ${BigTitle};
    color:${Themes.colors.black};
    font-weight:${Themes.fontWeight.black};
    ${breakpoint('lg')`
    `}
`
export const Section04__Contents = styled.div`
    display: flex;
    justify-content: center;
    // padding: 8%;
    // transform: scale(3);
    // margin-top: 70%;
    // margin-bottom: 50%;
    ${breakpoint('md')`
        display: none;
    `}
    ${breakpoint('lg')`
        display: none;
    `}
`
export const Section04__Contents2 = styled.div`
    display: none;
    ${breakpoint('md')`
        display: block;
    `}
`
export const Section04__ContentDiv = styled.div`
    margin:50px auto 0 auto;
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
        ${breakpoint('lg')`
        `}
`
export const Section04__Image = styled.img`
    // width:120px;
    width: 66px;
    height:auto;
    margin-bottom:10px;
    ${breakpoint('md')`
        width: 100%;
        // transform: scale(1);
        // margin-bottom: 10%;
        transform: scale(2.2);
        margin: 30% 0 60% 0;
        `}
    ${breakpoint('lg')`
        transform: scale(3);
        margin: 60% 0 100% 0;
    `}    
    ${breakpoint('xl')`
    transform: scale(3.5);
    margin: 80% 0 100% 0;
    `}
`
export const Section04__Image2 = styled.img`
    // transform: scale(3.5);
    height: 510px;
    margin-top: 15%;
    margin-bottom: 10%;
    // margin-top: 70%;
    // margin-bottom: 60%;
    // margin-top: 80%;
    // margin-bottom: 70%;
    // background: url('${LeveragetheFuture2}');
    ${breakpoint('md')`
    display: none;
        `}
    ${breakpoint('lg')`
    display: none;
    `}    
    ${breakpoint('xl')`
    display: none;
    `}
`

export const Section04__Subtitle = styled.p`
    margin-top:20px;
    margin-bottom:0;
    color:${Themes.colors.blue};
    font-size:${Themes.fontsize.h3};
    font-weight:${Themes.fontWeight.bold};
    text-align:center;
    padding:0;
    ${breakpoint('lg')`
      margin: 0 0 0 35px;   
      line-height:30px;
      text-align:left; 
    `}
`
export const Section04__Text = styled.div`
    margin-top:9px;
    ${Text};
    color:${Themes.colors.grey};
    text-align:left;
        ${breakpoint('md')`
            margin-bottom: 10%;
            font-size:${Themes.fontsize.p1}
            line-height:26px;
        `}
        ${breakpoint('lg')`
        `}
`
export const Section04_ImgText = styled.div`
    margin-top:9px;
    font-size:${Themes.fontsize.p2};
    color:${Themes.colors.black};
    text-align:center;
        ${breakpoint('lg')`
            text-align:left;
            max-width:400px;
            margin: 9px 0 0 35px;
            font-size:${Themes.fontsize.p2}
            line-height:20px;
        `}
`
export const Section04__RightDiv = styled.div`
    display:none;
    ${breakpoint('lg')`
        
    `}
`
export const Shadow = css`
    box-shadow : 0 0 8px rgba(50, 50, 93, 0.23);
`