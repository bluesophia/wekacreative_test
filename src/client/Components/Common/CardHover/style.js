import styled  from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Themes from '../../../Assets/Styles/Themes';
// import posed from 'react-pose';
// import { tween } from "popmotion";

/** components **/
import BigTitle from '../../Common/Title/BigTitle';
import Text from '../../Common/Text';
import SomeofOurWorkToyota from '../../../Assets/Images/SomeofOurWorkToyota.svg';
import SomeofOurWorkToyota2 from '../../../Assets/Images/SomeofOurWorkToyota2.svg';
import SomeofOurWorkMethTesting3 from '../../../Assets/Images/SomeofOurWorkMethTesting3.svg';
import SomeofOurWorkMethTesting from '../../../Assets/Images/SomeofOurWorkMethTesting.svg';
import SomeofOurWorkRugdoctor from '../../../Assets/Images/SomeofOurWorkRugdoctor.svg';
import SomeofOurWorkRugdoctor2 from '../../../Assets/Images/SomeofOurWorkRugdoctor2.svg';
import SomeofOurWorkPassafe from '../../../Assets/Images/SomeofOurWorkPassafe.svg';
// import AnimationBox from '../../../../Function/AnimationBox';

export const Br = styled.br`
    display:none;
    ${breakpoint('md')`
    display:block;
    `}
    ${breakpoint('lg')`
    display:block;
    `}
`
export const Section03 = styled.div`
    // padding: ${Themes.paddings.mobile};
    padding: 15% 10% 10% 10%;
    ${breakpoint('md')`
    padding: ${Themes.paddings.tablet};
    margin-bottom: 10%;
    `}
    ${breakpoint('lg')`
        padding: ${Themes.paddings.desktop};
        // margin-bottom: 20%;
    `}
`
export const Section03__Container = styled.div`
`
export const Section03__Container__image = styled.div`
    margin:0 auto;
    margin-left: 0;
    margin-right: 0;
    ${breakpoint('sm')`
    `}
    ${breakpoint('md')`
        // padding-top: 8%;
        // margin-bottom: 10%;
        position: relative;
        // transform: scale(1.35);
        margin: 0.5%;
    `}
    ${breakpoint('lg')`
    display: flex;
    flex-direction: column;
    align-items: center;
        padding-top: 0;
        margin-bottom: 0;
        // transform: scale(1.8);
        margin: 0.5%;
    `}
`
export const Section03__Container__imageSm = styled.div`
position: relative;
// height: 205px;
// width: 100%;
margin-bottom: 1%;
    ${breakpoint('md')`
    // height: 205px;
    display:flex;
    // justify-content: center;
    // align-items: center;
    // margin-bottom: 1%;
    `}
    ${breakpoint('lg')`
    display:flex;
    `}
    
    
`
export const Section03__Title = styled.div`
    ${BigTitle};
    color:${Themes.colors.black};
    font-weight:${Themes.fontWeight.black};
    ${breakpoint('lg')`
    `}
`
export const   Section03__Text = styled.div`
    margin-top:9px;
    margin-bottom: 30px;
    ${Text};
    color:${Themes.colors.grey};
    text-align:left;
        ${breakpoint('md')`
            font-size:${Themes.fontsize.p1}
            line-height:26px;
            margin-bottom: 10%;
            text-align:center;
        `}
`
export const Section03__ImageDiv = styled.div`
`

export const Section03__Image1 = styled.img`
    // width: 340px;
    height: 205px;
    // background: url('${SomeofOurWorkPassafe}');
    // background-size: 100% 100%;
    width: 100%;
    transition: opacity 200ms ease-in;
    &:hover {
        opacity: 0;
    }
    
    ${breakpoint('md')`
    width: 300px;
    height: 200px;
    
    `}
    ${breakpoint('lg')`
    width: 405px;
    height: 267px;
    margin-left: 0;    
    `}
`
export const Section03__Image1__Hover__Div = styled.div`
//hover
    // position: absolute;
    // bottom: 100%;
    // left: 0;
    // right: 0;
    // background-color: #008CBA;
    // overflow: hidden;
    // width: 100%;
    // height:0;
    // transition: .5s ease;
    // &:hover {
    //     bottom: 0;
    //     height: 100%;
    // }
    
    
`
export const Section03__Image1__Hover = styled.img`
${breakpoint('xs')`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    // overflow: hidden;
    z-index: -1;
    height: 205px;
    // width: 100%;
    margin: 0 auto;
    margin-bottom: 1.1%;
    width: 307px;
    // display: none;
    `}
${breakpoint('sm')`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    // overflow: hidden;
    z-index: -1;
    height: 205px;
    // width: 100%;
    margin: 0 auto;
    margin-bottom: 1.1%;
    width: 307px;
    // display: none;
    `}
    ${breakpoint('md')`
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    z-index: -1;
    width: 300px;
    height: 200px;
    margin-bottom: 0;
  `}
  ${breakpoint('lg')`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    z-index: -1;
    // width: 405px;
    // height: 267px;
    width: 399px;
    height: 265px;
    margin-left: 3px
  `}
`


