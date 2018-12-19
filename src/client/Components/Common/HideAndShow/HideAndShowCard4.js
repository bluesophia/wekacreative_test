import React, { Component } from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Themes from '../../../Assets/Styles/Themes';

//Components
import MintSpan from '../MintSpan';
import BigTitle from '../Title/BigTitle';
import HideAndShowCard from '../HideAndShowCard/HideAndShowCard';

//Images
import IconCustomize from '../../../Assets/Images/IconCustomize.svg'
import IconUserdesign from '../../../Assets/Images/IconUserdesign.svg'
import IconConnect from '../../../Assets/Images/IconConnect.svg'

//PhotoImages
import HowWeCanHelpImg3 from '../../../Assets/Images/howwecanhelpImg3.png'

class HideAndShowCard4 extends Component {
    render(){
        return(
            <Container>
                <Section01>
                    <Section01__Title>{this.props.title}</Section01__Title>    
                    <MintSpan />
                    <Section01__Text>{this.props.text}</Section01__Text>
                </Section01>
                <Section02>
                    <HideAndShowCard 
                    iconName1 = {IconCustomize}
                    iconName2 = {IconUserdesign}
                    iconName3 = {IconConnect}
                    title1 = "Customised specifically for your business needs"
                    title2 = "Designed with your stakeholders in mind"
                    title3 = "Connect the dots between mobile, web, and existing platforms"
                    text1 = {"Your processes drive our development. We will engage with your team to understand your business and map out the best solution."}
                    text2 = {"Deliver an experience that matters. User-centric design puts your stakeholders at the forefront of our development philosophy."}
                    text3 = {["In an increasingly connected world, it is important to have systems that function in multiple environments. Provide a seamless user experience across all business touch points."]}
                    img = {HowWeCanHelpImg3}
                    />
                </Section02>
            </Container>
        )
    }
}

const Container = styled.div`
    display: none;
    ${breakpoint('md')`
        display: block; 
        padding: 10% 0 0 0;
        // background-image: linear-gradient(#F4FAF6, #FFF);
        margin-top:10%;
    `}
    ${breakpoint('lg')`
        margin-top:0;
    `}
`
const Section01 = styled.div`
    margin:0 auto;
`    
const Section02 = styled.div`
    margin:0 auto;
`    
const Section01__Title = styled.div`
    ${BigTitle};
    color:${Themes.colors.black};
    font-weight:${Themes.fontWeight.black};
    ${breakpoint('md')`
    font-size:${Themes.fontsize.h3};  
    line-height:1.2;  
    `}
`
const Section01__Text = styled.div`
    margin-top:9px;
    margin-bottom: -10%;
    ${Text};
    color:${Themes.colors.grey};
    text-align:center;
        ${breakpoint('md')`
            font-size:${Themes.fontsize.p2}
            line-height:26px;
            margin-bottom: 7%; 
            padding: 0 5%  
        `}
        ${breakpoint('lg')`
            font-size:${Themes.fontsize.p2}
            line-height:26px;
            margin-bottom: 5%;
        `}
`
export default HideAndShowCard4;