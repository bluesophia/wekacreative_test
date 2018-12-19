import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Themes from '../../../../Assets/Styles/Themes';


class HeaderLine extends Component {
    render(){
        return (
            <ThemeProvider theme={Themes}>
                <Line></Line>
            </ThemeProvider>
        );
    }
}

const Line = styled.hr`
    width:120px;
    margin-top:35px;
    margin-bottom:35px;
    border-top:0;
    border-left:0;
    border-right:0;
    border-bottom:5px solid ${Themes.colors.yellow};
`

export default HeaderLine;