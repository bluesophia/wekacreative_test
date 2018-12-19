import React, { Component } from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Themes from '../../../Assets/Styles/Themes';

//Components
import MintSpan from '../../Common/MintSpan';
import BigTitle from '../../Common/Title/BigTitle';
import HideAndShowCard from '../HideAndShowCard/HideAndShowCard';

//Images
import IconGlobe from '../../../Assets/Images/globe.svg'
import IconEcommerce from '../../../Assets/Images/ecommerce.svg'
import IconHandShake from '../../../Assets/Images/IconHandShake.svg'

//PhotoImages
import HowWeCanHelpImg1 from '../../../Assets/Images/howwecanhelpImg1.png'

class HideAndShowCard2 extends Component {
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
                    iconName1 = {IconGlobe}
                    iconName2 = {IconEcommerce}
                    iconName3 = {IconHandShake}
                    // iconName4 = {IconPeople}
                    title1 = "Highlight your brand story"
                    title2 = "Enhance your e-commerce platform"
                    title3 = "Inform, connect, and engage with your customer"
                    title4 = "We can help engage customers by:"
                    text1 = {"Share the story behind your business and your brand. Highlight your unique selling proposition and attract customers."}
                    text2 = {"If online selling is the game connect with us to help enhance your e-commerce prowess."}
                    text3 = {"Communicate with your customer, keep them interested, and share with them the latest developments in your business."}
                    text4 = {["- Enhance the user journey through your website",<Br />,"- Integration with digital marketing platforms", <Br />, "- Build on existing e-commerce platforms", <Br />, "- Customer data capture Site analytics", <Br />, "And more..."]}
                    img = {HowWeCanHelpImg1}
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
export default HideAndShowCard2;