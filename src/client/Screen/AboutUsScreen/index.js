import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import Themes from '../../Assets/Styles/Themes';

/** Images **/
import AboutContainer from '../../Components/WebContainer/AboutContainer';

class AboutUsScreen extends Component {
  render(){
    return(
      <ThemeProvider theme={Themes}>   
        <AboutContainer />
      </ThemeProvider>
    )
  }
}

export default AboutUsScreen;