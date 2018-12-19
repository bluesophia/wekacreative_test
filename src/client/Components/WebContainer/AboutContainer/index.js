import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import Themes from '../../../Assets/Styles/Themes';
import { Section01,
  Br,
  Br2,
  Section01__Container,
  Section01__TitleDiv,
  Section01__Title,
  Section01__Text,
  Section01__Image,
  Section01__Image2,
  Section01__Image3,
  Section01__Image4,
  MainImage,
  MainImage2,
  Section02,
  Section02__Title,
  Section02__Text,
  Section02__Container
} from './style';
/** Images **/
import mainImage from '../../../Assets/Images/AboutSection01Image.svg';
import mainImage2 from '../../../Assets/Images/AboutSection01Image2.svg';
import YellowSpan from '../../Common/YellowSpan';
import Ourvision from '../../../Assets/Images/ourvision.svg';
import Ourvision2 from '../../../Assets/Images/ourvision2.svg';
/** Animation**/ 
import ScrollAnimation from 'react-animate-on-scroll';

class AboutContainer extends Component {
  render(){
    return(
      <ThemeProvider theme={Themes}>   
      <div>
      <ScrollAnimation animateIn='fadeIn'>
            <Section01>
            {/* <Section01__ImageTop><MainImageBackground src={mainImage2_1}/></Section01__ImageTop> */}
            <ScrollAnimation animateIn='fadeIn'>   
              <Section01__Container>     
                <Section01__TitleDiv>
                    <Section01__Title>About Us</Section01__Title>
                    <Section01__Text>
                      At Weka Creative we believe good design puts people in the centre of processes. empowering them to do
                      better and achieve more. Through applying design competency, our software solutions aim to support enterprises by:<br/><br/>
                      - Demystifying process complexity<br/>
                      - Creating the right tools, and<br/>
                      - Delivering value for their stakeholders
                    </Section01__Text>
                </Section01__TitleDiv>
                <Section01__Image><MainImage src={mainImage}/></Section01__Image>
                <Section01__Image2><MainImage2 src={mainImage2}/></Section01__Image2> 
              </Section01__Container>
              </ScrollAnimation>
            </Section01>
            <ScrollAnimation animateIn='fadeIn'>
            <Section02>
            <Section02__Container>
                        <Section02__Title>Our Vision</Section02__Title>
                        <YellowSpan />
                        <Section02__Text>To empower enterprises through <Br2 />people-centered software solutions.</Section02__Text>
            </Section02__Container>
            <Section02__Container>
                        <Section02__Title>Our Core Values</Section02__Title>
                        <YellowSpan />
                        <Section01__Image3 src={Ourvision}/>
                        <Section01__Image4 src={Ourvision2}/>
            </Section02__Container>
            </Section02>
            </ScrollAnimation>
            {/* <ScrollAnimation animateIn='fadeIn'>
            <Section03>
              <Container>
                  <Section__Title>Core <Br />Value</Section__Title>
                  <Section__Text><b>Human First</b><br />
                  WEKA CREATIVE is always looking for people who have a talent in every fields. This is priority of what we are considering. We know that people can change the society with brilliant ideas and what they are believing.
                  <br /><br />
                  ​<b>​Be different</b><br />
                  WEKA CREATIVE believe that ‘Be different’ mindset bring creativity, outstanding performance and customer satisfaction. We are putting effort to get out of box and think other ways.
                  </Section__Text>
              </Container>
            </Section03>
            </ScrollAnimation> */}
            </ScrollAnimation>
      </div>
    </ThemeProvider>
    )
  }
}


export default AboutContainer;