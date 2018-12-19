import React, { Component } from 'react';
import {Section05__Card,
    Section05__CardCircle,
    Section05__TitleImage,
    Section05__div,
    Section05__ImgDiv,
    Section05__Icon,
    Section05__CardText,
    Section05__TextDiv,
    Section05__YellowText,
    Section05__TextDiv2
} from './style';


class FeaturesCard extends Component {
    constructor() {
        super();
        // this.state= { 
        //   showing : false
        // }
        
      }
        render () {
        
            return(
            <Section05__Card className="cardDisplay" id={this.props.id} >
                <Section05__CardCircle>
                    <Section05__TitleImage src={this.props.image} alt=''/>
                </Section05__CardCircle>
                <Section05__TextDiv2>
                <Section05__div>
                    <Section05__ImgDiv>
                    <Section05__Icon src={this.props.iconName1}/>
                    <Section05__CardText>{this.props.text1}</Section05__CardText>
                    </Section05__ImgDiv>
                    <Section05__ImgDiv>
                    <Section05__Icon src={this.props.iconName2}/>
                    <Section05__CardText>{this.props.text2}</Section05__CardText>
                    </Section05__ImgDiv>
                    <Section05__ImgDiv>
                    <Section05__Icon src={this.props.iconName3}/>
                    <Section05__CardText>{this.props.text3}</Section05__CardText>
                    </Section05__ImgDiv>
                    <Section05__ImgDiv>
                    <Section05__Icon src={this.props.iconName4}/>
                    <Section05__CardText>{this.props.text4}</Section05__CardText>
                    </Section05__ImgDiv>
                </Section05__div>
                <Section05__TextDiv>
                <Section05__YellowText onClick={()=>{this.props.onPress(this)}} id="yellowText" >
                    Read More</Section05__YellowText>
                </Section05__TextDiv>
                </Section05__TextDiv2>
            </Section05__Card>
        )}
    };

export default FeaturesCard;