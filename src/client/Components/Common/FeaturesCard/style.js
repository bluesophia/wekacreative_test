import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Themes from '../../../Assets/Styles/Themes';

export const Section05__TextDiv2 = styled.div`
${breakpoint('md')`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 300px;
`}
${breakpoint('lg')`
    height: 300px;
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
display:none;
${breakpoint('md')`
display:block;
`}
${breakpoint('lg')`
display:none;
`}
`
export const Section05__div = styled.div`
    // height: auto;
    display: flex;
    align-items: space-around;
    flex-direction: column;
    padding: 10%;
    ${breakpoint('md')`
        padding: 10%;
    `}
    ${breakpoint('lg')`
        padding: 10%;
    `}
`
export const Section05__ImgDiv = styled.div`
    display: flex;
    align-items: center;
`
export const Section05__TextDiv = styled.div`
    display:none;
    ${breakpoint('md')`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10%;
    `}
`
export const Section05__Icon = styled.img`
    width: 22px;
    margin-right: 10px;
    ${breakpoint('lg')`
    display: flex;
    align-items: center;
    justify-content: center;
    // margin-top: 10%;
    margin-right: 0;
    `}
`
export const Section05__Card = styled.div`
    border : 1px solid #ccc;
    // background-color: ${Themes.colors.w_lightOrange}
    width:264px;
    // height:500px;
    height: auto;
    margin: 0 auto;
    background-color:$;
    // padding: 40px 15px 30px 15px;
    box-sizing: border-box;
    margin-top: 20%;
    ${breakpoint('md')`
        width:  px;
        // height:412px;
        height:420px;
    // padding: 40px 15px 30px 15px;
    box-sizing: border-box;
    margin-top: 20%;
    max-width: 768px;
    `}
    ${breakpoint('lg')`
        width: 190px;
        // height: auto;
        height:400px;
    // padding: 40px 10px 30px 10px;
    padding: 0;
    box-sizing: border-box;
    margin-bottom: 10%;
    `}
    ${breakpoint('lg2')`
        width: 230px;
        // height: auto;
        height:400px;
    // padding: 40px 10px 30px 10px;
    padding: 0;
    box-sizing: border-box;
    // margin-bottom: 30%;
    `}
    ${breakpoint('xl')`
        // width: 190px;
        // width: 266px;
        height: 430px;
        // height:412px;
    // padding: 40px 10px 30px 10px;
    padding: 0;
    box-sizing: border-box;
    // margin-bottom: 30%;
    `}
    // ${breakpoint('xxl')`
    //     // width: 190px;
    //     width: 350px;
    //     height: 430px;
    //     // height:412px;
    // // padding: 40px 10px 30px 10px;
    // padding: 0;
    // box-sizing: border-box;
    // // margin-bottom: 30%;
    // `}
`
export const Section05__TitleImage__Div = styled.div`
    background: ${Themes.colors.w_orange};
    `
export const Section05__CardCircle = styled.div`
`
export const Section05__CardTitle = styled.p`
    color:${Themes.colors.blue};
    font-size:${Themes.fontsize.p1};
    font-weight:${Themes.fontWeight.black};
    text-align:center;
    margin:20px 0 10px 0;
    line-height:23px;
    padding:0;
`
export const Section05__TitleImage = styled.img`
        // width: 100%;
        // height: auto;
        margin-top: -1px;
`
export const Section05__TitleImage3 = styled.img`
        display: hidden;
        ${breakpoint('md')`
        display: block;
        `}
`
export const Section05__TitleImage4 = styled.img`
        display: hidden;
        ${breakpoint('lg')`
        display: block;
        `}
`
export const Section05__CardText = styled.p`
    color:${Themes.colors.grey};
    font-size:12px;
    // text-align:center;
    line-height:16px;
    padding:10px;        
    margin-top: 0;
    margin-bottom: 0;
`
export const Section05__YellowText = styled.p`
    display: none;
    color: ${Themes.colors.orange};
    display: block;
    cursor: pointer;
    font-size: 16px;    
    text-align: center;
    margin-top: -20px;
    ${breakpoint('md')`
    color: ${Themes.colors.orange};
    cursor: pointer;
    font-size: 16px;    
    text-align: center;
    margin-top: -10px;
    `}
    ${breakpoint('lg')`
    color: ${Themes.colors.orange};
    cursor: pointer;
    font-size: 16px;    
    text-align: center;
    // margin-top: -20px;
    `}
`