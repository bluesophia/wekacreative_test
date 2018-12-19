import React, { Component } from "react";
import styled, { ThemeProvider } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Themes from '../../../Assets/Styles/Themes';

export default class EmailInput extends Component {
  constructor(props){
    super(props);
    this.state = {value: ''};

    this._handleChange = this._handleChange.bind(this);
  }

  _handleChange(event) {
    this.setState({value: event.target.value});
  }
  
  render() {
    // const { value } = this.state;
    return (
      <ThemeProvider theme={Themes}>
      <Container>
      <LabelDiv>  
      <Label>Email</Label><P>Required</P><br />
      </LabelDiv> 
        <Input
          value={this.state.value}
          name="email"
          label="email"
          onChange={this._handleChange}
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
          id="email"
          required
        />
      </Container>
      </ThemeProvider>
    )
  }
}
const Container = styled.div`
  padding-left: 0;
  margin-top: 0;
  width: 100%;
  height: 100%;
  margin-bottom:50px;
  ${breakpoint('lg')`
   margin-bottom:10%;
  `}
`
const LabelDiv = styled.div`
  display: flex;
  align-items: flex-end;
`
const Label = styled.label`
  font-size: ${Themes.fontsize.p2}
  font-weight: ${Themes.fontWeight.black}
  color: ${Themes.colors.black};
  `

const P = styled.p`
  font-size: ${Themes.fontsize.p4};
  font-weight: ${Themes.fontWeight.bold};
  color: ${Themes.colors.w_red};
  margin: 0;
  margin-left: 10px;
  padding:0;
`

const Input = styled.input.attrs({
  type: 'Email',
})`
  box-sizing:border-box;
  width:100%;
  height:30px;
  background: none;
  border-radius:0px;
  border:0;
  border-bottom: 1px solid ${Themes.colors.formGrey};
  color: ${Themes.colors.formGrey};
  padding: 0.5em;
  margin-top: 10px;
  &:focus {
    outline: none;
  }
  ${breakpoint('lg')`
     width:70%;
  `}
  ::placeholder {
    color: #ccc;
    opacity: 1; /* Firefox */
  }
  :-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: #ccc;
  }

  ::-ms-input-placeholder { /* Microsoft Edge */
    color: #ccc;
  }
`