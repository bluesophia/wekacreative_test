import React, { Component } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import FeaturesCard from '../FeaturesCard';
// import ArrowLeft from '../Arrows/arrowLeft';
// import ArrowRight from '../Arrows/arrowRight';
import ArrowRightIcon from '../../../Assets/Images/arrowRight.svg';
import ArrowLeftIcon from '../../../Assets/Images/arrowLeft.svg';

import Slider from "react-slick";

//images
// import MobileApps2 from '../../../../Assets/Images/MobileApps2.svg'
import MobileApps3 from '../../../Assets/Images/MobileApps3.svg'
// import MobileApps4 from '../../../../Assets/Images/MobileApps4.svg'
import Websites from '../../../Assets/Images/Websites.svg'
import Integrations2 from '../../../Assets/Images/Integrations2.svg'
import FullSolutions from '../../../Assets/Images/FullSolutions.svg'

//icons
import IconBrain from '../../../Assets/Images/IconBrain.svg'
import IconCommunication from '../../../Assets/Images/IconCommunication.svg'
import IconData from '../../../Assets/Images/IconData.svg'
import IconEcommerce from '../../../Assets/Images/IconEcommerce.svg'
import IconHandShake from '../../../Assets/Images/IconHandShake.svg'
import IconInformation from '../../../Assets/Images/IconInformation.svg'
import IconPeople from '../../../Assets/Images/IconPeople.svg'
import IconPoint from '../../../Assets/Images/IconPoint.svg'
import IconSettings from '../../../Assets/Images/IconSettings.svg'
import IconWeb from '../../../Assets/Images/IconWeb.svg'
import IconGlobe from '../../../Assets/Images/globe.svg'
import IconUserdesign from '../../../Assets/Images/IconUserdesign.svg'

//components
import HideAndShowLayout from '../../Common/HideAndShow/HideAndShowLayout';


function ArrowRight(props) {
  const { onClick, className } = props;
  return (
    <ArrowStyle
      src={ArrowRightIcon}
      onClick={onClick}
      className={className}
      right
    />
  );
}

function ArrowLeft(props) {
  const { onClick, className } = props;
  return (
    <ArrowStyle
      src={ArrowLeftIcon}
      onClick={onClick}
      className={className}
      left
    />
  );
}

const ArrowStyle = styled.img`
  width:10px;
  height:20px;
  margin:10px;
  left: ${props => props.left ? '-28px' : 'inherit'};  
  right: ${props => props.right ? '-28px' : 'inherit'};
  ${breakpoint('sm')`
  width:14px;
  height:28px;
  left: ${props => props.left ? '-10px' : 'inherit'};  
  right: ${props => props.right ? '-10px' : 'inherit'};
  z-index: 1;
  `}
  ${breakpoint('md')`
  width:14px;
  height:28px;
  left: ${props => props.left ? '-50px' : 'inherit'};    
  right: ${props => props.right ? '-50px' : 'inherit'};
  z-index: 1;
  `}
  ${breakpoint('lg')`
  width:14px;
  height:28px;
  left: ${props => props.left ? '-70px' : 'inherit'};  
  right: ${props => props.right ? '-70px' : 'inherit'};
	`}
`

class FeaturesCarousel extends Component {
  constructor() {
    super();
    this.FeaturesCard1 = React.createRef()
    this.FeaturesCard2 = React.createRef()
    this.FeaturesCard3 = React.createRef()
    this.FeaturesCard4 = React.createRef()
    // let card = this.refs.FeaturesCard1;
    this.state = { 
      showing : false,
      showing2 : false,
      showing3 : false,
      showing4 : false,
      object2 : this.refs.FeaturesCard2,
      // showing3 : false,
      // showing4 : false,
      id1: "FeaturesCard1",
      FeaturesCarousel:'',
      features: [
        {
          texts: ["Capturing data from the field",
                  "Communicating with your mobile workforce"],
          title: ["Harness the latest in web tech ", "to tell showcase your business"],


        }
      ]
    }
  }
  //Readmore onClick
  _onItemClick = (e) => {
    // let wrapper = document.getElementById('feature_wrapper');
    
    // wrapper.style.transitionDelay = "2s";
    // console.log('style',document.getElementById('feature_wrapper').style)
    this.setState({
      showing: !this.state.showing , 
      FeaturesCarousel: e.props.id
    });
    // wrapper.style.height = '100%'
    // console.log('onItemClick state',this.state );
    // if(!this.state.showing) {
    //   wrapper.style.height = '0';
    // }
  }
 
