import React, { Component } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import PropTypes from 'prop-types';
import Themes from '../../../Assets/Styles/Themes';

class HideAndShowCard extends Component {
    render(){
        return(
            <HideAndShowCard__Card>
                <HideAndShowCard__div>
                    <HideAndShowCard__ImgDiv>
                        <HideAndShowCard__Icon src={this.props.iconName1}/>
                        <HideAndShowCard__TextDiv>
                        <HideAndShowCard__CardTitle>{this.props.title1}</HideAndShowCard__CardTitle>
                        <HideAndShowCard__CardText>{this.props.text1}</HideAndShowCard__CardText>
                        </HideAndShowCard__TextDiv>
                    </HideAndShowCard__ImgDiv>
                    <HideAndShowCard__ImgDiv>
                        <HideAndShowCard__Icon src={this.props.iconName2}/>
                        <HideAndShowCard__TextDiv>
                        <HideAndShowCard__CardTitle>{this.props.title2}</HideAndShowCard__CardTitle>
                        <HideAndShowCard__CardText>{this.props.text2}</HideAndShowCard__CardText>
                        </HideAndShowCard__TextDiv>
                    </HideAndShowCard__ImgDiv>
                    <HideAndShowCard__ImgDiv>
                        <HideAndShowCard__Icon src={this.props.iconName3}/>
                        <HideAndShowCard__TextDiv>
                        <HideAndShowCard__CardTitle>{this.props.title3}</HideAndShowCard__CardTitle>
                        <HideAndShowCard__CardText>{this.props.text3}</HideAndShowCard__CardText>
                        </HideAndShowCard__TextDiv>
                    </HideAndShowCard__ImgDiv>
                    <HideAndShowCard__ImgDiv>
                        <HideAndShowCard__Icon src={this.props.iconName4}/>
                        <HideAndShowCard__TextDiv>
                        <HideAndShowCard__CardTitle>{this.props.title4}</HideAndShowCard__CardTitle>
                        <HideAndShowCard__CardText>{this.props.text4}</HideAndShowCard__CardText>
                        </HideAndShowCard__TextDiv>
                    </HideAndShowCard__ImgDiv>
                </HideAndShowCard__div>
                {/* Image */}
                <HideAndShowCard2__div>
                    <HideAndShowCard2__ImgDiv>
                        <HideAndShowCard__Img src={this.props.img} />
                    </HideAndShowCard2__ImgDiv>
                </HideAndShowCard2__div>
            </HideAndShowCard__Card>
        )
    }
}
//card
const HideAndShowCard__div = styled.div`
    ${breakpoint('md')`
        display: flex;
        justify-content: center;
        flex-direction: column;
        // padding-right: 6%;
        // padding-left: 5%;
        // padding-right: 3%;
        width: 100%;
    `}
    ${breakpoint('lg')`
        padding-right: 0%;
        // padding-left: 5%;
        width: 100%;
    `}
`
const HideAndShowCard2__div = styled.div`
    ${breakpoint('md')`
        display: flex;
        // justify-content: center;
        flex-direction: column;
        // padding-right: 6%;
        width: 100%;
    `}
    ${breakpoint('lg')`
        padding-right: 0%;
        margin-top: 18px;
    `}
`
const HideAndShowCard__ImgDiv = styled.div`
    display: flex;
    align-items: center;
    ${breakpoint('md')`
        padding: 4% 10%;
    `}
    ${breakpoint('lg')`
        padding: 4% 9%;
        // width: 60%;
    `}
`
const HideAndShowCard2__ImgDiv = styled.div`
    ${breakpoint('lg')`
        // padding: 4% 0;
        // width: 60%;
    `}
`
const HideAndShowCard__Img = styled.img`
    ${breakpoint('md')`
    width: 284px;
    `}
    ${breakpoint('lg')`
        width: 90%;
    `}
`
const HideAndShowCard__TextDiv = styled.div`
    display: flex;
    flex-direction: column;
`
const HideAndShowCard__Icon = styled.img`
    // height: 64px;
    margi-right: 10px;
    margin-right: 10%;
    ${breakpoint('md')`
        width: 25px;
        display: flex;
        align-self: flex-start;
    `}
    ${breakpoint('lg')`
        margin-right: 20px;
    `}

`
const HideAndShowCard__Card = styled.div`
    // width:264px;
    // height:400px;
    // margin: 30px auto;
    // background-color:white;
    // padding: 40px 15px 30px 15px;
    // box-sizing: border-box;
    display: none;
    ${breakpoint('md')`
    display: flex;
        // width:284px;
    //     height:412px;
    // padding: 40px 15px 30px 15px;
    // box-sizing: border-box;

    `}
    ${breakpoint('lg')`
        // width: 880px;
        // height:530px;
        box-sizing: border-box;
    `}
`
const HideAndShowCard__CardTitle = styled.div`
    ${breakpoint('md')`
        color:${Themes.colors.black};   
        font-weight:${Themes.fontWeight.black};
        font-size: 11px;
        line-height:1.2;
    `}
    ${breakpoint('lg')`
        font-size: 15px;
        line-height:1.2;
    `}
`

const HideAndShowCard__CardText = styled.div`
    ${breakpoint('md')`
        color:${Themes.colors.grey};
        // font-size: 8px;
        font-size: 12px;
        line-height:1.2;
    `}
    ${breakpoint('lg')`
        font-size:14px;
        line-height:1.5;
    `}
    // text-align:center;
    line-height:16px;
    padding:10px;        
`

export default HideAndShowCard;