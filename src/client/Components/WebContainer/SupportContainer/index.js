import React, { Component } from 'react';
import { css, ThemeProvider } from 'styled-components';
import Themes from '../../../Assets/Styles/Themes';
import axios from 'axios';
import {Br,
  Support,
  Container,
  Section01,
  Section01__Div,
  Section02,
  ImageDiv,
  TopBgImg,
  TopBgImg2,  
  TitleDiv,
  TitleDiv__Title,
  TitleDiv__Text,
  TitleDiv__Textsm,
  FormDiv,
  Form,
  InputDiv,
  InputDiv__Left,
  InputDiv__Right,
  ButtonDiv,
  Form__Text,
  Section01__Image
} from './style'
/** Images **/
// import Image from '../../../Assets/Images/SupportSection01Imagesm.svg';
import Image2 from '../../../Assets/Images/SupportSection01Image.svg';

import {  CompanyNameInput,
          EmailInput,
          MessageInput,
          PhoneNumberInput,
          SupportTypeInput,
          FullNameInput }from '../../Common/Input';
import Button02 from '../../Common/Button/Button02';
/** Animation**/ 
import ScrollAnimation from 'react-animate-on-scroll';
const Title = css`
    color:${Themes.colors.blue};
    font-size:${Themes.fontsize.h2};
    font-weight:${Themes.fontWeight.black};
    text-align:center;
    line-height:30px;
    text-transform:uppercase;
    letter-spacing:5px;
`
class SupportContainer extends Component{
  constructor(props){
    super(props);
    this.state = {value: ''};
  }

  handleSubmit(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const company = document.getElementById("company").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;
    axios({
      method: "POST",
      url:"api/support/post",
      data: {
        name: name,
        email: email,
        phone: phone,
        company: company,
        message: message
      }
    }).then((response) => {
      if(response.data.msg == 'success'){
        alert("Message Sent.");
        this.resetForm()
      }else if(response.data.msg === 'fail') {
        alert("Message failed to send.")
      }
    })
  }
  resetForm() {
    document.getElementById("support-form").reset();
  }
  render(){
    return(
        <ThemeProvider theme={Themes}>
          <Support>
            <ScrollAnimation animateIn='fadeIn'>
              <Container>
                  {/* Image div */}
                  <Section01__Div>
                  <Section01>
                    <TitleDiv>
                      <TitleDiv__Title>Submit <Br />a support ticket</TitleDiv__Title>
                      <TitleDiv__Text>Please complete the form below which will direct your request to the appropriate member of the team. 
                        This ensures greater efficiency around response times and also ensures processes are followed.
                        </TitleDiv__Text>
                    </TitleDiv>
                  </Section01>
                  <ImageDiv>
                  <Section01__Image>
                    {/* <TopBgImg src={Image}/> */}
                    <TopBgImg2 src={Image2}/>
                  </Section01__Image>  
                    <TitleDiv__Textsm>Please complete the form below which will direct 
                        your request to the appropriate member of the team. <Br />This ensures greater efficiency around response times and 
                        also ensures processes are followed.</TitleDiv__Textsm>
                  </ImageDiv>
                  </Section01__Div>
                  {/* Form div */}
                  <Section02>
                  <FormDiv>
                    <Form id="support-form" onSubmit={this.handleSubmit.bind(this)} method="post">
                      <InputDiv>
                        <InputDiv__Left>
                          <FullNameInput />
                          <CompanyNameInput />
                          <PhoneNumberInput />
                          <EmailInput />
                          <MessageInput />
                          {/* <SupportTypeInput /> */}
                        </InputDiv__Left>
                      </InputDiv>
                      <ButtonDiv>
                        <Button02 value={'SUBMIT'} type="submit"/>
                      </ButtonDiv>      
                    </Form>
                  </FormDiv>
                  </Section02>
              </Container>
              </ScrollAnimation>
            </Support>
          </ThemeProvider>
          )
        }
      }


export default SupportContainer;