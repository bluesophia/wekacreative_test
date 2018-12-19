import React, { Component } from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

//Components
import HideAndShowCard1 from '../HideAndShow/HideAndShowCard1';
import HideAndShowCard2 from '../HideAndShow/HideAndShowCard2';
import HideAndShowCard3 from '../HideAndShow/HideAndShowCard3';
import HideAndShowCard4 from '../HideAndShow/HideAndShowCard4';

/** Animation**/ 
import ScrollAnimation from 'react-animate-on-scroll';

class HideAndShowLayout extends Component {
    render(){
        // console.log('layout props ',this.props.active);
        return(
            <ScrollAnimation animateIn='fadeIn'>
            <Container id="feature_wrap">
                <Section01 >
                { this.props.active === 'FeaturesCard1' ? (<HideAndShowCard1 
                    title={["Transform your business with",<Br2 />," the power of mobile"]}
                    text={["Whether you are looking to replace paper-based processes,",<Br2 />," communicate with your team, interact with your customers, or ",<Br2 />,"revolutionise your business, we can help."]}
                    text2={<b>Our mobile solutions are multi-platform, responsive, and function<Br2 />in a wide range of environments.</b>}
                />) : null}
                { this.props.active === 'FeaturesCard2' ? (<HideAndShowCard2 
                    title={["Harness the latest in web tech ", <Br2 />, "to showcase your business"]} 
                    text={["The first port of call for a customer wanting to engage with ", <Br2 />, "a business is online.",<Br />, "Make sure your web site captures the hearts and ", <Br2 />, "minds of those looking."]} 
                />) : null}
                { this.props.active === 'FeaturesCard3' ? (<HideAndShowCard3 
                    title={"Embrace the power of collaboration"} 
                    text={["Multiple systems for multiple purposes? No problem.", <Br2 />,<Br />,"Increase the efficiency of your existing systems by helping them communicate", <Br2 />," and share information."]} 
                />) : null}
                { this.props.active === 'FeaturesCard4' ? (<HideAndShowCard4 
                    title={"Tailor made for you"} 
                    text={["Sometimes the best solution is a bespoke solution.", <Br2 />,<Br />,"We can dive into the inner workings of your business to design and build software that fits you like a glove."]} 
                />) : null}
                </Section01>
            </Container>
            </ScrollAnimation>
        )
    }
}


const Br = styled.br`
display:none;
${breakpoint('md')`
display:none;
`}
${breakpoint('lg')`
display:block;
`}
`
const Br2 = styled.br`
display:none;
${breakpoint('md')`
display:block;
`}
${breakpoint('lg')`
display:none;
`}
`
const Container = styled.div`
    display: none;
    ${breakpoint('md')`
        display: block; 
        background-image: linear-gradient(#F4FAF6, #FFF);
        margin-top:10%;
    `}
    ${breakpoint('lg')`
        margin-top:0;
    `}
`
const Section01 = styled.div`
    margin:0 auto;
`    

export default HideAndShowLayout;