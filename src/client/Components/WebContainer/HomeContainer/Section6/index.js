import React, { Component } from 'react';
import  { ThemeProvider } from 'styled-components';
import Themes from '../../../../../Assets/Styles/Themes';
import { Section06,
    Section06__TitleDiv,
    Section06__Title,
    Section06__Text,
    Br,
    Section06__Div,
    Section06__Div__Image1,
    Seciton06__Image,
    Section06__Div__Image2,
    Seciton06__Image2
} from './style';

/** Animation **/
import ScrollAnimation from 'react-animate-on-scroll';

/** components **/
import YellowSpan from '../../../Common/YellowSpan';

/** Images **/
import OurProductSiteScops from '../../../../../Assets/Images/OurProductSiteScops.svg';
import OurProductSiteScops2 from '../../../../../Assets/Images/OurProductSiteScops2.svg';
import OurProductSiteUnify from '../../../../../Assets/Images/OurProductSiteUnify.svg';
import OurProductSiteUnify2 from '../../../../../Assets/Images/OurProductSiteUnify2.svg';

class Section6 extends Component{
    render(){
        return(
            <ThemeProvider theme={Themes}>
                <Section06>
                <ScrollAnimation animateIn='fadeIn'>
                    <Section06__TitleDiv>
                        <Section06__Title>Our product suite</Section06__Title>
                        <YellowSpan />
                        <Section06__Text>Looking for something quicker to implement? <Br />
                            Talk to us about our in-house solutions.</Section06__Text>
                    </Section06__TitleDiv>
                    <Section06__Div>
                        <Section06__Div__Image1>
                            <Seciton06__Image src={OurProductSiteUnify}/>
                            <Seciton06__Image src={OurProductSiteScops}/>
                        </Section06__Div__Image1>
                        <Section06__Div__Image2>
                            <Seciton06__Image2 src={OurProductSiteUnify2}/>
                            <Seciton06__Image2 src={OurProductSiteScops2}/>
                        </Section06__Div__Image2>
                    </Section06__Div>
                    </ScrollAnimation>
                </Section06>
            </ThemeProvider>
        )
    }
}

export default Section6;