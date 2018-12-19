import React, { Component } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import PropTypes from 'prop-types';
import Themes from '../../../Assets/Styles/Themes';
import { Link } from 'react-router-dom';

class Button01 extends Component {
    render(){
        return (
            <ThemeProvider theme={Themes}>
                    <ButtonStyle>
                        <Text>{this.props.value}</Text>
                    </ButtonStyle>
            </ThemeProvider>
        );
    }
}   

Button01.propTypes = {
    value: PropTypes.string
  };
const ButtonStyle = styled.button`
    background: rgba(255,255,255, 0);
    width:100%; 
    height:auto;
    color:${Themes.colors.black};
    font-weight:${Themes.fontWeight.black};
    // text-shadow: 0 0 3px grey;
    font-size:17px;
    border:2px solid ${Themes.colors.black};
    margin:0 auto;
    // border-radius:50px;
    padding:11px 22px;
    letter-spacing:1px;
    outline: none;
    cursor: pointer;
    &:hover {
        color: ${Themes.colors.orange}
        border:2px solid ${Themes.colors.orange};
    }
        ${breakpoint('md')`
            font-size: 25px;
            margin-top: 30px;
        `}
        ${breakpoint('lg')`
            font-size:20px;
            margin-top: 0;
        `}
`
const Text = styled.p`
    cursor: 'pointer';
    margin:0;
    padding:0;
`

export default Button01;