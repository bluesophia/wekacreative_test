import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Themes from '../../../../../Assets/Styles/Themes';

/** components **/
import BigTitle from '../../../Common/Title/BigTitle';
import Text from '../../../Common/Text';

export const Br = styled.br`
    display:none;
    ${breakpoint('md')`
    display:block;
    `}
    ${breakpoint('lg')`
    display:block;
    `}
`
export const Section06 = styled.div`
    padding: 0 10% 0 10%;
    ${breakpoint('md')`
        padding: ${Themes.paddings.tablet};
        display: flex;
        justify-content: center;
    `}
    ${breakpoint('lg')`
        padding: 10% 10% 3% 10%;
        display: flex;
        justify-content: center;
    `}
    ${breakpoint('xl')`
        padding: 5% 10% 3% 10%;
        display: flex;
        justify-content: center;
    `}
`
export const Section06__TitleDiv = styled.div`
    margin:0 auto;
    padding: 20% 0; 
    padding-bottom: 0;
    ${breakpoint('md')`
        padding: 0;
    `}
    ${breakpoint('lg')`
    `}
`
export const Section06__Title = styled.div`
    ${BigTitle};
    color:${Themes.colors.black};
    font-weight:${Themes.fontWeight.black};
    ${breakpoint('lg')`
    `}
`
export const Section06__Text = styled.div`
    margin-top:9px;
    margin-bottom: 10%;
    ${Text};
    color:${Themes.colors.grey};
    text-align:left;
        ${breakpoint('md')`
            font-size:${Themes.fontsize.p1}
            line-height:26px;
            text-align:center;
        `}
`

export const Section06__Div = styled.div`
    transform: scale(0.9);
    max-width:1366px;
`
export const Section06__Div__Image1 = styled.div`
    padding: 0 15%;
    max-width:1366px;
    ${breakpoint('md')`
            display:none;
        `}
    ${breakpoint('lg')`
        display:none;
    `}
`
export const Section06__Div__Image2 = styled.div`
    display:none;
    ${breakpoint('md')`
        display:flex;
        transform: scale(0.8);
        justify-content: center;
    `}
    ${breakpoint('lg')`
        display:flex;
        transform: scale(1);
    `}
`

export const Seciton06__Image = styled.img`
    margin-bottom: 25%;
`
export const Seciton06__Image2 = styled.img`
    padding: 10%;
    ${breakpoint('md')`
    padding: 10%;
    padding-top: 0;
    `}
    ${breakpoint('lg')`
    padding: 10%;
    `}
`
export const CarouselDiv = styled.div`
    margin:0 auto;
    ${breakpoint('lg')`
        width:1000px;
    `}
`