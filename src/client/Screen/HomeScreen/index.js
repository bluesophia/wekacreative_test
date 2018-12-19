import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import Themes from '../../Assets/Styles/Themes';

/** Images **/
import Section01 from '../../Components/WebContainer/HomeContainer/Section1';
import Section02 from '../../Components/WebContainer/HomeContainer/Section2';
import Section03 from '../../Components/WebContainer/HomeContainer/Section3';
import Section04 from '../../Components/WebContainer/HomeContainer/Section4';
import Section05 from '../../Components/WebContainer/HomeContainer/Section5';
// import Section06 from '../../Components/WebContainer/HomeContainer/Section6';

class HomeScreen extends Component{  
    render(){
        return(
            <ThemeProvider theme={Themes}>
                <div>
                    <Section01 />
                    <Section02 />
                    <Section03 />
                    <Section04 />
                    <Section05 />
                    {/* <Section06 /> */}
                </div>
           </ThemeProvider>
        )
    }
}

export default HomeScreen;