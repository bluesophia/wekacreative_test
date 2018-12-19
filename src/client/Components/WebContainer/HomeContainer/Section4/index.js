import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';


import {Section04,
    Container,
    Section04__LeftDiv,
    Section04__TitleDiv,
    Section04__Title,
    Section04__Text,
    Section04__Contents,
    Section04__Image,
    Section04__Image2,
    Section04__Contents2,
} from './style'

/** Images **/
import LeveragetheFuture from '../../../../Assets/Images/LeveragetheFuture.svg';
import LeveragetheFuture2 from '../../../../Assets/Images/LeveragetheFuture2.svg';

/** Components **/
import YellowSpan from '../../../Common/YellowSpan';

class Section4 extends Component{
    render(){
        return(
            <Section04>
                <ScrollAnimation animateIn='fadeIn'>
                <Container>
                    <Section04__LeftDiv>
                        <Section04__TitleDiv>
                            <Section04__Title>Leverage the future</Section04__Title>
                            <YellowSpan />
                            <Section04__Text>Use our expertise to keep your business on the cutting
                            edge of new technology</Section04__Text>
                        </Section04__TitleDiv>
                        <Section04__Contents>
                            <Section04__Image2  src={LeveragetheFuture2}/>
                        </Section04__Contents>
                        <Section04__Contents2>
                                <Section04__Image src={LeveragetheFuture} />
                        </Section04__Contents2>
                    </Section04__LeftDiv>
                </Container>
                </ScrollAnimation>
            </Section04>
        )
    }
}

export default Section4;