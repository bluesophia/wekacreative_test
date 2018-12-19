import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Themes from '../../../../Assets/Styles/Themes';
/** components **/
import BigTitle from '../../../Common/Title/BigTitle';
import Text from '../../../Common/Text';
/** Images**/
import HomeSection05BgMd from '../../../../Assets/Images/HomeSection05BgMd.png';

/**** Section 05 ****/
export const Br = styled.br`
${breakpoint('md')`
    display: none;
`}
`
export const Br2 = styled.br`
    display:none;
    ${breakpoint('md')`
    display:block;
    `}
    ${breakpoint('lg')`
    display:block;
    `}
`
export const Section05 = styled.div`
    padding: ${Themes.paddings.mobile};
    // padding-bottom: 50px;
    ${breakpoint('md')`
        background:url(${HomeSection05BgMd}) no-repeat;
        background-size: 100%;
        // padding:0 10%;
        padding: '20% 10% 0 10%';
        padding-bottom: 90px;
    `}
    ${breakpoint('lg')`
        background-size: 100%;
        display: flex;
        justify-content: center;
        // padding: ${Themes.paddings.desktop};
        padding: 10% 10% 10% 10%;
    `}
    ${breakpoint('xl')`
        background-size: 100%;
        // padding: ${Themes.paddings.desktop};
        padding: 5% 10% 10% 10%;
    `}
`
export const Section05__Div = styled.div`
${breakpoint('md')`
    max-width: 768px;
    `}
${breakpoint('lg')`
    max-width: 1024px;
    `}
${breakpoint('xl')`
    max-width: 1366px;
    `}
`
export const Section05__TitleDiv = styled.div`
    margin:0 auto;
    ${breakpoint('lg')`
    `}
`
export const Section05__Title = styled.div`
    ${BigTitle};
    color:${Themes.colors.black};
    font-weight:${Themes.fontWeight.black};
    ${breakpoint('lg')`
        margin-top: 90px;
    `}
`
export const Section05__Text = styled.div`
    margin-top:9px;
    ${Text};
    color:${Themes.colors.grey};
    text-align:left;
        ${breakpoint('md')`
            margin-bottom: 10%;
            font-size:${Themes.fontsize.p1}
            line-height:26px;
            text-align:center;
        `}
        ${breakpoint('lg')`
            margin-bottom: 4%;
        `}
        ${breakpoint('xl')`
            margin-bottom: 5%;
        `}
`
export const Section05__Logos = styled.div`
    display:flex;
    justify-content:space-around;
    // padding-top:50px;
    margin:0 auto;
    margin-bottom: 10%;
    ${breakpoint('md')`
        margin-bottom: 0;
        flex-direction:column;
        padding: 0 10% 0 10%;
    `}
    ${breakpoint('lg')`
        flex-direction:column;
        padding: 10% 10% 0 10%;
    `}
`
export const Section05__LogosDiv01 = styled.div`
    display:flex;
    flex-direction:column;
    // margin-bottom: 10%;
        ${breakpoint('lg')`
            flex-direction:row;
            align-items:center;
        `}
`
export const Section05__LogosDiv02 = styled.div`
    display:flex;
    flex-direction:column;
        ${breakpoint('lg')`
            flex-direction:row;
            align-items:flex-start;
        `}
`
export const Section05__Logo = styled.img`
    // width:100%;
    // height:auto;
    // margin:0 auto;
    // margin-top: 120px; 
    // transform: scale(2);
    margin-top: 10%;
    // transform: scale(2.5);
    // margin-bottom: 45%;
    height: 400px;
    ${breakpoint('sm')`
        // width:146px;
    `}
    ${breakpoint('md')`
        display: none;
    `}
    ${breakpoint('lg')`
        display: none;
    `}
`
export const Section05__Logo1 = styled.img`
    display: none;
    ${breakpoint('md')`
    width:100%;
    height:auto;
    margin:0 auto;
    transform: scale(1);
    z-index: -1;
    display: block;
    `}
    ${breakpoint('lg')`
    transform: scale(1.5);
    margin-top: 0;
    `}
    ${breakpoint('xl')`
    transform: scale(1.5);
    margin-top: 10%;
    `}
`