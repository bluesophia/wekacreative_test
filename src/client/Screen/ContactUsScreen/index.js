import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import Themes from '../../Assets/Styles/Themes';
import ContactusContainer from '../../Components/WebContainer/ContactusContainer'

class ContactUsScreen extends Component {
  render(){
    return(
      <ThemeProvider theme={Themes}>
        <ContactusContainer />
      </ThemeProvider>
    )
  }
}

export default ContactUsScreen;