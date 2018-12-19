import React, { Component } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import PropTypes from 'prop-types';
import Themes from '../../../Assets/Styles/Themes';
import { Link } from 'react-router-dom';

class YellowSpan extends Component {
    render(){
        return (
            <ThemeProvider theme={Themes}>
                    <div>
                    <YellowSpanStyle/>
                    </div>
            </ThemeProvider>
        );
    }
}

YellowSpan.propTypes = {
    value: PropTypes.string,
  };


const YellowSpanStyle = styled.span`
    background:${Themes.colors.w_orange};
    display:flex;
    width:108px; 
    color:white;
    text-shadow: 0 0 3px grey;
    font-size:17px;
    border:0;
    margin:20px auto;
    padding:6px 6px;
    letter-spacing:1px;
    outline: none;
        ${breakpoint('lg')`
            font-size:20px;
        `}
`
const Text = styled.p`
    margin:0;
    padding:0;
`

export default YellowSpan;