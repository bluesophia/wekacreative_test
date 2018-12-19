import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Themes from '../../../../Assets/Styles/Themes';
import BigTitle from '../../../Common/Title/BigTitle';

/** Components **/
import Text from '../../../Common/Text'
import { Link } from 'react-router-dom';


/**** Section 02 ****/
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
    display:none;
    ${breakpoint('md')`
    display:block;
    `}
    ${breakpoint('lg')`
    display:none;
    `}
`
export const Section02 = styled.div`
    // padding: 0 10%;
        padding: ${Themes.paddings.mobile};
        margin-bottom: -10%;
    ${breakpoint('md')`
        padding: ${Themes.paddings.tablet};
        margin-bottom: 0;
    `}
    ${breakpoint('lg')`
        padding:${Themes.paddings.desktop};
    `}
`
export const Container = styled.div`
    margin:0 auto;
    ${breakpoint('lg')`
        margin:auto 0 auto auto;
    `}
`
export const Section02__Container = styled.div`
    margin:0 auto;
    ${breakpoint('sm')`
    `}
    ${breakpoint('md')`
    `}
    ${breakpoint('lg')`
    `}
`
export const Section02__LeftDiv = styled.div`
    ${breakpoint('lg')`
        margin-right:0;
    `}
    ${breakpoint('xl')`
        width:683px;
    `}
`
export const Section02__LeftDivContainer = styled.div`
`
export const Section02__TitleDiv = styled.div`
    margin:0 auto;
    padding: 10%;
    padding-bottom: 0;
    ${breakpoint('lg')`
        margin-left:auto;
        margin-bottom:100px;
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
    margin-top:9px;
    margin-bottom: -12%;
    ${Text};
    color:${Themes.colors.grey};
    // text-align:left;
    text-align: justify;
        ${breakpoint('md')`
            font-size:${Themes.fontsize.p1}
            line-height:26px;
            margin-bottom: 4%;  
            text-align:center; 
        `}
        ${breakpoint('lg')`
            font-size:${Themes.fontsize.p1}
            line-height:26px;
        `}
        ${breakpoint('lg')`
            font-size:${Themes.fontsize.p1}
            line-height:26px;
            margin-bottom: 1%; 
        `}
`

export const Section02__Text__Bold = styled.div`
display: none;
    ${breakpoint('md')`
    display: none;
    font-size:${Themes.fontsize.p1}
    font-weight:${Themes.fontWeight.black}
    line-height:26px;
    margin-bottom: -10px;   
    `}
    ${breakpoint('lg')`
    font-size:${Themes.fontsize.p1}
    line-height:26px;
    `}
`
export const Section02__ReadmoreContainer = styled.div`
display: none;
`
export const Section02__Div = styled.div`
`

export const Section02_ImgText = styled.div`
    margin-top:9px;
    font-size:${Themes.fontsize.p2};
    color:${Themes.colors.black};
    text-align:center;
        ${breakpoint('lg')`
            margin: 9px 0 0 35px;
            font-size:${Themes.fontsize.p2}
            line-height:20px;
        `}
`
export const Section02__RightDiv = styled.div`
    display:none;
    ${breakpoint('lg')`
        display:block;
        
    `}
`

export const ButtonDiv = styled.div`
    width:64%;
    ${breakpoint('md')`
        // margin-left:-5px;
        margin: 0 auto;
    `}
    ${breakpoint('lg')`
        width:40%;
        // margin-left:0;
    `}
`
export const ButtonLink = styled(Link)`
        cursor:'pointer';
`
