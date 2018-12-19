import React, { Component } from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Themes from '../../../Assets/Styles/Themes';

//Components
import MintSpan from '../../Common/MintSpan';
import BigTitle from '../../Common/Title/BigTitle';
import HideAndShowCard from '../HideAndShowCard/HideAndShowCard';

//Images
import IconLayers from '../../../Assets/Images/IconLayers.svg'
import IconData from '../../../Assets/Images/IconData.svg'
import IconPoint from '../../../Assets/Images/IconPoint.svg'
import IconSettings from '../../../Assets/Images/IconSettings.svg'

//PhotoImages
import HowWeCanHelpImg2 from '../../../Assets/Images/howwecanhelpImg2.png'

class HideAndShowCard3 extends Component {
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
                    iconName1 = {IconLayers}
                    iconName2 = {IconPoint}
                    iconName3 = {IconData}
                    iconName4 = {IconSettings}
                    title1 = "Bridge the gaps between your existing platforms"
                    title2 = "Provide a unified interface to your existing systems"
                    title3 = "Reduce double-handling of data"
                    title4 = "Automate your processes"
                    text1 = {"If you already have systems in place for different functions, get them talking to one another to improve efficiencies."}
                    text2 = {"Enhance your decision making by combining multiple dashboards into a single Interface, giving you a comprehensive overview of your business."}
                    text3 = {"Simplify data entry. Enter data once and have your existing systems share the information through our customised backend solutions."}
                    text4 = {["Remove the need to manually trigger your business processes by linking your systems together and automating interactions."]}
                    img = {HowWeCanHelpImg2}
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
        `}
        ${breakpoint('lg')`
            font-size:${Themes.fontsize.p2}
            line-height:26px;
            margin-bottom: 5%;
        `}
`
export default HideAndShowCard3;