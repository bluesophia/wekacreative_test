import React, { Component } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Themes from '../../Assets/Styles/Themes';
import Text from '../../Components/Common/Text';
import { Link } from 'react-router-dom';

/** Images **/
import BgSm from '../../Assets/Images/HomeSection01BgSm.png';

/** components **/
import Title from '../../Components/Common/Title/Title';
import BigTitle from '../../Components/Common/Title/BigTitle';
import { UserIdInput, PasswordInput }from '../../Components/Common/Input';
import Button01 from '../../Components/Common/Button/Button01';

class LoginScreen extends Component {
    render(){
        return(
            <ThemeProvider theme={Themes}>
                <Section>
                    <TitleDiv>Sign In</TitleDiv>
                        <FormDiv>
                            <Form onSubmit={this._handleSubmit}>
                            <InputDiv>
                                <UserIdInput />
                                <PasswordInput label="Password"/>
                            </InputDiv>
                            <ButtonDiv>
                                <Button01 value="Sign In" />
                            </ButtonDiv>  
                            <Form__Text>Not Registered? 
                                <Form__TextBold to="/register"> Create an account</Form__TextBold>
                            </Form__Text>    
                            </Form>
                        </FormDiv>
                </Section>
            </ThemeProvider>
        )
    }
}

const Section = styled.div`
    background: url('${BgSm}');
    background-position:center top;
    background-repeat:no-repeat;
    background-size:100% 50%;
    background-color:${Themes.colors.veryLightGrey};
    padding:70px 8%;
    ${breakpoint('md')`
        background-position:left top;
        background-repeat:no-repeat;
        background-size:100% 50%;
        background-color:${Themes.colors.veryLightGrey};       
    `}
    ${breakpoint('lg')`
        padding:100px auto !important;
    `}
`
const TitleDiv = styled.div`
    ${Title};
    color:white;
    font-weight:${Themes.fontWeight.regular};
    margin-bottom:50px;
`
const FormDiv = styled.div` 
    display:flex;
    flex-direction:column;
    margin:0 auto;
    ${breakpoint('md')`
        width:370px;
        height:auto;
  `}
`
const Form = styled.div`
  background-color:white;
  box-shadow:0 0 10px rgba(0,0,0,0.2);
  padding:50px 40px 30px 40px;
`
const InputDiv = styled.div`
  display:flex;
  flex-direction:column;
`
const ButtonDiv = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  ${breakpoint('lg')`
    width:100%;  
    margin:0 auto;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
  `}
`
const Form__Text = styled.div`
  margin:25px auto 10px auto;
  text-align:center;
  font-size:${Themes.fontsize.p3};
`
const Form__TextBold = styled(Link)`
  color:${Themes.colors.blueLight};
  text-decoration: none;
`
export default LoginScreen