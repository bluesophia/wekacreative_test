import React, { Component } from 'react';
import {Section02,
    Container,
    Section02__Title,
    Section02__Text,
    Section02__Container,
    Br
} from './style';
 /** Animation**/ 
import ScrollAnimation from 'react-animate-on-scroll';

/** Components **/
import YellowSpan from '../../../Common/YellowSpan';
import FeaturesCarousel from '../../../Common/FeaturesCarousel';



class Section2 extends Component{
    render(){
        return(
            <ScrollAnimation animateIn="fadeIn">
            <Section02>
                <Container>
                    <Section02__Container>
                        <Section02__Title>How can we help your business?</Section02__Title>
                        <YellowSpan />
                        <Section02__Text>We design software to service a variety of needs and 
                         help you work across <Br />a range of environments and platforms.</Section02__Text>
                        <FeaturesCarousel />
                    </Section02__Container>
                </Container>
            </Section02>
            </ScrollAnimation>
        )
    }
}
export default Section2;