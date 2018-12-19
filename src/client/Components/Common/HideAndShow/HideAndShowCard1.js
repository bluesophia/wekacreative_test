import React, { Component } from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Themes from '../../../Assets/Styles/Themes';

//Components
import MintSpan from '../../Common/MintSpan';
import BigTitle from '../../Common/Title/BigTitle';
import HideAndShowCardRow from '../HideAndShowCard/HideAndShowCardRow';

//Images
import IconGlobe from '../../../Assets/Images/globe.svg'
import IconEcommerce from '../../../Assets/Images/ecommerce.svg'
import IconHandShake from '../../../Assets/Images/IconHandShake.svg'
import IconPeople from '../../../Assets/Images/IconPeople.svg'

//PhotoImages
import HowWeCanHelpImg4 from '../../../Assets/Images/howwecanhelpImg4.png'
import HowWeCanHelpImg5 from '../../../Assets/Images/howwecanhelpImg5.png'
import HowWeCanHelpImg6 from '../../../Assets/Images/howwecanhelpImg6.png'
import HowWeCanHelpImg7 from '../../../Assets/Images/howwecanhelpImg7.png'



class HideAndShowCard1 extends Component {
    render(){
        return(
            <Container>
                <Section01>
                    <Section01__Title>{this.props.title}</Section01__Title>    
                    <MintSpan />
                    <Section01__Text>{this.props.text}</Section01__Text>
                    <Section01__Text2>{this.props.text2}</Section01__Text2>
                </Section01>
                <Section02>
                    <HideAndShowCardRow
                    iconName1 = {IconGlobe}
                    iconName2 = {IconEcommerce}
                    title1 = "Capturing data from the field"
                    title2 = "Communicate with your team"
                    text1 = {["Capturing data via mobile helps improve compliance, reduce errors, lower costs, and improve efficiency. With a focus on the human attached to the mobile device we combine science and design to create intuitive data capture processes.", <Br />,<Br />, <b>We can help you capture:</b>
                            ,<Br />,"Health and Safety",<Br />,"Leave requests",<Br />,"Time sheet",<Br />,"Purchase order",<Br />,"Job card",<Br />,"Scaffold inspections",<Br />,"And more..."
                            ]}
                    text2 = {["Communicating with your team in a timely manner can be the difference between a missed opportunity and the deal of a lifetime. Our mobile apps can help your team stay connected to your business and to each other.",<Br />,,<Br />,<b>We can help you communicate through:</b>
                            ,<Br />,"Push notifications",<Br />,"Direct messaging",<Br />,"System wide alerts",<Br />,"Text messaging",<Br />,"Automated emails",<Br />,"And more...",<Br />,<Br />,<Br />
                            ]}
                    img1 = {HowWeCanHelpImg4}
                    img2 = {HowWeCanHelpImg5}
                    />
                    <HideAndShowCardRow
                    iconName1 = {IconPeople}
                    iconName2 = {IconHandShake}
                    title1 = "Improve access to key information"
                    title2 = "Increase customer engagement"
                    text1 = {["Increase the effectiveness of your processes and the efficiency of your team by keeping them informed with the latest information.",<Br />,<Br />,<b>We can help you share information through:</b>
                            ,<Br />,"Knowledge base",<Br />,"Brochure",<Br />,"User manuals",<Br />,"Company policy",<Br />,"And more..."
                            ]}
                    text2 = {["Foster a sense of belonging with your customer through processes that engage them with your brand.",<Br />,<Br />,<b>We can help engage customers through:</b>
                            ,<Br />,"Customer profiles",<Br />,"Loyalty programms",<Br />,"Location based marketing",<Br />,"Social media integration",<Br />,"Automated support",<Br />,"And more...",<Br />,<Br />
                            ]}
                    img1 = {HowWeCanHelpImg7}
                    img2 = {HowWeCanHelpImg6}
                    />
                </Section02>
            </Container>
        )
    }
}

const Br = styled.br`
`
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
    ${breakpoint('lg')`
        margin-bottom: 0; 
        margin-top: -3%;
    `}
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
            margin-bottom: 2%;   
        `}
        ${breakpoint('lg')`
            font-size:${Themes.fontsize.p2}
            line-height:26px;
            margin-bottom: 3%;
            padding: 0 10%;
        `}
`
const Section01__Text2 = styled.div`
    margin-top:9px;
    margin-bottom: -10%;
    ${Text};
    color:${Themes.colors.black};
    text-align:center;
        ${breakpoint('md')`
            font-size:${Themes.fontsize.p2}
            line-height:26px;
            margin-bottom: 2%;   
        `}
        ${breakpoint('lg')`
            font-size:${Themes.fontsize.h4}
            font-weight:${Themes.fontWeight.bold}
            line-height:26px;
            margin-bottom: 5%;
        `}
`
export default HideAndShowCard1;