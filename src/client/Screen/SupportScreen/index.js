import React, { Component } from 'react';
import Themes from '../../Assets/Styles/Themes';
import SupportContainer from '../../Components/WebContainer/SupportContainer';
import { ThemeProvider } from 'styled-components';

class SupportScreen extends Component{
  render(){
    return(
      <ThemeProvider theme={Themes}>
      <SupportContainer />
      </ThemeProvider>
    )
  }
}

export default SupportScreen;