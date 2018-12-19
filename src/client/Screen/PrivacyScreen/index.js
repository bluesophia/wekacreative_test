import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Themes from '../../Assets/Styles/Themes';

/** Images **/  

/** components **/
import PrivacyContainer from '../../Components/WebContainer/PrivacyContainer'

class PrivacyScreen extends Component {
    render(){
        return(
            <ThemeProvider theme={Themes}>
                <PrivacyContainer />
            </ThemeProvider>
        )
    }
}

export default PrivacyScreen;