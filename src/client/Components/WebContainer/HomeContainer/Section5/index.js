import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import Themes from '../../../../Assets/Styles/Themes';
import YellowSpan from '../../../Common/YellowSpan';
import ScrollAnimation from 'react-animate-on-scroll';
import {Section05,
    Section05__Div,
    Section05__TitleDiv,
    Section05__Title,
    Br2,
    Section05__Text,
    Section05__Logos,
    Section05__LogosDiv01,
    Section05__Logo,
    Section05__Logo1
} from './style';
/** Logos **/
import LogosSm2 from '../../../../Assets/Images/LogosSm2.png';
import LogosLg2 from '../../../../Assets/Images/LogosLg2.svg';

class Section5 extends Component{
    render(){
        return(
            <ThemeProvider theme={Themes}>
                <Section05>
                <ScrollAnimation animateIn='fadeIn'>
                    <Section05__Div>
                        <Section05__TitleDiv>
                                <Section05__Title>Need to reduce friction in your business?</Section05__Title>
                                <YellowSpan />
                                <Section05__Text>Our software experts are well placed to integrate with existing systems. <Br2 />These are some of our current integrations.
                                </Section05__Text>
                        </Section05__TitleDiv>
                        <Section05__Logos>
                            <Section05__LogosDiv01>
                                <Section05__Logo src={LogosSm2}/>
                                <Section05__Logo1 src={LogosLg2}/>
                            </Section05__LogosDiv01>
                        </Section05__Logos>
                    </Section05__Div> 
                    </ScrollAnimation>  
                </Section05>
            </ThemeProvider>
        )
    }
}
export default Section5;