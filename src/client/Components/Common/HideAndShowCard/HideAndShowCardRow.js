import React, { Component } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import PropTypes from 'prop-types';
import Themes from '../../../Assets/Styles/Themes';

class HideAndShowCardRow extends Component {
    render(){
        return(
            <HideAndShowCard__Card>
                {/* Column1 */}
                <HideAndShowCard__Columndiv>
                    {/* image1 */}
                <HideAndShowCard__div>
                    <HideAndShowCard__ImgDiv>
                        <HideAndShowCard__Icon src={this.props.iconName1}/>
                        <HideAndShowCard__CardTitle>{this.props.title1}</HideAndShowCard__CardTitle>
                    </HideAndShowCard__ImgDiv>
                        <HideAndShowCard2__ImgDiv>
                            <HideAndShowCard2__ImgDiv>
                            <HideAndShowCard__Img src={this.props.img1} />
                            </HideAndShowCard2__ImgDiv>
                        </HideAndShowCard2__ImgDiv>
                        <HideAndShowCard__TextDiv>
                            <HideAndShowCard__CardText>{this.props.text1}</HideAndShowCard__CardText>
                        </HideAndShowCard__TextDiv>
                </HideAndShowCard__div>
                    {/* image2 */}
                <HideAndShowCard__div>   
                    <HideAndShowCard__ImgDiv>
                        <HideAndShowCard__Icon src={this.props.iconName2}/>
                        <HideAndShowCard__CardTitle>{this.props.title2}</HideAndShowCard__CardTitle>
                    </HideAndShowCard__ImgDiv>
                        <HideAndShowCard2__ImgDiv>
                            <HideAndShowCard2__ImgDiv>
                            <HideAndShowCard__Img src={this.props.img2} />
                            </HideAndShowCard2__ImgDiv>
                        </HideAndShowCard2__ImgDiv>
                        <HideAndShowCard__TextDiv>
                            <HideAndShowCard__CardText>{this.props.text2}</HideAndShowCard__CardText>
                        </HideAndShowCard__TextDiv> 
                </HideAndShowCard__div>   
                </HideAndShowCard__Columndiv>
            </HideAndShowCard__Card>
        )
    }
}
//card
const HideAndShowCard__div = styled.div`
    ${breakpoint('md')`
        display: flex;
        // justify-content: center;
        flex-direction: column;
        align-items: center;
        width: 100%;
    `}
    ${breakpoint('lg')`
        width: 100%;
    `}
`

const HideAndShowCard__Columndiv = styled.div`
    ${breakpoint('md')`
        display: flex;
        // justify-content: space-between;
        flex-direction: row;
        // padding-right: 6%;
        width: 100%;
    `}
    ${breakpoint('lg')`
        // padding-right: 0%;
        // margin-left: -4%;
    `}
`
const HideAndShowCard__ImgDiv = styled.div`
    display: flex;
    align-items: center;
    ${breakpoint('md')`
        // padding: 4% 0;
        padding: 10% 10% 0% 7%;
        flex-direction: row;
        align-self: normal;
    `}
    ${breakpoint('lg')`
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
    width: 272px;
    margin-top: 6%;
    `}
    ${breakpoint('lg')`
        width: 377px;
        margin-top: 4%;
    `}
`
const HideAndShowCard__TextDiv = styled.div`
    display: flex;
    flex-direction: column;
    ${breakpoint('md')`
        padding: 5% 10% 0 10%;
        // padding-right: 12%;
    `}
    ${breakpoint('lg')`
        width: 80%;
        padding: 0;
        padding-top: 5%;
    `}
`
const HideAndShowCard__Icon = styled.img`
    // height: 64px;
    margi-right: 10px;
    margin-right: 6%;
    ${breakpoint('md')`
        width: 25px;
        display: flex;
        // align-self: flex-start;
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
        // font-size: 11px;
        font-size: 14px;
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
        // line-height:1.2;
        font-size: 12px;
        line-height: 1.5;
        padding: 0 3% 0 3%;
    `}
    ${breakpoint('lg')`
        font-size:14px;
        line-height:1.5;
    `}       
`

export default HideAndShowCardRow;