import React, { Component } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import PropTypes from 'prop-types';
import Themes from '../../../Assets/Styles/Themes';

class Button02 extends Component {
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

Button02.propTypes = {
    value: PropTypes.string
  };
const ButtonStyle = styled.button`
    border:0;
    background: ${Themes.colors.w_orange};
    width:100%;
    height:auto;
    color:${Themes.colors.white};
    font-size:1em;
    font-weight:${Themes.fontWeight.bold};
    // border-radius:50px;
    padding-top:15px;
    padding-bottom:15px;
    letter-spacing:1px;
    outline: none;
    font-size:20px;
    cursor: pointer;
    ${breakpoint('md')`
    `}
`
const Text = styled.p`
    margin:0;
    padding:0;
    // text-shadow:0 0 8px rgba(50, 50, 93, 0.23);
`

export default Button02;