export const Section03__Image2 = styled.div`
// width: 340px;
// height: 259px;
    background: url('${SomeofOurWorkRugdoctor2}');
    background-size: 100% 100%;
    width: 100%;
    ${breakpoint('sm')`
    // width: 340px;
    // height: 256px;
    width: 100%;
        // height: 197px;
        margin-left: -1px;
    `}
    ${breakpoint('sm2')`
    // width: 340px;
    height: 256px;
        height: 197px;
        margin-left: -1px;
    `}
    ${breakpoint('md')`
        // width: 295px;
        width: 455px;
        height: 197px;
        margin-left: -1px;
    `}
    ${breakpoint('lg')`
    // transform: scale(1.5);
    // margin: 0 0 10% 16%; 
    // width:585px;
    height: 303px;
    `}
`
export const Section03__Image3 = styled.div`
// width: 340px;
// 
width: 100%;
    background: url('${SomeofOurWorkMethTesting3}');
    background-size: 100% 100%;
    ${breakpoint('sm')`
    // width: 340px;
    // height: 256px;
    width: 100%;
        // height: 197px;
        margin-left: -1px;
    `}
    ${breakpoint('sm2')`
    // width: 340px;
    height: 256px;
        height: 197px;
        margin-left: -1px;
    `}
    ${breakpoint('md')`
        // width: 295px;
        width: 455px;
        height: 197px;
        margin-left: -1px;
    `}
    ${breakpoint('lg')`
    // transform: scale(1.5);
    // margin: 0 0 10% 16%; 
    // width:585px;
    height: 303px;
    margin-left: 0;
    `}
`
export const Section03__Image4 = styled.div`
// width: 340px;
//  width: 100%;
    background: url('${SomeofOurWorkToyota2}');
    background-size: 100% 100%;
${breakpoint('sm')`
    // width: 340px;
    // height: 256px;
    width: 100%;
        // height: 197px;
        margin-left: -1px;
    `}
    ${breakpoint('sm2')`
    // width: 340px;
    height: 256px;
        height: 197px;
        margin-left: -1px;
    `}
    ${breakpoint('md')`
        width: 455px;
        height: 197px;
        margin-left: -1px;
    `}
    ${breakpoint('lg')`
    // transform: scale(1.5);
    // margin: 0 0 10% 16%; 
    // width:585px;
    height: 303px;
    // height: 314px;
    `}
`


// const Square = posed.img({
//     idle: {
//       scale: 1,
//       opacity: 0.5,
//       transition: props => tween({ ...props, duration: 2000 }),
//     },
//     hovered: {
//       scale: 1,
//       opacity: 1,
//       transition: props => tween({ ...props, duration: 1000 })
//     }
//   });

  
//   const StyledSquare = styled(Square)`
//   width: 100px;
//   height: 100px;
//   background: blue;
// `
  


// const Box = posed.div({
//     hoverable: true,
//     pressable: true,
//     init: {
//       scale: 1,
//       opacity: 1,
//       boxShadow: '0px 0px 0px rgba(0,0,0,0)',
//       backgroundImage: `url(${SomeofOurWorkRugdoctor})`
//     },
//     hover: {
//       scale: 1.2,
//       opacity: 1,
//       boxShadow: '0px 5px 10px rgba(0,0,0,0.2)',
//       backgroundImage: `url(${SomeofOurWorkRugdoctor})`
//     },
//     press: {
//       scale: 1.1,
//       boxShadow: '0px 2px 5px rgba(0,0,0,0.1)',
//       backgroundImage: `url(${SomeofOurWorkRugdoctor})`
//     }
// //   });
//   const StyledBox = styled(Box)`
//   width: 100px;
//   height: 100px;
//   background: url('${SomeofOurWorkToyota}');
//   `

export const AnimationBox1 = styled.div`
    height:100%;
    width: 100%;
    background: url('${SomeofOurWorkPassafe}');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    transform-origin: top;
`
export const AnimationBox2 = styled.div`
    height:100%;
    width: 100%;
    // background: #000;
    background: url('${SomeofOurWorkRugdoctor}');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    // transform: scaleX(${(props) => props.scaleX});
    transform-origin: top;
`
export const AnimationBox3 = styled.div`
    height:100%;
    width: 100%;
    // background: #000;
    background: url('${SomeofOurWorkMethTesting}');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    // transform: scaleX(${(props) => props.scaleX});
    transform-origin: top;
`
export const AnimationBox4 = styled.div`
    height:100%;
    width: 100%;
    // background: #000;
    background: url('${SomeofOurWorkToyota}');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    // transform: scaleX(${(props) => props.scaleX});
    transform-origin: top;
`