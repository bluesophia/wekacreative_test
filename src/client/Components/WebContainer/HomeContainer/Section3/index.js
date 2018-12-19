import React, { Component } from 'react';
import { Section03,
    Section03__Container,
    Br,
    Br2,
    Br3,
    Section03__Title,
    Section03__Text,
    Section03__Container__image,
    Section03__Container__imageSm
} from './style'


/** components **/
import YellowSpan from '../../../Common/YellowSpan';
import CardHover from '../../../Common/CardHover';  

 /** Animation**/ 
 import ScrollAnimation from 'react-animate-on-scroll';

/** Image **/
import SomeofOurWorkPassafe from '../../../../Assets/Images/SomeofOurWorkPassafe.svg';
import SomeofOurWorkPassafe2 from '../../../../Assets/Images/SomeofOurWorkPassafe2.png';
import SomeofOurWorkRugdoctor from '../../../../Assets/Images/SomeofOurWorkRugdoctor.svg';
import SomeofOurWorkRugdoctor2 from '../../../../Assets/Images/SomeofOurWorkRugdoctor2-2.png';
import SomeofOurWorkToyota from '../../../../Assets/Images/SomeofOurWorkToyota.svg';
import SomeofOurWorkToyota2 from '../../../../Assets/Images/SomeofOurWorkToyota2.png';
import SomeofOurWorkMethTesting from '../../../../Assets/Images/SomeofOurWorkMethTesting.svg';
import SomeofOurWorkMethTesting2 from '../../../../Assets/Images/howwecanhelpImg4.png';



class Section3 extends Component {
    render(){
        return(
            <Section03>
                <ScrollAnimation animateIn='fadeIn'>
                <Section03__Container>
                    <Section03__Title>What have <Br3 />we been up to?</Section03__Title>
                    <YellowSpan />
                    <Section03__Text>Big or small it doesn’t matter. <Br />The companies we support have fantastic people and ideas <Br2 />to guide them.
                    </Section03__Text>
                </Section03__Container>
                <Section03__Container__image>
                <Section03__Container__imageSm>  
                    <CardHover 
                        image={SomeofOurWorkPassafe}
                        hoverImage={SomeofOurWorkPassafe2}
                    />
                    <CardHover 
                        image={SomeofOurWorkRugdoctor}
                        hoverImage={SomeofOurWorkRugdoctor2}
                    />
                    </Section03__Container__imageSm>  
                    <Section03__Container__imageSm>      
                    <CardHover 
                        image={SomeofOurWorkMethTesting}
                        hoverImage={SomeofOurWorkMethTesting2}
                    />
                    <CardHover 
                        image={SomeofOurWorkToyota}
                        hoverImage={SomeofOurWorkToyota2}
                    />
                </Section03__Container__imageSm>  
                </Section03__Container__image>
                </ScrollAnimation>
            </Section03>
           
        )
    }
}

export default Section3;