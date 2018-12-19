import React, { Component } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Themes from '../../Assets/Styles/Themes';
import Text from '../../Components/Common/Text';
import { Link } from 'react-router-dom';

/** Images **/  

/** components **/
import Title from '../../Components/Common/Title/Title';
import BigTitle from '../../Components/Common/Title/BigTitle';

class TermsScreen extends Component {
    render(){
        return(
            <ThemeProvider theme={Themes}>
                <Section>
                </Section>
            </ThemeProvider>
        )
    }
}

const Section = styled.div`
`
export default TermsScreen;