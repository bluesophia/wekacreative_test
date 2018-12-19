import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Themes from '../../../../Assets/Styles/Themes';
import { Link } from 'react-router-dom';

/** Images **/
import HomeSection01BgMd from '../../../../Assets/Images/HomeSection01BgMd.png';
import HomeSection02BgMd from '../../../../Assets/Images/HomeSection02BgMd.png';

/** components **/
import BigTitle from '../../../Common/Title/BigTitle';


/**** Section 01 ****/
export const Br = styled.br`
    display: none;
    ${breakpoint('md')`
        display: none;
    `}
    ${breakpoint('lg')`
        display: block;
    `}
`
export const Br2 = styled.br`
    display: none;
    ${breakpoint('md')`
        display: block;
    `}
    ${breakpoint('lg')`
        display: none;
    `}
`
export const Section01 = styled.div`
    margin:0;
    background-position:center top;
    background-repeat:no-repeat;
    background-size:100% 100%;
    ${breakpoint('md')`
        background: url('${HomeSection01BgMd}');
        background-position:center top;
        background-repeat:no-repeat;
        background-size:120% 120%;
    `}
    ${breakpoint('lg')`
        background: url('${HomeSection02BgMd}');
        background-position:center top;
        background-repeat:no-repeat;
        background-size:100% 100%;
    `}
`
export const Container = styled.div`
    padding: ${Themes.paddings.mobileTop};
    display:flex;
    flex-direction:column;
    align-items:center;
        ${breakpoint('md')`
            padding: ${Themes.paddings.mobileTopNone};
        `}
        ${breakpoint('lg')`
            flex-direction:row;
            max-width: 1137px;
            margin:0 auto;
            padding: 0 5% 0 5%;
        `}
`
export const Section01__Image = styled.div`
    width:100%;
        ${breakpoint('md')`
            transform: scale(0.8);
        `}
        ${breakpoint('lg')`
            // transform: scale(1);
        `}
`
export const MainImage = styled.img`
    width:inherit;
    height:auto;
    transform: scale(1.1);
    ${breakpoint('md')`
        display: none;
    `}
`
export const MainImage2 = styled.img`
    display: none;
    ${breakpoint('md')`
    display: block;
    width:inherit;
    height:auto;
    `}
`
export const Section01__TitleDiv = styled.div`
    display:flex;
    justify-content:space-between;
    flex-direction:column;
    align-items:center;
    ${breakpoint('md')`
        width:100%;
        // align-items:flex-start;
        align-items: center;
        
        
    `}
    ${breakpoint('lg')`
        height:250px;
        align-items:center;
    `}
    ${breakpoint('xl')`
        margin-top: -6%;
    `}
`;
export const StyledTitle = styled.div`
        ${BigTitle};
        color:${Themes.colors.black};
        font-weight:${Themes.fontWeight.black};
        margin: 1em 0;
        text-align:left;
        margin-left: 10%;   
        ${breakpoint('md')`
            font-size:${Themes.fontsize.D_h1};
            text-align:center;
            margin:0;
            line-height: 1.7;
        `}
        ${breakpoint('lg')`
            text-align:center;
            max-width: 1300px;
        `}
        ${breakpoint('xl')`
            font-size: 38px;
            line-height: 1.5;
            /* margin-top: -10%; */
            text-align: center;
            margin: 0;
            margin-left: 14%;
        `}
    `
export const Section01__Text = styled.div`
    display:none;
    font-weight:${Themes.fontWeight.light};
    color:${Themes.colors.veryLightGrey};
    text-align:left;
    margin-top:20px;
    margin-bottom:20px;
    line-height:26px;
    font-size:${Themes.fontsize.p1};
        ${breakpoint('md')`
            display:none;
            // display:flex;
            color:${Themes.colors.grey};
            font-weight:${Themes.fontWeight.regular};
            text-align: center;
        `}
        ${breakpoint('lg')`
            text-align: left;
            display:none;
        `}
`
export const ButtonDiv = styled.div`
    width:64%;
    ${breakpoint('md')`
        // margin-left:-5px;
        margin: 0 auto;
    `}
    ${breakpoint('lg')`
        width:60%;
        // margin-left:0;
    `}
    ${breakpoint('xl')`
        margin-left: 29%;
        margin-top: 10%;
    `}
`
export const ButtonLink = styled(Link)`
        cursor:'pointer';
`

export const SubTitle = styled.p`
        font-size:${Themes.fontsize.h3};
        color:${Themes.colors.white};
        text-align:center;
        font-weight:${Themes.fontWeight.regular};
        margin-top:60px;
            ${breakpoint('lg')`
            text-align:right;
        `}
    `

