import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
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
import { Button } from 'antd';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      paddingTop            : '30px',
      paddingRight          : '50px',
      paddingLeft           : '50px',
      paddingBottom         : '30px',
      transform             : 'translate(-50%, -50%)'
    }
  };

class RegisterScreen extends Component {
    constructor() {
        super();
    
        this.state = {
          modalIsOpen: false
        };
    
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
      }
    
      openModal() {
        this.setState({modalIsOpen: true});
      }
    
      afterOpenModal() {
        // references are now sync'd and can be accessed.
      }
    
      closeModal() {
        this.setState({modalIsOpen: false});
      }

    render(){
        return(
            <ThemeProvider theme={Themes}>
                <Section>
                    <TitleDiv>Sign Up</TitleDiv>
                        <FormDiv>
                            <Form onSubmit={this._handleSubmit}>
                            <InputDiv>
                                <UserIdInput />
                                <PasswordInput label="Password"/>
                                <PasswordInput label="Confirm Password"/>                                
                            </InputDiv>
                            <Terms__Text><Terms__Input type="checkbox" />I agree to
                                <Terms__TextBold to="/terms"> Terms & Conditions</Terms__TextBold>
                            </Terms__Text> 
                            <ButtonDiv onClick={this.openModal}>
                                <Button01 value="Sign Up"/>
                            </ButtonDiv>  
                            <Form__Text>Already have an account?
                                <Form__TextBold to="/login"> Sign In</Form__TextBold>
                            </Form__Text>    
                            </Form>
                        </FormDiv>
                        <Modal
                            isOpen={this.state.modalIsOpen}
                            onAfterOpen={this.afterOpenModal}
                            onRequestClose={this.closeModal}
                            style={customStyles}
                            >
                            <Modal__Title>Registered Sucessfully</Modal__Title>
                            <Modal__button onClick={this.closeModal}>Close</Modal__button>
                        </Modal>
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
  align-items:center;
  justify-content:center;
  margin:20px -10px 30px -10px;  
`
const Terms__Text = styled.div`
  font-size:${Themes.fontsize.p3};
  margin-top:-15px;
  margin-left:0;      
  text-align:left;   
`
const Terms__Input = styled.input`
  margin-right:8px;
  font-size:${Themes.fontsize.p2};
`
const Terms__TextBold = styled(Link)`
  color:${Themes.colors.blueLight};
  text-decoration: none;
`
const Form__Text = styled.div`
  margin:0 auto;
  text-align:center;
  font-size:${Themes.fontsize.p3};
  &:first-child{
    margin-left:0;      
    text-align:left;      
  }
`
const Form__TextBold = styled(Link)`
  color:${Themes.colors.blueLight};
  text-decoration: none;
`
const Modal__Title = styled.h3`
  color:${Themes.colors.black};
  font-weight:${Themes.fontWeight.regular};  
`
const Modal__button = styled.button`
  margin-right:0;
  width:100%;
  color:${Themes.colors.green};
  font-weight:${Themes.fontWeight.bold};
  letter-spacing:1px;
  font-size:${Themes.fontsize.p1};
  line-height:35px;
  background:none;
  border:none;
`
export default RegisterScreen;