  // _onItemClick2 = () => {
  //   this.setState({showing2: !this.state.showing2});
  // }
  // _onItemClick3 = () => {
  //   this.setState({showing3: !this.state.showing3});
  // }
  // _onItemClick4 = () => {
  //   this.setState({showing4: !this.state.showing4});
  // }
render () {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows:true,
    nextArrow: <ArrowRight />,
    prevArrow: <ArrowLeft />,
    responsive: [
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots:false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots:false
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots:false
        }
      },
      {
        breakpoint: 488,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots:false
        }
      }
    ]
  };
      return (
        <SliderDiv>
        <Slider {...settings}>
            <FeaturesCard 
            ref={this.FeaturesCard1}
            id="FeaturesCard1"
            onPress={this._onItemClick}
            active={this.state.FeaturesCarousel === 'FeaturesCard1' ? true : false}
            image = {MobileApps3}
            iconName1 = {IconData}
            iconName2 = {IconCommunication}
            iconName3 = {IconInformation}
            iconName4 = {IconHandShake}
            text1 = "Capturing data from the field"
            text2 = "Communicate with your team"
            text3 = "Improve access to key information"
            text4 = "Increase customer engagement"
            />
            <FeaturesCard 
            id="FeaturesCard2"
            ref={this.FeaturesCard2}
            value={this.state.value2}
            onPress={this._onItemClick}
            active={this.state.FeaturesCarousel === 'FeaturesCard2' ? true : false}
            image = {Websites}
            iconName1 = {IconUserdesign}
            iconName2 = {IconEcommerce}
            iconName3 = {IconPeople}
            text1 = "Highlight your brand story"
            text2 = "Enhance your e-commerce platform"
            text3 = "Inform, connect, and engage with your customer"
            />
            <FeaturesCard 
            id="FeaturesCard3"
            ref={this.FeaturesCard3}
            onPress={this._onItemClick}
            active={this.state.FeaturesCarousel === 'FeaturesCard3' ? true : false}
            image = {Integrations2}
            iconName1 = {IconPeople}
            iconName2 = {IconPoint}
            iconName3 = {IconData}
            iconName4 = {IconSettings}
            text1 = "Bridge the gaps between your existing platforms"
            text2 = "Provide a unified interface to your exsiting systems"
            text3 = "Reduce double-handling of data"
            text4 = "Automate your processes"
            />
            <FeaturesCard 
            id="FeaturesCard4"
            ref={this.FeaturesCard4}
            value={this.state.value}
            onPress={this._onItemClick}
            active={this.state.FeaturesCarousel === 'FeaturesCard4' ? true : false}
            image = {FullSolutions}
            iconName1 = {IconWeb}
            iconName2 = {IconBrain}
            iconName3 = {IconGlobe}
            text1 = "Customised specifically for your business needs"
            text2 = "Designed with your stakeholders in mind"
            text3 = "Connect the dots between Mobile, web, and exsiting platforms"
            />
      </Slider>
            { this.state.showing &&  
               <div id="feature_wrapper" style={feature_wrapper}>
            <HideAndShowLayout active={this.state.FeaturesCarousel} />
            </div>
            }
          
          </SliderDiv>
      );
    }
  }
  // const Slider = styled.div`
  // width: 300px;
  // margin-left: 11%;
  // `

  

  const HideAndShowLayout_Wrapper = styled.div`
    position: relative;
  `

  var feature_wrapper = {
    // transition: 'all 5s',
    background: "#fff",
    transition: "width 2s",
    zIndex: "0",
    position: "relative"
  }
  const SliderDiv = styled.div`
  margin-bottom: 10%;
  ${breakpoint('lg')`
    // margin-top: 10%;
    margin-bottom: 0
    margin: 0 auto;
    max-width: 980px;
  `}
  `
    
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
export default FeaturesCarousel;